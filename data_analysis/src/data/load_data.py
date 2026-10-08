from sportsdataverse.mbb import (
    load_mbb_rosters,
    load_mbb_player_season_stats,
    load_mbb_team_season_stats,
    load_mbb_player_value,
    load_mbb_ratings,
)

seasons = [2023, 2024, 2025, 2026]

datasets = {
    "rosters": load_mbb_rosters,
    "player_stats": load_mbb_player_season_stats,
    "team_stats": load_mbb_team_season_stats,
    "player_value": load_mbb_player_value,
    "ratings": load_mbb_ratings,
}

for name, loader in datasets.items():
    try:
        df = loader(seasons=seasons)
        df.write_parquet(f"{name}.parquet")
        print(f"{name}: {df.shape}")
    except Exception as e:
        print(f"Failed to load {name}: {e}")
