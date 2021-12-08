const express = require("express");
const router = require("express").Router();
const bcrypt = require("bcryptjs");

const RoomModel = require("../models/Room.Model");

const generateToken = require("../config/jwt.config");
const isAuthenticated = require("../middlewares/isAuthenticated");

const salt_rounds = 10;

//create new rooms
//edit and delete the rooms
//see the list of the rooms

//POST - Criar quarto ---> C
router.post("/room", (req, res) => {
  RoomModel.create(req.body)
    .then((result) => res.status(201).json(result))
    .catch((err) => console.log(err));
});

//GET - Ler o banco de dados ---> R

router.get("/room", (req, res) => {
  RoomModel.find()
    .then((result) => res.status(200).json(result))
    .catch((err) => console.log(err));
});

//UPDATE - Trocar produto ---> U
//put - troca o objeto inteiro
//patch - troca um item em específico

router.patch("/room/:id", (req, res) => {
  RoomModel.findOneAndUpdate(
    { _id: req.params.id },
    { $set: req.body },
    { new: true, runValidators: true }
  )
    .then((result) => res.status(200).json(result))
    .catch((err) => console.log(err));
});

//DELETE - Deletar produto ---> D

router.delete("/room/:id", (req, res) => {
  RoomModel.deleteOne({ _id: req.params.id })
    .then((result) => res.status(200).json({}))
    .catch((err) => console.log(err));
});

module.exports = router;
