const express = require("express");
const app = express();
const port = 3000;
const Thermostat = require("./thermostat");
const thermostat = new Thermostat();

app.get("/temperature", (req, res) => {
  res.send(`${thermostat.getTemperature()}`);
});

app.post("/up", (req, res) => {
  thermostat.up();
  res.send(`${thermostat.getTemperature()}`);
});

app.post("/down", (req, res) => {
  thermostat.down();
  res.send(`${thermostat.getTemperature()}`);
});

app.delete("/temperature", (req, res) => {
  thermostat.reset();
  res.send(`${thermostat.getTemperature()}`);
});

console.log(`Server listening on localhost:${port}`);
app.listen(port);
