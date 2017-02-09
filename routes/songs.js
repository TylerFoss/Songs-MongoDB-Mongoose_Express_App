var express = require('express');
var router = express.Router();
var Song = require('../models/song')

router.get('/', function(req, res) {
  Song.find( function(err, songs) {
    res.render('songs', { songs: songs })
  })
})

router.post('/', function(req, res) {
  new Song({
    title: req.body.title,
    description: req.body.description,
    updatedAt: Date.now()
  }).save( function(err, song) {
    res.redirect('/songs');
  });
});

router.get('/:id', function(req, res) {
  Song.findById(req.params.id, function(err, song) {
    res.render('song', { song: song });
  });
});

router.put('/:id', function(req, res) {
  var body = {
    title: req.body.title,
    description: req.body.description,
    updatedAt: Date.now()
  }

  Song.findByIdAndUpdate(req.params.id, { $set: body }, { new: true }, function(err, song) {
    res.redirect('/songs/' + req.params.id)
  })
});

router.delete('/:id', function(req, res) {
  Song.findById(req.params.id, function(err, song) {
    song.remove( function(err, song) {
      res.redirect('/songs');
    });
  });
})


module.exports = router;
