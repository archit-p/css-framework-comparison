import React from "react";
import DataTable from "../components/DataTable";
import results from "../results.json";
import dayjs from "dayjs";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div class="row">
      <Helmet>
        <meta charSet="utf-8" />
        <title>CSS Frameworks Comparison</title>
      </Helmet>
      <div class="container">
        <div class="column">
          <div class="column header">
            <text class="title">CSS Frameworks File Size</text>
            <text class="small">
              Last Updated - ({dayjs(results.createdAt).format("DD/MM/YYYY")})
            </text>
          </div>
          <div class="table-container centered">
            <DataTable results={results.results} />
          </div>
          {/* <div class="column footer"> */}
          {/* <text class="small">Created by Archit Pandey</text> */}
          {/* <div class="social-icons"> */}
          {/* <text class="medium"> */}
          {/* <span class="icon"> */}
          {/* <img src={TwitterIcon} /> */}
          {/* </span>{" "} */}
          {/* /{" "} */}
          {/* <span class="icon"> */}
          {/* <img src={TwitterIcon} /> */}
          {/* </span> */}
          {/* </text> */}
          {/* </div> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
