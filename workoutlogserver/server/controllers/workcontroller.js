var router = require('express').Router();
var sequelize = require('../db');
var User = sequelize.import('../models/user');
var Workout = sequelize.import('../models/authinfo');

/*************************************
* GET ALL ITEMS FOR INDIVIDUAL USER
*************************************/
router.get('/api/log', function (req, res) {
    var userid = req.user.id;

    Workout
        .findAll({
            where: { owner: userid }
        })
        .then(
            function findAllSuccess(work) {
                res.json(work);
            },
            function findAllError(err) {
                res.send(500, err.message);
            }
        );
});

/*************************************
* POST SINGLE ITEM FOR INDIVIDUAL USER
*************************************/
router.post('/api/log', (req, res) => {
    const workoutInfo = {
      workoutDesc: req.body.workoutDesc,
      workoutDef: req.body.workoutDef,
      workoutRes: req.body.workoutRes,
      owner: owner
    }
  
      Workout.create(workoutInfo)
        .then(work => res.status(200).json(work))
        .catch(err => res.json(req.errors))
  })

/******************
* GET SINGLE ITEM FOR INDIVIDUAL USER
******************/
router.get('/:id', function(req, res) {
    var work = req.params.id;
    var userid = req.user.id;

    workoutInfo
        .findOne({
            where: { id: work, owner: userid }
        }).then(
            function findOneSuccess(work) {
                res.json(work);
            },
            function findOneError(err) {
                res.send(500, err.message);
            }
        );
});

/******************
* DELETE ITEM FOR INDIVIDUAL USER
******************/
        //1                //2
        router.delete('/api/log/:id', function(req, res) {
            var work = req.params.id; //3
            var userid = req.user.id; //4
        
            workoutInfo
                .destroy({ //5
                    where: { id: work, owner: userid } //6
                }).then(
                    function deleteLogSuccess(work){ //7
                        res.send("you removed a log");
                    },
                    function deleteLogError(err){ //8
                        res.send(500, err.message);
                    }
                );
        });

module.exports = router;