import { useMemo, useState } from 'react';
import { Coffee, Leaf, Sparkles } from 'lucide-react';
import { categories, heroImages } from './menuData.js';

function LogoMark() {
  return (
    <div className="logo-mark" aria-label="Koa Caffe">
      <span>K</span>
      <svg className="pear" viewBox="0 0 72 86" aria-hidden="true" focusable="false">
        <path className="pear-stem" d="M39 12c4.7-7.5 11.8-8.8 18.7-6.9" />
        <path className="pear-leaf" d="M40.8 10.8c7.3-2.6 13.3-.9 17.6 5.1-6.9 3.3-13 1.5-17.6-5.1Z" />
        <path
          className="pear-body"
          d="M36.3 15.3c-4.8 0-8.2 3.5-9.3 8.4-.8 3.4-2.7 6.1-5.5 8.4C13.1 39 9.8 48.8 12.2 59.4 15.1 72.2 25 80.3 36 80.3s20.9-8.1 23.8-20.9C62.2 48.8 58.9 39 50.5 32.1c-2.8-2.3-4.7-5-5.5-8.4-1.1-4.9-4.4-8.4-8.7-8.4Z"
        />
        <path className="pear-highlight" d="M25.3 35.9c-4.1 4.9-5.5 11.7-3.7 18.3 1.8 6.5 6.1 11.3 11.2 13" />
      </svg>
      <span>A</span>
      <small>Caffe</small>
    </div>
  );
}

function PriceList({ prices }) {
  if (!prices?.length) {
    return <span className="consult">Consultar en barra</span>;
  }

  return (
    <div className="prices" aria-label="Precios">
      {prices.map((price) => (
        <div key={`${price.label}-${price.value}`}>
          <span>{price.label}</span>
          <strong>{price.value}</strong>
        </div>
      ))}
    </div>
  );
}

function MenuCard({ item, index }) {
  return (
    <article className="menu-card" style={{ '--delay': `${index * 60}ms` }}>
      <span className="card-orb" aria-hidden="true" />
      {item.image ? (
        <div className="menu-card__image">
          <img src={item.image} alt={item.name} loading="lazy" />
        </div>
      ) : null}
      <div className="menu-card__top">
        <h3>{item.name}</h3>
        {item.badge ? <span className="badge">{item.badge}</span> : null}
      </div>
      <p>{item.description}</p>
      <PriceList prices={item.prices} />
    </article>
  );
}

function CategorySection({ category }) {
  return (
    <section id={category.id} className="category-section">
      <div className="section-heading">
        <div className="section-heading__plate">
          <div>
            <span className="section-eyebrow">{category.eyebrow}</span>
            <h2>{category.label}</h2>
            <p>{category.description}</p>
          </div>
        </div>
      </div>
      <div className="menu-grid">
        {category.items.map((item, index) => (
          <MenuCard key={item.name} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}

export default function App() {
  const [activeCategory, setActiveCategory] = useState('casa');

  const activeCategories = useMemo(() => {
    if (activeCategory === 'todo') return categories;
    return categories.filter((category) => category.id === activeCategory);
  }, [activeCategory]);

  return (
    <main className="app-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="ambient ambient-three" />

      <nav className="topbar glass" aria-label="Barra principal">
        <a href="#top" className="brand-link" aria-label="Ir al inicio">
          <LogoMark />
        </a>
        <a className="social-link" href="https://www.instagram.com/koacaffe" target="_blank" rel="noreferrer">
          <span className="instagram-glyph" aria-hidden="true" /> @KOACAFFE
        </a>
      </nav>

      <header id="top" className="hero">
        <div className="hero-card glass-panel">
          <div className="hero-copy">
            <span className="script-line">Koa Caffe</span>
            <h1>Menu suave, rapido y listo para QR.</h1>
            <p>
              Bebidas de casa, lattes, matcha y especiales en una experiencia pensada primero para celular.
            </p>
            <div className="hero-actions">
              <a href="#menu" className="primary-action">
                Abrir menu
                <Coffee size={18} />
              </a>
              <span className="pill"><Leaf size={15} /> Verde koa</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Fotos de referencia de Koa Caffe">
            <div className="device-frame">
              <img src={heroImages[0]} alt="Detalle visual de Koa Caffe" />
            </div>
            <div className="mini-photo left">
              <img src={heroImages[1]} alt="Menu especial de Koa Caffe" />
            </div>
            <div className="mini-photo right">
              <img src={heroImages[2]} alt="Bebidas de Koa Caffe" />
            </div>
          </div>
        </div>
      </header>

      <section id="menu" className="menu-panel">
        <div className="menu-toolbar glass-panel">
          <div>
            <span className="script-line">Carta</span>
            <h2>Elige tu antojo</h2>
            <p>Las secciones estan separadas por bloques elevados para que encuentres rapido tu bebida.</p>
          </div>
        </div>

        <div className="category-tabs glass" role="tablist" aria-label="Categorias del menu">
          <button className={activeCategory === 'todo' ? 'active' : ''} onClick={() => setActiveCategory('todo')} type="button">
            <span>Todo</span>
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              className={activeCategory === category.id ? 'active' : ''}
              onClick={() => setActiveCategory(category.id)}
              type="button"
            >
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {activeCategories.map((category) => (
          <CategorySection key={category.id} category={category} />
        ))}

        <aside className="note-card">
          <Sparkles size={20} />
          <p>Los especiales pueden cambiar segun disponibilidad. Pregunta en barra por leche vegetal, intensidad de cafe y nivel de dulzor.</p>
        </aside>
      </section>

      <footer className="footer">
        <LogoMark />
      </footer>
    </main>
  );
}
