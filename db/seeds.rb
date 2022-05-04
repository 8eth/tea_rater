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