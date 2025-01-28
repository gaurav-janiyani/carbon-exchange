"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { MapPin, Calendar, Leaf, Upload, AlertTriangle } from "lucide-react"
import { Progress } from "@/components/ui/progress"

const projectTypes = [
  { value: "reforestation", label: "Reforestation" },
  { value: "renewable-energy", label: "Renewable Energy" },
  { value: "energy-efficiency", label: "Energy Efficiency" },
  { value: "methane-capture", label: "Methane Capture" },
  { value: "sustainable-agriculture", label: "Sustainable Agriculture" },
]

const cobenefits = [
  { id: "biodiversity", label: "Biodiversity Conservation" },
  { id: "water", label: "Water Resource Management" },
  { id: "community", label: "Community Development" },
  { id: "education", label: "Education and Skills Development" },
  { id: "health", label: "Health and Well-being" },
]

export default function SubmitProjectPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    type: "",
    location: "",
    startDate: "",
    duration: "",
    estimatedCredits: "",
    methodology: "",
    cobenefits: [],
    verificationBody: "",
    documents: [],
    termsAgreed: false,
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (id) => {
    setFormData((prev) => ({
      ...prev,
      cobenefits: prev.cobenefits.includes(id)
        ? prev.cobenefits.filter((item) => item !== id)
        : [...prev.cobenefits, id],
    }))
  }

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files)
    setFormData((prev) => ({ ...prev, documents: [...prev.documents, ...files] }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the project data to your backend
    console.log("Project submitted:", formData)
    // Redirect to the projects list page after submission
    router.push("/dashboard/projects")
  }

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 4))
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1))

  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-8">Submit New Project</h1>

      <Card>
        <CardHeader>
          <CardTitle>Project Details</CardTitle>
          <CardDescription>Provide information about your carbon credit project</CardDescription>
        </CardHeader>
        <CardContent>
          <Progress value={step * 25} className="mb-4" />
          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="space-y-4">
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="title">Project Title</Label>
                  <Input id="title" name="title" value={formData.title} onChange={handleInputChange} required />
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="type">Project Type</Label>
                  <Select
                    name="type"
                    value={formData.type}
                    onValueChange={(value) => handleSelectChange("type", value)}
                  >
                    <SelectTrigger id="type">
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      {projectTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="location">Project Location</Label>
                  <div className="flex">
                    <MapPin className="w-4 h-4 mr-2 mt-3" />
                    <Input
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="startDate">Start Date</Label>
                  <div className="flex">
                    <Calendar className="w-4 h-4 mr-2 mt-3" />
                    <Input
                      id="startDate"
                      name="startDate"
                      type="date"
                      value={formData.startDate}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="duration">Project Duration (years)</Label>
                  <Input
                    id="duration"
                    name="duration"
                    type="number"
                    value={formData.duration}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="estimatedCredits">Estimated Carbon Credits</Label>
                  <div className="flex">
                    <Leaf className="w-4 h-4 mr-2 mt-3" />
                    <Input
                      id="estimatedCredits"
                      name="estimatedCredits"
                      type="number"
                      value={formData.estimatedCredits}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="methodology">Methodology</Label>
                  <Select
                    name="methodology"
                    value={formData.methodology}
                    onValueChange={(value) => handleSelectChange("methodology", value)}
                  >
                    <SelectTrigger id="methodology">
                      <SelectValue placeholder="Select methodology" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="vcs">Verified Carbon Standard (VCS)</SelectItem>
                      <SelectItem value="gs">Gold Standard</SelectItem>
                      <SelectItem value="cdm">Clean Development Mechanism (CDM)</SelectItem>
                      <SelectItem value="ace">Australian Carbon Credit Units (ACCUs)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <Label>Co-benefits</Label>
                  {cobenefits.map((benefit) => (
                    <div className="flex items-center space-x-2" key={benefit.id}>
                      <Checkbox
                        id={benefit.id}
                        checked={formData.cobenefits.includes(benefit.id)}
                        onCheckedChange={() => handleCheckboxChange(benefit.id)}
                      />
                      <label
                        htmlFor={benefit.id}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {benefit.label}
                      </label>
                    </div>
                  ))}
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="verificationBody">Verification Body</Label>
                  <Input
                    id="verificationBody"
                    name="verificationBody"
                    value={formData.verificationBody}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-4">
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="documents">Upload Project Documents</Label>
                  <div className="flex items-center justify-center w-full">
                    <label
                      htmlFor="documents"
                      className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" />
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">PDF, DOC, XLS (MAX. 10MB per file)</p>
                      </div>
                      <input
                        id="documents"
                        name="documents"
                        type="file"
                        className="hidden"
                        multiple
                        onChange={handleFileUpload}
                      />
                    </label>
                  </div>
                </div>
                {formData.documents.length > 0 && (
                  <div>
                    <h4 className="font-medium mb-2">Uploaded Documents:</h4>
                    <ul className="list-disc list-inside">
                      {formData.documents.map((doc, index) => (
                        <li key={index}>{doc.name}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="termsAgreed"
                    checked={formData.termsAgreed}
                    onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, termsAgreed: checked }))}
                  />
                  <label
                    htmlFor="termsAgreed"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I agree to the terms and conditions
                  </label>
                </div>
              </div>
            )}

            <div className="flex justify-between mt-6">
              {step > 1 && (
                <Button type="button" variant="outline" onClick={prevStep}>
                  Previous
                </Button>
              )}
              {step < 4 ? (
                <Button type="button" onClick={nextStep}>
                  Next
                </Button>
              ) : (
                <Button type="submit" disabled={!formData.termsAgreed}>
                  Submit Project
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

