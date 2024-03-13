const express = require('express');
const scheduleSchema = require('../Models/scheduleSchema');

const scheduleController = {
  addSchedule: (req, res) => {
    const newSchedule = new scheduleSchema({
      schedulename: req.body.schedulename,
      contenttype: req.body.contenttype,
      startingdate: req.body.startingdate,
      endingdate: req.body.endingdate
    });
    newSchedule.save()
      .then((result) => {
        res.status(201).json({ message: 'Schedule added successfully', data: result });
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ message: 'Error adding schedule' });
      });
  },

  getSchedule: async (req, res) => {
    try {
      const data = await scheduleSchema.find();
      res.status(200).json({ message: 'Schedule fetched successfully', data: data });
    } catch (err) {
      res.status(500).json({ message: 'Error fetching schedule', error: err });
    }
  },

  updateSchedule: async (req, res) => {
    const id = req.params.id;
    try {
      const updateSchedule = await scheduleSchema.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: 'Schedule updated successfully', data: updateSchedule });
      console.log(updateSchedule);
    } catch (err) {
      res.status(500).json({ message: 'Error updating schedule', error: err });
    }
  },

  particularSchedule: async (req, res) => {
    const id = req.params.id;

    try {
      const data = await scheduleSchema.findById(id);
      res.status(200).json({ message: 'Schedule found successfully', data: data });
    } catch (err) {
      res.status(500).json({ message: 'Error finding schedule', error: err });
    }
  },

  deleteSchedule: async (req, res) => {
    const id = req.params.id;
    try {
      const delschedule = await scheduleSchema.findByIdAndDelete(id);
      res.status(200).json({ message: 'Schedule deleted successfully', data: delschedule });
      console.log('Deleted Successfully');
    } catch (err) {
      res.status(500).json({ message: 'Error deleting schedule', error: err });
    }
  }
};

module.exports = scheduleController;
