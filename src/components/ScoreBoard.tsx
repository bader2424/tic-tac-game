import React from 'react';
import { Trophy, User, Users } from 'lucide-react';

interface ScoreBoardProps {
  scores: {
    X: number;
    O: number;
    draws: number;
  };
}

const ScoreBoard: React.FC<ScoreBoardProps> = ({ scores }) => {
  return (
    <div className="panel">
      <h2 className="panel-title">
        <Trophy className="panel-icon panel-icon-gold" />
        Score Board
      </h2>
      
      <div className="score-list">
        <div className="score-row score-row-x">
          <div className="score-label">
            <User className="score-icon" />
            <span>Player X</span>
          </div>
          <span className="score-value">{scores.X}</span>
        </div>
        
        <div className="score-row score-row-o">
          <div className="score-label">
            <User className="score-icon" />
            <span>Player O</span>
          </div>
          <span className="score-value">{scores.O}</span>
        </div>
        
        <div className="score-row score-row-draw">
          <div className="score-label">
            <Users className="score-icon" />
            <span>Draws</span>
          </div>
          <span className="score-value">{scores.draws}</span>
        </div>
      </div>
    </div>
  );
};

export default ScoreBoard;
