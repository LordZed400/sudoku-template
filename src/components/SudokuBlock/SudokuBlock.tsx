import * as React from "react";

import SudokuCell from "~components/SudokuCell/SudokuCell";
import "./SudokuBlock.scss";

const SudokuBlock = () => {
  const row = 3;
  const column = 3;

  return (
    <div className="sudoku-block-container">
      <div className="sudoku-block-box">
        {[...Array(row)].map((_, rowIndex) => (
          <div className="row" key={`block-row-${rowIndex}`}>
            {[...Array(column)].map((_, columnIndex) => (
              <div className="column" key={`block-${rowIndex}-column-${columnIndex}`}>
                <SudokuCell complete={ rowIndex == columnIndex} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SudokuBlock;
