import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Have a question or want to work with us? Send us a message!
          </p>
        </div>
        <form className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                Name
              </label>
              <Input id="name" type="text" placeholder="Your Name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                Email
              </label>
              <Input id="email" type="email" placeholder="Your Email" />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
              Message
            </label>
            <Textarea id="message" placeholder="Your Message" rows={5} />
          </div>
          <div className="text-center">
            <Button type="submit" size="lg">
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
}
