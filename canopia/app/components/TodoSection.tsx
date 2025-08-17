"use client"
import { ChevronDown, ChevronUp } from "lucide-react"
import TodoItem from "./TodoItem"

interface TodoTask {
  text: string
  completed: boolean
}

interface TodoSectionProps {
  title: string
  tasks: TodoTask[]
  expanded: boolean
  onToggle: () => void
}

export default function TodoSection({ title, tasks, expanded, onToggle }: TodoSectionProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm mb-4 overflow-hidden">
      <div className="flex items-center justify-between p-4 cursor-pointer bg-[#F4F1E9]" onClick={onToggle}>
        <h2 className="text-lg font-semibold text-[#2B463C]">{title}</h2>
        <button className="text-[#5F5B52]">{expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}</button>
      </div>
      {expanded && (
        <div className="p-4 space-y-2">
          {tasks.map((task, index) => (
            <TodoItem key={index} text={task.text} completed={task.completed} />
          ))}
        </div>
      )}
    </div>
  )
}

