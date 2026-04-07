import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Github, 
  Upload, 
  Download, 
  Trash2, 
  Eye, 
  Zap,
  Lock,
  Globe,
  Settings
} from 'lucide-react';

const features = [
  {
    icon: Github,
    title: 'Repository Management',
    description: 'View all your GitHub repositories in one place. Get instant access to your code with a simple command.',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-500/10',
  },
  {
    icon: Upload,
    title: 'ZIP Upload',
    description: 'Upload any ZIP file and convert it to a GitHub repository automatically. Perfect for quick project deployment.',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-500/10',
  },
  {
    icon: Download,
    title: 'One-Click Download',
    description: 'Download any repository as a ZIP file instantly. Backup your code or share it with your team effortlessly.',
    color: 'from-purple-500 to-violet-500',
    bgColor: 'bg-purple-500/10',
  },
  {
    icon: Trash2,
    title: 'Safe Deletion',
    description: 'Delete repositories with confirmation prompts. Prevent accidental deletions with our safety mechanisms.',
    color: 'from-red-500 to-rose-500',
    bgColor: 'bg-red-500/10',
  },
  {
    icon: Eye,
    title: 'Privacy Control',
    description: 'Switch between public and private repositories with a single command. Manage visibility on the go.',
    color: 'from-amber-500 to-orange-500',
    bgColor: 'bg-amber-500/10',
  },
  {
    icon: Globe,
    title: 'Fetch Public Repos',
    description: 'Download any public repository from GitHub by simply sharing its URL. Great for learning and research.',
    color: 'from-pink-500 to-rose-500',
    bgColor: 'bg-pink-500/10',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Experience blazing fast operations with our optimized backend. No more waiting for responses.',
    color: 'from-yellow-500 to-amber-500',
    bgColor: 'bg-yellow-500/10',
  },
  {
    icon: Lock,
    title: 'Secure & Private',
    description: 'Your GitHub tokens are encrypted with military-grade security. We never store or share your credentials.',
    color: 'from-indigo-500 to-blue-500',
    bgColor: 'bg-indigo-500/10',
  },
  {
    icon: Settings,
    title: 'Easy Setup',
    description: 'Get started in seconds. Just connect your GitHub account with a Personal Access Token and you\'re ready.',
    color: 'from-teal-500 to-cyan-500',
    bgColor: 'bg-teal-500/10',
  },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={cardRef}
      className="group relative"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1]
      }}
    >
      <motion.div
        className="relative h-full p-6 lg:p-8 rounded-2xl 
                   bg-card border border-border 
                   hover:border-primary-500/30 transition-all duration-500
                   overflow-hidden"
        whileHover={{ 
          y: -8,
          transition: { duration: 0.3 }
        }}
      >
        {/* Hover Glow Effect */}
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 
                       transition-opacity duration-500 bg-gradient-to-br ${feature.color} 
                       opacity-5`} />
        
        {/* Icon */}
        <motion.div
          className={`relative w-14 h-14 rounded-xl ${feature.bgColor} 
                     flex items-center justify-center mb-5
                     group-hover:scale-110 transition-transform duration-300`}
          whileHover={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 0.5 }}
        >
          <feature.icon className={`w-7 h-7 bg-gradient-to-br ${feature.color} 
                                   bg-clip-text text-transparent`} 
                       style={{ color: 'inherit' }} />
          <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${feature.color} 
                          opacity-20`} />
        </motion.div>

        {/* Content */}
        <h3 className="text-xl font-bold text-foreground mb-3 
                      group-hover:text-primary-500 transition-colors duration-300">
          {feature.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {feature.description}
        </p>

        {/* Corner Decoration */}
        <div className={`absolute -bottom-10 -right-10 w-32 h-32 
                       bg-gradient-to-br ${feature.color} opacity-0 
                       group-hover:opacity-10 transition-opacity duration-500 
                       rounded-full blur-2xl`} />
      </motion.div>
    </motion.div>
  );
}

export function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      ref={sectionRef}
      id="features"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full 
                      bg-primary-500/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full 
                      bg-secondary-500/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                     bg-primary-500/10 border border-primary-500/20 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <Zap className="w-4 h-4 text-primary-500" />
            <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
              Powerful Features
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Everything You Need to{' '}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 
                           dark:from-primary-400 dark:to-secondary-400 
                           bg-clip-text text-transparent">
              Manage GitHub
            </span>
          </motion.h2>

          <motion.p
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our bot provides a complete suite of tools to manage your GitHub repositories 
            directly from Telegram. No more switching between apps.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 lg:mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-muted-foreground mb-6">
            And many more features coming soon...
          </p>
          <motion.a
            href="https://t.me/finial_GIT1_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full
                     bg-gradient-to-r from-primary-600 to-secondary-600 
                     text-white font-semibold
                     hover:from-primary-500 hover:to-secondary-500
                     transition-all duration-300 shadow-lg shadow-primary-500/25"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Github className="w-5 h-5" />
            <span>Try It Now</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
