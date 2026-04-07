import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Github, 
  Instagram, 
  MessageCircle, 
  ExternalLink,
  Code2,
  Heart,
  Sparkles,
  Award,
  Zap
} from 'lucide-react';

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/abbn7',
    icon: Github,
    color: 'from-gray-700 to-gray-900',
    bgColor: 'bg-gray-500/10',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/abdelhamed__nada',
    icon: Instagram,
    color: 'from-pink-500 to-purple-500',
    bgColor: 'bg-pink-500/10',
  },
  {
    name: 'Telegram',
    url: 'https://t.me/finial_GIT1_bot',
    icon: MessageCircle,
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-500/10',
  },
];

const stats = [
  { value: '3+', label: 'Years Experience', icon: Code2 },
  { value: '50+', label: 'Projects Built', icon: Zap },
  { value: '10K+', label: 'Happy Users', icon: Heart },
];

export function DeveloperSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      ref={sectionRef}
      id="developer"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] 
                      bg-gradient-to-b from-primary-500/5 to-transparent 
                      rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                     bg-secondary border border-border mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
          >
            <Sparkles className="w-4 h-4 text-primary-500" />
            <span className="text-sm font-medium text-muted-foreground">
              Meet the Developer
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            Built with{' '}
            <span className="text-red-500">♥</span>
            {' '}by{' '}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 
                           dark:from-primary-400 dark:to-secondary-400 
                           bg-clip-text text-transparent">
              Abdelhamed Nada
            </span>
          </motion.h2>
        </div>

        {/* Profile Card */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          <div className="relative bg-card border border-border rounded-3xl p-8 lg:p-12 
                        overflow-hidden">
            {/* Glow Effect */}
            <div className="absolute -inset-px bg-gradient-to-r from-primary-500/10 
                          to-secondary-500/10 rounded-3xl blur-xl" />

            <div className="relative grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
              {/* Avatar Section */}
              <div className="lg:col-span-1 text-center">
                <motion.div
                  className="relative inline-block"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Avatar Ring */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary-500 
                                to-secondary-500 rounded-full opacity-20 blur-lg" />
                  
                  {/* Avatar */}
                  <div className="relative w-32 h-32 lg:w-40 lg:h-40 rounded-full 
                                bg-gradient-to-br from-primary-500 to-secondary-500 
                                p-1 mx-auto">
                    <div className="w-full h-full rounded-full bg-card flex items-center 
                                  justify-center overflow-hidden">
                      <span className="text-4xl lg:text-5xl font-bold bg-gradient-to-br 
                                     from-primary-500 to-secondary-500 bg-clip-text 
                                     text-transparent">
                        AN
                      </span>
                    </div>
                  </div>

                  {/* Online Badge */}
                  <div className="absolute bottom-2 right-2 w-6 h-6 rounded-full 
                                bg-green-500 border-4 border-card" />
                </motion.div>

                <motion.h3
                  className="mt-6 text-2xl font-bold text-foreground"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.4 }}
                >
                  Abdelhamed Nada
                </motion.h3>
                <motion.p
                  className="text-muted-foreground"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.5 }}
                >
                  Full-Stack Developer
                </motion.p>

                {/* Social Links */}
                <motion.div
                  className="flex justify-center gap-3 mt-6"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 }}
                >
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 rounded-xl ${social.bgColor} 
                                flex items-center justify-center
                                hover:scale-110 transition-transform`}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      title={social.name}
                    >
                      <social.icon className={`w-5 h-5 bg-gradient-to-br ${social.color} 
                                              bg-clip-text text-transparent`}
                                  style={{ color: social.name === 'GitHub' ? '#6b7280' : 
                                                social.name === 'Instagram' ? '#ec4899' : '#3b82f6' }} />
                    </motion.a>
                  ))}
                </motion.div>
              </div>

              {/* Bio Section */}
              <div className="lg:col-span-2">
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 }}
                >
                  <p className="text-lg text-foreground leading-relaxed">
                    Passionate software developer specializing in building automation tools 
                    and Telegram bots. I created this GitHub Bot to help developers manage 
                    their repositories more efficiently without leaving Telegram.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    With expertise in Python, React, and cloud technologies, I focus on 
                    creating solutions that make developers&apos; lives easier. This bot is 
                    built with security and performance in mind, ensuring your GitHub 
                    credentials are always protected.
                  </p>
                </motion.div>

                {/* Stats */}
                <motion.div
                  className="grid grid-cols-3 gap-4 mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 }}
                >
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      className="text-center p-4 rounded-xl bg-secondary/50"
                      whileHover={{ scale: 1.02 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <stat.icon className="w-5 h-5 text-primary-500 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">
                        {stat.value}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* CTA */}
                <motion.div
                  className="flex flex-wrap gap-4 mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 }}
                >
                  <motion.a
                    href="https://github.com/abbn7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full
                             bg-foreground text-background font-semibold
                             hover:bg-foreground/90 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Github className="w-5 h-5" />
                    <span>View GitHub</span>
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>

                  <motion.a
                    href="https://www.instagram.com/abdelhamed__nada"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full
                             bg-gradient-to-r from-pink-500 to-purple-500 
                             text-white font-semibold
                             hover:from-pink-400 hover:to-purple-400
                             transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Instagram className="w-5 h-5" />
                    <span>Follow on Instagram</span>
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quote */}
        <motion.blockquote
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <p className="text-xl lg:text-2xl text-muted-foreground italic max-w-2xl mx-auto">
            &ldquo;The best code is no code at all. But when you need code, 
            make it simple, secure, and scalable.&rdquo;
          </p>
          <footer className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Award className="w-4 h-4 text-primary-500" />
            <span>Abdelhamed Nada</span>
          </footer>
        </motion.blockquote>
      </div>
    </section>
  );
}
