import * as React from "react"

const OrderBtnIcon = (props) => (
  <svg
    width={30}
    height={30}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m18.578 6.382 2 1.05c2.151 1.129 3.227 1.693 3.825 2.708C25 11.154 25 12.417 25 14.94v.117c0 2.525 0 3.788-.597 4.802-.598 1.015-1.674 1.58-3.825 2.709l-2 1.049C16.822 24.539 15.944 25 15 25s-1.822-.46-3.578-1.382l-2-1.05c-2.151-1.129-3.227-1.693-3.825-2.708C5 18.846 5 17.583 5 15.06v-.117c0-2.525 0-3.788.597-4.802.598-1.015 1.674-1.58 3.825-2.708l2-1.05C13.178 5.461 14.056 5 15 5s1.822.46 3.578 1.382Z"
      stroke="#1C274C"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <path
      opacity={0.5}
      d="m24 10.5-4 2M15 15l-9-4.5m9 4.5v9.5m0-9.5 4.5-2.25.5-.25m0 0V16m0-3.5-9.5-5"
      stroke="#1C274C"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </svg>
)

export default OrderBtnIcon
