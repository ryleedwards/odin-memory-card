const TEAM_LOGO_URL = 'https://media.api-sports.io/football/teams/';

export default function getTeamLogo(teamId) {
  return `${TEAM_LOGO_URL}${teamId}.png`;
}
