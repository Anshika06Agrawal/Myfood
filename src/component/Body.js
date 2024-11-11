import ResturantCard from "./ResturantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfResturants, setlistOfResturants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2599333&lng=77.412615&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    // fetch return promise
    const json = await data.json();
    console.log(json);
    setlistOfResturants(json?.data?.cards[index]?.card?.card?.title);
  };

  return listOfResturants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterdList = listOfResturants.filter(
              (res) => res.data.avgRating > 4
            );
            setlistOfResturants(filterdList);
          }}
        >
          Top Rated Resturant
        </button>
      </div>
      <div className="res-conatiner">
        {listOfResturants.map((restaurant) => (
          // key hamesha likhna chache  key={index} but .map((restaurant, index)  krke yaa .id deke jaise neeche hai
          <ResturantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
