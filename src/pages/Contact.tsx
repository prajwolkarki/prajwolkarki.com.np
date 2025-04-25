import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, Mail, Send } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <Card className="w-full max-w-lg mx-auto shadow-lg border-none">
        <CardHeader className="text-center">
          <CheckCircle className="mx-auto text-green-500 w-12 h-12 mb-2" />
          <CardTitle>Message Sent!</CardTitle>
          <CardDescription>
            Thank you for your message. We'll get back to you soon.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button 
            className="w-full" 
            variant="outline"
            onClick={() => setSubmitted(false)}
          >
            Send another message
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="w-full h-full shadow-none py-4 border-none">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Contact Us</CardTitle>
        <CardDescription>
          Fill out the form below and we'll get back to you as soon as possible.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Your email address</Label>
              <Input id="email" type="email" placeholder="you@example.com" required />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="category">Category</Label>
              <Select defaultValue="general">
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General</SelectItem>
                  <SelectItem value="help">Help</SelectItem>
                  <SelectItem value="feedback">Feedback</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="message">Your message</Label>
              <Textarea 
                id="message" 
                placeholder="How can we help you?"
                rows={5}
                required
              />
            </div>
            
            <div className="grid gap-2">
              <Label>Emotion</Label>
              <div className="flex gap-2">
                <Tabs defaultValue="happy" className="w-full">
                  <TabsList className="grid grid-cols-3">
                    <TabsTrigger value="happy" className="text-lg">😍</TabsTrigger>
                    <TabsTrigger value="thanks" className="text-lg">👋</TabsTrigger>
                    <TabsTrigger value="gift" className="text-lg">🎁</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </div>
          </div>
          
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? (
              <span className="flex items-center">
                Processing
                <span className="ml-2 animate-spin">⟳</span>
              </span>
            ) : (
              <span className="flex items-center">
                <Send className="mr-2 h-4 w-4" /> Send Message
              </span>
            )}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between text-sm text-muted-foreground">
        <div className="flex items-center">
          <Mail className="mr-2 h-4 w-4" />
          <span>You can also contact us at: prajwolkarki609@gmail.com</span>
        </div>
      </CardFooter>
    </Card>
  );
}