"use client"

import { Heart, MessageSquare, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { formatRelativeTime } from "@/app/profile/utils/format-date"
import { cn } from "@/lib/utils"
import Image from "next/image"
import type { CommunityPost } from "../hooks/useCommunityPageState"

interface PostCardProps {
  post: CommunityPost
  onPostClick: () => void
  onAuthorClick: () => void
  onLikeToggle: () => void
}

export default function PostCard({ post, onPostClick, onAuthorClick, onLikeToggle }: PostCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-[#D8D3CA] mb-4">
      <div className="p-4">
        <div className="flex items-center mb-3">
          <div
            className="relative h-10 w-10 rounded-full overflow-hidden mr-3 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation()
              onAuthorClick()
            }}
          >
            <Image
              src={post.author.avatar || "/placeholder.svg?height=40&width=40"}
              alt={post.author.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div
              className="text-sm font-medium text-[#2B463C] cursor-pointer"
              onClick={(e) => {
                e.stopPropagation()
                onAuthorClick()
              }}
            >
              {post.author.name}
            </div>
            <div className="text-xs text-[#5F5B52]">{formatRelativeTime(post.date)}</div>
          </div>
        </div>

        <h3 className="text-lg font-medium text-[#2B463C] mb-2 cursor-pointer" onClick={onPostClick}>
          {post.title}
        </h3>

        <p className="text-sm text-[#5F5B52] line-clamp-3 mb-3">{post.content}</p>

        {post.image && (
          <div className="relative h-48 w-full mb-3 cursor-pointer" onClick={onPostClick}>
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover rounded-lg" />
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-3">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="bg-[#F4F1E9] text-[#5F5B52] border-[#D8D3CA]">
              #{tag}
            </Badge>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                "flex items-center space-x-1 p-0 h-auto",
                post.isLiked ? "text-[#C64747]" : "text-[#5F5B52]",
              )}
              onClick={(e) => {
                e.stopPropagation()
                onLikeToggle()
              }}
            >
              <Heart className={cn("h-4 w-4", post.isLiked && "fill-[#C64747]")} />
              <span>{post.likes}</span>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="flex items-center space-x-1 text-[#5F5B52] p-0 h-auto"
              onClick={onPostClick}
            >
              <MessageSquare className="h-4 w-4" />
              <span>{post.comments}</span>
            </Button>
          </div>

          <Button variant="ghost" size="sm" className="text-[#5F5B52] p-0 h-auto">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

