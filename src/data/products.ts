import type { Product } from '../types/product'

export const products: Product[] = [
  {
    id: 'xx99-mark-two',
    slug: 'xx99-mark-two-headphones',
    name: 'XX99 MARK II HEADPHONES',
    category: 'headphones',
    price: 2999,
    description:
      'The new XX99 Mark II headphones deliver the signature Audiophile experience with a refined acoustic profile, extended low-end response, and a luxury finish built for hours of listening.',
    shortDescription: 'Premium wireless over-ear headphones with legendary detail.',
    images: [
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&w=1200&q=80',
    ],
    thumbnail:
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80',
    features: [
      'Wireless over-ear design with adaptive noise cancellation and 40-hour battery life.',
      'Dual drivers and refined tuning produce precise, balanced playback with deep separation across the entire spectrum.',
      'A soft-touch leather finish, memory foam cushions, and quick-fold frame make it ideal for travel and long sessions.',
    ],
    includedItems: [
      { quantity: 1, item: 'Headphone case' },
      { quantity: 1, item: 'USB-C cable' },
      { quantity: 1, item: '3.5mm audio cable' },
      { quantity: 1, item: 'Travel pouch' },
    ],
    isNew: true,
    stock: 10,
  },
  {
    id: 'xx99-mark-one',
    slug: 'xx99-mark-one-headphones',
    name: 'XX99 MARK I HEADPHONES',
    category: 'headphones',
    price: 1750,
    description:
      'A flagship performer with a classic build and clean soundstage, the XX99 Mark I stays true to the pure studio-inspired tuning that Audiophile is known for.',
    shortDescription: 'Classic over-ear reference headphones with timeless comfort.',
    images: [
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80',
    ],
    thumbnail:
      'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&w=900&q=80',
    features: [
      'Balanced tonal accuracy built for critical listening and all-day comfort.',
      'Made from premium metals and soft-touch cushioning for a subtle premium feel.',
      'High-quality Bluetooth and wired compatibility for listening in any environment.',
    ],
    includedItems: [
      { quantity: 1, item: 'Carry case' },
      { quantity: 1, item: 'Audio cable' },
      { quantity: 1, item: 'User guide' },
    ],
    isNew: false,
    stock: 7,
  },
  {
    id: 'xx59',
    slug: 'xx59-headphones',
    name: 'XX59 HEADPHONES',
    category: 'headphones',
    price: 899,
    description:
      'The XX59 is designed for listeners who want a premium, beautifully warm sound without the size or complexity of a larger flagship system.',
    shortDescription: 'Balanced wireless listening with a refined everyday profile.',
    images: [
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80',
    ],
    thumbnail:
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=900&q=80',
    features: [
      'Soft open-back tuning for clarity, warmth, and a wide, natural soundstage.',
      'Compact earcup construction combined with lightweight materials for comfortable long sessions.',
      'Simple controls and a durable build with a minimal premium finish.',
    ],
    includedItems: [
      { quantity: 1, item: 'Cable' },
      { quantity: 1, item: 'Travel bag' },
      { quantity: 1, item: 'Manual' },
    ],
    isNew: false,
    stock: 18,
  },
  {
    id: 'xx54',
    slug: 'xx54-headphones',
    name: 'XX54 HEADPHONES',
    category: 'headphones',
    price: 699,
    description:
      'Made for dedicated listeners who want a clean, immersive all-day sound experience with a low-profile, compact frame.',
    shortDescription: 'Comfort-first premium headphones for everyday use.',
    images: [
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80',
    ],
    thumbnail:
      'https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?auto=format&fit=crop&w=900&q=80',
    features: [
      'Memory foam cushions and lightweight frame for comfortable extended wear.',
      'Balanced acoustic response tuned for crisp mids and expressive detail.',
      'Minimal, modern finish with premium materials throughout the design.',
    ],
    includedItems: [
      { quantity: 1, item: 'Protective case' },
      { quantity: 1, item: 'Audio cable' },
    ],
    isNew: false,
    stock: 14,
  },
  {
    id: 'zx9',
    slug: 'zx9-speaker',
    name: 'ZX9 SPEAKER',
    category: 'speakers',
    price: 4499,
    description:
      'The ZX9 brings cinematic audio into the home with rich bass response, precise detail, and a premium silhouette built for immersive entertainment.',
    shortDescription: 'Compact high-fidelity speaker with room-filling power.',
    images: [
      'https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&w=1200&q=80',
    ],
    thumbnail:
      'https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?auto=format&fit=crop&w=900&q=80',
    features: [
      'Dual 6-inch woofers and high-frequency transducers tuned for dynamic range and impact.',
      'Sculpted cabinet design reduces resonances and enhances sonic clarity.',
      'Smart integration includes app tuning and multiple sound modes for different rooms.',
    ],
    includedItems: [
      { quantity: 1, item: 'Speaker cable' },
      { quantity: 1, item: 'Power cable' },
      { quantity: 1, item: 'Manual' },
    ],
    isNew: true,
    stock: 8,
  },
  {
    id: 'zx7',
    slug: 'zx7-speaker',
    name: 'ZX7 SPEAKER',
    category: 'speakers',
    price: 3499,
    description:
      'The ZX7 fills rooms with warm, articulate sound and an elevated design language that suits modern living spaces without compromise.',
    shortDescription: 'High-impact speaker with elegant design and immersive detail.',
    images: [
      'https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80',
    ],
    thumbnail:
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80',
    features: [
      'Three-way acoustic design with precision performance from low-end to highs.',
      'Optimized for both stereo listening and compact room placement.',
      'Signature modern paneling with a satin finish and understated profile.',
    ],
    includedItems: [
      { quantity: 1, item: 'Speaker cable' },
      { quantity: 1, item: 'Remote control' },
      { quantity: 1, item: 'User guide' },
    ],
    isNew: false,
    stock: 9,
  },
  {
    id: 'zx7-mini',
    slug: 'zx7-mini-speaker',
    name: 'ZX7 MINI SPEAKER',
    category: 'speakers',
    price: 2499,
    description:
      'An elegant compact speaker that brings rich, warm audio into smaller rooms while staying highly versatile and beautifully designed.',
    shortDescription: 'Miniature speaker engineered for rich room-filling sound.',
    images: [
      'https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=1200&q=80',
    ],
    thumbnail:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80',
    features: [
      'Compact enclosure designed to fit beautifully in desks, shelves, and smaller rooms.',
      'Crisp detail and controlled bass response with minimal visual clutter.',
      'Instant pairing and premium finish for a refined aesthetic.',
    ],
    includedItems: [
      { quantity: 1, item: 'Cable' },
      { quantity: 1, item: 'Power adaptor' },
    ],
    isNew: false,
    stock: 12,
  },
  {
    id: 'yx1',
    slug: 'yx1-earphones',
    name: 'YX1 WIRELESS EARPHONES',
    category: 'earphones',
    price: 599,
    description:
      'The YX1 is a lightning-fast daily companion with a comfortable fit, strong battery life, and deep immersive performance in a pocketable package.',
    shortDescription: 'Wireless earphones built for flexible, everyday listening.',
    images: [
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?auto=format&fit=crop&w=1200&q=80',
    ],
    thumbnail:
      'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&w=900&q=80',
    features: [
      'Compact true wireless design with a secure fit and all-day comfort.',
      'Balanced tuning that keeps vocals expressive and the bass controlled.',
      'Battery life designed for flights, commutes, and long work sessions.',
    ],
    includedItems: [
      { quantity: 2, item: 'Ear tips' },
      { quantity: 1, item: 'Charging case' },
      { quantity: 1, item: 'USB-C cable' },
    ],
    isNew: true,
    stock: 22,
  },
  {
    id: 'x1',
    slug: 'x1-earphones',
    name: 'X1 EARPHONES',
    category: 'earphones',
    price: 399,
    description:
      'Built for everyday movement, the X1 earphones offer a compact and comfortable profile with detailed sound and reliable wireless performance.',
    shortDescription: 'Compact earphones with punchy sound and easy portability.',
    images: [
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&w=1200&q=80',
    ],
    thumbnail:
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=900&q=80',
    features: [
      'Precision acoustic chamber shaped for smooth, natural playback.',
      'Lightweight shell and soft-touch finish for all-day comfort.',
      'Auto connection and simple controls make them practical for daily use.',
    ],
    includedItems: [
      { quantity: 1, item: 'Travel pouch' },
      { quantity: 1, item: 'USB-C cable' },
      { quantity: 3, item: 'Ear tips' },
    ],
    isNew: false,
    stock: 16,
  },
  {
    id: 'a1',
    slug: 'a1-earphones',
    name: 'A1 EARPHONES',
    category: 'earphones',
    price: 349,
    description:
      'The A1 keeps things lightweight, comfortable, and refined with a clean sound profile and easy portability for any day-to-day routine.',
    shortDescription: 'Portable earphones made for daily commuting and workouts.',
    images: [
      'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?auto=format&fit=crop&w=1200&q=80',
    ],
    thumbnail:
      'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&w=900&q=80',
    features: [
      'Responsive sound with a warm low-end and crisp vocal detail.',
      'Satin-finished housings and secure-fit design built for movement.',
      'Reliable wireless connection and effortless pairing with mobile devices.',
    ],
    includedItems: [
      { quantity: 3, item: 'Ear tips' },
      { quantity: 1, item: 'Charging cable' },
    ],
    isNew: false,
    stock: 20,
  },
  {
    id: 'b1',
    slug: 'b1-earphones',
    name: 'B1 EARPHONES',
    category: 'earphones',
    price: 429,
    description:
      'B1 combines everyday practicality with a crisp, expressive sound profile that feels polished enough to stand out in any routine.',
    shortDescription: 'An expressive earphone for focused listening and daily movement.',
    images: [
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=1200&q=80',
    ],
    thumbnail:
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80',
    features: [
      'True wireless performance with a stable connection and a low-profile silhouette.',
      'Compact charging case with quick-access controls and a durable shell.',
      'Clear vocal presence, punchy mids, and layered, smooth highs.',
    ],
    includedItems: [
      { quantity: 1, item: 'Charging case' },
      { quantity: 1, item: 'Cable' },
      { quantity: 2, item: 'Ear tips' },
    ],
    isNew: true,
    stock: 11,
  },
  {
    id: 's2',
    slug: 's2-speaker',
    name: 'S2 SPEAKER',
    category: 'speakers',
    price: 1399,
    description:
      'The S2 speaker pairs sculpted acoustics and a clean, premium silhouette to create a useful, versatile addition to living rooms and office setups.',
    shortDescription: 'A versatile speaker for refined listening in compact spaces.',
    images: [
      'https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&w=1200&q=80',
    ],
    thumbnail:
      'https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?auto=format&fit=crop&w=900&q=80',
    features: [
      'Versatile placement options tailored to rooms where space is limited but sound quality still matters.',
      'Balanced tuning that keeps music crisp and dynamic without overemphasis.',
      'Elegant finish with subtle detail and a thoughtful, compact form factor.',
    ],
    includedItems: [
      { quantity: 1, item: 'Power cable' },
      { quantity: 1, item: 'Remote' },
      { quantity: 1, item: 'Guide' },
    ],
    isNew: true,
    stock: 13,
  },
  {
    id: 'h1',
    slug: 'h1-headphones',
    name: 'H1 HEADPHONES',
    category: 'headphones',
    price: 1299,
    description:
      'A lane of modern headphone design, the H1 focuses on comfort, clarity, and confidence with a polished sound profile for everyday listening.',
    shortDescription: 'Minimal premium headphones for focus and long listening sessions.',
    images: [
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=1200&q=80',
    ],
    thumbnail:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80',
    features: [
      'Comfort-first design with memory foam and a low-clamp fit for long sessions.',
      'Crisp, articulate sound that stays detailed across high, mid, and low ranges.',
      'Long wireless battery life and a refined finish that stays understated.',
    ],
    includedItems: [
      { quantity: 1, item: 'Storage case' },
      { quantity: 1, item: 'Cable' },
      { quantity: 1, item: 'USB-C adapter' },
    ],
    isNew: false,
    stock: 10,
  },
]
