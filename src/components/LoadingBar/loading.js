import React from "react";
import "./loading.scss";

export default function Loading() {
  return (
    <svg className="loadAnim" width="120" height="120" viewBox="0 0 100 100">
      <polyline
        class="line-cornered stroke-still"
        points="0,0 100,0 100,100"
        stroke-width="10"
        fill="none"
      ></polyline>
      <polyline
        class="line-cornered stroke-still"
        points="0,0 0,100 100,100"
        stroke-width="10"
        fill="none"
      ></polyline>
      <polyline
        class="line-cornered stroke-animation"
        points="0,0 100,0 100,100"
        stroke-width="10"
        fill="none"
      ></polyline>
      <polyline
        class="line-cornered stroke-animation"
        points="0,0 0,100 100,100"
        stroke-width="10"
        fill="none"
      ></polyline>
    </svg>
  );
}
