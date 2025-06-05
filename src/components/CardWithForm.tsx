import * as React from "react"

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

export function CardWithForm() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create job opportunity</CardTitle>
        <CardDescription>Add your new opportunity in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Title</Label>
              <Input id="name" placeholder="Title of your opportunity" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Company</Label>
              <Input id="name" placeholder="Title of your opportunity" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Location</Label>
              <Input id="name" placeholder="Title of your opportunity" />
            </div>
            <div className="flex gap-7">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Category</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Internship</SelectItem>
                  <SelectItem value="sveltekit">Volunteering</SelectItem>
                  <SelectItem value="astro">Job</SelectItem>
                  <SelectItem value="nuxt">Research</SelectItem>
                  <SelectItem value="parttime">Part-time</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Year of Study</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Internship</SelectItem>
                  <SelectItem value="sveltekit">Volunteering</SelectItem>
                  <SelectItem value="astro">Job</SelectItem>
                  <SelectItem value="nuxt">Research</SelectItem>
                  <SelectItem value="parttime">Part-time</SelectItem>
                </SelectContent>
              </Select>
            </div>   
            </div>         
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button className="bg-gradient-to-r from-blue-600 to-blue-500 text-white">Deploy</Button>
      </CardFooter>
    </Card>
  )
}
