import { UserRequest } from './models/UserRequest.js'
import { UsersService } from '../service/UsersService.js'
import { ErrorResponse } from '../dto/ErrorResponse.js'
import { InvalidEmailError } from '../error/InvalidEmailError.js'
import { UserNotFoundError } from '../error/UserNotFoundError.js'

export function UsersController (app) {
  const usersService = UsersService()

  app.get('/users', (req, res) => {
    const users = usersService.getAll()
    res.send(users)
  })

  app.post('/users', (req, res) => {
    try {
      if (Object.keys(req.body).length === 0) return res.status(400).json(new ErrorResponse('Request body is missing'))
      if (!req.body.name) return res.status(400).json(new ErrorResponse('Name is required'))
      if (!req.body.email) return res.status(400).json(new ErrorResponse('Email is required'))
      if (!req.body.password) return res.status(400).json(new ErrorResponse('Password is required'))

      const userRequest = new UserRequest(req.body)
      const createdUser = usersService.create(userRequest)

      return res.status(201).json(createdUser)
    } catch (error) {
      if (error instanceof InvalidEmailError) return res.status(422).json(new ErrorResponse(error.message))
      else res.status(500).json(new ErrorResponse(error.message))
    }
  })

  app.get('/users/:id', (req, res) => {
    try {
      const id = req.params.id
      const user = usersService.getById(id)

      res.json(user)
    } catch (error) {
      if (error instanceof UserNotFoundError) return res.status(404).json(new ErrorResponse(error.message))
      else res.status(500).json(new ErrorResponse(error.message))
    }
  })

  app.put('/users/:id', (req, res) => {
    try {
      console.log(req.body)
      if (Object.keys(req.body).length === 0) return res.status(400).send(new ErrorResponse('Request body is missing'))

      const id = req.params.id
      const userRequest = req.body

      const updatedUser = usersService.updateById(id, userRequest)
      res.status(201).json(updatedUser)
    } catch (error) {
      if (error instanceof InvalidEmailError) return res.status(422).json(new ErrorResponse(error.message))
      if (error instanceof UserNotFoundError) return res.status(404).json(new ErrorResponse(error.message))
      else res.status(500).json(new ErrorResponse(error.message))
    }
  })

  app.delete('users/:id', (req, res) => {
    try {
      const id = req.params.id
      const isDeleted = usersService.deleteById(id)

      if (isDeleted) res.status(204).send()
      else res.status(500).json(new ErrorResponse("User couldn't be deleted"))
    } catch (error) {
      if (error instanceof UserNotFoundError) return res.status(404).json(new ErrorResponse(error.message))
      else res.status(500).json(new ErrorResponse(error.message))
    }
  })
}
