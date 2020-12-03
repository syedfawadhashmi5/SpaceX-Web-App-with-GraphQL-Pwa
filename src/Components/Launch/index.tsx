import React from "react";
import { useLaunchesQuery } from "../../generated/graphql";
import Launch from "./Launchlist";
import "./styles.css";

const LaunchListContainer = () => {
  const { data, loading, error } = useLaunchesQuery();

  if (loading) {
    return (
      <div id="loading-bar-spinner" className="spinner">
        <div className="spinner-icon"></div>
      </div>
    );
  } else if (error || !data) {
    let collection: any = localStorage.getItem("MissionItem");
    let offlineData = JSON.parse(collection);

    return <Launch data={offlineData} />;
  } else {
    localStorage.setItem("MissionItem", JSON.stringify(data));

    return <Launch data={data} />;
  }
};

export default LaunchListContainer;
