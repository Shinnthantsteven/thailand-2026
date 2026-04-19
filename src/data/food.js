export const foods = [
  // Chiang Mai / Northern Thai
  { id: 1, name: 'Khao Soi Gai', region: 'Chiang Mai', description: 'Coconut curry noodle soup, crispy noodles on top. The dish of the north.', price: '฿80', where: 'Lung Prakit — before noon', notes: "Order 'Gai' (chicken). Arrives before noon or sells out.", photoKeyword: 'khao+soi+coconut+curry+noodle+soup', tag: 'must-try' },
  { id: 2, name: 'Sai Ua', region: 'Chiang Mai', description: 'Northern sausage with lemongrass + galangal + kaffir lime. Smoky, herby.', price: '฿80', where: 'Huen Phen restaurant', notes: 'Ask for chicken or beef version.', photoKeyword: 'northern+thai+sausage+sai+ua', tag: 'halal-check' },
  { id: 3, name: 'Gaeng Hang Lay', region: 'Chiang Mai', description: 'Burmese-style slow-cooked curry. Rich, slightly sweet, very deep flavour.', price: '฿120', where: 'Huen Phen restaurant', notes: 'Ask for beef (neua) version.', photoKeyword: 'thai+pork+curry+northern', tag: 'halal-check' },
  { id: 4, name: 'Pad Kra Pao Gai', region: 'Chiang Mai', description: 'Holy basil stir-fry with chicken + fried egg on rice. Order anywhere when unsure.', price: '฿60–70', where: 'Any restaurant', notes: 'The default safe Thai dish.', photoKeyword: 'pad+krapao+thai+basil+stir+fry', tag: 'safe' },
  { id: 5, name: 'Tom Yum Gai', region: 'Chiang Mai', description: 'Chicken tom yum soup, fragrant + sour + herby.', price: '฿80', where: 'Any restaurant', notes: "Order with 'gai' clearly.", photoKeyword: 'tom+yum+soup+thailand', tag: 'safe' },
  { id: 6, name: 'Som Tam', region: 'Chiang Mai', description: 'Green papaya salad, lime + chili + peanuts. Sour + crunchy.', price: '฿50', where: 'Market stalls', notes: "Say 'mai sai goong haeng' (no dried shrimp).", photoKeyword: 'som+tam+papaya+salad+thai', tag: 'halal-check' },
  { id: 7, name: 'Mango Sticky Rice', region: 'Always Safe', description: 'Glutinous rice + coconut cream + ripe mango. The dessert of Thailand.', price: '฿60', where: 'Everywhere', notes: '100% halal. Order every night.', photoKeyword: 'mango+sticky+rice+thai+dessert', tag: 'safe' },
  { id: 8, name: 'Pad Thai Gai', region: 'Chiang Mai', description: 'Stir-fried rice noodles + egg + bean sprouts + peanuts with chicken.', price: '฿60–80', where: 'Any street stall', notes: 'Safe everywhere.', photoKeyword: 'pad+thai+noodles+street+food', tag: 'safe' },
  // Pai
  { id: 9, name: 'Roti Banana', region: 'Pai', description: 'Thin crispy pancake + banana + condensed milk. The snack of Pai nights.', price: '฿50', where: 'Pai Walking Street', notes: '100% halal.', photoKeyword: 'roti+banana+thai+street+food', tag: 'safe' },
  { id: 10, name: 'Mountain Coffee', region: 'Pai', description: "Single-origin northern Thai arabica. Light, fruity, no comparison to city coffee.", price: '฿70', where: "Charlie's House", notes: 'Available all morning.', photoKeyword: 'mountain+coffee+northern+thailand', tag: 'safe' },
  { id: 11, name: 'Pad Thai (Walking Street)', region: 'Pai', description: 'Classic Pad Thai at night market stalls.', price: '฿60', where: 'Pai Walking Street', notes: 'Order with chicken.', photoKeyword: 'pad+thai+noodles+street+food', tag: 'safe' },
  // Ban Rak Thai
  { id: 12, name: 'Yunnan Noodles', region: 'Ban Rak Thai', description: 'Chinese-style noodle soup. Lighter than Thai. Fresh herbs + clear broth.', price: '฿70', where: 'Any village restaurant', notes: "Say 'mai sai moo' (no pork).", photoKeyword: 'yunnan+noodles+chinese+soup', tag: 'halal-check' },
  { id: 13, name: 'Mushroom Stir Fry', region: 'Ban Rak Thai', description: 'Local mountain mushrooms + garlic + soy. Simple + fresh. Usually vegetarian.', price: '฿80', where: 'Village restaurants', notes: 'Usually safe.', photoKeyword: 'mushroom+stir+fry+chinese', tag: 'safe' },
  { id: 14, name: 'Oolong Tea', region: 'Ban Rak Thai', description: 'Floral, light. Day 1 tea house.', price: '฿100–150', where: 'Tea houses', notes: '100% safe.', photoKeyword: 'puerh+tea+chinese+teahouse', tag: 'safe' },
  { id: 15, name: 'Pu-erh Tea', region: 'Ban Rak Thai', description: 'Aged + fermented + earthy. Day 2 tea house.', price: '฿100–150', where: 'Tea houses', notes: '100% safe.', photoKeyword: 'puerh+tea+chinese+teahouse', tag: 'safe' },
  { id: 16, name: 'Green Tea', region: 'Ban Rak Thai', description: 'Fresh + grassy. Day 3 tea house.', price: '฿100–150', where: 'Tea houses', notes: '100% safe.', photoKeyword: 'puerh+tea+chinese+teahouse', tag: 'safe' },
  // Doi Inthanon
  { id: 17, name: 'Hmong Strawberries', region: 'Doi Inthanon', description: 'Grown on the mountain. Tiny + intensely sweet.', price: '฿50', where: 'Roadside stalls', notes: 'Buy a bag, eat while walking.', photoKeyword: 'mountain+coffee+northern+thailand', tag: 'safe' },
  { id: 18, name: 'Mae Klang Luang Coffee', region: 'Doi Inthanon', description: 'Best mountain coffee of the trip. Grown at altitude.', price: '฿60', where: 'Mae Klang Luang village', notes: 'Must-try on June 14.', photoKeyword: 'mountain+coffee+northern+thailand', tag: 'safe' },
  { id: 19, name: 'Grilled Sweet Potato', region: 'Doi Inthanon', description: 'Sold at park entrance + summit area.', price: '฿20–30', where: 'Park vendors', notes: '100% safe snack.', photoKeyword: 'mountain+coffee+northern+thailand', tag: 'safe' },
];

