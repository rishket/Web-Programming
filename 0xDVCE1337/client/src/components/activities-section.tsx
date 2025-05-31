import { motion } from "framer-motion";
import { Terminal, Flag, Presentation, Bug, Handshake, Award, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ActivitiesSection() {
  const activities = [
    {
      icon: Flag,
      title: "CTF Competitions",
      description: "Participate in Capture The Flag competitions to test your hacking skills against challenging scenarios.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      color: "text-primary",
      borderColor: "neon-border",
    },
    {
      icon: Presentation,
      title: "Workshops",
      description: "Learn from industry experts through hands-on workshops covering the latest cybersecurity tools and techniques.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      color: "text-secondary",
      borderColor: "neon-border-blue",
    },
    {
      icon: Bug,
      title: "Bug Bounty",
      description: "Join our bug bounty hunting teams and earn rewards while helping secure the digital world.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      color: "text-accent",
      borderColor: "neon-border-purple",
    },
    {
      icon: Handshake,
      title: "Networking",
      description: "Connect with cybersecurity professionals and expand your network through exclusive events and meetups.",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      color: "text-primary",
      borderColor: "neon-border",
    },
    {
      icon: Award,
      title: "Certification Prep",
      description: "Prepare for industry certifications like CISSP, CEH, and OSCP with our structured study groups.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      color: "text-secondary",
      borderColor: "neon-border-blue",
    },
    {
      icon: Github,
      title: "Open Source",
      description: "Contribute to open-source cybersecurity tools and build your portfolio while helping the community.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      color: "text-accent",
      borderColor: "neon-border-purple",
    },
  ];

  return (
    <section id="activities" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-mono font-bold text-accent mb-6 text-glow">
            <Terminal className="inline mr-4" />
            Our Activities
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Engage in diverse cybersecurity activities designed to enhance your skills and knowledge.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`${activity.borderColor} bg-card hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 overflow-hidden group`}>
                <div className="relative overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-8 text-center">
                  <activity.icon className={`${activity.color} text-4xl mb-4 mx-auto`} />
                  <h3 className={`text-2xl font-mono font-semibold ${activity.color} mb-4`}>
                    {activity.title}
                  </h3>
                  <p className="text-muted-foreground">{activity.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
