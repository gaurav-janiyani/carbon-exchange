import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const teamMembers = [
  {
    name: "Ishaan Dutt",
    role: "Founder & CEO",
    avatar: "/placeholder.svg",
    bio: "Visionary leader with a passion for sustainable technology and carbon markets. Ishaan founded ICXP with the goal of revolutionizing the carbon credit industry and making it more accessible to all.",
  },
  // Add more team members here as needed
]

export default function TeamPage() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-8">Our Team</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member) => (
          <Card key={member.name}>
            <CardHeader>
              <Avatar className="w-24 h-24 mx-auto mb-4">
                <AvatarImage src={member.avatar} alt={member.name} />
                <AvatarFallback>{member.name[0]}</AvatarFallback>
              </Avatar>
              <CardTitle className="text-center">{member.name}</CardTitle>
              <p className="text-center text-muted-foreground">{member.role}</p>
            </CardHeader>
            <CardContent>
              <p className="text-center">{member.bio}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

