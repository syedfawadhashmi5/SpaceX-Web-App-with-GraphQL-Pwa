import React from "react";
import {useHistory} from 'react-router-dom'
import { LaunchesQuery } from "../../generated/graphql";
import "./styles.css";
import Paper from "@material-ui/core/Paper";

interface Props {
  data: LaunchesQuery;
}



const LaunchList: React.FC<Props> = ({ data }) => {

const history = useHistory()

const handleDetails = (id: any) => {
    history.push({
        pathname: '/',
        state: id
    })
};

  return (
    <div className="List">
      <div>
        <h1 style={{color: '#ffffff'}}>SPACE X LAUNCHES</h1>
      </div>
      {!!data.launches &&
        data.launches?.map((launch, i) => (
          <ol className="list" key={i}>
            <li className="item">
              <Paper elevation={3} 
              onClick={() => handleDetails(launch?.flight_number)}
              >
                <h2 style={{ textAlign: "center", margin: "10px" }}>
                  {launch?.mission_name}
                </h2>
                <h3 style={{ textAlign: "center" }}>{launch?.launch_year}</h3>
              </Paper>
            </li>
          </ol>
        ))}
    </div>
  );
};

export default LaunchList;
