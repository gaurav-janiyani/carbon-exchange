import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const activities = [
  {
    id: 1,
    user: "John Doe",
    action: "Purchased 100 carbon credits",
    timestamp: "2 hours ago",
    avatar: "/placeholder.svg",
    initials: "JD",
  },
  {
    id: 2,
    user: "Alice Smith",
    action: "Verified new project",
    timestamp: "5 hours ago",
    avatar: "/placeholder.svg",
    initials: "AS",
  },
  {
    id: 3,
    user: "Bob Johnson",
    action: "Listed 500 credits for sale",
    timestamp: "1 day ago",
    avatar: "/placeholder.svg",
    initials: "BJ",
  },
]

export function RecentActivity() {
  return (
    <div className="space-y-8">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={activity.avatar} alt={activity.user} />
            <AvatarFallback>{activity.initials}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{activity.user}</p>
            <p className="text-sm text-muted-foreground">{activity.action}</p>
          </div>
          <div className="ml-auto text-sm text-muted-foreground">{activity.timestamp}</div>
        </div>
      ))}
    </div>
  )
}

