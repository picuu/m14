import { UsersRepository } from '../data/UsersRepository.js'
import { UserEntity } from '../data/entities/UserEntity.js'

import { InvalidEmailError } from '../error/InvalidEmailError.js'
import { UserNotFoundError } from '../error/UserNotFoundError.js'

export function UsersService () {
  const usersRepository = UsersRepository()

  return {
    getAll: () => {
      return usersRepository.getAll()
    },

    create: (userRequest) => {
      const isEmailAlreadyInUse = usersRepository.getByEmail(userRequest.email)
      if (isEmailAlreadyInUse) throw new InvalidEmailError('Email already in use')

      const userEntity = new UserEntity(userRequest)
      const createdUser = usersRepository.create(userEntity)

      return createdUser
    },

    getById: (id) => {
      const user = usersRepository.getById(id)
      if (!user) throw new UserNotFoundError(`User with id "${id}" not found`)

      return user
    },

    updateById: (id, userRequest) => {
      const user = usersRepository.getById(id)
      if (!user) throw new UserNotFoundError(`User with id "${id}" not found`)

      const userEntity = new UserEntity({ ...user, ...userRequest })
      userEntity.id = user.id
      userEntity.createdAt = user.createdAt

      const updatedUser = usersRepository.updateById(userEntity)
      return updatedUser
    },

    deleteById: (id) => {
      const user = usersRepository.getById(id)
      if (!user) throw new UserNotFoundError(`User with id "${id}" not found`)

      return usersRepository.deleteById(id)
    }
  }
}
