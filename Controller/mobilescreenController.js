const express = require('express');
const mobilescreenSchema = require('../Models/mobilescreenSchema');

const mobilescreenController = {
    addMobileScreen: (req, res) => {
        const newMobileScreen = new mobilescreenSchema({
            id: req.body.id
        })

        newMobileScreen.save()
            .then((data) => {
                res.status(201).json({ message: "mobilescreen added successfully", data });
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json({ message: "Error occured", err });

            })
    }

}

module.exports = mobilescreenController;