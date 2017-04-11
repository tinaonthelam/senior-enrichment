const router = require('express').Router();
module.exports = router;

const Campus = require('../../db/models/campus');

router.get('/', function(req, res, next) {
  Campus.findAll()
  .then(foundCampuses => res.send(foundCampuses))
  .catch(next);
});

router.param('campusId', function(req, res, next, id) {
  Campus.findById(id)
  .then(function(campus) {
    if (!campus) {
      const err = new Error('Campus Not Found');
      err.status = 404;
      throw err;
    }
    req.campus = campus;
    next();
  })
  .catch(next);
});

router.get('/:campusId', function(req, res, next) {
  res.send(req.campus);
});

router.post('/', function (req, res, next) {
  Campus.create(req.body)
  .then(res.status(201).send.bind(res))
  .catch(next);
});

router.put('/:campusId', function (req, res, next) {
  req.campus.update(req.body)
  .then(updatedCampus => res.send(updatedCampus))
  .catch(next);
});

router.delete('/:campusId', function (req, res, next) {
  req.campus.destroy()
  .then(res.status(204).send.bind(res))
  .catch(next);
});
