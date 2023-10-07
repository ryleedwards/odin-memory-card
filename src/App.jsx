import { useCallback, useEffect, useState } from 'react';
import getLeagueTeams from './services/getLeagueTeamsService';
import clearLocalLeagueData from './services/clearLocalLeagueData';
import Board from './components/Board';

function App() {
  const [leagueId, setLeagueId] = useState(39);
  const [leagueData, setLeagueData] = useState();

  const fetchLeagueData = useCallback(async () => {
    const data = await getLeagueTeams(leagueId);
    setLeagueData(data.response);
  }, [leagueId]);

  useEffect(() => {
    fetchLeagueData().catch(console.error);
  }, [fetchLeagueData]);

  return (
    <>
      <div>
        <button onClick={clearLocalLeagueData}>Clear League Data</button>
      </div>
      <Board leagueData={leagueData} />
    </>
  );
}

export default App;
