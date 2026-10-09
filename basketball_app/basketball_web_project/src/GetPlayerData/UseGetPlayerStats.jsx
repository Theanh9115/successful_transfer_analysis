import { useState, useEffect } from "react";
// Temporary direct API call for development.
// This will be replaced with our backend API once it is ready.
const API_KEY = "";

function useGetPlayerStats(season) {
  const [playersStats, setPlayersStats] = useState();

  useEffect(() => {
    // Temporary: calling collegebasketballdata.com directly.
    // Replace this with a request to our backend API in production.
    const url = `https://api.collegebasketballdata.com/stats/player/season?season=${season}`;

    fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    })
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
