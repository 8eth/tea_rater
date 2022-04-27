puts "Clearing db..."

User.destroy_all

puts "Making Users👤..."
User.create(
    username:'beth', 
    password:'pass', 
    bio:'', 
)

puts "Done seeding✔️!"