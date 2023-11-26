import React from "react";
import PropTypes from "prop-types";
import AlbumList from "./Components/AlbumList";

AlbumFeture.propTypes = {};

function AlbumFeture(props) {
  const albumList = [
    {
      id: 1,
      name: "nhạc ballad việt ",
      thumbnaiURL:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/2/6/8/0/2680ebe8beffcdb28d0036fa8bb66cb8.jpg",
    },

    {
      id: 2,
      name: "nhạc sơn tùng mtp ",
      thumbnaiURL:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/c/5/0/c/c50ca3d7607de6791edaf8380c39e243.jpg",
    },
    {
      id: 3,
      name: "nhạc remix",
      thumbnaiURL:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/8/b/6/3/8b633f47ce20e9e7d6f73ff577899c85.jpg",
    },
  ];

  return (
    <div>
      <h1>các loại nhạc đỉnh cao </h1>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeture;
