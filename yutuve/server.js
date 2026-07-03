server.js
const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// carpeta pública
app.use(express.static("public"));

// carpeta de videos
app.use("/videos", express.static("uploads"));

// configuración de subida
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

// página principal
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// subir video
app.post("/upload", upload.single("video"), (req, res) => {
  res.json({
    message: "Video subido correctamente",
    file: req.file.filename
  });
});

// ver video
app.get("/watch/:id", (req, res) => {
  res.sendFile(__dirname + "/views/watch.html");
});

app.listen(PORT, () => {
  console.log("YUTUVE corriendo en puerto " + PORT);
});
