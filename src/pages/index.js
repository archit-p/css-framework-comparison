import React, { useEffect, useState } from "react";
import DataTable from "../components/DataTable";
import results from "../results.json";
import dayjs from "dayjs";
import { Helmet } from "react-helmet";
import { GithubAPI } from "../api/Github";

const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let requests = [];
    for (let i = 0; i < results.results.length; i++) {
      if (results.results[i].repoURL) {
        requests.push(
          GithubAPI.get("/repos" + results.results[i].repoURL).then(res => {
            results.results[i].issues = res.data.open_issues_count;
            results.results[i].stargazers = res.data.stargazers_count;
            results.results[i].forks = res.data.forks_count;
          })
        );
      }
    }
    Promise.all(requests).then(() => {
      setLoading(false);
    })
  }, []);

  return (
    <div class="row">
      <Helmet>
        <meta charSet="utf-8" />
        <title>CSS Frameworks Comparsion</title>
      </Helmet>
      <div class="container">
        <div class="column">
          <div class="column header">
            <text class="title">CSS Frameworks Comparison</text>
            <text class="small">
              Last Updated - ({dayjs(results.createdAt).format("DD/MM/YYYY")})
            </text>
          </div>
          <div class="table-container centered">
            <DataTable loading={loading} results={results.results} />
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
