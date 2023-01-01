import * as React from "react"

const BrandsButtonIcon = (props) => (
  <svg
    width={26}
    height={8}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={3.667} cy={4} r={2.667} stroke="#1C274C" strokeWidth={1.5} />
    <circle
      opacity={0.5}
      cx={13}
      cy={4}
      r={2.667}
      stroke="#1C274C"
      strokeWidth={1.5}
    />
    <circle cx={22.333} cy={4} r={2.667} stroke="#1C274C" strokeWidth={1.5} />
  </svg>
)

export default BrandsButtonIcon
