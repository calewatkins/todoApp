const router = require('express').Router();
const apiController = require('../controllers/apiController');

router.get('/todos/:username', apiController.findByUser);
router.get('/todo/:id', apiController.findById);
router.post('/todo/create', apiController.create);
router.post('/todo/update', apiController.update);
router.delete('/todo', apiController.delete);

module.exports = router;