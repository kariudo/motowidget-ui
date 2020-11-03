import * as React from "react";

export default (props) => {
  return (
    <svg
      viewBox="0 0 174.571 104.583"
      {...props}
    >
      <defs>
        <linearGradient id="Motorcycle_svg__b">
          <stop offset={0} stopColor="#e7e5e5" />
          <stop offset={1} stopColor="#e7e5e5" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="Motorcycle_svg__a">
          <stop offset={0} stopColor="#666" />
          <stop offset={1} stopColor="#c00" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          xlinkHref="#Motorcycle_svg__b"
          id="Motorcycle_svg__f"
          x1={6.888}
          y1={108.778}
          x2={7.462}
          y2={123.129}
          gradientUnits="userSpaceOnUse"
        />
        <linearGradient
          xlinkHref="#Motorcycle_svg__b"
          id="Motorcycle_svg__g"
          x1={6.888}
          y1={108.778}
          x2={7.462}
          y2={123.129}
          gradientUnits="userSpaceOnUse"
        />
        <filter
          id="Motorcycle_svg__c"
          x={0}
          width={1}
          y={0}
          height={1}
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur />
        </filter>
        <filter id="glow">
            <feGaussianBlur stdDeviation={2.5} result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        <filter id="Motorcycle_svg__e" colorInterpolationFilters="sRGB">
          <feSpecularLighting
            surfaceScale={0}
            specularConstant={2}
            specularExponent={16.5}
          >
            <feDistantLight elevation={32} azimuth={228} />
          </feSpecularLighting>
          <feComposite result="result0" operator="atop" in2="SourceGraphic" />
          <feMorphology
            radius={1.7}
            result="result1"
            in="SourceAlpha"
            operator="dilate"
          />
          <feComposite in="result0" in2="result1" />
        </filter>
        <radialGradient
          xlinkHref="#Motorcycle_svg__a"
          id="Motorcycle_svg__d"
          cx={101.029}
          cy={69.029}
          fx={101.029}
          fy={69.029}
          r={75.341}
          gradientTransform="matrix(-.97508 0 0 -.59413 199.54 113.34)"
          gradientUnits="userSpaceOnUse"
        />
      </defs>
      <g transform="translate(-14.56 -24.765)" filter="url(#Motorcycle_svg__c)">
        <ellipse
          id="brake_light"
          cx={102.23}
          cy={80.346}
          rx={75.341}
          ry={53.385}
          fill="url(#Motorcycle_svg__d)"
          paintOrder="markers stroke fill"
        />
      </g>
      <g filter="url(#Motorcycle_svg__e)" transform="translate(-14.56 -24.765)">
        <path
          fill="#333"
          fillRule="evenodd"
          d="M32.62 68.697l43.474-15.823 2.26 6.21L34.88 74.908z"
        />
        <path
          fill="url(#Motorcycle_svg__f)"
          fillRule="evenodd"
          d="M75.785 41.811H86.58v97.155H75.785z"
        />
        <path
          fill="#333"
          fillRule="evenodd"
          d="M169.19 74.908l-43.475-15.824 2.26-6.21 43.475 15.823z"
        />
        <path
          fill="url(#Motorcycle_svg__g)"
          fillRule="evenodd"
          d="M117.093 41.811h10.795v97.155h-10.795z"
        />
        <path
          fill="#1a1a1a"
          d="M71.82 87.328h59.703v9.033H71.82zM24.776 74.907h2.864v11.676h-2.864z"
        />
        <path
          fill="#784421"
          d="M24.69 70.674l31.26-11.378 2.938 8.074-31.26 11.378z"
        />
        <path fill="#1a1a1a" d="M176.306 74.907h2.864v11.676h-2.864z" />
        <path
          fill="#784421"
          d="M176.306 78.748l-31.26-11.377 2.939-8.074 31.26 11.377z"
        />
        <path
          fill="gray"
          d="M77.373 39.429h7.74v2.381h-7.74zM118.56 39.429h7.74v2.381h-7.74z"
        />
        <g transform="translate(21.259 21.763)" fill="#333">
          <ellipse cx={79.881} cy={16.715} rx={8.151} ry={3.331} />
          <path d="M71.73 16.831h16.3v9.498h-16.3z" />
        </g>
        <g transform="rotate(-20 198.851 20.611) scale(.4)" stroke="#000" onClick={props.clickRight}>
          <path
            id="right_signal_light"
            d="M40.95 20.342l-13.322 3.57v14.22L40.95 41.7z"
            fill="gray"
            strokeLinejoin="round"
          />
          <rect
            width={4.227}
            height={21.358}
            x={40.949}
            y={20.342}
            ry={0.091}
            fill="#1a1a1a"
            strokeLinecap="square"
          />
        </g>
        <g transform="scale(-.4 .4) rotate(-20 242.21 1497.24)" stroke="#000" onClick={props.clickLeft}>
          <path
            id="left_signal_light"
            d="M40.95 20.342l-13.322 3.57v14.22L40.95 41.7z"
            fill="gray"
            strokeLinejoin="round"
          />
          <rect
            width={4.227}
            height={21.358}
            x={40.949}
            y={20.342}
            ry={0.091}
            fill="#1a1a1a"
            strokeLinecap="square"
          />
        </g>
        <path fill="#333" d="M74.892 52.298h8.023v9.653h-8.023z" />
        <path fill="#1a1a1a" d="M71.861 43.348h59.703v9.033H71.861z" />
        <rect
          width={7.917}
          height={9.591}
          x={120.613}
          y={52.36}
          ry={0}
          fill="#333"
        />
        <g fill="gray" paintOrder="markers stroke fill">
          <path d="M33.152 82.438L65.46 67.96l1.293 2.884-32.309 14.477z" />
          <path d="M58.36 65.254l4.904-2.198 2.197 4.904-4.904 2.198z" />
        </g>
        <g fill="gray" paintOrder="markers stroke fill">
          <path d="M170.893 82.62l-32.309-14.477-1.292 2.885L169.6 85.505z" />
          <path d="M145.685 65.436l-4.904-2.197-2.198 4.904 4.904 2.197z" />
        </g>
        <path
          fill="#784421"
          paintOrder="markers stroke fill"
          d="M52.58 57.303l1.485-.541 4.824 13.253-1.486.54zM151.355 57.302l-1.485-.54-4.824 13.253 1.485.54z"
        />
        <path
          fill="#1a1a1a"
          d="M54.516 58.4l13.871-5.05L72.23 63.91l-13.87 5.049zM145.575 68.957l-13.87-5.048 3.843-10.559 13.87 5.049z"
        />
        <circle cx={26.08} cy={91.868} r={9.473} fill="#333" />
        <circle cx={177.61} cy={91.868} r={9.473} fill="#333" />
        <circle cx={101.231} cy={63.07} r={23.022} fillRule="evenodd" />
         <text
          id="neutral_indicator"
          opacity={props.neutral ? 1 : 0}
          fontFamily="sans-serif"
          fill="#0f0"
          paintOrder="markers stroke fill"
          fontWeight={700}
          fontSize={18}
          x={95}
          y={115}
        >
          {"N"}
        </text>
        <g onClick={props.clickHigh}>  
          <circle
            id="headlamp"
            cx={101.121}
            cy={63.18}
            r={17.955}
            fill={props.headlightOn ? "lightgray" : "#666"}
            fillRule="evenodd"
            filter={props.headlightOn ? "url(#glow)" : ""}
            />
          <path
            id="highbeam_indicator"
            transform="translate(15,25)"
            opacity={0.1}
            d="M88.025 32.365c-3.175 0-3.175 11.43 0 11.43s7.144-2.143 7.144-5.715-3.969-5.715-7.144-5.715m.08 9.842c-.318-.317-.873-1.746-.873-4.127 0-2.382.555-3.81.873-4.128 2.302.08 5.477 1.508 5.477 4.128 0 2.619-3.175 4.048-5.477 4.127m-8.811-9.684h5.953c-.159.318-.397.635-.476 1.112-.08.158-.08.317-.159.476h-5.318v-1.588m4.763 4.763h-4.763v-1.588h4.921c-.08.477-.08 1.032-.158 1.588m.555 4.762c.159.635.397 1.112.715 1.588h-5.954v-1.588h5.24m-.398-1.587h-4.921v-1.588h4.762c.08.556.08 1.112.16 1.588z"
            />
        </g>
      </g>
      <g onClick={props.clickHazard}>
        <path transform="translate(160, 5)
                         scale(.5)"
              fill="darkred"
              opacity={props.hazardOn ? 1 : 0.5}
              filter={props.hazardOn ? "url(#glow)" : ""}
              d="M12,12L14.33,16H9.68L12,12M12,8L6.21,18H17.8L12,8M12,2L1,21H23L12,2M12,6L19.53,19H4.47L12,6Z" />
      </g>
    </svg>
  );
}