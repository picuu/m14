import { ResourceRequest } from './models/ResourceRequest.js'
import { ResourcesService } from '../service/ResourcesService.js'
import { ErrorResponse } from '../dto/ErrorResponse.js'

import { ResourceNotFoundError } from '../error/ResourceNotFoundError.js'

export function ResourcesController (app) {
  const resourcesService = ResourcesService()

  app.get('/resources', (req, res) => {
    const resources = resourcesService.getAll()
    res.send(resources)
  })

  app.post('/resources', (req, res) => {
    try {
      if (Object.keys(req.body).length === 0) return res.status(400).json(new ErrorResponse('Request body is missing'))
      if (!req.body.name) return res.status(400).json(new ErrorResponse('Required JSON is invalid'))
      if (!req.body.type) return res.status(400).json(new ErrorResponse('Required JSON is invalid'))
      if (!req.body.ubication) return res.status(400).json(new ErrorResponse('Required JSON is invalid'))
      if (!req.body.description) return res.status(400).json(new ErrorResponse('Required JSON is invalid'))
      if (!req.body.state) return res.status(400).json(new ErrorResponse('Required JSON is invalid'))
      if (!req.body.properties) return res.status(400).json(new ErrorResponse('Required JSON is invalid'))

      const resourceRequest = new ResourceRequest(req.body)
      const createdResource = resourcesService.create(resourceRequest)

      return res.status(201).json(createdResource)
    } catch (error) {
      res.status(500).json(new ErrorResponse(error.message))
    }
  })

  app.get('/resources/:id', (req, res) => {
    try {
      const id = req.params.id
      const resource = resourcesService.getById(id)

      res.json(resource)
    } catch (error) {
      if (error instanceof ResourceNotFoundError) return res.status(404).json(new ErrorResponse(error.message))
      else res.status(500).json(new ErrorResponse(error.message))
    }
  })

  app.put('/resources/:id', (req, res) => {
    try {
      console.log(req.body)
      if (Object.keys(req.body).length === 0) return res.status(400).send(new ErrorResponse('Request body is missing'))

      const id = req.params.id
      const resourceRequest = req.body

      const updatedResource = resourcesService.updateById(id, resourceRequest)
      res.status(201).json(updatedResource)
    } catch (error) {
      if (error instanceof ResourceNotFoundError) return res.status(404).json(new ErrorResponse(error.message))
      else res.status(500).json(new ErrorResponse(error.message))
    }
  })

  app.delete('resources/:id', (req, res) => {
    try {
      const id = req.params.id
      const isDeleted = resourcesService.deleteById(id)

      if (isDeleted) res.status(204).send()
      else res.status(500).json(new ErrorResponse("Resource couldn't be deleted"))
    } catch (error) {
      if (error instanceof ResourceNotFoundError) return res.status(404).json(new ErrorResponse(error.message))
      else res.status(500).json(new ErrorResponse(error.message))
    }
  })
}
