import React from "react";
import Index1 from "../Detals/LoadMedia/index1/index";
import Index2 from "../Detals/LoadMedia/index2/index";
import Index3 from "../Detals/LoadMedia/index3/index";
import Index4 from "../Detals/LoadMedia/index4/index";
import Video from "../Detals/LoadMedia/index2/details/videoPlayer/videoPlayer";
function Testing() {
  return (
    <div>
      <Index4
        title={"Загрузите картинки или анимацию"}
        subtitle={`Пожалуйста, загрузите файл в формате jpeg, png или mp4, webM и убедитесь, что размер файла не превышает 5 МБ.`}
        src={[
          "https://picsum.photos/1024/1024?random=1",
          "https://picsum.photos/1024/1024?random=2",
          "https://picsum.photos/1024/1024?random=3",
          "https://picsum.photos/1024/1024?random=4",
        ]}
        content={[
          {
            wrapper: { width: "1040px" },
            content: { height: "675px" },
            card: { width: "379px" },
            img: { width: "200px" },
          },
        ]}
        options={true}
        checkbox={true}
        defaultCheck={2}
        textarea={true}
        cardTitle={[
          { title: "Картинка без надписи" },
          { title: "Картинка с надписью" },
        ]}
        textareaContent={[
          {
            value: "Value 1",
          },
          {
            value: "Value 2",
          },
          {
            value: "Value 3",
          },
          {
            value: "Value 4",
          },
        ]}
      />




      <br />



      <Index1 size={{ wrapper: "645px", image: "461px", gap: "22" }} />


      <br />



      <Index3
        title={"Загрузите картинку или анимацию"}
        subtitle={`Пожалуйста, загрузите файл в формате jpeg, png или mp4, webM и убедитесь, что размер файла не превышает 5 МБ.`}
        src={""}
        width={"400px"}
        imgWidth={"352px"}
        imgheight={"352px"}
        gap={"22px"}
        textarea={false}
      />

      
      {/* <Video
        src={"https://random-video-two.vercel.app/cdn_video.mp4"}
        poster={"https://avatars.githubusercontent.com/u/152501142?v=4"}
      /> */}
    </div>
  );
}

export default Testing;
