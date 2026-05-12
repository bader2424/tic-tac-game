import React from 'react';

interface SquareProps {
  value: string | null;
  onClick: () => void;
  isWinningSquare: boolean;
}

const Square: React.FC<SquareProps> = ({ value, onClick, isWinningSquare }) => {
  const baseClasses = "square";
  
  // Different styling based on value and winning status
  const getSquareClasses = () => {
    if (isWinningSquare) {
      return `${baseClasses} square-winning`;
    }
    
    if (!value) {
      return `${baseClasses} square-empty`;
    }
    
    if (value === 'X') {
      return `${baseClasses} square-x`;
    }
    
    return `${baseClasses} square-o`;
  };

  return (
    <button 
      className={getSquareClasses()}
      onClick={onClick}
      aria-label={value ? `Square with ${value}` : "Empty square"}
    >
      {value}
    </button>
  );
};

export default Square;
