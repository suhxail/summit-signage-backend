const express = require('express');
const templateSchema = require('../Models/templateSchema');

const templateController = {
    addTemplate: (req, res) => {
        const newSchedule = new templateSchema({

            content: req.body.content,

        });
        newSchedule.save()
            .then((result) => {
                res.status(201).json({ message: 'Template added successfully', data: result });
                console.log(result);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json({ message: 'Error adding Template' });
            });
    },
    getTemplate: async (req, res) => {
        try {
            const data = await templateSchema.find();
            res.status(200).json({ message: 'Template fetched successfully', data });
        } catch (err) {
            res.status(500).json({ message: 'Error fetching Template', error: err });
        }
    },

}

module.exports = templateController;