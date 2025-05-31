import { motion } from "framer-motion";
import { Shield, UserCheck, Lock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            className="flex items-center mb-4 md:mb-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-2xl font-mono font-bold text-primary text-glow mr-4 flex items-center">
              <Shield className="mr-2" />
              0xDVCE1337
            </span>
            <span className="text-muted-foreground">Elite Cybersecurity Community</span>
          </motion.div>

          <motion.div
            className="flex items-center space-x-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-muted-foreground text-sm">© 2024 0xDVCE1337 Club. All rights reserved.</span>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
              >
                <UserCheck className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                className="text-muted-foreground hover:text-secondary transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
              >
                <Lock className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
