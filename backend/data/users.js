import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Mia Land',
    email: 'land@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Mia Aisa',
    email: 'aisa@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
