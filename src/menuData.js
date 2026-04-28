const photos = {
  cherryMoca: new URL('../photos/Cherrymoca.png', import.meta.url).href,
  cremeBrulee: new URL('../photos/Crèmebrûlée.png', import.meta.url).href,
  lotusLotus: new URL('../photos/Lotuslotus.png', import.meta.url).href,
  matcha: new URL('../photos/matcha.png', import.meta.url).href,
  matchaLotus: new URL('../photos/Matchalotus.png', import.meta.url).href,
  matchaPlatano: new URL('../photos/Matchaplátano.png', import.meta.url).href,
  pinkDrink: new URL('../photos/Pinkdrink.png', import.meta.url).href,
  pinkMatcha: new URL('../photos/PinkMatcha.png', import.meta.url).href,
  pistacho: new URL('../photos/Pistacho.png', import.meta.url).href,
  platano: new URL('../photos/Plátano.png', import.meta.url).href,
  strawberryMatcha: new URL('../photos/StrawberryMatcha.png', import.meta.url).href,
  tiramisu: new URL('../photos/tiramisú.png', import.meta.url).href,
};

export const heroImages = [
  new URL('../photos/71d8c4f9-d4e0-4606-8f69-d4897f0b3530.jpg', import.meta.url).href,
  new URL('../photos/e130451b-2c57-4b0a-944c-a5e4f54ae12a.jpg', import.meta.url).href,
  new URL('../photos/6b256b4a-4b2f-41e8-b9bf-38f8b223d546.jpg', import.meta.url).href,
];

const coldOnly = [{ label: 'Frio 16 oz', value: '$115' }];
const askBar = [{ label: 'Precio', value: 'Barra' }];

export const categories = [
  {
    id: 'casa',
    label: 'De la casa',
    eyebrow: 'Recetas Koa',
    description: 'Bebidas con capas, foams y sabores insignia de la barra.',
    items: [
      {
        name: 'Strawberry Matcha',
        description: 'Compota de fresa, miel de agave, leche y matcha.',
        badge: 'Matcha',
        image: photos.strawberryMatcha,
        prices: coldOnly,
      },
      {
        name: 'Pink Matcha',
        description: 'Base frutal rosa, leche y matcha ceremonial.',
        badge: 'Matcha',
        image: photos.pinkMatcha,
        prices: coldOnly,
      },
      {
        name: 'Matcha Lotus',
        description: 'Matcha con crema de Lotus y foam.',
        badge: 'Casa',
        image: photos.matchaLotus,
        prices: coldOnly,
      },
      {
        name: 'Lotus Lotus',
        description: 'Crema de Biscoff, shot de espresso y foam.',
        badge: 'Casa',
        image: photos.lotusLotus,
        prices: coldOnly,
      },
      {
        name: 'Platano',
        description: 'Shot de espresso, jarabe de platano y foam.',
        badge: 'Dulce',
        image: photos.platano,
        prices: coldOnly,
      },
      {
        name: 'Tiramisu Latte',
        description: 'Shot de espresso, chocolate y foam. Solo frio.',
        badge: 'Frio',
        image: photos.tiramisu,
        prices: coldOnly,
      },
      {
        name: 'Creme Brulee',
        description: 'Latte frio estilo creme brulee con foam.',
        badge: 'Nuevo',
        image: photos.cremeBrulee,
        prices: coldOnly,
      },
    ],
  },
  {
    id: 'latte',
    label: 'Latte',
    eyebrow: '12 oz caliente / 16 oz frio',
    description: 'Base cremosa con espresso y el sabor que prefieras.',
    items: [
      {
        name: 'Latte',
        description: 'Natural, vainilla, pistachio, caramelo, caramelo salado o cherry moca.',
        image: photos.cherryMoca,
        prices: [
          { label: 'Caliente 12 oz', value: '$80' },
          { label: 'Frio 16 oz', value: '$95' },
        ],
      },
      {
        name: 'Pistacho',
        description: 'Latte frio con pistacho y foam.',
        image: photos.pistacho,
        prices: [{ label: 'Frio 16 oz', value: '$95' }],
      },
      {
        name: 'Cherry Moca',
        description: 'Latte frio con moca, cereza y foam.',
        image: photos.cherryMoca,
        prices: [{ label: 'Frio 16 oz', value: '$95' }],
      },
    ],
  },
  {
    id: 'sin-cafe',
    label: 'Sin cafe',
    eyebrow: 'Caliente o frio',
    description: 'Opciones suaves, aromaticas y sin espresso.',
    items: [
      {
        name: 'Chai',
        description: 'Bebida cremosa y aromatica con leche.',
        prices: [
          { label: 'Caliente', value: '$90' },
          { label: 'Frio 16 oz', value: '$95' },
        ],
      },
      {
        name: 'Matcha',
        description: 'Matcha puro ceremonial con leche.',
        image: photos.matcha,
        prices: [{ label: '16 oz', value: '$100' }],
      },
      {
        name: 'Tisana',
        description: 'Frutos rojos.',
        prices: [
          { label: 'Caliente', value: '$75' },
          { label: 'Frio 16 oz', value: '$80' },
        ],
      },
      {
        name: 'Foams',
        description: 'Vainilla, platano o pistache.',
        prices: [{ label: 'Extra', value: '$15' }],
      },
    ],
  },
  {
    id: 'especiales',
    label: 'Especiales',
    eyebrow: 'Menu especial',
    description: 'Sabores de temporada vistos en barra. Sujeto a disponibilidad.',
    items: [
      {
        name: 'Pink Drink',
        description: 'Bebida fria frutal con tonos de fresa y frutos rojos.',
        badge: 'Frutal',
        image: photos.pinkDrink,
        prices: askBar,
      },
      {
        name: 'Matcha Platano',
        description: 'Matcha ceremonial con platano y foam.',
        badge: 'Matcha',
        image: photos.matchaPlatano,
        prices: coldOnly,
      },
    ],
  },
];
