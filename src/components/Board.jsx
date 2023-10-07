import { useEffect, useState } from 'react';
import TeamButton from './TeamButton';

export default function Board({ leagueData }) {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    if (leagueData !== undefined) {
      console.log(leagueData);
      setTeams(
        leagueData.map((team) => {
          return {
            id: team.team.id,
            name: team.team.name,
            logoUrl: team.team.logo,
          };
        })
      );
    }
  }, [leagueData]);

  return (
    <div className='board'>
      {teams.map((team) => {
        return <TeamButton key={team.id} team={team} />;
      })}
    </div>
  );
}
