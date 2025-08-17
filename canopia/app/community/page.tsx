"use client"

import { useCommunityPageState } from "./hooks/useCommunityPageState"
import CommunityHeader from "./components/CommunityHeader"
import CommunityTabs from "./components/CommunityTabs"
import CommunitySearch from "./components/CommunitySearch"
import PostsList from "./components/PostsList"
import BottomNavigation from "@/components/bottom-navigation"

export default function CommunityPage() {
  const {
    isLoading,
    filteredPosts,
    activeTab,
    setActiveTab,
    searchQuery,
    setSearchQuery,
    navigateToPostDetails,
    navigateToCreatePost,
    navigateToAuthorProfile,
    toggleLike,
  } = useCommunityPageState()

  return (
    <div className="flex flex-col min-h-screen bg-[#F9F8F6]">
      <CommunityHeader onCreatePost={navigateToCreatePost} />

      <main className="flex-1 p-4 pb-20">
        <CommunityTabs activeTab={activeTab} onTabChange={setActiveTab} />
        <CommunitySearch searchQuery={searchQuery} onSearchChange={setSearchQuery} />
        <PostsList
          posts={filteredPosts}
          isLoading={isLoading}
          searchQuery={searchQuery}
          onPostClick={navigateToPostDetails}
          onAuthorClick={navigateToAuthorProfile}
          onLikeToggle={toggleLike}
        />
      </main>

      <BottomNavigation activeTab="community" />
    </div>
  )
}