export const phrases = [
  { phrase: 'Mai sai moo', thai: 'ไม่ใส่หมู', meaning: 'No pork — say at every stall', priority: true },
  { phrase: 'Halal mai?', thai: 'ฮาลาลไหม', meaning: 'Is this halal?', priority: true },
  { phrase: 'Khao Soi Gai', thai: 'ข้าวซอยไก่', meaning: 'Chicken khao soi', priority: false },
  { phrase: 'Gai', thai: 'ไก่', meaning: 'Chicken', priority: true },
  { phrase: 'Neua', thai: 'เนื้อ', meaning: 'Beef', priority: false },
  { phrase: 'Goong', thai: 'กุ้ง', meaning: 'Shrimp', priority: false },
  { phrase: 'Mai pet', thai: 'ไม่เผ็ด', meaning: 'Not spicy', priority: false },
  { phrase: 'Pet nit noi', thai: 'เผ็ดนิดหน่อย', meaning: 'A little spicy', priority: false },
  { phrase: 'Aroy', thai: 'อร่อย', meaning: 'Delicious (say this, the cook will love you)', priority: true },
  { phrase: 'Tao rai?', thai: 'เท่าไหร่', meaning: 'How much?', priority: false },
  { phrase: 'Khob khun krap/ka', thai: 'ขอบคุณครับ/ค่ะ', meaning: 'Thank you (male/female)', priority: false },
];
