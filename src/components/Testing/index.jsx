import React from "react";
import Index3 from "../Detals/LoadMedia/index3/index";
import Index2 from "../Detals/LoadMedia/index2/index";
import Video from "../Detals/LoadMedia/index2/details/videoPlayer/videoPlayer";
function Testing() {
  return (
    <div>
      <Index3 />
      <br />
      <Video src={"https://kids-ru.vercel.app/assets/video/talking.mp4"} poster={"https://avatars.githubusercontent.com/u/152501142?v=4"}/>
    </div>
  );
}

export default Testing;
