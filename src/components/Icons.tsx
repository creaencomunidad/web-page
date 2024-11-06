interface IconsProps {
  iconsName: string; // Allow single or multiple icon names
  fillColor?: string; // Expect a color code (e.g., #FFFFFF, rgb(255, 255, 255), etc.)
}

export default function Icons({ iconsName, fillColor }: IconsProps) {
  switch (iconsName) {
    case "FacebookIcon":
      return (
        <svg
          width="24px"
          height="24px"
          viewBox="-5 0 20 20"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          fill={fillColor || "currentColor"}
        >
          <g
            id="Dribbble-Light-Preview"
            transform="translate(-385.000000, -7399.000000)"
            fill={fillColor || "currentColor"}
          >
            <g id="icons" transform="translate(56.000000, 160.000000)">
              <path
                d="M335.821282,7259 L335.821282,7250 L338.553693,7250 L339,7246 L335.821282,7246 L335.821282,7244.052 C335.821282,7243.022 335.847593,7242 337.286884,7242 L338.744689,7242 L338.744689,7239.14 C338.744689,7239.097 337.492497,7239 336.225687,7239 C333.580004,7239 331.923407,7240.657 331.923407,7243.7 L331.923407,7246 L329,7246 L329,7250 L331.923407,7250 L331.923407,7259 L335.821282,7259 Z"
                id="facebook-[#176]"
              ></path>
            </g>
          </g>
        </svg>
      );

    case "TiktokIcon":
      return (
        <svg
          fill={fillColor || "currentColor"}
          width="24px"
          height="24px"
          viewBox="10 0 512 512"
          id="icons"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z"></path>
          </g>
        </svg>
      );

    case "WhatsappIcon":
      return (
        <svg
          fill={fillColor || "currentColor"}
          width="24px"
          height="24px"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_iconCarrier">
            <path d="M11.42 9.49c-.19-.09-1.1-.54-1.27-.61s-.29-.09-.42.1-.48.6-.59.73-.21.14-.4 0a5.13 5.13 0 0 1-1.49-.92 5.25 5.25 0 0 1-1-1.29c-.11-.18 0-.28.08-.38s.18-.21.28-.32a1.39 1.39 0 0 0 .18-.31.38.38 0 0 0 0-.33c0-.09-.42-1-.58-1.37s-.3-.32-.41-.32h-.4a.72.72 0 0 0-.5.23 2.1 2.1 0 0 0-.65 1.55A3.59 3.59 0 0 0 5 8.2 8.32 8.32 0 0 0 8.19 11c.44.19.78.3 1.05.39a2.53 2.53 0 0 0 1.17.07 1.93 1.93 0 0 0 1.26-.88 1.67 1.67 0 0 0 .11-.88c-.05-.07-.17-.12-.36-.21z"></path>
            <path d="M13.29 2.68A7.36 7.36 0 0 0 8 .5a7.44 7.44 0 0 0-6.41 11.15l-1 3.85 3.94-1a7.4 7.4 0 0 0 3.55.9H8a7.44 7.44 0 0 0 5.29-12.72zM8 14.12a6.12 6.12 0 0 1-3.15-.87l-.22-.13-2.34.61.62-2.28-.14-.23a6.18 6.18 0 0 1 9.6-7.65 6.12 6.12 0 0 1 1.81 4.37A6.19 6.19 0 0 1 8 14.12z"></path>
          </g>
        </svg>
      );

    case "InstagramIcon":
      return (
        <svg
          className="w-8 h-8"
          fill={fillColor || "currentColor"}
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          ></path>
        </svg>
      );

    case "EmailIcon":
      return (
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g id="icomoon-ignore"> </g>{" "}
            <path
              d="M29.229 13.342l-11.595-11.595c-0.436-0.436-1.016-0.677-1.633-0.677s-1.197 0.24-1.633 0.677l-2.528 2.528h-3.835v3.834l-5.332 5.331v17.491h26.656v-17.489l-0.099-0.099zM28.125 13.747l-4.129 4.129v-8.257l4.129 4.129zM15.121 2.5c0.47-0.47 1.289-0.47 1.759 0l1.774 1.774h-5.307l1.774-1.774zM19.719 5.34l3.211 3.212v10.39l-2.469 2.469-2.829-2.829c-0.436-0.436-1.016-0.677-1.633-0.677s-1.197 0.241-1.633 0.677l-2.871 2.87-2.426-2.426v-13.685h10.649zM4.38 13.24l3.624-3.624v8.343l-4.172-4.172 0.548-0.548zM3.738 16.058v-0.856l7.003 7.003-0.079 0.080-0.001-0.001-6.923 6.923v-13.149zM4.589 29.864l0.573-0.573h0.002l9.957-9.956c0.47-0.47 1.289-0.47 1.759 0l10.531 10.529h-22.822zM28.262 15.36v13.848l-7.046-7.043 7.046-7.046v0.242z"
              fill="#000000"
            >
              {" "}
            </path>{" "}
            <path d="M12.268 8.539h7.464v1.066h-7.464v-1.066z" fill="#000000">
              {" "}
            </path>{" "}
            <path d="M12.268 14.937h7.464v1.066h-7.464v-1.066z" fill="#000000">
              {" "}
            </path>{" "}
            <path d="M12.268 11.738h5.331v1.066h-5.331v-1.066z" fill="#000000">
              {" "}
            </path>{" "}
          </g>
        </svg>
      );

    case "PointerIcon":
      return (
        <svg
          fill={fillColor || "currentColor"}
          height="24px"
          width="24px"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 297 297"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <g>
              <path d="M294.077,251.199l-59.105-59.107l42.167-24.356c3.295-1.903,5.212-5.52,4.938-9.315c-0.274-3.796-2.692-7.101-6.226-8.51 L87.82,74.905c-3.686-1.472-7.895-0.605-10.702,2.201c-2.807,2.808-3.674,7.016-2.203,10.702l74.994,188.053 c1.41,3.534,4.715,5.953,8.511,6.227c3.796,0.276,7.414-1.642,9.316-4.938l24.354-42.167l59.101,59.107 c1.862,1.863,4.39,2.91,7.023,2.91c2.635,0,5.161-1.047,7.023-2.91l28.841-28.845C297.956,261.366,297.956,255.078,294.077,251.199 z"></path>{" "}
              <path d="M43.61,29.552c-3.879-3.876-10.166-3.877-14.047,0c-3.878,3.879-3.878,10.168,0,14.047l22.069,22.069 c1.939,1.939,4.48,2.909,7.023,2.909c2.541,0,5.083-0.97,7.022-2.909c3.879-3.879,3.879-10.167,0-14.046L43.61,29.552z"></path>{" "}
              <path d="M51.089,98.215c0-5.484-4.447-9.932-9.933-9.932H9.946c-5.485,0-9.933,4.447-9.933,9.932c0,5.485,4.447,9.933,9.933,9.933 h31.21C46.642,108.147,51.089,103.7,51.089,98.215z"></path>{" "}
              <path d="M47.063,128.869l-22.072,22.071c-3.878,3.879-3.878,10.168,0,14.046c1.94,1.939,4.482,2.909,7.023,2.909 c2.541,0,5.084-0.97,7.023-2.909l22.071-22.07c3.879-3.879,3.879-10.168,0-14.047C57.23,124.993,50.944,124.992,47.063,128.869z"></path>{" "}
              <path d="M98.222,51.078c5.485,0,9.933-4.447,9.933-9.933V9.932c0-5.485-4.447-9.932-9.933-9.932c-5.484,0-9.932,4.446-9.932,9.932 v31.214C88.29,46.631,92.737,51.078,98.222,51.078z"></path>{" "}
              <path d="M135.894,64.006c2.543,0,5.084-0.97,7.023-2.909l22.068-22.069c3.879-3.879,3.879-10.168,0-14.047 c-3.879-3.877-10.168-3.877-14.046,0l-22.068,22.07c-3.879,3.879-3.879,10.168,0,14.046 C130.811,63.036,133.352,64.006,135.894,64.006z"></path>{" "}
            </g>
          </g>
        </svg>
      );

    default: //instagram Icon ----> TODO
      return (
        <svg
          className="w-8 h-8"
          fill={fillColor || "currentColor"}
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          ></path>
        </svg>
      );
  }
}
