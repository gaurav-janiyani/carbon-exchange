"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function CommunityPage() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "Jane Doe",
      avatar: "/placeholder.svg",
      content: "Just completed my first carbon offset project! Excited to share the results with the community.",
      likes: 15,
      comments: 3,
      timestamp: "2 hours ago",
    },
    {
      id: 2,
      author: "John Smith",
      avatar: "/placeholder.svg",
      content: "Looking for partners on a reforestation project in Queensland. Any takers?",
      likes: 8,
      comments: 5,
      timestamp: "5 hours ago",
    },
  ])

  const [newPost, setNewPost] = useState("")

  const handlePostSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newPost.trim()) {
      const post = {
        id: posts.length + 1,
        author: "Current User",
        avatar: "/placeholder.svg",
        content: newPost,
        likes: 0,
        comments: 0,
        timestamp: "Just now",
      }
      setPosts([post, ...posts])
      setNewPost("")
    }
  }

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Community</h2>

      <Card>
        <CardHeader>
          <CardTitle>Create a Post</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handlePostSubmit}>
            <Textarea
              placeholder="What's on your mind?"
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              className="mb-2"
            />
            <Button type="submit">Post</Button>
          </form>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {posts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={post.avatar} />
                  <AvatarFallback>{post.author[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{post.author}</p>
                  <p className="text-sm text-muted-foreground">{post.timestamp}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p>{post.content}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="ghost">Like ({post.likes})</Button>
              <Button variant="ghost">Comment ({post.comments})</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

