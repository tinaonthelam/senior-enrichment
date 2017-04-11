const router = require('express').Router();
module.exports = router;

const User = require('../../db/models/user');

router.get('/', function(req, res, next) {
  User.findAll()
  .then(foundUsers => res.send(foundUsers))
  .catch(next);
});

router.param('userId', function(req, res, next, id) {
  User.findById(id)
  .then(function(user) {
    if (!user) {
      res.status(404).send('User Not Found');
    } else {
      req.user = user;
      next();
    }
  })
  .catch(next);
});

router.get('/:userId', function(req, res, next) {
  res.send(req.user);
});

router.post('/', function (req, res, next) {
  User.create(req.body)
  .then(res.status(201).send.bind(res))
  .catch(next);
});

router.put('/:userId', function (req, res, next) {
  req.user.update(req.body)
  .then(updatedUser => res.send(updatedUser))
  .catch(next);
});

router.delete('/:userId', function (req, res, next) {
  req.user.destroy()
  .then(res.status(204).send.bind(res))
  .catch(next);
});
