import requests
import os
from dotenv import load_dotenv

load_dotenv()

def get_players_stats(season):
    api_key = os.getenv("COLLEGE_BASKETBALL_API_KEY")

    headers = {
        "Authorization": f"Bearer {api_key}"
    }
    r = requests.get("https://api.collegebasketballdata.com/stats/player/season", params={"season": f"{season}"}, headers=headers, timeout=30)

    r.raise_for_status()

    # Json array is returned as list and json obj is returned as dictionary
    # -> Return a list of players
    return r.json()



    
