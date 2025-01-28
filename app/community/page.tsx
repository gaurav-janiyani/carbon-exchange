"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ThumbsUp, MessageSquare, Share2 } from "lucide-react"

const forumPosts = [
  {
    id: 1,
    author: "Jane Doe",
    avatar: "/placeholder.svg",
    title: "Best practices for reforestation projects",
    content:
      "I'm starting a new reforestation project and would love to hear about best practices from experienced members. What are some key factors to consider for long-term success?",
    likes: 15,
    comments: 7,
    shares: 3,
    tags: ["Reforestation", "Best Practices"],
    timestamp: "2 hours ago",
  },
  {
    id: 2,
    author: "John Smith",
    avatar: "/placeholder.svg",
    title: "Upcoming carbon market regulations in Australia",
    content:
      "Has anyone heard about the proposed changes to carbon market regulations in Australia? I'd be interested in discussing potential impacts on project developers.",
    likes: 8,
    comments: 12,
    shares: 5,
    tags: ["Regulations", "Australia"],
    timestamp: "1 day ago",
  },
  {
    id: 3,
    author: "Emma Wilson",
    avatar: "/placeholder.svg",
    title: "Innovative monitoring techniques for blue carbon projects",
    content:
      "I've been researching new monitoring techniques for blue carbon projects. Would love to connect with others working in this space to share ideas!",
    likes: 23,
    comments: 9,
    shares: 7,
    tags: ["Blue Carbon", "Monitoring"],
    timestamp: "3 days ago",
  },
]

const events = [
  {
    id: 1,
    title: "ICXP Annual Conference",
    date: "2023-09-15",
    location: "Sydney, Australia",
    description: "Join us for our annual conference focusing on the future of carbon markets in Australia and beyond.",
  },
  {
    id: 2,
    title: "Webinar: Introduction to Carbon Credit Projects",
    date: "2023-07-20",
    location: "Online",
    description: "Learn the basics of developing and managing carbon credit projects in this informative webinar.",
  },
  {
    id: 3,
    title: "Workshop: Blockchain Technology in Carbon Trading",
    date: "2023-08-05",
    location: "Melbourne, Australia",
    description: "Explore how blockchain is revolutionizing carbon credit trading and verification processes.",
  },
]

export default function CommunityPage() {
  const [newPost, setNewPost] = useState({ title: "", content: "" })

  const handlePostSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the new post to your backend
    console.log("New post submitted:", newPost)
    setNewPost({ title: "", content: "" })
  }

  return (
    <main className="container py-8">
      <h1 className="text-4xl font-bold mb-8">ICXP Community</h1>

      <Tabs defaultValue="forum" className="space-y-8">
        <TabsList>
          <TabsTrigger value="forum">Forum</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
        </TabsList>

        <TabsContent value="forum" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Create a New Post</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handlePostSubmit} className="space-y-4">
                <Input
                  placeholder="Post Title"
                  value={newPost.title}
                  onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                />
                <Textarea
                  placeholder="What's on your mind?"
                  value={newPost.content}
                  onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                />
                <Button type="submit">Post</Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            {forumPosts.map((post) => (
              <Card key={post.id}>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src={post.avatar} />
                      <AvatarFallback>{post.author[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{post.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        Posted by {post.author} • {post.timestamp}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>{post.content}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {post.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="ghost" size="sm">
                    <ThumbsUp className="w-4 h-4 mr-2" />
                    {post.likes}
                  </Button>
                  <Button variant="ghost" size="sm">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    {post.comments}
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Share2 className="w-4 h-4 mr-2" />
                    {post.shares}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="events" className="space-y-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <Card key={event.id}>
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">
                    {event.date} • {event.location}
                  </p>
                  <p>{event.description}</p>
                </CardContent>
                <CardFooter>
                  <Button>Register</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </main>
  )
}

