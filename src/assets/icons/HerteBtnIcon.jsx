import * as React from "react"

const HearteBtnIcon = (props) => (
  <svg
    width={30}
    height={30}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15 8.5C10.5 3.826 5 7.275 5 12.138c0 4.863 4.02 7.454 6.962 9.774C13 22.729 14 23.5 15 23.5"
      stroke="#1C274C"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <path
      opacity={0.5}
      d="M15 8.5c4.5-4.675 10-1.226 10 3.637 0 4.863-4.02 7.454-6.962 9.774C17 22.729 16 23.5 15 23.5"
      stroke="#1C274C"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </svg>
)

export default HearteBtnIcon
