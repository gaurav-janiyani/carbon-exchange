"use client"

import { useState, useEffect } from "react"
import { Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

type Notification = {
  id: string
  title: string
  message: string
  read: boolean
}

export function Notifications() {
  const [notifications, setNotifications] = useState<Notification[]>([])

  useEffect(() => {
    // Simulating fetching notifications from an API
    const fetchedNotifications: Notification[] = [
      {
        id: "1",
        title: "New Project Available",
        message: "A new reforestation project is now open for investment.",
        read: false,
      },
      {
        id: "2",
        title: "Credit Sale Complete",
        message: "Your recent sale of 100 carbon credits has been processed.",
        read: false,
      },
      {
        id: "3",
        title: "Verification Update",
        message: "Your project 'Solar Farm Initiative' has passed the initial verification stage.",
        read: true,
      },
    ]
    setNotifications(fetchedNotifications)
  }, [])

  const unreadCount = notifications.filter((n) => !n.read).length

  const markAsRead = (id: string) => {
    setNotifications(notifications.map((n) => (n.id === id ? { ...n, read: true } : n)))
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <Bell className="h-4 w-4" />
          {unreadCount > 0 && (
            <Badge
              variant="destructive"
              className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 text-xs flex items-center justify-center"
            >
              {unreadCount}
            </Badge>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80">
        <DropdownMenuLabel>Notifications</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {notifications.length === 0 ? (
          <DropdownMenuItem>No new notifications</DropdownMenuItem>
        ) : (
          notifications.map((notification) => (
            <DropdownMenuItem key={notification.id} onSelect={() => markAsRead(notification.id)}>
              <div className="flex flex-col">
                <span className="font-medium">{notification.title}</span>
                <span className="text-sm text-muted-foreground">{notification.message}</span>
              </div>
            </DropdownMenuItem>
          ))
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

