import React from "react";
import ChildOneB from "./ChildOneB";
import ChildOneA from "./ChildOneA";
import { useDispatch } from "react-redux";

import { resetData } from "../features/ReduxPractice/reducPracticeSlice";

function ChildOne() {
  const dispatchdata = useDispatch();

  return (
    <>
      <div>
        <div className="d-flex">
          <h1>Parent App Child A :</h1>
          <p className="dataVal">{}</p>
          <button
            onClick={() => dispatchdata(resetData())}
            className="m-2 btnData "
          >
            Reset
          </button>
        </div>{" "}
        <ChildOneA />
      </div>
    </>
  );
}

export default ChildOne;
