import "react";
import styles from "./Vans.module.css";
import GenerateVansCards from "../../components/GenerateVansCard/GenerateVansCards";
import { useSearchParams } from "react-router-dom";

function Vans() {
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");

  const typeColor = { simple: "#E17654", rugged: "#115E59", luxury: "#161616" };

  const activeFilterStyle = {
    backgroundColor: typeColor[typeFilter],
    color: '#FFEAD0'
  };

  return (
    <div className={styles.vansContainer}>
      <h2>Explore our van options</h2>
      <div className={styles.filtersContainer}>
        <div className={styles.filtersButton}>
          <button
            style={typeFilter === "simple" ? activeFilterStyle : {}}
            onClick={() => setSearchParams({ type: "simple" })}
          >
            Simple
          </button>
          <button
            style={typeFilter === "rugged" ? activeFilterStyle : {}}
            onClick={() => setSearchParams({ type: "rugged" })}
          >
            Rugged
          </button>
          <button
            style={typeFilter === "luxury" ? activeFilterStyle : {}}
            onClick={() => setSearchParams({ type: "luxury" })}
          >
            Luxury
          </button>
        </div>
        {typeFilter && (
          <button className={styles.clearFilterButton} onClick={() => setSearchParams({})}>Clear filter</button>
        )}
      </div>
      <GenerateVansCards />
    </div>
  );
}

export default Vans;
