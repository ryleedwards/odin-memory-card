export default async function getLeagueTeams(leagueId = 39, season = 2023) {
  // defaults to Premier League (39) and 2023 season unless
  //   otherwise stated by function call
  // check if local storage already has teams stored
  // if yes, return parsed JSON of that dataset

  if (window.localStorage !== undefined) {
    const data = window.localStorage.getItem('leagueData');
    if (data !== null) {
      console.log('Successfully retrieved data from local storage');
      return JSON.parse(data);
    }
  }

  // if no, fetch from API-Football

  const url = `https://api-football-v1.p.rapidapi.com/v3/teams?league=${leagueId}&season=${season}`;

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': `${import.meta.env.VITE_API_FOOTBALL_KEY}`,
      'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
    },
  };
  try {
    console.log('Requesting data from API-Football...');
    const response = await fetch(url, options);
    const result = await response.json();
    localStorage.setItem('leagueData', JSON.stringify(result));
    console.log('Successfully fetched data and stored in local storage');
    return result;
  } catch (err) {
    console.log(err);
  }
}
