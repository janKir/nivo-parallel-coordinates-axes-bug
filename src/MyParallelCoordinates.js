import React from "react";
import { ParallelCoordinates } from "@nivo/parallel-coordinates";

const data = [
  {
    temp1: 16,
    temp2: 5,
    temp3: 24
  },
  {
    temp1: 26,
    temp2: 15,
    temp3: 4
  }
];

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyParallelCoordinates = () => (
  <ParallelCoordinates
    data={data}
    variables={[
      {
        key: "temp1",
        type: "linear",
        min: 0,
        max: 30,
        ticksPosition: "before",
        legend: "Axis1",
        legendPosition: "start",
        legendOffset: 20
      },
      {
        key: "temp2",
        type: "linear",
        min: 0,
        max: 30,
        ticksPosition: "before",
        legend: "Axis2",
        legendPosition: "start",
        legendOffset: 20
      },
      {
        key: "temp3",
        type: "linear",
        min: 0,
        max: 30,
        ticksPosition: "before",
        legend: "Axis3",
        legendPosition: "start",
        legendOffset: 20
      }
    ]}
    margin={{ top: 50, right: 60, bottom: 50, left: 60 }}
    animate={true}
    motionStiffness={90}
    motionDamping={12}
    strokeWidth={8}
    lineOpacity={0.95}
    width={500}
    height={400}
  />
);

export default MyParallelCoordinates;
