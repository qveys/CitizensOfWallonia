"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { formatDateTime } from "../../utils/format-date"
import type { Comment } from "../types"
import { cn } from "@/lib/utils"

interface ReportCommentsProps {
  comments: Comment[]
  newComment: string
  onCommentChange: (value: string) => void
  onAddComment: () => void
}

export default function ReportComments({ comments, newComment, onCommentChange, onAddComment }: ReportCommentsProps) {
  return (
    <div className="px-4 py-2 mt-4">
      <h3 className="text-lg font-semibold text-[#2B463C] font-montserrat mb-3">Commentaires</h3>

      <div className="space-y-3 mb-4">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-white rounded-lg shadow-sm p-3">
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center">
                <span className={cn("font-medium", comment.isOfficial ? "text-[#2B463C]" : "text-[#2B2B2B]")}>
                  {comment.author}
                </span>
                {comment.isOfficial && (
                  <span className="ml-2 px-2 py-0.5 bg-[#688F4E] text-white text-xs rounded-full">Officiel</span>
                )}
              </div>
              <span className="text-xs text-[#5F5B52]">{formatDateTime(comment.date)}</span>
            </div>
            <p className="text-sm text-[#5F5B52]">{comment.text}</p>
          </div>
        ))}
      </div>

      {/* Add Comment */}
      <div className="bg-white rounded-lg shadow-sm p-3">
        <h4 className="text-sm font-medium text-[#2B463C] mb-2">Ajouter un commentaire</h4>
        <Textarea
          value={newComment}
          onChange={(e) => onCommentChange(e.target.value)}
          placeholder="Votre commentaire..."
          className="border-[#D8D3CA] min-h-[80px] mb-2"
        />
        <div className="flex justify-end">
          <Button
            onClick={onAddComment}
            className="bg-[#688F4E] hover:bg-[#82A768] text-white"
            disabled={!newComment.trim()}
          >
            <MessageCircle className="h-4 w-4 mr-1" />
            Commenter
          </Button>
        </div>
      </div>
    </div>
  )
}

