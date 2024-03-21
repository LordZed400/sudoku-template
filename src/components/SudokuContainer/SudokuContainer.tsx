import * as React from "react";

import SudokuBlock from "~components/SudokuBlock/SudokuBlock";
import "./SudokuContainer.scss";

const SudokuContainer = () => {
  const row = 3;
  const column = 3;

  return (
    <div className="sudoku-container">
      <div className="sudoku-container-box">
        {[...Array(row)].map((_, rowIndex) => (
          <div className="row" key={`container-row-${rowIndex}`}>
            {[...Array(column)].map((_, columnIndex) => (
              <div className="column" key={`container-${rowIndex}-column-${columnIndex}`}>
                <SudokuBlock />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SudokuContainer;
