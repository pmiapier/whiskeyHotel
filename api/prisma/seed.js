const bcrypt = require('bcryptjs')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const adminPassword = bcrypt.hashSync('MiaAdmin555', 10)

const userData = [
    {
        email: 'pmiapier@proton.me',
        password: adminPassword,
        role: 'ADMIN',
        first_name: 'Mia',
        last_name: 'Pier',
    }
]

prisma.user.create({
    data: userData[0]
}).then(() => {
    console.log('Seeded the database with admin user')
}).catch((err) => {
    console.log('Error seeding the database with admin user')
    console.log(err)
}).finally(async () => {
    await prisma.$disconnect()
})