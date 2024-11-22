import express from 'express';
import { getPokemons, getPokemon } from '../controllers/pokedexController.js';
const router = express.Router();

//Get all pokemons
router.get('/', getPokemons);

//Get single pokemon
router.get('/:id', getPokemon);

export default router;