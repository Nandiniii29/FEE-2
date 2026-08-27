const products = [
  {
    id: 1,
    name: 'Premium Wireless Headphones',
    description: 'High-fidelity sound with deep bass and all-day comfort.',
    price: 249,
    oldPrice: 329,
    tag: 'Best Seller',
    image:
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 2,
    name: 'Smart Sports Watch',
    description: 'Track fitness, health, and notifications in one elegant design.',
    price: 199,
    oldPrice: 259,
    tag: 'New',
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 3,
    name: 'Durable Travel Shoes',
    description: 'Water-resistant shoes built for work, travel, and trek.',
    price: 129,
    oldPrice: 179,
    tag: 'Popular',
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 4,
    name: 'Professional Camera Kit',
    description: 'Capture crisp detail and cinematic shots with a lightweight setup.',
    price: 899,
    oldPrice: 1099,
    tag: 'Pro',
    image:
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 5,
    name: 'Comfort quilt Bed',
    description: 'Modern ambient lighting for productive work and cozy evenings.',
    price: 89,
    oldPrice: 120,
    tag: 'Trending',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 6,
    name: 'Portable Bluetooth Speaker',
    description: 'Room-filling sound with a premium finish and rich voice clarity.',
    price: 169,
    oldPrice: 229,
    tag: 'Hot',
    image:
      'https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 7,
    name: 'True Wireless Earbuds',
    description: 'Noise-cancelling earbuds with 12-hour battery life and premium sound.',
    price: 149,
    oldPrice: 199,
    tag: 'Best Seller',
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 8,
    name: 'Portable Display Screen',
    description: '4K portable display perfect for creators and on-the-go professionals.',
    price: 399,
    oldPrice: 499,
    tag: 'New',
    image:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 9,
    name: 'Fitness Activity Tracker',
    description: 'Advanced health monitoring with sleep tracking and workouts analysis.',
    price: 99,
    oldPrice: 149,
    tag: 'Popular',
    image:
      'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 10,
    name: 'Fast Charging Power Bank',
    description: 'Fast-charging 30000mAh power bank with multiple device support.',
    price: 79,
    oldPrice: 119,
    tag: 'Trending',
    image:
      'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 11,
    name: 'Multi-Port USB Hub',
    description: '7-in-1 hub with high-speed data transfer and multiple connectivity options.',
    price: 59,
    oldPrice: 89,
    tag: 'Hot',
    image:
      'https://images.unsplash.com/photo-1625948515291-69613efd103f?auto=format&fit=crop&w=900&q=80',
  },
]

function Productcart() {
  return (
    <div className="shop-page">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark">N</div>
          <span>NOVA</span>
        </div>

        <nav className="nav">
          <a href="#">New In</a>
          <a href="#">Audio</a>
          <a href="#">Wearables</a>
          <a href="#">Home</a>
          <a href="#">Sale</a>
        </nav>

        <div className="top-actions">
          <button className="ghost-btn">Search</button>
          <button className="primary-btn">Cart (2)</button>
        </div>
      </header>

      <main className="content-shell">
        <section className="hero-section">
          <div className="hero-copy">
            <span className="pill">Fresh arrivals</span>
            <h1>Upgrade your everyday setup.</h1>
            <p>
              Discover smart essentials for work, play, and style. Premium tech,
              curated design, and limited-time deals made to fit your routine.
            </p>

            <div className="cta-row">
              <button className="primary-btn large">Shop now</button>
              <button className="ghost-btn large light">Explore deals</button>
            </div>

            <div className="stats-row">
              <div>
                <strong>12k+</strong>
                <span>Happy shoppers</span>
              </div>
              <div>
                <strong>4.9/5</strong>
                <span>Customer rating</span>
              </div>
              <div>
                <strong>24h</strong>
                <span>Fast dispatch</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-card main-card">
              <img
                src="https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&w=1200&q=80"
                alt="Lifestyle shopping collection"
              />
            </div>
            <div className="floating-badge">
              <span>New drop</span>
              <strong>Summer Edit</strong>
            </div>
          </div>
        </section>

        <section className="category-strip">
          <span>Trending</span>
          <span>Audio</span>
          <span>Photography</span>
          <span>Fitness</span>
          <span>Workspace</span>
          <span>Accessories</span>
        </section>

        <section className="products-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Curated collection</p>
              <h2>Popular products</h2>
            </div>
            <a href="#">View all</a>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.id}>
                <div className="image-wrap">
                  <img src={product.image} alt={product.name} />
                  <span className="product-tag">{product.tag}</span>
                </div>

                <div className="product-info">
                  <div className="rating-row">
                    <span>★★★★★</span>
                    <small>4.8</small>
                  </div>

                  <h3>{product.name}</h3>
                  <p>{product.description}</p>

                  <div className="price-row">
                    <span className="price">${product.price}</span>
                    <span className="old-price">${product.oldPrice}</span>
                  </div>

                  <button className="add-btn">Add to cart</button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default Productcart
