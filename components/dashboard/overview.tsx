"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Jan",
    total: 240,
  },
  {
    name: "Feb",
    total: 320,
  },
  {
    name: "Mar",
    total: 280,
  },
  {
    name: "Apr",
    total: 420,
  },
  {
    name: "May",
    total: 380,
  },
  {
    name: "Jun",
    total: 460,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
        <Tooltip />
        <Line type="monotone" dataKey="total" stroke="#0284c7" strokeWidth={2} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  )
}

