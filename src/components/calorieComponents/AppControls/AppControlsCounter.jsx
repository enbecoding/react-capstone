import React from "react";

function AppControlsCounter({total}) {
  return (
    <div className="app__controls__counter">
      <h2>
        Total Calories For Today: <span>{total}</span>
      </h2>
    </div>
  );
}

export default AppControlsCounter;
