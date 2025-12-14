import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Coffee,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";

export const ContactSection = () => {
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });

  const accessKey = "22bba20b-ab19-4f4d-900b-e84eec06f502";

  const { submit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "Kane Personal Portfolio",
      subject: "New Contact Message from your Website",
    },
    onSuccess: (msg, data) => {
      toast({
        title: "Message sent! 🚀",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      reset();
    },
    onError: (msg, data) => {
      console.error("Web3Forms error:", msg, data);
      toast({
        title: "Something went wrong",
        description:
          msg || "Your message could not be sent. Please try again later.",
      });
    },
  });

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left side: contact info + socials */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:kaneon95@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    kaneon95@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Phone</h4>
                  <a
                    href="tel:+16478222594"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +1-(647)-822-2594
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">Toronto, ON, Canada</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/kane-denzil/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://x.com/meetdennyboy"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <Twitter />
                </a>
                <a
                  href="https://buymeacoffee.com/kanebernard"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <Coffee />
                </a>
              </div>
            </div>
          </div>

          {/* Right side: actual form wired to Web3Forms */}
          <div className="bg-card/60 border border-border/40 rounded-xl p-8 shadow-xs backdrop-blur">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form className="space-y-6" onSubmit={handleSubmit(submit)}>
              {/* Honeypot anti-spam field */}
              <input
                type="checkbox"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                style={{ display: "none" }}
                {...register("botcheck")}
              />

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  autoComplete="name"
                  className={cn(
                    "w-full px-4 py-3 rounded-md border bg-background text-sm",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60",
                    errors.name && "border-red-500"
                  )}
                  placeholder="Your name"
                  {...register("name", {
                    required: "Your name is required",
                    maxLength: 80,
                  })}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  autoComplete="email"
                  className={cn(
                    "w-full px-4 py-3 rounded-md border bg-background text-sm",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60",
                    errors.email && "border-red-500"
                  )}
                  placeholder="you@example.com"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Please enter a valid email",
                    },
                  })}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className={cn(
                    "w-full px-4 py-3 rounded-md border bg-background text-sm",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                  )}
                  placeholder="Hello, I'd like to talk about..."
                  {...register("subject")}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className={cn(
                    "w-full px-4 py-3 rounded-md border bg-background text-sm resize-none",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60",
                    errors.message && "border-red-500"
                  )}
                  placeholder="Tell me a bit about what you're building or what you need help with."
                  {...register("message", {
                    required: "Please enter a message",
                  })}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2",
                  isSubmitting && "opacity-80 cursor-not-allowed"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
