import * as React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import axios from "axios"

type Job = {
  id: number;
  image: string;
  title: string;
  company: string;
  location: string;
  category: string;
  yearOfStudy: string[];
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
  deadline: string;
};

interface CardWithFormProps {
  onSuccess: (newJob: Job) => void;
}

export const CardWithForm: React.FC<CardWithFormProps> = ({ onSuccess }) => {
  const [title, setTitle] = useState("")
  const [company, setCompany] = useState("")
  const [location, setLocation] = useState("")
  const [category, setCategory] = useState("")
  const [yearOfStudy, setYearOfStudy] = useState<string[]>([])
  const [description, setDescription] = useState("")
  const [requirements, setRequirements] = useState<string[]>([])
  const [responsibilities, setResponsibilities] = useState<string[]>([])
  const [benefits, setBenefits] = useState<string[]>([])
  const [deadline, setDeadline] = useState("")


  // Временные значения для добавления в массивы
  const [inputReq, setInputReq] = useState("")
  const [inputResp, setInputResp] = useState("")
  const [inputBenefit, setInputBenefit] = useState("")
  const [inputYear, setInputYear] = useState("")

  const handleAddToArray = (value: string, setArray: React.Dispatch<React.SetStateAction<string[]>>, reset: () => void) => {
    if (value.trim()) {
      setArray(prev => [...prev, value.trim()])
      reset()
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const payload = {
      title,
      company,
      location,
      category,
      yearOfStudy,
      description,
      requirements,
      responsibilities,
      benefits,
      deadline,
    }

    console.log("🟢 Payload being sent:", payload)

    try {
      const token = localStorage.getItem("token")
      const response = await axios.post("http://localhost:8080/api/opportunities", payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      onSuccess(response.data)
    } catch (err) {
      console.error("Error adding opportunity:", err)
    }
  }

  return (
    <Card className="w-[350px]">
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <CardTitle>Create job opportunity</CardTitle>
          <CardDescription>Add your new opportunity in one-click.</CardDescription>
        </CardHeader>

        <CardContent>
          <div className="grid w-full items-center gap-4">
            <InputWithLabel id="title" label="Title" value={title} onChange={setTitle} />
            <InputWithLabel id="company" label="Company" value={company} onChange={setCompany} />
            <InputWithLabel id="location" label="Location" value={location} onChange={setLocation} />
            <InputWithLabel id="description" label="Description" value={description} onChange={setDescription} />
            <InputWithLabel id="deadline" label="Deadline (YYYY-MM-DD)" value={deadline} onChange={setDeadline} />

            {/* Category select */}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="category">Category</Label>
              <Select onValueChange={setCategory}>
                <SelectTrigger id="category">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="INTERNSHIP">Internship</SelectItem>
                  <SelectItem value="VOLUNTEERING">Volunteering</SelectItem>
                  <SelectItem value="JOB">Job</SelectItem>
                  <SelectItem value="RESEARCH">Research</SelectItem>
                  <SelectItem value="PART_TIME">Part-time</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Year of Study as tags */}
            <div className="flex flex-col space-y-1.5">
              <Label>Year of Study</Label>
              <div className="flex gap-2">
                <Input
                  value={inputYear}
                  placeholder="Add year (e.g., 1)"
                  onChange={(e) => setInputYear(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault()
                      handleAddToArray(inputYear, setYearOfStudy, () => setInputYear(""))
                    }
                  }}
                />
              </div>
              <ul className="list-disc text-sm text-muted-foreground pl-5">
                {yearOfStudy.map((item, idx) => <li key={idx}>{item}</li>)}
              </ul>
            </div>

            {/* Requirements */}
            <ArrayInput
              label="Requirements"
              value={inputReq}
              setValue={setInputReq}
              array={requirements}
              setArray={setRequirements}
            />

            {/* Responsibilities */}
            <ArrayInput
              label="Responsibilities"
              value={inputResp}
              setValue={setInputResp}
              array={responsibilities}
              setArray={setResponsibilities}
            />

            {/* Benefits */}
            <ArrayInput
              label="Benefits"
              value={inputBenefit}
              setValue={setInputBenefit}
              array={benefits}
              setArray={setBenefits}
            />
          </div>
        </CardContent>

        <CardFooter className="flex justify-between">
          <Button type="button" variant="outline">Cancel</Button>
          <Button type="submit" className="bg-gradient-to-r from-blue-600 to-blue-500 text-white">Deploy</Button>
        </CardFooter>
      </form>
    </Card>
  )
}

// Подпомощники

const InputWithLabel = ({ id, label, value, onChange }: {
  id: string
  label: string
  value: string
  onChange: (v: string) => void
}) => (
  <div className="flex flex-col space-y-1.5">
    <Label htmlFor={id}>{label}</Label>
    <Input id={id} value={value} onChange={(e) => onChange(e.target.value)} />
  </div>
)

const ArrayInput = ({ label, value, setValue, array, setArray }: {
  label: string
  value: string
  setValue: (v: string) => void
  array: string[]
  setArray: (arr: string[]) => void
}) => (
  <div className="flex flex-col space-y-1.5">
    <Label>{label}</Label>
    <Input
      value={value}
      placeholder={`Add ${label.toLowerCase()} and press Enter`}
      onChange={(e) => setValue(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.preventDefault()
          if (value.trim()) {
            setArray([...array, value.trim()])
            setValue("")
          }
        }
      }}
    />
    <ul className="list-disc text-sm text-muted-foreground pl-5">
      {array.map((item, idx) => <li key={idx}>{item}</li>)}
    </ul>
  </div>
)
