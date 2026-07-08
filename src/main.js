const { createApp } = Vue;

const products = [
  { title: 'Мусс для умывания Aquasource', price: '2 490 ₽', oldPrice: '3 190 ₽', label: '-22%', image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=700&q=80' },
  { title: 'Крем для лица с гиалуроновой кислотой', price: '1 890 ₽', oldPrice: '2 350 ₽', label: 'Хит', image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=700&q=80' },
  { title: 'Сыворотка для сияния кожи', price: '3 250 ₽', oldPrice: '', label: 'New', image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=700&q=80' },
  { title: 'Питательная маска для волос', price: '1 240 ₽', oldPrice: '1 690 ₽', label: '-27%', image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=700&q=80' },
  { title: 'Тональный флюид SPF 30', price: '2 790 ₽', oldPrice: '', label: '4.8', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=700&q=80' },
  { title: 'Парфюмерная вода Gardenia', price: '5 990 ₽', oldPrice: '7 490 ₽', label: '-20%', image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=700&q=80' },
];

const ProductCard = {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  template: `
    <article class="card">
      <button class="fav" type="button" aria-label="Добавить в избранное">♡</button>
      <span class="badge">{{ product.label }}</span>
      <img :src="product.image" :alt="product.title" />
      <div class="rating">★ 4.9 · 128 отзывов</div>
      <h3>{{ product.title }}</h3>
      <div class="price">
        <strong>{{ product.price }}</strong>
        <span v-if="product.oldPrice">{{ product.oldPrice }}</span>
      </div>
      <button class="buy" type="button">В корзину</button>
    </article>
  `,
};

createApp({
  components: { ProductCard },
  data() {
    return {
      products,
      filters: ['Категория', 'Бренд', 'Цена', 'Тип кожи', 'Рейтинг'],
    };
  },
  template: `
    <header class="header">
      <div class="topbar">Бесплатная доставка от 3 000 ₽ · Самовывоз сегодня</div>
      <div class="nav">
        <button class="icon" type="button" aria-label="Открыть меню">☰</button>
        <div class="logo">BEAUTY<span>market</span></div>
        <label class="search">⌕<input placeholder="Поиск по каталогу" /></label>
        <a href="#">Бренды</a>
        <a href="#">Акции</a>
        <a href="#">Новинки</a>
        <button class="icon" type="button" aria-label="Избранное">♡</button>
        <button class="cart" type="button">🛒 Корзина</button>
      </div>
    </header>

    <main>
      <section class="hero">
        <div>
          <p class="eyebrow">Обновление макетов · catalog page</p>
          <h1>Уход и косметика для ежедневного ритуала красоты</h1>
          <p class="lead">Сверстанная витрина с промо-блоком, фильтрами, сортировкой и карточками товаров. Макет адаптирован под desktop и mobile.</p>
          <div class="heroActions">
            <button type="button">Смотреть каталог</button>
            <button class="ghost" type="button">Подобрать уход</button>
          </div>
        </div>
        <div class="heroCard">
          <span>до −35%</span>
          <b>Summer beauty sale</b>
          <small>на избранные бренды недели</small>
        </div>
      </section>

      <section class="toolbar">
        <div>
          <h2>Популярные товары</h2>
          <p>{{ products.length * 21 + 2 }} позиций</p>
        </div>
        <div class="tools">
          <button type="button">☷ Фильтры</button>
          <button type="button">Сначала популярные ⌄</button>
        </div>
      </section>

      <div class="layout">
        <aside class="filters">
          <h3>Фильтр</h3>
          <div v-for="filter in filters" :key="filter" class="filter">
            <span>{{ filter }}</span>
            <b>⌄</b>
          </div>
        </aside>
        <section class="grid">
          <ProductCard v-for="product in products" :key="product.title" :product="product" />
        </section>
      </div>
    </main>
  `,
}).mount('#app');
