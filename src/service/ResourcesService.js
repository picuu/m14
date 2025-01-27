import { ResourcesRepository } from '../data/ResourcesRepository.js'
import { ResourceEntity } from '../data/entities/ResourceEntity.js'

import { ResourceNotFoundError } from '../error/ResourceNotFoundError.js'

export function ResourcesService () {
  const resourcesRepository = ResourcesRepository()

  return {
    getAll: () => {
      return resourcesRepository.getAll()
    },

    create: (resourceRequest) => {
      const resourceEntity = new ResourceEntity(resourceRequest)
      const createdResource = resourcesRepository.create(resourceEntity)

      return createdResource
    },

    getById: (id) => {
      const resource = resourcesRepository.getById(id)
      if (!resource) throw new ResourceNotFoundError(`Resource with id "${id}" not found`)

      return resource
    },

    updateById: (id, resourceRequest) => {
      const resource = resourcesRepository.getById(id)
      if (!resource) throw new ResourceNotFoundError(`Resource with id "${id}" not found`)

      const resourceEntity = new ResourceEntity({ ...resource, ...resourceRequest })
      resourceEntity.id = resource.id

      const updatedResource = resourcesRepository.updateById(resourceEntity)
      return updatedResource
    },

    deleteById: (id) => {
      const resource = resourcesRepository.getById(id)
      if (!resource) throw new ResourceNotFoundError(`Resource with id "${id}" not found`)

      return resourcesRepository.deleteById(id)
    }
  }
}
