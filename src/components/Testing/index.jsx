import React from "react";
import Index3 from "../Detals/LoadMedia/index3/index";
import Index2 from "../Detals/LoadMedia/index2/index";
import Video from "../Detals/LoadMedia/index2/details/videoPlayer/videoPlayer";
function Testing() {
  return (
    <div>
      <Index3 src={"https://avatars.githubusercontent.com/u/152501142?v=4"}/>
      <br />
      <Video src={"https://random-video-two.vercel.app/cdn_video.mp4"} poster={"https://avatars.githubusercontent.com/u/152501142?v=4"}/>
    </div>
  );
}

export default Testing;
