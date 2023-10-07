import { useCallback, useEffect, useState } from 'react';
import getLeagueTeams from './services/getLeagueTeamsService';
import clearLocalLeagueData from './services/clearLocalLeagueData';
import Board from './components/Board';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

function App() {
  // TODO dropdown constant for available leagues
  // const AVAILABLE_LEAGUES = [{ value: '39', label: 'Premier League (UK)' }];

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
      <Board leagueData={leagueData} />
    </>
  );
}

export default App;
