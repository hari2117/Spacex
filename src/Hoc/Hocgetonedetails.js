import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const Hocgetone = (WrappedComponent, url) => {
  return function Newcomponent(props) {
    const [Data, setData] = useState([]);
    const params = useParams();

    const fetchdata = () => {
      axios
        .get(`https://api.spacexdata.com/v3/${url}/${params.id}`)
        .then((res) => {
          setData((pre) => {
            return [res.data];
          });
        })
        .catch((err) => {
          throw new Error();
        });
    };

    useEffect(() => fetchdata(), []);

    return (
      <div>
        <WrappedComponent data={Data} />
      </div>
    );
  };
  return <Newcomponent />;
};
export default Hocgetone;
