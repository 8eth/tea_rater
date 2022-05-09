puts "Clearing db 🗑️ ..."

User.destroy_all
Tea.destroy_all

puts "Making Users 👤 ..."
User.create(
    username:'beth', 
    password:'pass', 
    bio:'Here is my bio ...',
    picture: 'https://images.pexels.com/photos/1561020/pexels-photo-1561020.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
)

puts "Making Tea 🍵 ..."
Tea.create(
    name: "Lord Bergamont",
    image: "https://cdn.shopify.com/s/files/1/0368/5017/products/Smith-Teamaker-Tea-Lord-Bergamot-Main_1080x.png?v=1618441546",
    description: "A flavor somewhat superior to traditional Earl Grey. Fragrant Ceylon Dimbula and Uva are artfully combined with select teas from India's Assam valley, then scented with bergamot essential oil from the realm of Reggio Calabria, Italy.",
    ingredients: "Ceylon Dimbula, Uva and Indian Assam full leaf teas and natural bergamot flavor.",
    shop: "https://www.smithtea.com/collections/all-tea/products/lord-bergamot",
    origin: "Italy",
    origin_latitude: 43.87194,
    origin_longitude: 12.06738,
)

Tea.create(
    name: "Meadow",
    image: "https://cdn.shopify.com/s/files/1/0368/5017/products/Smith-Teamaker-Tea-Meadow-Main_1080x.png?v=1618441383",
    description: "A caffeine-free blend of golden Egyptian chamomile flowers and mildly stimulating, fragrant hyssop joined with smooth Cape rooibos, rose petals and linden flowers. You may need a sun hat.",
    ingredients: "Egyptian chamomile, South African rooibos, fragrant hyssop, linden flowers, lemon myrtle, rose petals, safflower, cyani flowers and natural flavors.",
    shop: "https://www.smithtea.com/collections/all-tea/products/meadow",
    origin: "Egypt",
    origin_latitude: 27.820553,
    origin_longitude: 30.002498,
)

Tea.create(
    name: "Black Lavender",
    image: "https://cdn.shopify.com/s/files/1/0368/5017/products/Black-Lavender-Ingredient-Image_1080x.png?v=1613082229",
    description: "A glorious bouquet of delicate French lavender paired with exquisite black Ceylon and lapsang souchong teas, fruity black currant and sweet vanilla. Handcrafted with great joie de vivre in the Smith atelier.",
    ingredients: "Ceylon and Zheng Shan black teas, French lavender, red rose petals, black currant and vanilla natural flavor.",
    shop: "https://www.smithtea.com/collections/all-tea/products/black-lavender",
    origin: "Turkey",
    origin_latitude: 40.963745,
    origin_longitude: 35.243322,
)

Tea.create(
    name: "Big Hibiscus",
    image: "https://cdn.shopify.com/s/files/1/0368/5017/products/Smith-Teamaker-Tea-Big-Hibiscus-Main_1080x.png?v=1618441514",
    description: "The cabernet of hibiscus teas. We join luscious red hibiscus with Indian sarsaparilla, ginger, pink rose petals, and elderflowers from Europe. Deep red, complex, nuanced and caffeine free, this tea almost needs a corkscrew.",
    ingredients: "Hibiscus flowers, Indian sarsaparilla root, ginger root, natural flavors, rose petals, elderflowers and lemon myrtle.",
    shop: "https://www.smithtea.com/collections/all-tea/products/big-hibiscus",    
    origin: "Bulgaria",
    origin_latitude: 43.133883,
    origin_longitude: 25.48583,
)

Tea.create(
    name: "Jasmine Pearls",
    image: "https://cdn.shopify.com/s/files/1/0368/5017/products/Smith-Teamaker-Tea-Jasmine-Pearls-Main_1080x.png?v=1553144407",
    description: "Made from just the bud of the tea bush, this lovely green tea is fired to neutralize the oxidizing enzyme, then hand rolled into tiny pearls and placed amidst just-picked jasmine blossoms for scenting, no less than five times. A transcendent experience.",
    ingredients: "Full leaf China green tea scented with jasmine blossoms.",
    shop: "https://www.smithtea.com/collections/all-tea/products/jasmine-pearls",    
    origin: "China",
    origin_latitude: 36.86166,
    origin_longitude: 102.195397,
)

Tea.create(
    name: "Peppermint Leaves",
    image: "https://cdn.shopify.com/s/files/1/0368/5017/products/Smith-Teamaker-Tea-Peppermint-Leaves-Main_1080x.png?v=1618441334",
    description: "It's no secret that the world's best peppermint comes from the Pacific Northwest. Gently hand-screened for perfect leaf size, it infuses a full, creamy flavor with distinct chocolate notes and an intense finish. A great after dinner treat or midday breath freshener. Caffeine free.",
    ingredients: "Peppermint leaves from the Pacific Northwest.",
    shop: "https://www.smithtea.com/collections/all-tea/products/peppermint-leaves",    
    origin: "Pacific Northwest",
    origin_latitude: 45.09024,
    origin_longitude: -120.712891,
)

