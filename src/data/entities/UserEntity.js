import crypto from 'node:crypto'

export class UserEntity {
  id
  name
  email
  rol
  password
  createdAt

  constructor ({ name, email, rol, password }) {
    this.id = crypto.randomUUID()
    this.name = name
    this.email = email
    this.password = password
    this.rol = rol
    this.createdAt = new Date()
  }
}
