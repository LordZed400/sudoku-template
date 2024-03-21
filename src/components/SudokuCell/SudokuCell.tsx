import * as React from "react";

import "./SudokuCell.scss";

interface SudokuCellProps {
  complete: Boolean;
}

const SudokuCell: React.FC<SudokuCellProps> = ({ complete }) => {
  const row = 3;
  const column = 3;

  return (
    <div className="sudoku-cell-container">
      <div className="sudoku-cell-box">
        {complete ? (
          <div className="individual-cell">10</div>
        ) : (
          <div className="note-cell-box">
            <div className="note-cell-container">
              {[...Array(row)].map((_, rowIndex) => (
                <div className="row" key={`cell-row-${rowIndex}`}>
                  {[...Array(column)].map((_, columnIndex) => (
                    <div
                      className="column"
                      key={`cell-${rowIndex}-column-${columnIndex}`}
                    >
                      <div className="note-cell">10</div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SudokuCell;
