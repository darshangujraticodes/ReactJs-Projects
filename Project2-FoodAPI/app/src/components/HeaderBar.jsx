import React, { useEffect, useState } from "react";
import "./styles/Component-Style.css";
import foodApiLogo from "../assets/Food-logo.png";
import HeroSection from "./HeroSection";

const BASE_URL = "http://localhost:9000/";

function HeaderBar() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filteredData, setFilteredData] = useState(null);

  //Note API is mounted once and executed only one time
  //Due to which it is embedded in useEffect() empty dependency
  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError("Unable to Fetch Data !");
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchFoodData();
    console.log("API DATA =", data);
    if (error) return <div>{error}</div>;
    if (loading) return <div>Loading..</div>;
  }, []);

  const searchFood = (e) => {
    const searchValue = e.target.value;
    console.log(searchValue);

    if (searchValue == "") setFilteredData(null);

    const filter = data.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    // console.log(filter);
    setFilteredData(filter);
  };

  const typeAll = () => {
    const type = data.filter((food) => food.type.toLowerCase().includes(""));
    console.log(type);
    setFilteredData(type);
  };
  const typeBreakfast = () => {
    const type = data.filter((food) =>
      food.type.toLowerCase().includes("breakfast")
    );
    console.log(type);
    setFilteredData(type);
  };
  const typeLunch = () => {
    const type = data.filter((food) =>
      food.type.toLowerCase().includes("lunch")
    );
    console.log(type);
    setFilteredData(type);
  };
  const typeDinner = () => {
    const type = data.filter((food) =>
      food.type.toLowerCase().includes("dinner")
    );
    console.log(type);
    setFilteredData(type);
  };

  return (
    <>
      <section className="header-wrapper px-3 py-3">
        <div className="container">
          <nav className="d-flex justify-content-between">
            <div className="logo-wrap">
              <img src={foodApiLogo} alt="" className="img-logo" />
            </div>

            <div className="search-wrap d-flex align-items-center">
              <div className="input-wrap">
                <input
                  type="text"
                  onChange={searchFood}
                  placeholder="Food Search "
                  className="searchBar"
                />
              </div>
            </div>
          </nav>
        </div>
        <div className="container py-3 d-flex justify-content-center">
          <div className="category-wrap d-flex align-items-center">
            <div className="btn-wrap px-2">
              <button onClick={typeAll} className="click-btn ">
                All
              </button>
            </div>
            <div className="btn-wrap px-2">
              <button onClick={typeBreakfast} className="click-btn ">
                Breakfast
              </button>
            </div>
            <div className="btn-wrap px-2">
              <button onClick={typeLunch} className="click-btn ">
                Lunch
              </button>
            </div>
            <div className="btn-wrap px-2">
              <button onClick={typeDinner} className="click-btn">
                Dinner
              </button>
            </div>
          </div>
        </div>
      </section>
      <HeroSection searchdata={filteredData ? filteredData : data} />
    </>
  );
}

export default HeaderBar;
