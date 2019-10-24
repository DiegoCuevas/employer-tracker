# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
admin = User.create(name: "Diego", last_name: "Cuevas", age: "22", role: "Admin", password: "1234", email: "diego@gm.co")
employe = User.create(name: "Gustavo", last_name: "Montes", age: "22", role: "Employe", password: "1234", email: "tavo@gm.co")
employe = User.create(name: "Salva", last_name: "Xalam", age: "1", role: "Employe", password: "1234", email: "salva@gm.co")
