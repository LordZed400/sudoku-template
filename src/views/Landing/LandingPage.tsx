import * as React from "react";

import SudokuContainer from "~components/SudokuContainer/SudokuContainer";
import "./LandingPage.scss";

const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <div className="header-container">
        <div className="title">Sudoku Template</div>
      </div>
      <div className="body-container">
        <SudokuContainer />
      </div>
    </div>
  );
};

export default LandingPage;
