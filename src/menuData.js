export const heroImages = [
  new URL('../photos/5076c536-0938-405e-b234-47894feb0663.jpg', import.meta.url).href,
  new URL('../photos/fccd239c-c982-40bb-b4ef-5c138bf183e9.jpg', import.meta.url).href,
  new URL('../photos/f02aecae-2f17-4d5d-b965-3bb038e54c35.jpg', import.meta.url).href,
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
      },
      {
        name: 'Lotus Lotus',
        description: 'Crema de Biscoff, shot de espresso, foam de platano y galleta.',
        badge: 'Casa',
      },
      {
        name: 'Platano',
        description: 'Shot de espresso, jarabe de platano, foam de platano y canela.',
        badge: 'Dulce',
      },
      {
        name: 'Tiramisu Latte',
        description: 'Shot de espresso, chocolate, foam de mascarpone, cocoa y galleta soleta. Solo frio.',
        badge: 'Frio',
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
        prices: [
          { label: 'Caliente', value: '$90' },
          { label: 'Frio 16 oz', value: '$95' },
        ],
      },
      {
        name: 'Matcha',
        description: 'Matcha ceremonial con leche.',
        prices: [
          { label: 'Caliente', value: '$90' },
          { label: 'Frio 16 oz', value: '$100' },
        ],
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
        name: 'Lotus',
        description: 'Crema de Biscoff, lechera y foam.',
        badge: 'Especial',
      },
      {
        name: 'Platano Especial',
        description: 'Jarabe de platano, lechera, foam de platano y toffee.',
        badge: 'Especial',
      },
      {
        name: 'Matcha Platano',
        description: 'Matcha ceremonial, jarabe de platano y foam.',
        badge: 'Especial',
      },
    ],
  },
];
