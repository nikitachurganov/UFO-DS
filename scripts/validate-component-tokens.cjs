const fs = require('fs')
const path = require('path')

const rootDir = path.resolve(__dirname, '..')
const tokenFiles = listFiles(path.join(rootDir, 'src', 'styles', 'tokens')).filter((file) =>
  file.endsWith('.css'),
)
const componentFiles = listFiles(path.join(rootDir, 'src', 'components')).filter((file) =>
  /\.(vue|css)$/.test(file),
)

const tokenNames = new Set()
const tokenDeclarationPattern = /(^|[{\s;])(--[A-Za-z0-9-_]+)\s*:/g

for (const file of tokenFiles) {
  const content = fs.readFileSync(file, 'utf8')
  for (const match of content.matchAll(tokenDeclarationPattern)) {
    tokenNames.add(match[2])
  }
}

const errors = []

for (const file of componentFiles) {
  const content = fs.readFileSync(file, 'utf8')

  for (const match of content.matchAll(tokenDeclarationPattern)) {
    errors.push(
      `${relative(file)} declares "${match[2]}". Components must not create local token aliases.`,
    )
  }

  for (const match of content.matchAll(/var\((--[A-Za-z0-9-_]+)/g)) {
    if (!tokenNames.has(match[1])) {
      errors.push(`${relative(file)} uses unknown token "${match[1]}".`)
    }
  }
}

if (errors.length > 0) {
  console.error('Component token validation failed:\n')
  for (const error of errors) {
    console.error(`- ${error}`)
  }
  process.exit(1)
}

console.log(`Component token validation passed (${componentFiles.length} files checked).`)

function listFiles(dir) {
  if (!fs.existsSync(dir)) {
    return []
  }

  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      return listFiles(fullPath)
    }

    return fullPath
  })
}

function relative(filePath) {
  return path.relative(rootDir, filePath).replaceAll(path.sep, '/')
}
