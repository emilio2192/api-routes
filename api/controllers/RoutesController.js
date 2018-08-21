'use strict';

exports.optimized = function(req, res) {
    var geolib = require('../../node_modules/geolib');
    /* Task.find({}, function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    }); */
    var data = req.body.data;
    var points = data.points;
    var arrPoints =[];
    points.forEach(element => {
         arrPoints.push({latitude:element.lat, longitude:element.lng});
    });

    console.log(arrPoints);
    //                                      punto principal que seria punto de partida, arreglo de puntos
    var arrSorted = geolib.orderByDistance({latitude:14.5944872,longitude:-90.5197657},arrPoints);
    
    console.log('-----------------------------');
    console.log(arrSorted);

    for(var i = 0; i < arrPoints.length; i++){
        var temp,key;
        key = parseInt(arrSorted[i].key);
        if( key != i){
            temp = arrPoints[key];
            arrPoints[key] = arrPoints[i];
            arrPoints[i] = temp;
        }
    }
    console.log(arrPoints);


    res.json({status:"success"});
  };