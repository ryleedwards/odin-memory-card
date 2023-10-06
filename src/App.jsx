import { useState } from 'react';
import getLeagueTeams from './services/getLeagueTeamsService';
import clearLocalLeagueData from './services/clearLocalLeagueData';

function App() {
  const [leagueData, setLeagueData] = useState();

  async function handleRetrieveDataClick() {
    const data = await getLeagueTeams();
    setLeagueData(data.response);
  }

  return (
    <div>
      <button onClick={handleRetrieveDataClick}>Retrieve Data</button>
      <button onClick={clearLocalLeagueData}>Clear League Data</button>
    </div>
  );
}

export default App;
