import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MessageSquare } from "lucide-react"

export default function SupportPage() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-8">Support</h1>
      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <Input id="email" type="email" placeholder="Your email" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <Textarea id="message" placeholder="How can we help you?" />
              </div>
              <Button type="submit">Send Message</Button>
            </form>
          </CardContent>
        </Card>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Mail className="mr-2" />
                Email Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>support@icxp.com</p>
              <p className="text-sm text-muted-foreground mt-2">We aim to respond within 24 hours.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Phone className="mr-2" />
                Phone Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>+1 (555) 123-4567</p>
              <p className="text-sm text-muted-foreground mt-2">Available Monday to Friday, 9am - 5pm EST</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageSquare className="mr-2" />
                Live Chat
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Button>Start Live Chat</Button>
              <p className="text-sm text-muted-foreground mt-2">Available 24/7 for quick inquiries</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

