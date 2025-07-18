import React from "react";
import Index4 from "../Detals/LoadMedia/index4/index";
import Video from "../Detals/LoadMedia/index2/details/videoPlayer/videoPlayer";
function Testing() {
  return (
    <div>
      <Index4
        title={"Загрузите картинки или анимацию"}
        subtitle={`Пожалуйста, загрузите файл в формате jpeg, png или mp4, webM и убедитесь, что размер файла не превышает 5 МБ.`}
        src={[
          "https://avatars.githubusercontent.com/u/152501142?v=4",
          "https://avatars.githubusercontent.com/u/152501142?v=4",
          "https://avatars.githubusercontent.com/u/152501142?v=4",
          "https://avatars.githubusercontent.com/u/152501142?v=4",
        ]}
        content={[
          {
            wrapper: { width: "1040px" },
            content: { height: "675px" },
            card: { width: "379px" },
            img: { width: "200px" },
          },
        ]}
        checkbox={true}
        textarea={true}
        cardTitle={[
          { title: "Картинка без надписи" },
          { title: "Картинка с надписью" },
        ]}
        textareaContent={[
          { title: "Title 1", placeholder: "Placeholder 1", value: "Value 1" },
          { title: "Title 2", placeholder: "Placeholder 2", value: "Value 2" },
        ]}
      />
      <br />
      {/* <Video
        src={"https://random-video-two.vercel.app/cdn_video.mp4"}
        poster={"https://avatars.githubusercontent.com/u/152501142?v=4"}
      /> */}
    </div>
  );
}

export default Testing;
