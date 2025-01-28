import React from "react"
import { cn } from "@/lib/utils"

export interface TimelineItem {
  title: string
  date: string
  description?: string
}

interface TimelineProps {
  items: TimelineItem[]
}

export function Timeline({ items }: TimelineProps) {
  return (
    <ol className="relative border-l border-gray-200 dark:border-gray-700">
      {items.map((item, index) => (
        <li key={index} className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{item.date}</time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
          {item.description && (
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{item.description}</p>
          )}
        </li>
      ))}
    </ol>
  )
}

