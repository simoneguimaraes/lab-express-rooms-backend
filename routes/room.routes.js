const express = require("express");

const router = express.Router();

const RoomModel = require("../models/Room.Model");

//create new rooms
//edit and delete the rooms
//see the list of the rooms

//POST - Criar produto ---> C

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
