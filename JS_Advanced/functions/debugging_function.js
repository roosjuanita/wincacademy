'use strict';

const fs = require('fs');

let rawdata = fs.readFileSync('got_episodes_tvmaze.json');
let episodes = JSON.parse(rawdata).episodes_tvmaze;

// We want to know which season had the longest episodes and
// which one the shortest.


const divideBySeason = episodes => {
  const perSeason = {};
  episodes.forEach(episode => {
    const season = episode.season;
    if (!perSeason[season]) {
      perSeason[season] = [];
    }
    perSeason[season].push(episode);
  });
  return perSeason;
};

// We can actually calculate the average episode runtime in one go.
// But for this example we've split it up into multiple functions.

const getSeasonRuntime = season => {
  let total = 0;
  for (const episode of season) {
    total += episode.runtime;
  }
  return total;
};

const getNumberOfEpisodes = season => season.length;

const getAverageEpisodeRuntime = season => {
  const seasonRuntime = getSeasonRuntime(season);
  const numberOfEpisodes = getNumberOfEpisodes(season);
  console.log('numberOfEpisodes:', numberOfEpisodes);
  console.log('seasonRuntime:', seasonRuntime);
  return seasonRuntime / numberOfEpisodes;
};

// ▶️ START calling the functions we made above.
// Make list of episodes per season.
const dividedBySeason = divideBySeason(episodes);

// Loop over each season to get the average episode run time.
const averageEpisodeRuntimes = seasons => {

  for (const season of seasons) {
    const averageEpisodeRuntime = getAverageEpisodeRuntime(season);
    console.log("Season: " + season[0].season);
    console.log(`Average runtime: ${averageEpisodeRuntime} \n`);
  };
};




// Run the function with argument
averageEpisodeRuntimes(Object.values(dividedBySeason));