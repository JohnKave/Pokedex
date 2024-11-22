let pokedex = [
    {
      id: 1,
      name: "Bulbasaur",
      type: ["Grass", "Poison"],
      stats: {
        HP: 45,
        Attack: 49,
        Defense: 49,
        SpecialAttack: 65,
        SpecialDefense: 65,
        Speed: 45
      },
      DescriptionV1: "A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon.",
      DescriptionV2: "For some time after its birth, it grows by gaining nourishment from the seed on its back.",
      Weaknesses: ["Fire", "Flying", "Ice", "Psychic"]
    },
    {
      id: 2,
      name: "Ivysaur",
      type: ["Grass", "Poison"],
      stats: {
        HP: 60,
        Attack: 62,
        Defense: 63,
        SpecialAttack: 80,
        SpecialDefense: 80,
        Speed: 60
      },
      DescriptionV1: "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.",
      DescriptionV2: "The bulb on its back grows by drawing energy. It gives off an aroma when it is ready to bloom.",
      Weaknesses: ["Fire", "Flying", "Ice", "Psychic"]
    },
    {
      id: 3,
      name: "Venusaur",
      type: ["Grass", "Poison"],
      stats: {
        HP: 80,
        Attack: 82,
        Defense: 83,
        SpecialAttack: 100,
        SpecialDefense: 100,
        Speed: 80
      },
      DescriptionV1: "The plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.",
      DescriptionV2: "After a rainy day, the flower on its back smells stronger. The scent attracts other Pokémon.",
      Weaknesses: ["Fire", "Flying", "Ice", "Psychic"]
    },
    {
      id: 4,
      name: "Charmander",
      type: ["Fire"],
      stats: {
        HP: 39,
        Attack: 52,
        Defense: 43,
        SpecialAttack: 60,
        SpecialDefense: 50,
        Speed: 65
      },
      DescriptionV1: "Obviously prefers hot places. When it rains, steam is said to spout from the tip of its tail.",
      DescriptionV2: "The flame that burns at the tip of its tail is an indication of its emotions.",
      Weaknesses: ["Water", "Ground", "Rock"]
    },
    {
      id: 5,
      name: "Charmeleon",
      type: ["Fire"],
      stats: {
        HP: 58,
        Attack: 64,
        Defense: 58,
        SpecialAttack: 80,
        SpecialDefense: 65,
        Speed: 80
      },
      DescriptionV1: "When it swings its burning tail, it elevates the temperature to unbearably high levels.",
      DescriptionV2: "In the rocky mountains where Charmeleon live, their fiery tails shine at night like stars.",
      Weaknesses: ["Water", "Ground", "Rock"]
    },
    {
      id: 6,
      name: "Charizard",
      type: ["Fire", "Flying"],
      stats: {
        HP: 78,
        Attack: 84,
        Defense: 78,
        SpecialAttack: 109,
        SpecialDefense: 85,
        Speed: 100
      },
      DescriptionV1: "Spits fire that is hot enough to melt boulders. Known to cause forest fires unintentionally.",
      DescriptionV2: "Its wings can carry it close to an altitude of 4,600 feet. It blows out fire at very high temperatures.",
      Weaknesses: ["Water", "Electric", "Rock"]
    },
    {
      id: 7,
      name: "Squirtle",
      type: ["Water"],
      stats: {
        HP: 44,
        Attack: 48,
        Defense: 65,
        SpecialAttack: 50,
        SpecialDefense: 64,
        Speed: 43
      },
      DescriptionV1: "After birth, its back swells and hardens into a shell. It powerfully sprays foam from its mouth.",
      DescriptionV2: "Shoots water at prey while in the water. Withdraws into its shell when in danger.",
      Weaknesses: ["Electric", "Grass"]
    },
    {
      id: 8,
      name: "Wartortle",
      type: ["Water"],
      stats: {
        HP: 59,
        Attack: 63,
        Defense: 80,
        SpecialAttack: 65,
        SpecialDefense: 80,
        Speed: 58
      },
      DescriptionV1: "Often hides in water to stalk unwary prey. For swimming fast, it moves its ears to maintain balance.",
      DescriptionV2: "It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.",
      Weaknesses: ["Electric", "Grass"]
    },
    {
      id: 9,
      name: "Blastoise",
      type: ["Water"],
      stats: {
        HP: 79,
        Attack: 83,
        Defense: 100,
        SpecialAttack: 85,
        SpecialDefense: 105,
        Speed: 78
      },
      DescriptionV1: "A brutal Pokémon with pressurized water jets on its shell. They are used for high-speed tackles.",
      DescriptionV2: "It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.",
      Weaknesses: ["Electric", "Grass"]
    },
    {
      id: 10,
      name: "Caterpie",
      type: ["Bug"],
      stats: {
        HP: 45,
        Attack: 30,
        Defense: 35,
        SpecialAttack: 20,
        SpecialDefense: 20,
        Speed: 45
      },
      DescriptionV1: "For protection, it releases a horrible stench from the antennae on its head to drive away enemies.",
      DescriptionV2: "Its short feet are tipped with suction pads that enable it to tirelessly climb slopes and walls.",
      Weaknesses: ["Fire", "Flying", "Rock"]
    }
  ];



//@desc Get all pokemons
//@route GET /api/pokedex
export const getPokemons = (req, res, next) => {
    const limit = parseInt(req.query.limit); // Extract limit from query params

    if (!isNaN(limit) && limit > 0) {
        // Return the first `limit` Pokémon
        return res.status(200).json(pokedex.slice(0, limit));
    }

    // Return all Pokémon if no valid limit is provided
    res.status(200).json(pokedex);
};

//@desc Get one pokemon
//@route GET /api/pokedex/:id
export const getPokemon = (req, res, next) => {
    const id = parseInt(req.params.id);
    const pokemon = pokedex.find((pokemon) => pokemon.id === id);

    if(!pokemon) {
        const error = new Error(`Pokemon with an id of ${id} was not found!`);
        error.status = 404;
        return next(error);
    }
    res.status(200).json(pokemon);
};
