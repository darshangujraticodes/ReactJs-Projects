import React from "react";

function GridPracticeOne() {
  // grid data steps
  /*
    1] count total items required in grid and create with naming gridItem inside one parent gridContainerWrapper
    2] second count the rows and column in grid layout structure

    now form starturcture only few grid proeprty



    parent element css
    display: grid;
    grid-template-columns: repeat(3, 1fr); 



    */

  return (
    <div className="container">
      <div className="  gridPracticeWrapper1 my-5">
        <div className="gridContainerWrap">
          <div className="gridItem header">Header</div>
          <div className="gridItem sidebar">Sidebar</div>
          <div className="gridItem content1">Content 1</div>
          <div className="gridItem content2">Content 2</div>
          <div className="gridItem content3">Content 3</div>
          <div className="gridItem footer">Footer</div>
        </div>
      </div>

      <div className="gridPracticeWrapper2 mb-5">
        <div className="gridContainerWrap2">
          <div className="gridSubItem2  subItemA  "></div>
          <div className="gridSubItem2  subItemB  "></div>
          <div className="gridSubItem2  subItemC  "></div>
          <div className="gridSubItem2  subItemD  "></div>
          <div className="gridSubItem2  subItemE  "></div>
          <div className="gridSubItem2  subItemF  "></div>
          <div className="gridSubItem2  subItemG  "></div>
        </div>
      </div>

      {/* column : 3, rows : 4 */}
      <div className="gridPRacticeWrapper3 mb-5">
        <div className="gridContainerWrap3">
          <div className="subgridcontent1 subgrid1">Header</div>
          <div className="subgridcontent1 subgrid2">Sidebar</div>
          <div className="subgridcontent1 subgrid3">navigation</div>
          <div className="subgridcontent1 subgrid4">ads</div>
          <div className="subgridcontent1 subgrid5">main</div>
          <div className="subgridcontent1 subgrid6">footer</div>
        </div>
      </div>
    </div>
  );
}

export default GridPracticeOne;
