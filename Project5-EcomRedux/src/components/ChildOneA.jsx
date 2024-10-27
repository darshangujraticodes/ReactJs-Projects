import React from "react";
import ChildOneB from "./ChildOneB";
import { useDispatch } from "react-redux";
import {
  addCounter,
  subtractCounter,
  fiveMultiple,
  setNewVal,
  resetData,
  setDouble,
} from "../features/ReduxPractice/reducPracticeSlice";

function ChildOneA() {
  const dispatchdata = useDispatch();

  return (
    <>
      <div>
        <div className="d-flex">
          <h1>Parent A Child B :</h1>
          <p className="dataVal">{}</p>

          <button
            onClick={() => dispatchdata(setDouble())}
            className="m-2 btnData "
          >
            Double It !
          </button>
        </div>{" "}
        <ChildOneB />
      </div>
    </>
  );
}

export default ChildOneA;
