var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET users listing. */
router.get('/', async(req, res, next) => {
  res.json(await mongoose.model('User').find({}));
});

/* create one user. */
router.post('/', async(req, res, next) => {
  res.json(await mongoose.model('User').create(req.body));
});

/* Update one user. */
router.put('/:id', async(req, res, next) => {
  res.json(await mongoose.model('User').findByIdAndUpdate(req.params.id, req.body));
});

/* DELETE one uner. */
router.delete('/:id', async(req, res, next) => {
  res.json(await mongoose.model('User').findByIdAndRemove(req.params.id));
});

/* GET one user. */
router.get('/:id', async(req, res, next) => {
  res.json(await mongoose.model('User').findById(req.params.id));
});


module.exports = router;