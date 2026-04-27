const photos = {
  cherryMoca: new URL('../photos/71d8c4f9-d4e0-4606-8f69-d4897f0b3530.jpg', import.meta.url).href,
  lotus: new URL('../photos/6b256b4a-4b2f-41e8-b9bf-38f8b223d546.jpg', import.meta.url).href,
  menu: new URL('../photos/0b0e2f30-dc72-4769-ac83-96716a8753f2.jpg', import.meta.url).href,
  tiramisu: new URL('../photos/d038d98b-403d-4cd0-999b-ae2cdabefaf1.jpg', import.meta.url).href,
  strawberry: new URL('../photos/16d28d89-5bb8-4213-af0a-5c4d9f1ded87.jpg', import.meta.url).href,
  matcha: new URL('../photos/e130451b-2c57-4b0a-944c-a5e4f54ae12a.jpg', import.meta.url).href,
  platano: new URL('../photos/a1fe6dcc-da64-446d-8cea-07b0660382cf.jpg', import.meta.url).href,
  zeroFresa: new URL('../photos/zerobackground.png', import.meta.url).href,
  zeroMatchaLotus: new URL('../photos/zerobackground1.png', import.meta.url).href,
  zeroLotus: new URL('../photos/zerobackground2.png', import.meta.url).href,
  zeroCherryMoca: new URL('../photos/zerobackground3.png', import.meta.url).href,
  zeroStrawberryMatcha: new URL('../photos/zerobackground4.png', import.meta.url).href,
  zeroPistache: new URL('../photos/zerobackground5.png', import.meta.url).href,
  zeroPlatano: new URL('../photos/zerobackground6.png', import.meta.url).href,
  zeroTiramisu: new URL('../photos/zerobackground7.png', import.meta.url).href,
};

export const heroImages = [
  photos.cherryMoca,
  photos.matcha,
  photos.lotus,
];

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
        image: photos.zeroStrawberryMatcha,
      },
      {
        name: 'Lotus Lotus',
        description: 'Crema de Biscoff, shot de espresso, foam de platano y galleta.',
        badge: 'Casa',
        image: photos.zeroLotus,
      },
      {
        name: 'Platano',
        description: 'Shot de espresso, jarabe de platano, foam de platano y canela.',
        badge: 'Dulce',
        image: photos.zeroPlatano,
      },
      {
        name: 'Tiramisu Latte',
        description: 'Shot de espresso, chocolate, foam de mascarpone, cocoa y galleta soleta. Solo frio.',
        badge: 'Frio',
        image: photos.zeroTiramisu,
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
        image: photos.zeroCherryMoca,
        prices: [
          { label: 'Caliente 12 oz', value: '$80' },
          { label: 'Frio 16 oz', value: '$95' },
        ],
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
        description: 'Especiado, cremoso y reconfortante.',
        image: photos.zeroPistache,
        prices: [
          { label: 'Caliente', value: '$90' },
          { label: 'Frio 16 oz', value: '$95' },
        ],
      },
      {
        name: 'Matcha',
        description: 'Matcha ceremonial con leche.',
        image: photos.zeroMatchaLotus,
        prices: [
          { label: 'Caliente', value: '$90' },
          { label: 'Frio 16 oz', value: '$100' },
        ],
      },
      {
        name: 'Tisana',
        description: 'Frutos rojos.',
        image: photos.zeroFresa,
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
        name: 'Lotus',
        description: 'Crema de Biscoff, lechera y foam.',
        badge: 'Especial',
        image: photos.zeroLotus,
      },
      {
        name: 'Platano Especial',
        description: 'Jarabe de platano, lechera, foam de platano y toffee.',
        badge: 'Especial',
        image: photos.zeroPlatano,
      },
      {
        name: 'Matcha Platano',
        description: 'Matcha ceremonial, jarabe de platano y foam.',
        badge: 'Especial',
        image: photos.zeroMatchaLotus,
      },
    ],
  },
];
