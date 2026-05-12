import React from 'react';
import { History, Clock } from 'lucide-react';

interface GameHistoryProps {
  history: Array<{
    winner: string | null;
    board: Array<string | null>;
    date: Date;
  }>;
}

const GameHistory: React.FC<GameHistoryProps> = ({ history }) => {
  // Format date to a readable string
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }).format(date);
  };

  // Get result text based on winner
  const getResultText = (winner: string | null) => {
    if (winner) {
      return `Player ${winner} won`;
    }
    return "Draw";
  };

  // Get appropriate color class based on winner
  const getResultColorClass = (winner: string | null) => {
    if (winner === 'X') return 'history-result-x';
    if (winner === 'O') return 'history-result-o';
    return 'history-result-draw';
  };

  return (
    <div className="panel">
      <h2 className="panel-title">
        <History className="panel-icon" />
        Game History
      </h2>
      
      <div className="history-list">
        {history.length === 0 ? (
          <p className="empty-history">No games played yet</p>
        ) : (
          [...history].reverse().map((game, index) => (
            <div key={index} className="history-item">
              <div className="history-meta">
                <span className={`font-medium ${getResultColorClass(game.winner)}`}>
                  {getResultText(game.winner)}
                </span>
                <span className="history-time">
                  <Clock className="clock-icon" />
                  {formatDate(game.date)}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default GameHistory;
