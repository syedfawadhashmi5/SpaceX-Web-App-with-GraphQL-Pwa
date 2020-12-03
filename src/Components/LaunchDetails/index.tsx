import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanchInfoQuery } from "../../generated/graphql";

import LaunchDetail from "./LaunchDetails";

const LaunchInfo = () => {
  const location: any = useLocation();

  const [state, setstate] = useState("1");

  useEffect(() => {
    if (location.state) {
      const ids = location.state.toString();

      console.log('sddsd' , ids);

      setstate(ids);
    } else {
      const ids = (1).toString();

      setstate(ids);
    }
  }, [location.state]);

  const { data, loading, error } = useLanchInfoQuery({
    variables: { id: state },
  });

  if (loading) {
    return <h1>{loading}</h1>;
  } else if (error || !data) {
    let collection: any = localStorage.getItem("LaunchDetail");
    let data = JSON.parse(collection);

    return <LaunchDetail data={data} />;
  } else {
    localStorage.setItem("LaunchDetail", JSON.stringify(data));

    return <LaunchDetail data={data} />;
  }
};

export default LaunchInfo;
