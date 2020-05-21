const express = require('express');

const Teams = require('./teams-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Teams.find()
    .then(teams => {
        res.json(teams)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({
            message: 'Failed to get list ofteams'
        });
    });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    Teams.findById(id)
    .then(team => {
        if(team) {
            res.json(team);
        } else {
            res.status(404).json({
                message: 'Could not find team with that id'
            });
        }
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({
            message: 'Failed to get that team'
        })
    })
});

router.post('/', (req, res) => {
    Teams.add(req.body)
    .then(team => {
        res.status(201).json(team);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({
            message: 'Failed to create that team'
        });
    });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    Teams.remove(id)
    .then(deletedTeam => {
        if (deletedTeam) {
            res.json({
                message: 'Team has been deleted', deletedTeam
            });
        } else {
            res.status(404).json({
                message: 'Could not find the team with that id'
            });
        }
    })
    .catch(error => {
        res.status(500).json({
            message: 'Failed to delete team'
        });
    })
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    Teams.findById(id)
    .then(team => {
        if (team){
            Teams.edit(changes, id)
            .then(updatedTeam => {
                res.json(updatedTeam);
            });
        } else {
            res.status(404).json({
                message: 'Could not find team with given id'
            });
        }
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({
            message: 'Failed to delete the team'
        })
    })
});

module.exports = router;