import ReactPlayer from 'react-player'

const background_image = '/david-marcu-78A265wPiO4-unsplash.jpg'
const video = 'https://www.youtube.com/watch?v=S3xWw0kTUSQ'
const svg_image = '/vx_deep.svg'

const index = () => {
  return (
    <>
      <style jsx>
        {`
          .container {
            position: relative;
            background: url(${background_image}) no-repeat fixed center;
            height: 100vh;
          }

          .inner {
            position: absolute;

            height: 50vh;
            width: 100%;

            top: 50%;
            left: 50%;

            -webkit-transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);

            -webkit-mask-image: url(${svg_image});
            -webkit-mask-repeat: no-repeat;
            -webkit-mask-position: center;
            mask-image: url(${svg_image});
            mask-repeat: no-repeat;
            mask-position: center;
          }
        `}
      </style>

      <div className="container">
        <div className="inner">
          <ReactPlayer
            style={{ pointerEvents: 'none' }}
            url={video}
            width="100%"
            height="100%"
            playing="1"
            muted="1"
            loop="1"
          />
        </div>
      </div>
    </>
  )
}

export default index
