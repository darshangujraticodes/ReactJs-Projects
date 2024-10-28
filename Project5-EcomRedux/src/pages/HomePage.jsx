import React from "react";
import Navbar from "../components/Navbar";
import BodyContent from "../components/BodyContent";

function HomePage() {
  return (
    <>
      <div>
        <div className="container">
          <div className="headWrap mt-3">
            <h2 className="text-left">Home Page Component</h2>
          </div>

          <div className="contentWrap">
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              quisquam neque pariatur dolorem aut eius est voluptatum esse
              distinctio voluptate! Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Quae expedita mollitia perspiciatis ipsum
              distinctio possimus odio nisi. Eos fugit magni neque, distinctio,
              repellat fuga explicabo modi quis nobis ipsam soluta.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              maiores ipsam totam recusandae, molestias, placeat beatae hic illo
              doloremque illum nulla rerum esse animi aspernatur enim, a
              repellat culpa error.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
              blanditiis natus necessitatibus quas, nam debitis tempora
              voluptates ratione, vero consequuntur assumenda mollitia ullam,
              obcaecati repudiandae eaque pariatur laboriosam. Obcaecati eos
              fugiat, error libero ex vero nobis sequi! Deserunt, quibusdam
              quos.
            </p>

            <div className="btnWrap mt-4">
              <a className="enquireBtn">Enquire Now</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
