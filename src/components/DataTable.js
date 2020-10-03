import React, { useState, useEffect } from "react";

const DataTable = ({ results }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(results);
  }, [results]);

  return (
    <table class="centered">
      <thead>
        <tr>
          <th>Name</th>
          <th>Standard</th>
          <th>Minified</th>
          <th>Minified + Gzipped</th>
        </tr>
      </thead>
      <tbody>
        {data.map(row => (
          <tr>
            <td>{row.name}</td>
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
