const API_KEY = import.meta.env.VITE_REACT_APP_oddsApiKey
export const liveScores =`https://api.the-odds-api.com/v4/sports/icehockey_nhl/scores/?daysFrom=1&apiKey=${API_KEY}`;