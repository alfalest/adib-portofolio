import React from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Send } from "lucide-react";

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="glass-card rounded-3xl p-8 md:p-12 overflow-hidden relative">
        {/* Background Decorative Element */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl" />

        <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-center md:text-left">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Let's build something <span className="text-gradient">awesome</span> together.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-zinc-600 dark:text-zinc-400 max-w-lg mb-8"
            >
              Looking for a collaborator for your next project or just want to say hi?
              My inbox is always open.
            </motion.p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:alfainiaff@gmail.com"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-colors shadow-lg shadow-blue-500/30"
              >
                <Mail size={20} />
                Send an Email
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/+6285162851060"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white dark:bg-zinc-800 border border-border px-6 py-3 rounded-full font-semibold transition-all hover:bg-gray-50 dark:hover:bg-zinc-700 shadow-lg"
              >
                <MessageSquare size={20} />
                WhatsApp
              </motion.a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden lg:block"
          >
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-8 rounded-full border border-white/20 backdrop-blur-sm">
              <Send size={80} className="text-blue-500" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
