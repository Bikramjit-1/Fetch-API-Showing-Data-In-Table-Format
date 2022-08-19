import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const getData = () => {
    setLoad(true);

    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((responce) => responce.json())
      .then((json) => {
        setLoad(false);
        setData(json);
      });
  };
  return (
    <div>
      <button onClick={getData}>GET DATA</button>
      {load ? (
        <div>Loading Data...</div>
      ) : (
        data.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>userId</th>
                <th>title</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 &&
                data.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.userId}</td>
                      <td>{item.title}</td>
                    </tr>
                  );
                })}
              ;
            </tbody>
          </table>
        )
      )}
    </div>
  );
}
