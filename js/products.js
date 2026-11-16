/* Catalogue data for Noam Fabrics. Prices are in Ghana cedis (GH₵).

   Each category sets the price and how it is sold:
     price: 60,  pack: 1  ->  GH₵60 per yard
     price: 250, pack: 4  ->  GH₵250 for a 4-yard piece
     price: 265, pack: 5  ->  GH₵265 for a 5-yard piece
   A product can override either by carrying its own price / pack.
   A category with "strip": false is left off the home page panel strip.

   Adire, Ankara and Minister are the only categories for now. They use the
   real product photos and the real prices; the fabric names and
   descriptions were written from the photos. */

window.NOAM = {
  categories: [
    {"id": "adire", "name": "Adire", "short": "Adire", "tagline": "Authentic. Elegant. Timeless.", "price": 60, "pack": 1},
    {"id": "ankara", "name": "Ankara", "short": "Ankara", "tagline": "Vibrant. Versatile. Always in style.", "price": 250, "pack": 4, "image": "assets/fabrics/ankara/panel.webp"},
    {"id": "minister", "name": "Minister", "short": "Minister", "tagline": "Bold. Graphic. Made to stand out.", "price": 265, "pack": 5, "image": "assets/fabrics/minister-web/panel.webp"}
  ],

  products: [
    {"id": "green-comb", "name": "Green Comb", "category": "adire", "image": "assets/fabrics/adire/green-comb-1.jpg", "images": ["assets/fabrics/adire/green-comb-1.jpg", "assets/fabrics/adire/green-comb-2.webp", "assets/fabrics/adire/green-comb-3.webp"], "composition": "Cotton", "description": "White comb motifs with a fine crackle, resist-dyed on a vivid green ground."},
    {"id": "purple-comb", "name": "Purple Comb", "category": "adire", "image": "assets/fabrics/adire/purple-comb-1.jpg", "images": ["assets/fabrics/adire/purple-comb-1.jpg", "assets/fabrics/adire/purple-comb-2.webp", "assets/fabrics/adire/purple-comb-3.webp"], "composition": "Cotton", "description": "The comb motif in white on deep purple, with the same hand-drawn crackle through each one."},
    {"id": "orange-ox", "name": "Orange Circles & Crosses", "category": "adire", "image": "assets/fabrics/adire/orange-ox-1.jpg", "images": ["assets/fabrics/adire/orange-ox-1.jpg", "assets/fabrics/adire/orange-ox-2.webp", "assets/fabrics/adire/orange-ox-3.webp"], "composition": "Cotton", "description": "Bold white circles and crosses on bright orange, finished with a rippled stripe border."},
    {"id": "royal-fan", "name": "Royal Blue & Gold Fan", "category": "ankara", "image": "assets/fabrics/ankara/royal-fan-1.png", "description": "Scalloped fans in royal blue and gold, edged with white dots over a honeycomb crackle."},
    {"id": "pink-bloom", "name": "Pink Bloom", "category": "ankara", "image": "assets/fabrics/ankara/pink-bloom-1.png", "images": ["assets/fabrics/ankara/pink-bloom-1.png", "assets/fabrics/ankara/pink-bloom-2.png"], "description": "Hot-pink flowers and leaves outlined in black on a soft mint ground."},
    {"id": "green-shell", "name": "Green Shell", "category": "ankara", "image": "assets/fabrics/ankara/green-shell-1.webp", "images": ["assets/fabrics/ankara/green-shell-1.webp", "assets/fabrics/ankara/green-shell-2.png"], "description": "Yellow and orange shell fans with feathered seed heads on a vivid green ground."},
    {"id": "mustard-pinwheel", "name": "Mustard Pinwheel", "category": "ankara", "image": "assets/fabrics/ankara/mustard-pinwheel-1.webp", "description": "Navy and cream pinwheels set into a mustard crackle ground."},
    {"id": "cobalt-daisy", "name": "Cobalt Daisy", "category": "ankara", "image": "assets/fabrics/ankara/cobalt-daisy-1.png", "description": "White dotted daisies and pale yellow leaves on a cobalt blue crackle."},
    {"id": "crimson-burst", "name": "Crimson Burst", "category": "ankara", "image": "assets/fabrics/ankara/crimson-burst-1.png", "description": "Deep red starburst flowers, dotted in white, on a golden lattice."},
    {"id": "garden-bloom", "name": "Garden Bloom", "category": "ankara", "image": "assets/fabrics/ankara/garden-bloom-1.webp", "images": ["assets/fabrics/ankara/garden-bloom-1.webp", "assets/fabrics/ankara/garden-bloom-2.png", "assets/fabrics/ankara/garden-bloom-3.webp", "assets/fabrics/ankara/garden-bloom-4.webp"], "description": "Green and slate-blue flowers over a striped gold ground with a pebbled crackle."},
    {"id": "navy-wave", "name": "Navy Wave", "category": "ankara", "image": "assets/fabrics/ankara/navy-wave-1.png", "description": "Rolling waves in navy, sky blue and turquoise, traced with white dots."},
    {"id": "orange-arc", "name": "Orange Arc", "category": "ankara", "image": "assets/fabrics/ankara/orange-arc-1.webp", "description": "Bold arcs, bars and stripes in orange, black and cream."},
    {"id": "lavender-lily", "name": "Lavender Lily", "category": "ankara", "image": "assets/fabrics/ankara/lavender-lily-1.webp", "description": "Yellow lilies and olive leaves on a soft lavender ground."},
    {"id": "forest-medallion", "name": "Forest Medallion", "category": "ankara", "image": "assets/fabrics/ankara/forest-medallion-1.png", "images": ["assets/fabrics/ankara/forest-medallion-1.png", "assets/fabrics/ankara/forest-medallion-2.png"], "description": "Mint and white medallions on a deep forest green."},
    {"id": "mustard-sunflower", "name": "Mustard Sunflower", "category": "ankara", "image": "assets/fabrics/ankara/mustard-sunflower-1.png", "description": "Mustard sunflowers and cream leaves on black."},
    {"id": "plum-fan", "name": "Plum Fan", "category": "ankara", "image": "assets/fabrics/ankara/plum-fan-1.webp", "description": "Cream fans ringed with dots on a deep plum ground."},
    {"id": "blue-poppy", "name": "Blue Poppy", "category": "ankara", "image": "assets/fabrics/ankara/blue-poppy-1.png", "description": "Bright blue flowers and navy leaves on a cream and gold crackle."},
    {"id": "star-flower", "name": "Star Flower", "category": "ankara", "image": "assets/fabrics/ankara/star-flower-1.webp", "description": "Blue and green star flowers, dotted in white, on a golden crackle ground."},
    {"id": "maroon-hibiscus", "name": "Maroon Hibiscus", "category": "ankara", "image": "assets/fabrics/ankara/maroon-hibiscus-1.webp", "description": "Solid maroon hibiscus flowers and leaves on cream."},
    {"id": "turquoise-arc", "name": "Turquoise Arc", "category": "ankara", "image": "assets/fabrics/ankara/turquoise-arc-1.webp", "description": "Arcs and bars in turquoise, black and soft grey."},
    {"id": "rust-fan", "name": "Rust Fan", "category": "ankara", "image": "assets/fabrics/ankara/rust-fan-1.webp", "description": "Overlapping fans in rust and brown on cream."},
    {"id": "olive-leaf", "name": "Olive Leaf", "category": "ankara", "image": "assets/fabrics/ankara/olive-leaf-1.webp", "description": "Sweeping olive and black leaves on white."},
    {"id": "cream-blossom", "name": "Cream Blossom", "category": "ankara", "image": "assets/fabrics/ankara/cream-blossom-1.webp", "images": ["assets/fabrics/ankara/cream-blossom-1.webp", "assets/fabrics/ankara/cream-blossom-2.png"], "description": "Cream and orange blossoms with brown leaves on a warm beige ground."},
    {"id": "maroon-gold-leaf", "name": "Maroon & Gold Leaf", "category": "ankara", "image": "assets/fabrics/ankara/maroon-gold-leaf-1.webp", "description": "Large maroon and gold leaves, finely veined, on cream."},
    {"id": "forest-trellis", "name": "Forest Trellis", "category": "ankara", "image": "assets/fabrics/ankara/forest-trellis-1.png", "description": "Light green leaf motifs in a white trellis on forest green."},
    {"id": "burgundy-bloom", "name": "Burgundy Bloom", "category": "ankara", "image": "assets/fabrics/ankara/burgundy-bloom-1.webp", "description": "Burgundy hibiscus with cream-streaked petals and trailing leaves on cream."},
    {"id": "minister-mustard-circles", "name": "Mustard Striped Circles", "category": "minister", "image": "assets/fabrics/minister-web/mustard-circles-1.webp", "images": ["assets/fabrics/minister-web/mustard-circles-1.webp", "assets/fabrics/minister-web/mustard-circles-2.png", "assets/fabrics/minister-web/mustard-circles-3.webp"], "description": "Circles filled with bright stripes, scattered over a mustard ground."},
    {"id": "minister-navy-wave", "name": "Navy Wave", "category": "minister", "image": "assets/fabrics/minister-web/navy-wave-1.webp", "images": ["assets/fabrics/minister-web/navy-wave-1.webp", "assets/fabrics/minister-web/navy-wave-2.png"], "description": "Flowing bands of yellow, orange and sky blue on deep navy."},
    {"id": "minister-blue-shapes", "name": "Blue Shapes", "category": "minister", "image": "assets/fabrics/minister-web/blue-shapes-1.webp", "images": ["assets/fabrics/minister-web/blue-shapes-1.webp", "assets/fabrics/minister-web/blue-shapes-2.png"], "description": "Striped circles, triangles and blocks in pink, yellow, red and green on a dotted royal blue ground."},
    {"id": "minister-medallion", "name": "Sunburst Medallion", "category": "minister", "image": "assets/fabrics/minister-web/medallion-1.webp", "description": "Red and blue sunburst medallions linked by gold arcs, with blue diamonds between."},
    {"id": "minister-grey-squares", "name": "Grey Squares", "category": "minister", "image": "assets/fabrics/minister-web/grey-squares-1.webp", "images": ["assets/fabrics/minister-web/grey-squares-1.webp", "assets/fabrics/minister-web/grey-squares-2.png"], "description": "Turquoise, red and blue squares and triangles, drawn in fine lines, on a soft grey ground."},
    {"id": "minister-burgundy-circles", "name": "Burgundy Striped Circles", "category": "minister", "image": "assets/fabrics/minister-web/burgundy-circles-1.webp", "images": ["assets/fabrics/minister-web/burgundy-circles-1.webp", "assets/fabrics/minister-web/burgundy-circles-2.png", "assets/fabrics/minister-web/burgundy-circles-3.png"], "description": "Circles filled with bright stripes on a deep burgundy ground."},
    {"id": "minister-golden-wave", "name": "Golden Wave", "category": "minister", "image": "assets/fabrics/minister-web/golden-wave-1.webp", "description": "Maroon and blue ribbons, shaded with fine lines, winding across a golden ground."},
    {"id": "minister-lilac-shapes", "name": "Lilac Shapes", "category": "minister", "image": "assets/fabrics/minister-web/lilac-shapes-1.webp", "images": ["assets/fabrics/minister-web/lilac-shapes-1.webp", "assets/fabrics/minister-web/lilac-shapes-2.png"], "description": "Striped triangles, circles and blocks on a dotted lilac ground."},
    {"id": "minister-navy-sunburst", "name": "Navy Sunburst", "category": "minister", "image": "assets/fabrics/minister-web/navy-sunburst-1.webp", "description": "Turquoise and mustard pinwheel suns, ringed with white dots, on navy."},
    {"id": "minister-orange-shapes", "name": "Orange Shapes", "category": "minister", "image": "assets/fabrics/minister-web/orange-shapes-1.png", "images": ["assets/fabrics/minister-web/orange-shapes-1.png", "assets/fabrics/minister-web/orange-shapes-2.png"], "description": "Striped triangles, circles and blocks on a dotted orange ground."},
    {"id": "minister-blue-lattice", "name": "Blue Lattice", "category": "minister", "image": "assets/fabrics/minister-web/blue-lattice-1.webp", "description": "Red and gold dotted roundels joined by gold bars on royal blue."},
    {"id": "minister-purple-eye", "name": "Purple & Gold Eye", "category": "minister", "image": "assets/fabrics/minister-web/purple-eye-1.webp", "description": "Rows of gold and white eye motifs on a deep purple ground."},
    {"id": "minister-sunset-sunburst", "name": "Sunset Sunburst", "category": "minister", "image": "assets/fabrics/minister-web/sunset-sunburst-1.webp", "description": "Orange and turquoise sunburst wheels over a field of fine dots."},
    {"id": "minister-purple-circles", "name": "Purple Striped Circles", "category": "minister", "image": "assets/fabrics/minister-web/purple-circles-1.png", "description": "Circles filled with bright stripes on a rich purple ground."},
    {"id": "minister-navy-ribbon", "name": "Navy Ribbon", "category": "minister", "image": "assets/fabrics/minister-web/navy-ribbon-1.png", "description": "Looping ribbons of gold, teal and white on deep navy."},
    {"id": "minister-golden-ribbon", "name": "Golden Ribbon", "category": "minister", "image": "assets/fabrics/minister-web/golden-ribbon-1.png", "description": "Bold maroon and blue ribbons curving across a golden ground."},
    {"id": "minister-mustard-fan", "name": "Mustard Fan", "category": "minister", "image": "assets/fabrics/minister-web/mustard-fan-1.png", "description": "Scalloped fans in mustard, navy and cream."},
    {"id": "minister-golden-arc", "name": "Golden Arc", "category": "minister", "image": "assets/fabrics/minister-web/golden-arc-1.png", "description": "Striped arcs in maroon, teal and cream on a golden ground."},
    {"id": "minister-cream-ribbon", "name": "Cream Ribbon", "category": "minister", "image": "assets/fabrics/minister-web/cream-ribbon-1.png", "description": "Looping ribbons of burgundy, orange and teal on cream."}
  ]
};
