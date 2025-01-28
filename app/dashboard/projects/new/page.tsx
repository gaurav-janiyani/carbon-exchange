"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function NewProjectPage() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [location, setLocation] = useState("")
  const [creditType, setCreditType] = useState("")
  const [estimatedCredits, setEstimatedCredits] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the project data to your backend
    console.log("New project submitted:", { title, description, location, creditType, estimatedCredits })
    // Redirect to the projects list page after submission
    router.push("/dashboard/projects")
  }

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Submit New Project</h2>

      <Card>
        <CardHeader>
          <CardTitle>Project Details</CardTitle>
          <CardDescription>Provide information about your carbon credit project</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="title">Project Title</Label>
                <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="location">Location</Label>
                <Input id="location" value={location} onChange={(e) => setLocation(e.target.value)} required />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="creditType">Credit Type</Label>
                <Select value={creditType} onValueChange={setCreditType}>
                  <SelectTrigger id="creditType">
                    <SelectValue placeholder="Select credit type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ACCU">ACCU</SelectItem>
                    <SelectItem value="VCU">VCU</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="estimatedCredits">Estimated Credits</Label>
                <Input
                  id="estimatedCredits"
                  type="number"
                  value={estimatedCredits}
                  onChange={(e) => setEstimatedCredits(e.target.value)}
                  required
                />
              </div>
            </div>
            <Button type="submit" className="mt-6">
              Submit Project
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

