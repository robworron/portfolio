import os
import pandas as pd
from mappings import (NHL_ABBREVIATION_MAP, NHL_NAMES_MAP,
                      NHL_NAMES_MAP_REVERSED)

TEAMS_INPUT_DIRECTORY = 'data/raw/teams_data/'
FIVE_ON_FIVE_OUTPUT_DIRECTORY = 'data/clean/teams_data/5on5/'
ALL_OUTPUT_DIRECTORY = 'data/clean/teams_data/all/'

STANDINGS_INPUT_DIRECTORY = 'data/raw/standings_data/'
STANDINGS_OUTPUT_DIRECTORY = 'data/clean/standings_data/'

def abbreviate_team_names(name: str) -> str:
    if name in NHL_NAMES_MAP_REVERSED:
        return NHL_NAMES_MAP_REVERSED[name]
    return name

def rename_file(old_path: str, new_path: str) -> None:
    os.rename(old_path, new_path)

def sanitize_moneypuck_data(input_file: str, all_output_file: str, five_on_five_output_file: str):
    moneypuckFile = pd.read_csv(input_file)
    moneypuckFile["team"] = moneypuckFile["team"].replace(NHL_ABBREVIATION_MAP)
    moneypuckFile["name"] = moneypuckFile["name"].replace(NHL_NAMES_MAP)
    moneypuckFile.drop(columns=["team.1", "position"], inplace=True, errors='ignore')
    moneypuckFile.rename(columns={"games_played": "gamesPlayed", "penalitiesFor": "penaltiesFor", "penalitiesAgainst": "penaltiesAgainst"}, inplace=True)
    five_on_five = moneypuckFile[moneypuckFile["situation"] == "5on5"]
    five_on_five.to_csv(five_on_five_output_file, index=False)
    all = moneypuckFile[moneypuckFile["situation"] == "all"]
    all.to_csv(all_output_file, index=False)
    
def sanitize_nhl_data(input_file: str, output_file: str, season: int, input_xlsx: bool = True, output_xlsx: bool = True) -> None:
    if input_xlsx:
        nhlFile = pd.read_excel(input_file)
    else:
        nhlFile = pd.read_csv(input_file)
    nhlFile.drop("Season", axis=1, inplace=True, errors='ignore')
    nhlFile.insert(1, "season", season)
    nhlFile.drop(columns="T", inplace=True, errors='ignore')
    nhlFile.rename(columns={"Team": "name", "Season": "season", "GP": "gamesPlayed", "W": "wins", "L": "losses", "OT": "overtimeLosses", "P": "points", "P%": "pointsPercentage", "RW": "regulationWins", "ROW": "regulationOvertimeWins", "S/O Win": "shootoutWins", "GF": "goalsFor", "GA": "goalsAgainst", "GF/GP": "goalsForPerGame", "GA/GP": "goalsAgainstPerGame", "SO": "shutouts", "PP%": "powerPlayPercentage", "PK%": "penaltyKillPercentage", "Net PP%": "netPowerPlayPercentage", "Net PK%": "netPenaltyKillPercentage", "Shots/GP": "shotsPerGame", "SA/GP": "shotsAgainstPerGame", "FOW%": "faceoffWinsPercentage"}, inplace=True)
    nhlFile.insert(0, "team", nhlFile["name"].apply(abbreviate_team_names))
    nhlFile.drop(columns="Unnamed: 0", inplace=True, errors='ignore')
    if output_xlsx:
        nhlFile.to_excel(output_file, index=False)
    else:
        nhlFile.to_csv(output_file, index=False)

def sanitize_all_moneypuck_data() -> None:
    for year in range(2010, 2026):
        sanitize_moneypuck_data(f'{TEAMS_INPUT_DIRECTORY}{year}.csv', f'{ALL_OUTPUT_DIRECTORY}all_{year}.csv', f'{FIVE_ON_FIVE_OUTPUT_DIRECTORY}5on5_{year}.csv')

def sanitize_all_nhl_data() -> None:
    for year in range(2010, 2026):
        sanitize_nhl_data(f'{STANDINGS_INPUT_DIRECTORY}{year}.xlsx', f'{STANDINGS_OUTPUT_DIRECTORY}standings_{year}.csv', year, output_xlsx=False)

def sanitize_all_data() -> None:
    sanitize_all_moneypuck_data()
    sanitize_all_nhl_data()
    
if __name__ == "__main__":
    sanitize_all_data()