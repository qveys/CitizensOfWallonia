import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface TodoItemProps {
  text: string
  completed: boolean
}

export default function TodoItem({ text, completed }: TodoItemProps) {
  return (
    <div className="flex items-center">
      <div
        className={cn(
          "w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mr-3",
          completed ? "bg-[#509555]" : "border border-[#A9A295]",
        )}
      >
        {completed && <Check className="h-3 w-3 text-white" />}
      </div>
      <span className={cn("text-[#2B2B2B]", completed && "line-through text-[#5F5B52]")}>{text}</span>
    </div>
  )
}

