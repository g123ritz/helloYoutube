import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../redux/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  });

  const [searchParams] = useSearchParams();
  return (
    <div className="p-7 mx-7 my-4">
     <div className="rounded-lg overflow-hidden">
      <iframe
        width="650"
        height="350"
        src={"https://www.youtube.com/embed/"+searchParams.get("v")}
    
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
    </div>
  );
};

export default WatchPage;
