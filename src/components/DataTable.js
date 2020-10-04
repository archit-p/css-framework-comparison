import React, { useState, useEffect } from "react";

const DataTable = ({ loading, results }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(
      results.sort((a, b) => {
        var nameA = a.name.toUpperCase();
        var nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      })
    );
  }, [results]);

  return (
    <table class="centered">
      <thead>
        <tr>
          <th>Name</th>
          <th>Repo</th>
          <th>Stars</th>
          <th>Forks</th>
          <th>Issues</th>
          <th>Standard</th>
          <th>Minified</th>
          <th>Minified + Gzipped</th>
        </tr>
      </thead>
      <tbody>
        {!loading && data.map(row => (
          <tr>
            <td>{row.name}</td>
            <td>{row.repoURL}</td>
            <td>{row.stargazers}</td>
            <td>{row.forks}</td>
            <td>{row.issues}</td>
            <td>{row.standardSize} kB</td>
            <td>{row.minifiedSize} kB</td>
            <td>{row.gzippedSize} kB</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
