import {useState} from "react";
const API_KEY = "vcR+9BJYApOrua4rgpJJ75aEHQaZUtRyjI8k5Ynya5w5iZcCDCgS0mVu8w/s0CcF";

async function getPlayerStats(season) {
  const url = `https://api.collegebasketballdata.com/stats/player/season?season=${season}`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status}`);
  }

  const data = await response.json();
  return data;
}

function useGetPlayerStats(){
  const [playerStats, setPlayerStats] = useState();
  
}