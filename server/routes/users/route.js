const express = require('express');
const router = express.Router();

const {modelUser, UID} = require('../../utils');

router.post("/", (req, res, next) => {
    console.log(req.body);
    const {name, age} = req.body;
    const user = new modelUser({name, age});
    user.save().then(user => {
        res.json({user});
    });
});

router.put("/:id", (req, res, next) => {
    const uid = req.params.id;
    const {name, age} = req.body;
    modelUser.update({$set: {name: name, age: age}}).where({_id: uid}).update().then(({n, ok}) => {
        res.json({status: ok, edited: n});
    });
});

router.get("/:id", (req, res, next) => {
    const uid = req.params.id;
    if (uid) {
        modelUser.find({_id: uid}).then(users => {
            res.json({users});
        });
    } else {
        modelUser.find({}).then(users => {
            res.json({users});
        });
    }
});

router.delete("/:id", (req, res, next) => {
    const uid = req.params.id;
    if (uid) {
        modelUser.remove({_id: uid}).then(({n, ok}) => {
            res.json({status: ok, deleted: n});
        });
    } else {
        modelUser.remove({}).then(({n, ok}) => {
            res.json({status: ok, deleted: n});
        });
    }
});

module.exports = router;