import pandas as pd

ALL_SITUATIONS_FILE = 'data/clean/teams_data/all/all_total.csv'
STANDINGS_FILE = 'data/clean/standings_data/standings_total.csv'
PROCESSED_DATA_FILE = 'data/analytics/analytics_data.csv'

def load_data(standings_file: str = STANDINGS_FILE, all_situations_file: str = ALL_SITUATIONS_FILE) -> tuple[pd.DataFrame, pd.DataFrame]:
    standings_file = pd.read_csv(standings_file)
    team_data_file = pd.read_csv(all_situations_file)
    return standings_file, team_data_file

def merge_and_trim_data(standings_file: pd.DataFrame, team_data_file: pd.DataFrame) -> pd.DataFrame:
    data = standings_file.merge(team_data_file, on=['team', 'season'], how='left')
    data = data[['team', 'season', 'name_x', 'gamesPlayed_x', 'points', 'pointsPercentage', 'goalsFor_x', 'goalsAgainst_x', 'xGoalsFor', 'xGoalsAgainst', 'corsiPercentage', 'fenwickPercentage', 'shotsOnGoalFor', 'shotsOnGoalAgainst']]
    data = data.rename(columns={'name_x': 'name', 'goalsFor_x': 'goalsFor', 'goalsAgainst_x': 'goalsAgainst', 'gamesPlayed_x': 'gamesPlayed'})
    return data

def process_data(input_data: pd.DataFrame) -> pd.DataFrame:
    data = input_data.copy()
    data.insert(data.columns.get_loc('goalsAgainst') + 1, 'goalDifferential', data['goalsFor'] - data['goalsAgainst'])
    data.insert(data.columns.get_loc('xGoalsAgainst') + 1, 'xGoalDifferential', data['xGoalsFor'] - data['xGoalsAgainst'])
    data.insert(data.columns.get_loc('pointsPercentage') + 1, 'leaguePointsPercentile', data['pointsPercentage'].rank(pct=True))
    data.insert(data.columns.get_loc('shotsOnGoalFor') + 1, 'shotsForPerGame', data['shotsOnGoalFor'] / data['gamesPlayed'])
    data.insert(data.columns.get_loc('shotsOnGoalAgainst') + 1, 'shotsAgainstPerGame', data['shotsOnGoalAgainst'] / data['gamesPlayed'])
    data.insert(data.columns.get_loc('shotsAgainstPerGame') + 1, 'shotsDifferentialPerGame', data['shotsForPerGame'] - data['shotsAgainstPerGame'])
    data['finishing'] = data['goalsFor'] / data['shotsOnGoalFor']
    data['goaltending'] = 1 - (data['goalsAgainst'] / data['shotsOnGoalAgainst'])
    return data

def save_data(data: pd.DataFrame, output_file: str = PROCESSED_DATA_FILE) -> None:
    data.to_csv(output_file, index=False)

if __name__ == "__main__":
    standings_data, team_data = load_data()
    merged_data = merge_and_trim_data(standings_data, team_data)
    processed_data = process_data(merged_data)
    save_data(processed_data)