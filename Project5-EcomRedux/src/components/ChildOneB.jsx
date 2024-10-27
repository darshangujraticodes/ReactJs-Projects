import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCounter,
  subtractCounter,
  fiveMultiple,
  setNewVal,
  resetData,
} from "../features/ReduxPractice/reducPracticeSlice";

function ChildOneB() {
  const [inputVal, setInputVal] = useState("");
  const dataVal = useSelector((state) => state.data);

  const dispatchdata = useDispatch();

  const onSubmitHandle = (e) => {
    e.preventDefault();

    dispatchdata(setNewVal(inputVal));

    console.log(inputVal);

    setInputVal("");
  };

  return (
    <>
      <div>
        <div className="d-flex">
          <h1>Parent B Child C :</h1>
          <p className="dataVal">{dataVal}</p>

          <button
            onClick={() => dispatchdata(fiveMultiple())}
            className="m-2 btnData "
          >
            Multiply * 5
          </button>
        </div>

        <div className="d-flex justify-content-center mt-4">
          <form onSubmit={onSubmitHandle}>
            <div className="d-flex">
              <input
                type="number"
                placeholder="Enter Value "
                className="inputFieldData m"
                required
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
              />
              <button className="btnData ms-2" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ChildOneB;
