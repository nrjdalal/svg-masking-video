const index = () => {
  return (
    <>
      <div className="relative w-screen h-screen bg-black">
        <div className="absolute -translate-x-1/2 -translate-y-1/2 w-96 h-96 top-1/2 left-1/2">
          <video
            style={{
              clipPath: 'url("#myClip")',
            }}
            autoPlay
            muted
            loop
          >
            <source src="/pexels-kelly-lacy-9722139_VdS2UF5W.mp4" />
          </video>
        </div>

        <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-96 h-96">
          <svg>
            <g fillRule="nonzero" fillOpacity="0">
              <clipPath id="myClip">
                <path
                  d="M78.082 115.178v-8.59h2.959c.668 0 1.178.041 1.529.123.492.113.912.318 1.26.615a3.49 3.49 0 011.016 1.468c.225.596.337 1.276.337 2.042 0 .652-.076 1.231-.228 1.734-.152.504-.348.921-.586 1.251-.238.33-.499.59-.782.78a3.179 3.179 0 01-1.026.43c-.4.098-.86.147-1.38.147h-3.099zm1.137-1.014h1.834c.566 0 1.01-.053 1.333-.158.322-.105.579-.254.77-.445.27-.27.48-.632.63-1.087.15-.455.226-1.007.226-1.656 0-.898-.148-1.588-.443-2.071-.295-.482-.653-.805-1.075-.97-.305-.117-.795-.175-1.471-.175h-1.804v6.562zM86.771 115.178v-8.59h6.211v1.014h-5.074v2.631h4.752v1.007h-4.752v2.924h5.273v1.014h-6.41zM78.105 127.57v-8.589h6.211v1.013h-5.074v2.631h4.752v1.008h-4.752v2.924h5.273v1.013h-6.41zM86.086 127.57v-8.589h3.24c.57 0 1.006.027 1.307.082.421.07.775.204 1.06.401.285.197.515.474.689.829.173.356.26.746.26 1.172 0 .73-.232 1.349-.697 1.854-.465.506-1.305.759-2.519.759h-2.204v3.492h-1.136zm1.136-4.505h2.221c.735 0 1.256-.137 1.565-.411.308-.273.462-.658.462-1.154 0-.359-.09-.667-.272-.923a1.274 1.274 0 00-.718-.507c-.191-.05-.545-.076-1.06-.076h-2.198v3.071z"
                  transform="matrix(25.4311 0 0 18.301 -1985.71 -1950.67)"
                />
              </clipPath>
            </g>
          </svg>
        </div>
      </div>
    </>
  )
}

export default index
