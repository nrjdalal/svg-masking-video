import ReactPlayer from "react-player";

const background_image = "/david-marcu-78A265wPiO4-unsplash.jpg";
const video = "https://www.youtube.com/watch?v=S3xWw0kTUSQ";
const svg_image = "/vx_deep.svg";

const index = () => {
  return (
    <>
      <style jsx>
        {`
          .outer {
            background: url(${background_image}) no-repeat fixed center;
          }

          .inner {
            -webkit-mask-image: url(${svg_image});
            -webkit-mask-origin: content-box;
            -webkit-mask-position: center;
            -webkit-mask-repeat: no-repeat;
            mask-image: url(${svg_image});
            mask-origin: content-box;
            mask-position: center;
            mask-repeat: no-repeat;
          }
        `}
      </style>

      <div className={`outer relative h-screen`}>
        <div className="inner absolute top-1/2 left-1/2 h-1/2 w-full -translate-x-1/2 -translate-y-1/2 p-4">
          <ReactPlayer
            style={{ pointerEvents: "none" }}
            url={video}
            width="100%"
            height="100%"
            playing={true}
            muted={true}
            loop={true}
          />
        </div>
      </div>
    </>
  );
};

export default index;
