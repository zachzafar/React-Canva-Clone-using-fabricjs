import { RestaurantRounded } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import "./contentlib.js";

function Content({ id }) {
  const [content, setContent] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    let url = null;
    switch (id) {
      case 3:
        url = "http://localhost:8000/api/info/1";
        break;
      case 4:
        url = "http://localhost:8000/api/info/2";
        break;
      default:
        break;
    }
    const ContentSet = async (content) => {
      setContent(content);
    };

    let response = await fetch(url, {
      mode: "cors",
      headers: { "Access-Control-Allow-Origin": "*" },
    });
    let content = await response.json();
    let Cont = await ContentSet(content);
    console.log(Cont);
  };

  return (
    <div className="content-slide library " id="content">
      {content.map((cont) => {
        const { id, image, category } = cont;
        return (
          <img
            src={`http://localhost:8000/api/category/${category}/id/${id}`}
          ></img>
        );
      })}
    </div>
  );
}

export default Content;
