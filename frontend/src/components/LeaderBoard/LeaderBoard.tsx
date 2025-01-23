import { formatTimeToMinute } from "../../helpers";
import { useGameData } from "../../store/useGameData";
import "./LeaderBoard.css";

const LeaderBoard = () => {
  const gameData = useGameData();
  const { loading, error, errorData, scores } = gameData;

  const renderLoading = () => {
    if (loading) {
      return <p>Loading...</p>;
    } else if (error) {
      return <p>Error fetching data: {errorData}</p>;
    }
  };

  return (
    <div className="leaderboard">
      <div className="text-2xl">LeaderBoard</div>

      <table className="table-auto">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Player</th>
            <th>Time</th>
            <th>Clicks</th>
          </tr>
        </thead>
        <tbody>
          {renderLoading()}
          {scores?.map((score, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{score.name}</td>
              <td>{formatTimeToMinute(score.timesInSeconds)}</td>
              <td>{score.clicks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default LeaderBoard;
