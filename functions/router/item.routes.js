const express = require('express')
const cors = require('cors')
import ItemController from '../controllers/item.controller'

import ItemServices from '../services/item.services';

const itemsRouter = express();
itemsRouter.use(cors())
itemsRouter.use(express.json())

const questionServices = new ItemServices

const questionController = new ItemController(questionServices)

itemsRouter.get('/items/all',(req, res) => (questionController.getAllItems(req, res)))

itemsRouter.get('/items/:id', (req, res) => (questionController.getItemById(req, res)))

itemsRouter.post('/items/create', (req, res) => (questionController.createNewItem(req, res)))

itemsRouter.patch('/items/update/:id', (req, res) => (questionController.updateItemById(req, res)))

itemsRouter.delete('/items/delete/:id', (req, res) => (questionController.deleteItemById(req, res)))

module.exports = itemsRouter