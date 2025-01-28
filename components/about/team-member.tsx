"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface TeamMemberProps {
  name: string
  role: string
  avatar: string
  description: string
}

export function TeamMember({ name, role, avatar, description }: TeamMemberProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="w-full max-w-md"
    >
      <Card>
        <CardHeader>
          <div className="flex items-center space-x-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src={avatar} alt={name} />
              <AvatarFallback>{name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-2xl">{name}</CardTitle>
              <p className="text-lg text-muted-foreground">{role}</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-base">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

