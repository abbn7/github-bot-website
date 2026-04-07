import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageCircle, Key, Play, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Start the Bot',
    description: 'Open Telegram and search for @finial_GIT1_bot. Click Start to begin your journey.',
    icon: MessageCircle,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    number: '02',
    title: 'Connect GitHub',
    description: 'Use /start command and enter your GitHub Personal Access Token. Your token is encrypted and secure.',
    icon: Key,
    color: 'from-purple-500 to-violet-500',
  },
  {
    number: '03',
    title: 'Start Managing',
    description: 'Use simple commands to view, upload, download, and manage all your repositories effortlessly.',
    icon: Play,
    color: 'from-green-500 to-emerald-500',
  },
];

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={cardRef}
      className="relative"
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <div className="relative flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-10">
        {/* Number Circle */}
        <motion.div
          className={`relative flex-shrink-0 w-20 h-20 rounded-2xl 
                     bg-gradient-to-br ${step.color} p-[2px]`}
          whileHover={{ scale: 1.05, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
            <span className={`text-2xl font-bold bg-gradient-to-br ${step.color} 
                            bg-clip-text text-transparent`}>
              {step.number}
            </span>
          </div>
          
          {/* Glow */}
          <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} 
                          opacity-20 blur-xl -z-10`} />
        </motion.div>

        {/* Content */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <step.icon className={`w-5 h-5 bg-gradient-to-br ${step.color} 
                                  bg-clip-text text-transparent`}
                      style={{ color: index === 0 ? '#3b82f6' : index === 1 ? '#8b5cf6' : '#22c55e' }} />
            <h3 className="text-xl lg:text-2xl font-bold text-foreground">
              {step.title}
            </h3>
          </div>
          <p className="text-muted-foreground leading-relaxed max-w-lg">
            {step.description}
          </p>
        </div>

        {/* Arrow (except last) */}
        {index < steps.length - 1 && (
          <motion.div
            className="hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 
                     w-10 h-10 items-center justify-center"
            initial={{ opacity: 0, x: -10 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5 + index * 0.2 }}
          >
            <ArrowRight className="w-6 h-6 text-muted-foreground/30" />
          </motion.div>
        )}
      </div>

      {/* Connector Line */}
      {index < steps.length - 1 && (
        <motion.div
          className="hidden lg:block absolute left-10 top-20 w-0.5 h-16 
                   bg-gradient-to-b from-border to-transparent"
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
          style={{ originY: 0 }}
        />
      )}
    </motion.div>
  );
}

export function HowItWorksSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-full h-px 
                      bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                     bg-secondary border border-border mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
          >
            <Play className="w-4 h-4 text-primary-500" />
            <span className="text-sm font-medium text-muted-foreground">
              Quick Start
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            Get Started in{' '}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 
                           dark:from-primary-400 dark:to-secondary-400 
                           bg-clip-text text-transparent">
              3 Easy Steps
            </span>
          </motion.h2>

          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            No complicated setup. Connect your GitHub account and start managing 
            your repositories in less than a minute.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="space-y-12 lg:space-y-16">
          {steps.map((step, index) => (
            <StepCard key={step.number} step={step} index={index} />
          ))}
        </div>

        {/* Video/Demo Placeholder */}
        <motion.div
          className="mt-16 lg:mt-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <div className="relative rounded-2xl overflow-hidden bg-card border border-border 
                        shadow-2xl">
            {/* Mock Chat Interface */}
            <div className="bg-gray-900 p-4 lg:p-6">
              {/* Chat Header */}
              <div className="flex items-center gap-3 pb-4 border-b border-gray-800">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 
                              flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-white font-medium">GitHub Bot</div>
                  <div className="flex items-center gap-1 text-xs text-green-400">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    Online
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="space-y-4 py-4">
                {/* Bot Message */}
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 
                                flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-gray-800 rounded-2xl rounded-tl-sm px-4 py-3 max-w-md">
                    <p className="text-gray-200 text-sm">
                      Welcome to GitHub Bot! 🚀
                    </p>
                    <p className="text-gray-300 text-sm mt-2">
                      Please send your GitHub Personal Access Token to connect your account.
                    </p>
                  </div>
                </div>

                {/* User Message */}
                <div className="flex gap-3 justify-end">
                  <div className="bg-primary-600 rounded-2xl rounded-tr-sm px-4 py-3 max-w-md">
                    <p className="text-white text-sm font-mono">
                      ghp_xxxxxxxxxxxxxxxxxxxx
                    </p>
                  </div>
                </div>

                {/* Bot Response */}
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 
                                flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-gray-800 rounded-2xl rounded-tl-sm px-4 py-3 max-w-md">
                    <p className="text-green-400 text-sm">
                      ✅ Account connected successfully!
                    </p>
                    <p className="text-gray-300 text-sm mt-2">
                      Use /repos to see your repositories.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute -inset-px bg-gradient-to-r from-primary-500/20 to-secondary-500/20 
                          rounded-2xl blur-xl -z-10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
