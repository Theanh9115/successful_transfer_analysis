import useGetPlayerStats from "./UseGetPlayerStats";

function PlayerPage() {
  const playersData = useGetPlayerStats(2026);

  if (!playersData) {
    return <p>Loading players...</p>;
  }

  return (
    <div>
      {playersData.map((player) => (
        <p key={`${player.athleteId}-${player.teamId}-${player.season}`}>
          {player.name} - {player.team} - {player.position}
        </p>
      ))}
    </div>
  );
}

export default PlayerPage;
