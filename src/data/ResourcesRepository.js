import fs from 'node:fs'

export function UsersRepository () {
  const readData = () => {
    try {
      const data = fs.readFileSync('./src/dataSource/resources.json')
      return JSON.parse(data)
    } catch (error) {
      console.error('Error reading file:', error)
    }
  }

  const writeData = (data) => {
    try {
      fs.writeFileSync('./src/dataSource/resources.json', JSON.stringify(data))
    } catch (error) {
      console.error('Error writing data', error)
    }
  }

  const resources = readData()

  return {
    getAll: () => {
      return resources
    },

    create: (resourceEntity) => {
      resources.push(resourceEntity)
      writeData(resources)

      return resourceEntity
    },

    getById: (id) => {
      return resources.find(resource => resource.id === id)
    },

    updateById: (resourceEntity) => {
      const index = resources.findIndex(resource => resource.id === resourceEntity.id)
      resources[index] = resourceEntity

      writeData(resources)

      return resourceEntity
    },

    deleteById: (id) => {
      const index = resources.findIndex(resource => resource.id === id)
      resources.splice(index, 1)

      writeData(resources)
      return true
    }
  }
}
