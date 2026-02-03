from fastapi import FastAPI, Query
import pandas as pd

ANALYTICS_DATA_FILE = 'data/analytics/analytics_data.csv'

def read_csv(file_path: str = ANALYTICS_DATA_FILE) -> pd.DataFrame:
    return pd.read_csv(file_path)

app = FastAPI(
    title="NHL Analytics API",
    description="API for accessing processed NHL analytics data.",
    version="1.0.0"
)

data_frame = read_csv()

@app.get("/teams")
def get_teams():
    return data_frame['team'].drop_duplicates().to_list()

@app.get("/seasons")
def get_seasons():
    return data_frame['season'].drop_duplicates().to_list()

@app.get("/analytics")
def get_analytics(team: str | None = Query(default=None), season: int | None = Query(default=None)):
    data = data_frame.copy()

    if team:
        data = data[data['team'] == team]

    if season:
        data = data[data['season'] == season]

    return data.to_dict(orient="records")

@app.get("/analytics/xg-vs-points")
def get_xg_vs_points(season: int | None = Query(default=None)):
    data = data_frame.copy()

    if season:
        data = data[data['season'] == season]

    data = data[['team', 'season', 'points', 'xGoalDifferential']]

    return data.to_dict(orient="records")