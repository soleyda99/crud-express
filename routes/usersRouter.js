const express = require('express');
const UsersService = require('../services/user.service');
const validatorHandler = require('../middlewares/validator.handler');
const {
  createUserSchema,
  updateUserSchema,
  getUserSchema,
} = require('../schemas/user.schema');

const router = express.Router();
const service = new UsersService();

router.get('/', async (req, res) => {
  const users = await service.find();
  res.status(200).json(users);
});

router.get(
  '/:id',
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await service.findOne(id);
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/',
  validatorHandler(createUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const user = await service.create(body);
      res.status(200).json({ user, message: 'Creado exitosamente' });
    } catch (error) {
      next(error);
    }
  }
);

router.put(
  '/:id',
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const { id } = req.params;
      const user = await service.update(id, body);
      res.status(200).json({ user, message: 'Actualizado exitosamente' });
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  '/:id',
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(200).json({ response: `Usuario eliminado correctamente` });
    } catch (error) {
      next(error);
    }
  }
);
module.exports = router;
