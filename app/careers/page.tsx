import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const jobOpenings = [
  {
    title: "Senior Blockchain Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Carbon Market Analyst",
    department: "Research",
    location: "Sydney, Australia",
    type: "Full-time",
  },
  {
    title: "UX/UI Designer",
    department: "Design",
    location: "Remote",
    type: "Contract",
  },
  // Add more job openings as needed
]

export default function CareersPage() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-8">Careers at ICXP</h1>
      <p className="text-xl mb-8">
        Join our mission to revolutionize the carbon credit market and combat climate change. We're looking for
        passionate individuals to help us build a more sustainable future.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Current Openings</h2>
      <div className="grid gap-4">
        {jobOpenings.map((job) => (
          <Card key={job.title}>
            <CardHeader>
              <CardTitle>{job.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div>
                  <Badge>{job.department}</Badge>
                  <span className="ml-2 text-muted-foreground">{job.location}</span>
                </div>
                <Badge variant="outline">{job.type}</Badge>
              </div>
              <Button className="mt-4">Apply Now</Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Why Join ICXP?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Work on cutting-edge technology in the carbon credit market</li>
          <li>Contribute to global efforts in combating climate change</li>
          <li>Flexible work arrangements and competitive compensation</li>
          <li>Opportunities for professional growth and development</li>
          <li>Be part of a diverse and inclusive team passionate about sustainability</li>
        </ul>
      </div>
    </div>
  )
}

