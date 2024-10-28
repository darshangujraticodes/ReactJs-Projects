import { useEffect } from "react";
import BodyContent from "./components/BodyContent";
import ParentData from "./components/ParentData";
import HomePage from "./pages/HomePage";
import PageLayout from "./pages/PageLayout";

function App() {
  //ref video   https://www.youtube.com/@whataboutcoding/videos

  return (
    <>
      <div>{/* <ParentData /> */}</div>
      {/* <HomePage />
      <BodyContent /> */}
      <PageLayout />
    </>
  );
}

export default App;
