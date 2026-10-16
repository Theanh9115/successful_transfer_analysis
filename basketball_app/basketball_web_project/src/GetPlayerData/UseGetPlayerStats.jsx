import { useState, useEffect } from "react";
function useGetPlayerStats(season) {
  const [playersStats, setPlayersStats] = useState();

  useEffect(() => {
    // The backend endpoint must make the upstream request with its own credential.
    const url = `/api/players/stats?season=${encodeURIComponent(season)}`;

    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error("Error while fetching");
        console.log(response);
        return response.json();
      })
      .then((data) => setPlayersStats(data))
      .catch((error) => {
        console.log(error);
      });
  }, [season]);

  return playersStats;
}

export default useGetPlayerStats;