Tea.create(
    name: "Masala Chai",
    image: "https://cdn.shopify.com/s/files/1/0368/5017/products/Masala-Chai-1000x1000_1080x.png?v=1618441527",
    description: "In India, chai means sweetly spiced tea served with foamed milk. Ours combines second flush Assam teas with pungent ginger root, cassia, black pepper, cloves and cardamom to create a rich and spicy brew worthy of any chai wallah.",
    ingredients: "Assam teas, ginger, cassia, black peppercorns, cardamom, cloves and natural spice oils.",
    shop: "https://www.smithtea.com/collections/all-tea/products/masala-chai",    
    origin: "India",
    origin_latitude: 23.593684,
    origin_longitude: 78.96288,
)

Tea.create(
    name: "Jasmine Silver Tip",
    image: "https://cdn.shopify.com/s/files/1/0368/5017/products/Smith-Teamaker-Tea-Jasmine-Silver-Tip-Main_1080x.png?v=1618441667",
    description: "Delicate, tender green tea leaves from China's Fujian Province are harvested each May and fired to maintain their flavor - then placed amid just- picked jasmine buds, which open slowly to share their fragrance. Many call it the perfect marriage.",
    ingredients: "China full leaf green tea scented with jasmine blossoms.",
    shop: "https://www.smithtea.com/collections/all-tea/products/jasmine-silver-tip",    
    origin: "China",
    origin_latitude: 36.86166,
    origin_longitude: 102.195397,
)

Tea.create(
    name: "Rose City Genmaicha",
    image: "https://cdn.shopify.com/s/files/1/0368/5017/products/Smith-Teamaker-Tea-Rose-City-Genmaicha-Main_1080x.png?v=1618441701",
    description: "A delicious Oregon twist on Japanese Genmaicha. Combines the light, nutty flavor of roasted rice with a grassy green tea character and rose petal finish—all softened by a kiss of sweet manuka honey.",
    ingredients: "Japanese sencha, genmai (roasted rice), Mao Feng green tea from China, red and pink rose petals, natural flavors, bergamot oil.",
    shop: "https://www.smithtea.com/collections/all-tea/products/rose-city-genmaicha",    
    origin: "Japan",
    origin_latitude: 37.204824,
    origin_longitude: 139.252924,
)

Tea.create(
    name: "Ginger Peach Iced Tea",
    image: "https://cdn.shopify.com/s/files/1/0368/5017/products/GingerPeachIcedTeaIngredient_1080x.png?v=1620311013",
    description: "A decidedly fruitful pairing of Indian and Sri Lankan black teas, joined with the earthy essence of ginger, peach and nectarine. A perfect pick for all seasons. Deep, rich, rewarding and unimpeachably delicious.",
    ingredients: "Black teas from India and Sri Lanka, ginger root, peach and nectarine natural flavors.",
    shop: "https://www.smithtea.com/collections/all-tea/products/ginger-peach-iced-tea",    
    origin: "Sri Lanka",
    origin_latitude: 8.873054,
    origin_longitude: 80.771797,
)

Tea.create(
    name: "Lullaby",
    image: "https://cdn.shopify.com/s/files/1/0368/5017/products/Lullaby-Ingredient_1080x.png?v=1617210080",
    description: "A relaxing, caffeine-free blend of floral lemongrass, golden chamomile, and soothing ashwagandha. The perfect formula for a quiet evening, crafted with care for the child in everyone. Let it sing you softly to sleep.​",
    ingredients: "Organic chamomile, organic lemongrass, organic ashwagandha, organic lemon balm, organic lavender, and organic licorice root.",
    shop: "https://www.smithtea.com/collections/all-tea/products/lullaby",    
    origin: "Uzbekistan",
    origin_latitude: 42.377491,
    origin_longitude: 64.585262,
)

Tea.create(
    name: "Fez",
    image: "https://cdn.shopify.com/s/files/1/0368/5017/products/Smith-Teamaker-Tea-Fez-Main_1080x.png?v=1618441652",
    description: "Rare green teas from China combined with aromatic spearmint grown in the Pacific Northwest and a hint of lemon myrtle from Australia. Fez artfully evokes old Morocco, and tastes best when shared with friends while lounging on pillows.",
    ingredients: "Spring harvested full leaf Mao Feng China green tea, Pacific Northwest spearmint leaves and Australian lemon myrtle.",
    shop: "https://www.smithtea.com/collections/all-tea/products/fez",    
    origin: "Australia",
    origin_latitude: -23.274398,
    origin_longitude: 133.775136,
)

puts "Making Reviews 🤔 ..."
Review.create(
    taste: 'Best Tea Ever!!', 
    rating: 5,
    recommend: true, 
    tea_id: 1, 
    user_id: 1,
)

Review.create(
    taste: 'So good', 
    rating: 5,
    recommend: true, 
    tea_id: 2, 
    user_id: 1,
)

Review.create(
    taste: 'My fav', 
    rating: 5,
    recommend: true, 
    tea_id: 3, 
    user_id: 1,
)

Review.create(
    taste: 'Not my favorite', 
    rating: 1,
    recommend: false, 
    tea_id: 4, 
    user_id: 1,
)

puts "Done seeding ✅ !"