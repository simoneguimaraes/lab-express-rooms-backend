const express = require("express");

const connectDB = require("./config/config");

const app = express();

app.use(express.json());

const roomRouter = require("./routes/room.routes");

const API_VERSION = 1;
app.use(`/api/v${API_VERSION}`, roomRouter);

connectDB
  .then(() =>
    app.listen(4000, () => console.log(`Servidor conectado com sucesso.`))
  )
  .catch((err) => {
    console.log(err);
    process.exit(5);
  });


