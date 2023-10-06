export default function clearLocalLeagueData() {
  window.localStorage.removeItem('leagueData');
  if (!window.localStorage.getItem('leagueData')) {
    console.log('Cleared leagueData from local storage');
  }
}
