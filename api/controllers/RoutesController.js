'use strict';
exports.optimized = function(req, res) {
    /* Task.find({}, function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    }); */
    var data = req.body.data;
    res.json(data.route);
  };