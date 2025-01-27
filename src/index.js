import express from 'express'
import bodyParser from 'body-parser'
import { UsersController } from './controller/UsersController.js'

export const app = express()

app.use(bodyParser.json())

UsersController(app)

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
