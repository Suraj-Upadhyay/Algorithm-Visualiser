import { useEffect, useState } from "react";
import "./DataBar.css";

function DataBar(props) {
  const data = props.data;
  const index = props.index + 1;
  const dataLength = props.dataLength;
  const maxData = props.maxData;
  const parentHeight = props.parentHeight;
  const elementHeight = parentHeight * data / maxData;
  const [elementWidth, setElementWidth] = useState(0);
  const maxWidth = 30;

  useEffect(
    () => {
      const totalWidth = document.querySelector(".DataView").offsetWidth;
      const elementWidth = Math.min(totalWidth * 0.9 / dataLength, maxWidth);
      setElementWidth(elementWidth);
    },
    [dataLength]
  );

  return (
    <div
      className="DataBar"
      style={{
        height: elementHeight,
        width: elementWidth,
        backgroundColor: "white",
        gridColumn: `${index} / span 1`,
        gridRow: "1 / span 1"
      }}
    />
  );
}

export default DataBar;
