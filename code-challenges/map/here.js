/* ------------------------------------------------------------------------------------------------
CHALLENGE 7

Use the snorlaxStats data, below, for this challenge.

Write a function named extractStats that, given an array of stats, uses map to return an array of objects containing the stat name and the total.

The total should be the sum of the effort and the baseStat.

Here is an example of a single array element: { name: 'speed', total: 35 }
------------------------------------------------------------------------------------------------ */

const snorlaxStats = {
  stats: [
    {
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/6/',
        name: 'speed'
      },
      effort: 5,
      baseStat: 30
    },
    {
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/5/',
        name: 'special-defense'
      },
      effort: 2,
      baseStat: 110
    },
    {
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/4/',
        name: 'special-attack'
      },
      effort: 9,
      baseStat: 65
    }
  ],
  name: 'snorlax',
  weight: 4600
};

const extractStats = arr => {
  return arr.map(v => {
    return {
      name: v.stat.name,
      speed: v.effort + v.baseStat
    };
  });
};

console.log(extractStats(snorlaxStats.stats));
// .toStrictEqual([{ name: 'speed', total: 35 }, { name: 'special-defense', total: 112 }, { name: 'special-attack', total: 74 }]);
