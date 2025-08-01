import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard.jsx";
import { getCategoryVideos } from "../redux/categorySlice.jsx";
import { useDispatch, useSelector } from "react-redux";
import timeSince from "../utils/date.jsx";

function Feed() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { categoryVideos } = useSelector((state) => state.category);
  const { sidebarExtend } = useSelector((state) => state.category);
  const { darkMode } = useSelector((state) => state.darkMode);

  useEffect(() => {
    dispatch(
      getCategoryVideos(
        `search?part=snippet&q=${id ? id : "Coding development"}`
      )
    );
    document.title = `${id ? id + " - YouTube" : "Home - YouTube"}`;
  }, [id, dispatch]);

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "#131417" : "#fff";
  }, [darkMode]);

  const aDay = 24 * 60 * 60 * 1000;

  return (
    <>
      <div
        className={`sm:hidden overlayEffect ${
          sidebarExtend ? "block" : "hidden"
        }`}
      ></div>
      <div
        className={`pl-0 ${
          sidebarExtend ? "sm:pl-[180px]" : "sm:pl-[70px]"
        } feedGrid grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-x-[4%] pt-20 mx-3 sm:ml-4 md:pr-[28px] lg:pr-14 gap-y-6 max-w-[100%] bg-contain`}
      >
        {categoryVideos?.map((e, index) => {
          return (
            <div key={index} style={{ marginTop: index === 0 ? "0px" : "0px" }}>
              <VideoCard
                title={e.snippet?.title}
                thumbnail={e.snippet?.thumbnails?.medium?.url}
                on={timeSince(
                  new Date(Date.parse(e.snippet?.publishedAt) - aDay)
                )}
                channel={e.snippet?.channelTitle}
                channelId={e.snippet?.channelId}
                videoId={e.id?.videoId}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Feed;