"use client";
import React from "react";
import {
  BarChart as BarGraph,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Bar,
  Tooltip,
  CartesianGrid,
  BarChart,
} from "recharts";

type Props = {};

const data = [
  { name: 'M', view: 22, sale: 3, z: 73 },
  { name: 'T', view: 13, sale: 15, z: 32 },
  { name: 'W', view: 44, sale: 35, z: 23 },
  { name: 'T', view: 35, sale: 45, z: 20 },
  { name: 'F', view: 62, sale: 25, z: 29 },
  { name: 'S', view: 37, sale: 17, z: 61 },
  { name: 'S', view: 28, sale: 32, z: 45 },
];

export default function Chart({ }: Props) {
  return (
    <BarChart width={440} height={320} data={data} >
            <CartesianGrid />
            <XAxis dataKey="name" />
            <YAxis />
            <Bar dataKey="view" stackId="a" fill="#ed4a09" barSize={10}/>
            <Bar dataKey="sale" stackId="a" fill="#4baee3" barSize={10}/>
        </BarChart>
  );
}
