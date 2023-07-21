import express from "express";
import dotenv from "dotenv";
dotenv.config();
import AllPokemon from "./data/PokemonList.js";
const port = process.env.PORT || 5000;
const app = express();

// Middleware for handling CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/", (req, res) => {
  res.send("Api is smashing......");
});

// Route for getting a single product by ID
app.get("/api/pokemon/:id", (req, res) => {
  const pokemonId = parseInt(req.params.id); // Convert the string ID to a number
  console.log("Received pokemonId:", pokemonId);

  const pokemon = AllPokemon.find((p) => p.id === pokemonId);
  console.log("Found Pokemon:", pokemon);

  if (pokemon) {
    res.json(pokemon);
  } else {
    console.log("Pokemon not found!");
    res.status(404).json({ message: "pokemon not found" });
  }
});

// Route for getting all AllPokemon
app.get("/api/pokemon", (req, res) => {
  res.json(AllPokemon);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// import express from "express";
// import AllPokemon from "./data/PokemonList.js";
// const port = 5000;
// const app = express();

// app.get("/", (req, res) => {
//   res.send("ill be the pokemon master");
// });

// app.get("/api/pokemonlist", (req, res) => {
//   res.json(AllPokemon);
// });

// app.get("/api/pokemonlist/:id", (res, req) => {
//   const pokemon = AllPokemon.find((p) => p.id === req.params.id);
//   res.json(pokemon);
// });

// app.listen(port, () => console.log(`Pokeserver on ${port}`));
