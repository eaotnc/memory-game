import "./LeaderBoard.css";

const LeaderBoard = () => {
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
          <tr>
            <td>1</td>
            <td>Player 1</td>
            <td>00:00</td>
            <td>0</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Player 2</td>
            <td>00:00</td>
            <td>0</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Player 3</td>
            <td>00:00</td>
            <td>0</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Player 4</td>
            <td>00:00</td>
            <td>0</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Player 5</td>
            <td>00:00</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default LeaderBoard;
