import React, { useEffect, useState } from "react";

interface IDataBarParams {
  data: number;
  index: number | undefined;
  dataLength: number;
  maxData: number;
  parentHeight: number;
}

function DataBar(props: IDataBarParams): JSX.Element {
  const data = props.data;
  const index = props.index !== undefined && props.index + 1;
  const dataLength = props.dataLength;
  const maxData = props.maxData;
  const parentHeight = props.parentHeight;
  const elementHeight = (parentHeight * data) / maxData;
  const [elementWidth, setElementWidth] = useState(0);
  const maxWidth = 30;

  useEffect(() => {
    const dataViewElement = document.querySelector(".DataView");
    if (dataViewElement !== null) {
      const totalWidth = (dataViewElement as HTMLElement).offsetWidth;
      const elementWidth = Math.min((totalWidth * 0.9) / dataLength, maxWidth);
      setElementWidth(elementWidth);
    }
  }, [dataLength]);

  return (
    <div
      className="rounded-tl-sm rounded-tr-sm opacity-90"
      style={{
        height: elementHeight,
        width: elementWidth,
        backgroundColor: "white",
        gridColumn: `${index} / span 1`,
        gridRow: "1 / span 1",
      }}
    />
  );
}

export default DataBar;
