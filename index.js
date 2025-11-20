const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

let data = [
  {
    id: "1",
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: "2",
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: "3",
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: "4",
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.get("/api/persons", (req, res) => {
  res.json(data);
});

app.get("/api/info", (req, res) => {
  const len = data.length;
  const date = new Date().toString();
  console.log(date);
  res.send(`Phonebook has info of ${len}
      ${date}
    `);
});

const port = 3500;
app.listen(port);

console.log(`app is running on http://localhost:${port}`);
