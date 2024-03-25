import React, { useEffect, useState } from "react";
import DataBar from "./DataBar";

interface IDataViewParams {
  dataLength: number;
  data: Array<{
    data: number;
    index?: number;
  }>;
  maxData: number;
}

function DataView(props: IDataViewParams): JSX.Element {
  const data = props.data;
  const dataLength = props.dataLength;
  const maxData = props.maxData;
  const [height, setHeight] = useState(0);
  const gridColumnString = "auto ".repeat(dataLength);

  useEffect(() => {
    const dataViewElement = document.querySelector(".DataView");
    if (dataViewElement !== null) {
      setHeight((dataViewElement as HTMLElement).offsetHeight);
    }
  }, []);

  return (
    <div
      className="DataView relative -bottom-[2px] m-auto grid h-[94%] w-[95%] items-end justify-evenly"
      style={{ gridTemplateColumns: gridColumnString }}
    >
      {data.map((item, index) => (
        <DataBar
          key={index}
          data={item.data}
          index={item.index}
          dataLength={dataLength}
          maxData={maxData}
          parentHeight={height}
        />
      ))}
    </div>
  );
}

export default DataView;
