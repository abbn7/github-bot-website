import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Github, 
  MessageCircle, 
  ArrowRight, 
  Zap, 
  Shield, 
  Code2,
  ChevronDown
} from 'lucide-react';

// Animated Background Component
function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient Orbs */}
      <motion.div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(14, 165, 233, 0.15) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(14, 165, 233, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(14, 165, 233, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      
      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary-500/30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

// Stats Component
function Stats() {
  const stats = [
    { value: '10K+', label: 'Active Users', icon: Zap },
    { value: '50K+', label: 'Repos Managed', icon: Github },
    { value: '99.9%', label: 'Uptime', icon: Shield },
  ];

  return (
    <div className="flex flex-wrap justify-center lg:justify-start gap-6 lg:gap-10 mt-10">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          className="flex items-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 + index * 0.1 }}
        >
          <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center">
            <stat.icon className="w-5 h-5 text-primary-500" />
          </div>
          <div>
            <div className="text-2xl font-bold text-foreground">{stat.value}</div>
            <div className="text-xs text-muted-foreground">{stat.label}</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// Code Preview Component
function CodePreview() {
  const codeLines = [
    { text: '/start', color: 'text-primary-400', delay: 0 },
    { text: 'Welcome to GitHub Bot! 🚀', color: 'text-green-400', delay: 0.1 },
    { text: 'Connect your GitHub account...', color: 'text-muted-foreground', delay: 0.2 },
    { text: '/repos', color: 'text-primary-400', delay: 0.3 },
    { text: 'Your repositories:', color: 'text-green-400', delay: 0.4 },
    { text: '• my-awesome-project', color: 'text-yellow-400', delay: 0.5 },
    { text: '• telegram-bot', color: 'text-yellow-400', delay: 0.6 },
  ];

  return (
    <motion.div
      className="relative w-full max-w-md mx-auto lg:mx-0"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      {/* Glow Effect */}
      <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 
                    rounded-3xl blur-2xl opacity-50" />
      
      {/* Terminal Window */}
      <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl 
                    border border-gray-800">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-gray-800/50 border-b border-gray-700">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="flex-1 text-center">
            <span className="text-xs text-gray-400 font-mono">GitHub Bot</span>
          </div>
        </div>
        
        {/* Terminal Content */}
        <div className="p-4 font-mono text-sm space-y-2">
          {codeLines.map((line, index) => (
            <motion.div
              key={index}
              className={`${line.color}`}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + line.delay, duration: 0.3 }}
            >
              {line.text.startsWith('/') ? (
                <span className="flex items-center gap-2">
                  <span className="text-gray-500">$</span>
                  {line.text}
                </span>
              ) : (
                line.text
              )}
            </motion.div>
          ))}
          
          {/* Typing Cursor */}
          <motion.div
            className="flex items-center gap-2 text-primary-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <span className="text-gray-500">$</span>
            <motion.span
              className="w-2 h-4 bg-primary-400"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </div>
      
      {/* Floating Badge */}
      <motion.div
        className="absolute -bottom-4 -right-4 bg-card border border-border 
                  rounded-xl px-4 py-2 shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs font-medium">Bot Online</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <AnimatedBackground />
      
      <motion.div 
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32"
        style={{ y, opacity }}
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                       bg-primary-500/10 border border-primary-500/20 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full 
                               rounded-full bg-primary-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500" />
              </span>
              <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                Now Available on Telegram
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="text-foreground">Manage Your</span>
              <br />
              <span className="bg-gradient-to-r from-primary-600 via-secondary-600 
                             to-primary-600 dark:from-primary-400 dark:via-secondary-400 
                             dark:to-primary-400 bg-clip-text text-transparent 
                             animate-gradient-shift bg-[length:200%_auto]">
                GitHub Repos
              </span>
              <br />
              <span className="text-foreground">from Telegram</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="mt-6 text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              The most powerful GitHub management bot. View repositories, 
              upload ZIP files, download code, and control privacy — 
              all from the comfort of Telegram.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <motion.a
                href="https://t.me/finial_GIT1_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2 
                         px-8 py-4 rounded-full overflow-hidden
                         bg-gradient-to-r from-primary-600 to-secondary-600 
                         text-white font-semibold text-lg
                         shadow-lg shadow-primary-500/30
                         hover:shadow-primary-500/50 transition-shadow"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-primary-500 
                               to-secondary-500 opacity-0 group-hover:opacity-100 
                               transition-opacity duration-300" />
                <MessageCircle className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Start Using Bot</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href="#features"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#features')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 
                         px-8 py-4 rounded-full
                         bg-secondary text-foreground font-semibold text-lg
                         border border-border hover:bg-secondary/80
                         transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Code2 className="w-5 h-5" />
                <span>Explore Features</span>
              </motion.a>
            </motion.div>

            {/* Stats */}
            <Stats />
          </div>

          {/* Right Content - Code Preview */}
          <div className="hidden lg:block">
            <CodePreview />
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <motion.a
            href="#features"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#features')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex flex-col items-center gap-2 text-muted-foreground 
                     hover:text-foreground transition-colors cursor-pointer"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-xs font-medium uppercase tracking-wider">Scroll</span>
            <ChevronDown className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
