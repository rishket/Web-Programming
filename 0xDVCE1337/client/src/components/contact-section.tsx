import { useState } from "react";
import { motion } from "framer-motion";
import { Satellite, Info, Mail, MapPin, Clock, Rocket, Loader2 } from "lucide-react";
import { SiInstagram, SiDiscord, SiGithub, SiX } from "react-icons/si";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    if (!formData.email.includes("@")) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Message Sent!",
      description: "We'll get back to you soon.",
    });

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", interest: "", message: "" });
    }, 3000);
  };

  const socialLinks = [
    { icon: SiInstagram, href: "#", color: "text-primary hover:text-white" },
    { icon: SiDiscord, href: "https://discord.gg/Ae3ZUXP7", color: "text-secondary hover:text-white" },
    { icon: SiGithub, href: "https://github.com/rishket/0xDVCE1337", color: "text-accent hover:text-white" }
    // { icon: SiX, href: "#", color: "text-primary hover:text-white" },
  ];

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-mono font-bold text-primary mb-6 text-glow">
            <Satellite className="inline mr-4" />
            Get Connected
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Interested in joining our cybersecurity club? Feel free to contact us:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="neon-border bg-background">
              <CardContent className="p-8">
                <h3 className="text-2xl font-mono font-semibold text-secondary mb-6 flex items-center">
                  <Info className="mr-3" />
                  Contact Information
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Mail className="text-primary text-xl w-6 flex-shrink-0" />
                    <span className="text-muted-foreground">k3rn3lp4nic@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="text-secondary text-xl w-6 flex-shrink-0" />
                    <span className="text-muted-foreground">Virtual & On-Campus</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Clock className="text-accent text-xl w-6 flex-shrink-0" />
                    <span className="text-muted-foreground">24/7 Discord Community</span>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="mt-8">
                  <h4 className="text-xl font-mono font-semibold text-foreground mb-4">Follow Us</h4>
                  <div className="flex space-x-6">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        className={`${social.color} text-2xl transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_10px_currentColor]`}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <social.icon />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="neon-border bg-background">
              <CardContent className="p-8">
                <h3 className="text-2xl font-mono font-semibold text-primary mb-6 flex items-center">
                  <Rocket className="mr-3" />
                  Send Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-muted-foreground">Name</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="mt-2 bg-card border-muted focus:border-primary"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-muted-foreground">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="mt-2 bg-card border-muted focus:border-secondary"
                    />
                  </div>

                  <div>
                    <Label htmlFor="interest" className="text-muted-foreground">Interest</Label>
                    <Select value={formData.interest} onValueChange={(value) => setFormData({ ...formData, interest: value })}>
                      <SelectTrigger className="mt-2 bg-card border-muted focus:border-accent">
                        <SelectValue placeholder="Select your interest" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="membership">Club Membership</SelectItem>
                        <SelectItem value="workshops">Workshops</SelectItem>
                        <SelectItem value="ctf">CTF Competitions</SelectItem>
                        <SelectItem value="collaboration">Collaboration</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-muted-foreground">Message</Label>
                    <Textarea
                      id="message"
                      rows={4}
                      placeholder="Tell us about your cybersecurity interests..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="mt-2 bg-card border-muted focus:border-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className={`w-full font-mono font-semibold transition-all duration-300 ${
                      isSubmitted
                        ? "bg-green-600 text-white hover:bg-green-600"
                        : "neon-border bg-transparent text-primary hover:bg-primary hover:text-background"
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : isSubmitted ? (
                      <>
                        <Rocket className="mr-2 h-4 w-4" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Rocket className="mr-2 h-4 w-4" />
                        Launch Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
