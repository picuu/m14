export class UserRequest {
  name
  email
  rol
  password

  constructor ({ name, email, rol = null, password }) {
    this.name = name
    this.email = email
    this.password = password
    this.rol = rol
  }
}
