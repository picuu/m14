import fs from 'node:fs'

export function UsersRepository () {
  const readData = () => {
    try {
      const data = fs.readFileSync('./src/dataSource/users.json')
      return JSON.parse(data)
    } catch (error) {
      console.error('Error reading file:', error)
    }
  }

  const writeData = (data) => {
    try {
      fs.writeFileSync('./src/dataSource/users.json', JSON.stringify(data))
    } catch (error) {
      console.error('Error writing data', error)
    }
  }

  const users = readData()

  return {
    getAll: () => {
      return users
    },

    create: (userEntity) => {
      users.push(userEntity)
      writeData(users)

      return userEntity
    },

    getById: (id) => {
      return users.find(user => user.id === id)
    },

    getByEmail: (email) => {
      return users.find(user => user.email === email)
    },

    updateById: (userEntity) => {
      const index = users.findIndex(user => user.id === userEntity.id)
      users[index] = userEntity

      writeData(users)

      return userEntity
    },

    deleteById: (id) => {
      const index = users.findIndex(user => user.id === id)
      users.splice(index, 1)

      writeData(users)
      return true
    }
  }
}
