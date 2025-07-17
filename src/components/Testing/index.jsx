import React from "react";
import Index3 from "../Detals/LoadMedia/index3/index";
import Index2 from "../Detals/LoadMedia/index2/index";
import Video from "../Detals/LoadMedia/index2/details/videoPlayer/videoPlayer";
function Testing() {
  return (
    <div>
      <Index3
        title={"Загрузите иконку"}
        subtitle={`Пожалуйста, загрузите файл в формате jpeg, png или mp4, webM и убедитесь, что размер файла не превышает 5 МБ.`}
        src={"https://avatars.githubusercontent.com/u/152501142?v=4"}
        width={"263px"}
        imgWidth={"215px"}
        imgheight={"215px"}
        gap={"21.34px"}
        textarea={false}
        textareaTitle={"Custom title"}
        textareaPlaceholder={"Type your text..."}
        textareaValue={"Hech narsa yozilmagan! (Hazil)"}
      />
      <br />
      <Video
        src={"https://random-video-two.vercel.app/cdn_video.mp4"}
        poster={"https://avatars.githubusercontent.com/u/152501142?v=4"}
      />
    </div>
  );
}

export default Testing;
