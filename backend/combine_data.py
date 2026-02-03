import pandas as pd

FIVE_ON_FIVE_DIRECTORY = 'data/clean/teams_data/5on5/'
ALL_SITUATIONS_DIRECTORY = 'data/clean/teams_data/all/'
STANDINGS_DIRECTORY = 'data/clean/standings_data/'

def combine_standings_data() -> None:
    standings = []
    for year in range(2010, 2026):
        data = pd.read_csv(f'{STANDINGS_DIRECTORY}standings_{year}.csv')
        data['season'] = year
        standings.append(data)
    standings_data = pd.concat(standings, ignore_index=True)
    standings_data.to_csv(f'{STANDINGS_DIRECTORY}standings_total.csv', index=False)

def combine_five_on_five_data() -> None:
    teams = []
    for year in range(2010, 2026):
        data = pd.read_csv(f'{FIVE_ON_FIVE_DIRECTORY}5on5_{year}.csv')
        data['season'] = year
        teams.append(data)
    teams_data = pd.concat(teams, ignore_index=True)
    teams_data.to_csv(f'{FIVE_ON_FIVE_DIRECTORY}5on5_total.csv', index=False)

def combine_all_situations_data() -> None:
    teams = []
    for year in range(2010, 2026):
        data = pd.read_csv(f'{ALL_SITUATIONS_DIRECTORY}all_{year}.csv')
        data['season'] = year
        teams.append(data)
    teams_data = pd.concat(teams, ignore_index=True)
    teams_data.to_csv(f'{ALL_SITUATIONS_DIRECTORY}all_total.csv', index=False)

def combine_all_data() -> None:
    combine_standings_data()
    combine_five_on_five_data()
    combine_all_situations_data()
    
if __name__ == "__main__":
    combine_all_data()