import React from "react";
import { useSelector, useDispatch } from "react-redux";

import GridPracticeOne from "../components/GridPracticeOne";
import ChildOne from "./ChildOne";
import {
  setDouble,
  addCounter,
  subtractCounter,
  fiveMultiple,
  setNewVal,
} from "../features/ReduxPractice/reducPracticeSlice";

function ParentData() {
  const dataVal = useSelector((state) => state.data);

  return (
    <>
      <div className=" container wrapper mt-5">
        <div className="d-flex">
          <h1>Main Parent App :</h1>
          <p className="dataVal">{dataVal}</p>
          <button
            onClick={() => dispatchdata(addCounter())}
            className="ml-3 btnData m-2"
          >
            {" "}
            Add 1{" "}
          </button>

          <button
            onClick={() => dispatchdata(subtractCounter())}
            className="m-2 btnData "
          >
            {" "}
            Subtract 1{" "}
          </button>
        </div>

        <ChildOne />

        <GridPracticeOne />
      </div>
    </>
  );
}

export default ParentData;
