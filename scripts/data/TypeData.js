const TypeData = {
  fire: {
    name: 'fire',
    strengths: ['grass', 'bug', 'ice', 'steel', 'fire'],
    weaknesses: ['water', 'ground', 'rock']
  },

  grass: {
    name: 'grass',
    strengths: ['water', 'rock', 'ground', 'grass'],
    weaknesses: ['fire', 'flying', 'bug', 'poison', 'ice']
  },

  water: {
    name: 'water',
    strengths: ['fire', 'rock', 'ground', 'water'],
    weaknesses: ['grass', 'electric']
  },

  ice: {
    name: 'ice',
    strengths: ['dragon', 'grass', 'ground', 'flying', 'ice'],
    weaknesses: ['fire', 'fighting', 'steel', 'rock']
  },

  fighting: {
    name: 'fighting',
    strengths: ['rock', 'steel', 'ice', 'dark', 'normal'],
    weaknesses: ['psychic', 'fairy', 'flying']
  },

  ghost: {
    name: 'ghost',
    strengths: ['dark'],
    weaknesses: ['ghost', 'psychic']
  },

  dragon: {
    name: 'dragon',
    strengths: ['dragon'],
    weaknesses: ['dragon', 'ice', 'fairy']
  },

  flying: {
    name: 'flying',
    strengths: ['bug', 'grass', 'fighting'],
    weaknesses: ['electric', 'rock', 'ice']
  },

  ground: {
    name: 'ground',
    strengths: ['electric', 'fire', 'rock', 'steel', 'poison'],
    weaknesses: ['water', 'grass', 'ice']
  },

  poison: {
    name: 'poison',
    strengths: ['fairy', 'grass'],
    weaknesses: ['ground', 'psychic']
  },

  rock: {
    name: 'rock',
    strengths: ['fire', 'flying', 'ice', 'bug', 'normal'],
    weaknesses: ['fighting', 'ground', 'water', 'grass', 'steel']
  },

  normal: {
    name: 'normal',
    strengths: [],
    weaknesses: ['fighting']
  },

  bug: {
    name: 'bug',
    strengths: ['grass', 'dark', 'psychic'],
    weaknesses: ['flying', 'rock', 'fire']
  },

  steel: {
    name: 'steel',
    strengths: ['rock', 'ice', 'fairy'],
    weaknesses: ['fire', 'fighting', 'ground']
  },

  electric: {
    name: 'electric',
    strengths: ['water', 'flying'],
    weaknesses: ['ground']
  },

  psychic: {
    name: 'psychic',
    strengths: ['poison', 'fighting'],
    weaknesses: ['bug', 'ghost', 'dark']
  },

  dark: {
    name: 'dark',
    strengths: ['psychic', 'ghost'],
    weaknesses: ['fighting', 'bug']
  },

  fairy: {
    name: 'fairy',
    strengths: ['steel', 'poison'],
    weaknesses: ['dragon', 'dark', 'fighting']
  }
};
