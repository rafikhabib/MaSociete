const express = require("express");
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(express.json());
app.use(cors());
const port = 4000;
app.get("/", (req, res) => {
  res.send("Hello server ...");
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// -------------------------------------

const mongoose = require("mongoose");
// const uriCompass = "mongodb://localhost:27017/ma-societeDB"
const uriAtlas = process.env.URIATLAS;

mongoose.connect(uriAtlas).then(() => console.log("successful connexion DB"));

const Schema = mongoose.Schema;
let departSchema = new Schema(
  {
    id: Number,
    nom: String,
  },
  { versionKey: false }
);
let Depart = mongoose.model("departements", departSchema);

app.get("/departements", (req, res) => {
  Depart.find({}, (err, results) => {
    if (!err) {
      res.send(results);
    }
  });
});

app.post("/add", async (req, res) => {
  let newDepart = new Depart(req.body);
  try {
    await newDepart.save();
    res.status(200).send({
      message: `${newDepart.nom} is 
        succussffully added`,
    });
  } catch (err) {
    res.status(400).send({ error: `error adding newDepart ${err}` });
  }
});

app.put("/update/:id", async (req, res) => {
  try {
    const depart = await Depart.findByIdAndUpdate(req.params.id, req.body);
    await depart.save();
    res.status(200).send({
      message: `${depart.nom} is succussffully 
            updated`,
    });
  } catch (err) {
    res.status(400).send({ error: `error updating department ${err}` });
  }
});

app.delete("/delete/:id", async (req, res) => {
    try {
    const depart = await Depart.findByIdAndDelete(req.params.id);
    res.status(200).send({ message: `${depart.nom} is succussffully 
    deleted` });
    }
    catch (err) {
    res.status(400).send({ error: `error deleting department ${err}`
    })
    }
    });