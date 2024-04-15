import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data01 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const data02 = [
    { name: 'Jan', value: 100 },
    { name: 'Feb', value: 170 },
    { name: 'Mar', value: 100 },
    { name: 'Apr', value: 80 },
    { name: 'May', value: 40 },
    { name: 'Jun', value: 30 },
    { name: 'Jul', value: 50 },
    { name: 'Aug', value: 100 },
    { name: 'Sep', value: 200 },
    { name: 'Oct', value: 150 },
    { name: 'Nov', value: 50 },
    { name: 'Dec', value: 130 },
];

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300'];

const Example = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={data01}
          dataKey="value"
          cx="50%"
          cy="50%"
          outerRadius={60}
          fill="#8884d8"
        >
          {data01.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Pie
          data={data02}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={90}
          fill="#82ca9d"
          label={({ name }) => name}
        >
          {data02.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default Example;
