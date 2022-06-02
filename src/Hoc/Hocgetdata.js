import React, { useState, useEffect } from "react";
import axios from "axios";
import '../css/Button.css'
const Hoc = (WrappedComponent, entity) => {
  function Newcomponent() {
    const [Data, setData] = useState([]);
    //sorting the data//
    function sorted(data) {
      setData((pre) => {
        pre.sort((x, y) => {
          console.log(x,y)
          const a =( x.mission_name  ||x.title ||x.rocket_name);
          let b = y.title || y.mission_name ||y.rocket_name;
          console.log(a)
          return a == b ? 0 : a > b ? 1 : -1;
        });
        return [...pre];
      });
    }
    //get all the data//
    const fetchdata = () => {
      axios
        .get(entity)
        .then((res) => {
          setData(res.data);
        })
        .catch((Error) => {
          throw new Error();
        });
    };
    useEffect(() => fetchdata(), []);
    console.log(Data)

    return (
      <div>
       <div>
       <button className="btnfilter" onClick={() => sorted(Data)}>SortBY</button>
        <WrappedComponent data={Data} />
       </div>
        
      </div>
    );
  }
  return Newcomponent;
};
export default Hoc;
