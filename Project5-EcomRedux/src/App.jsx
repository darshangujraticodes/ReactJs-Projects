import { useSelector, useDispatch } from "react-redux";
import ChildOne from "./components/ChildOne";
import {
  addCounter,
  subtractCounter,
  fiveMultiple,
  setNewVal,
} from "./features/ReduxPractice/reducPracticeSlice";
import GridPracticeOne from "./components/GridPracticeOne";

function App() {
  const dataVal = useSelector((state) => state.data);

  const dispatchdata = useDispatch();

  //ref video   https://www.youtube.com/@whataboutcoding/videos

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

export default App;
