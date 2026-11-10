/* Catalogue data for Noam Fabrics. Prices are in Ghana cedis (GH₵).

   Each category sets the price and how it is sold:
     price: 60,  pack: 1  ->  GH₵60 per yard
     price: 250, pack: 4  ->  GH₵250 for a 4-yard piece
   A product can override either by carrying its own price / pack.

   Adire and Ankara use the real product photos and the real prices; their
   names and descriptions were written from the photos. Everything marked
   "placeholder": true (Kente, And More) is invented, including the category
   price, until the real range is added. */

window.NOAM = {
  categories: [
    {"id": "adire", "name": "Adire", "short": "Adire", "tagline": "Authentic. Elegant. Timeless.", "price": 60, "pack": 1},
    {"id": "ankara", "name": "Ankara", "short": "Ankara", "tagline": "Vibrant. Versatile. Always in style.", "price": 250, "pack": 4, "image": "assets/fabrics/ankara/panel.jpg"},
    {"id": "kente", "name": "Kente & Other African Prints", "short": "Kente & Prints", "tagline": "Heritage. Culture. Class.", "price": 80, "pack": 1},
    {"id": "more", "name": "And More", "short": "More", "tagline": "From casual to classy, we’ve got you covered.", "price": 45, "pack": 1}
  ],

  products: [
    {"id": "green-comb", "name": "Green Comb", "category": "adire", "image": "assets/fabrics/adire/green-comb-1.jpg", "images": ["assets/fabrics/adire/green-comb-1.jpg", "assets/fabrics/adire/green-comb-2.webp", "assets/fabrics/adire/green-comb-3.webp"], "composition": "Cotton", "description": "White comb motifs with a fine crackle, resist-dyed on a vivid green ground."},
    {"id": "purple-comb", "name": "Purple Comb", "category": "adire", "image": "assets/fabrics/adire/purple-comb-1.jpg", "images": ["assets/fabrics/adire/purple-comb-1.jpg", "assets/fabrics/adire/purple-comb-2.webp", "assets/fabrics/adire/purple-comb-3.webp"], "composition": "Cotton", "description": "The comb motif in white on deep purple, with the same hand-drawn crackle through each one."},
    {"id": "orange-ox", "name": "Orange Circles & Crosses", "category": "adire", "image": "assets/fabrics/adire/orange-ox-1.jpg", "images": ["assets/fabrics/adire/orange-ox-1.jpg", "assets/fabrics/adire/orange-ox-2.webp", "assets/fabrics/adire/orange-ox-3.webp"], "composition": "Cotton", "description": "Bold white circles and crosses on bright orange, finished with a rippled stripe border."},
    {"id": "blue-stone", "name": "Blue Stone", "category": "ankara", "image": "assets/fabrics/ankara/blue-stone-1.webp", "description": "A wax print of cracked grey stones over bright blue, scattered with small lilac stars."},
    {"id": "purple-bloom", "name": "Purple Bloom", "category": "ankara", "image": "assets/fabrics/ankara/purple-bloom-1.webp", "description": "Large purple blooms with dotted petals on a turquoise striped ground."},
    {"id": "gold-coast", "name": "Gold Coast", "category": "kente", "image": "assets/fabrics/gold-coast.jpg", "placeholder": true, "description": "Blocks of stripe, zigzag and diamond in gold, green and red."},
    {"id": "royal-blue", "name": "Royal Blue", "category": "kente", "image": "assets/fabrics/royal-blue.jpg", "placeholder": true, "description": "The kente block pattern in royal blue, gold and cream."},
    {"id": "bogolan", "name": "Bogolan", "category": "kente", "image": "assets/fabrics/bogolan.jpg", "placeholder": true, "description": "Cream geometric rows on a near-black ground, after traditional mudcloth."},
    {"id": "emerald-satin", "name": "Emerald Satin", "category": "more", "image": "assets/fabrics/emerald-satin.jpg", "placeholder": true, "description": "A fluid plain satin in emerald, for linings, trims and full looks."},
    {"id": "plum-satin", "name": "Plum Satin", "category": "more", "image": "assets/fabrics/plum-satin.jpg", "placeholder": true, "description": "Plain satin in a rich plum with a soft sheen."},
    {"id": "wine-crepe", "name": "Wine Crepe", "category": "more", "image": "assets/fabrics/wine-crepe.jpg", "placeholder": true, "description": "A matte-faced crepe in deep wine with an easy drape."}
  ]
};
