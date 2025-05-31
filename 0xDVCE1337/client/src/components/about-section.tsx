import { motion } from "framer-motion";
import { Users, GraduationCap, Search, Network } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  const features = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Learn cutting-edge cybersecurity techniques through workshops, CTF challenges, and hands-on training sessions.",
      color: "text-primary",
      borderColor: "neon-border",
    },
    {
      icon: Search,
      title: "Research",
      description: "Contribute to groundbreaking cybersecurity research and vulnerability discovery in a collaborative environment.",
      color: "text-secondary",
      borderColor: "neon-border-blue",
    },
    {
      icon: Network,
      title: "Community",
      description: "Connect with like-minded security professionals and build lasting relationships in the cybersecurity field.",
      color: "text-accent",
      borderColor: "neon-border-purple",
    },
  ];

  return (
    <section id="about" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-mono font-bold text-secondary mb-6 text-glow">
            <Users className="inline mr-4" />
            About 0xDVCE1337
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a community of cybersecurity enthusiasts dedicated to advancing digital security through ethical hacking, research, and education.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Cybersecurity team collaboration"
              className="rounded-xl shadow-2xl neon-border w-full h-auto"
            />
          </motion.div>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className={`${feature.borderColor} bg-background hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}>
                  <CardContent className="p-6">
                    <h3 className={`text-2xl font-mono font-semibold ${feature.color} mb-3 flex items-center`}>
                      <feature.icon className="mr-3 w-8 h-8" />
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
