import requests
import os
from pathlib import Path
from dotenv import load_dotenv

load_dotenv(Path(__file__).resolve().parents[2] / ".env")

def get_players_stats(season):
    api_key = os.getenv("COLLEGE_BASKETBALL_API_KEY")
    if not api_key:
        raise RuntimeError("Set COLLEGE_BASKETBALL_API_KEY in data_analysis/.env or the environment")

    headers = {
        "Authorization": f"Bearer {api_key}"
    }
    r = requests.get("https://api.collegebasketballdata.com/stats/player/season", params={"season": f"{season}"}, headers=headers, timeout=30)

    r.raise_for_status()

    # Json array is returned as list and json obj is returned as dictionary
    # -> Return a list of players
    return r.json()



    
