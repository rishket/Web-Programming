import { motion } from "framer-motion";
import { Rocket, Info, Lock, Bug, Shield, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const floatingIcons = [
    { Icon: Lock, delay: 0, color: "text-primary", position: "top-20 left-10" },
    { Icon: Bug, delay: 1, color: "text-secondary", position: "top-40 right-20" },
    { Icon: Shield, delay: 2, color: "text-accent", position: "bottom-40 left-20" },
    { Icon: UserCheck, delay: 3, color: "text-primary", position: "bottom-20 right-10" },
  ];

  return (
    <section id="home" className="matrix-bg min-h-screen flex items-center justify-center relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="animate-float"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-mono font-bold mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="text-primary text-glow">0x</span>
            <span className="text-secondary text-glow">DVCE</span>
            <span className="text-accent text-glow">1337</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Elite cybersecurity club for ethical hackers, security researchers, and digital defenders at Diablo Valley College.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Button
              onClick={() => scrollToSection("contact")}
              className="neon-border bg-transparent text-primary px-8 py-3 font-mono font-semibold hover:bg-primary hover:text-background transition-all duration-300"
              size="lg"
            >
              <Rocket className="mr-2 h-5 w-5" />
              Join the Club
            </Button>
            <Button
              onClick={() => scrollToSection("about")}
              variant="outline"
              className="neon-border-blue border-secondary text-secondary px-8 py-3 font-mono font-semibold hover:bg-secondary hover:text-background transition-all duration-300"
              size="lg"
            >
              <Info className="mr-2 h-5 w-5" />
              Learn More
            </Button>
          </motion.div>
        </motion.div>

        {/* Floating Icons */}
        <div className="absolute inset-0 pointer-events-none">
          {floatingIcons.map(({ Icon, delay, color, position }, index) => (
            <motion.div
              key={index}
              className={`absolute ${position} ${color} text-2xl md:text-3xl`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 2,
                delay: delay,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 2,
              }}
              style={{
                animation: `float 6s ease-in-out infinite`,
                animationDelay: `${delay}s`,
              }}
            >
              <Icon className="w-8 h-8" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
