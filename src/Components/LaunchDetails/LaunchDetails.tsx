import React from "react";
import { LanchInfoQuery } from "../../generated/graphql";
import { Paper } from "@material-ui/core";
import "./styles.css";

interface Props {
  data: LanchInfoQuery;
}

const LaunchDetails: React.FC<Props> = ({ data }) => {
  return (
    <Paper elevation={3} style={{ width: "80%", padding: "10px", textAlign: "center" }}>
      <div className="Profile">
        <div className="status">
        <h1 className='heading'>SPACE X LAUNCHES Detail</h1>
          <span>Flight {data.launch?.flight_number}: </span>
          {data.launch?.launch_success ? (
            <span className="success">Success</span>
          ) : (
            <span className="failed">Failed</span>
          )}
        </div>
        <h1 className="title">
          {data.launch?.mission_name}
          {data.launch?.rocket &&
            ` (${data.launch.rocket.rocket_name} | ${data.launch.rocket.rocket_type})`}
        </h1>
        <p className="description">{data.launch?.details}</p>
        {!!data.launch?.links && !!data.launch.links.flickr_images && (
          <div className="image-list">
            {data.launch.links.flickr_images.map((image) =>
              image ? (
                <img
                  src={image}
                  className="image_reponsive"
                  key={image}
                  alt={image}
                />
              ) : null
            )}
          </div>
        )}
      </div>
    </Paper>
  );
};

export default LaunchDetails;
