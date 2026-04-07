import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { 
  HelpCircle, 
  ChevronDown, 
  MessageCircle,
  Shield,
  Key,
  Lock,
  Zap
} from 'lucide-react';

const faqs = [
  {
    question: 'Is my GitHub token secure?',
    answer: 'Absolutely! Your GitHub Personal Access Token is encrypted using military-grade AES-256 encryption before being stored. We never share your credentials with third parties, and you can revoke access at any time by deleting your data or regenerating your token on GitHub.',
    icon: Shield,
  },
  {
    question: 'How do I get a GitHub Personal Access Token?',
    answer: 'Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic). Click "Generate new token", give it a name, select the required scopes (repo for full repository access), and generate. Copy the token and send it to the bot using /start command.',
    icon: Key,
  },
  {
    question: 'What permissions does the bot need?',
    answer: 'The bot needs the "repo" scope to access your repositories. This includes reading repository data, creating new repositories, deleting repositories (with your confirmation), and managing repository settings. The bot cannot access your GitHub password or other personal information.',
    icon: Lock,
  },
  {
    question: 'Can I use the bot for organization repositories?',
    answer: 'Yes! If your GitHub token has the necessary permissions for organization access, you can manage organization repositories just like personal ones. Make sure to grant the appropriate scopes when creating your token.',
    icon: Zap,
  },
  {
    question: 'Is there a limit on file size for ZIP uploads?',
    answer: 'Yes, the current limit for ZIP file uploads is 50MB per file. This ensures optimal performance and prevents server overload. For larger projects, consider splitting them into smaller repositories or using Git LFS.',
    icon: Zap,
  },
  {
    question: 'How do I disconnect my GitHub account?',
    answer: 'Simply use the /start command again with a new token, or contact the developer to have your data removed. You can also revoke the token on GitHub, which will immediately stop the bot from accessing your account.',
    icon: Shield,
  },
  {
    question: 'Can I download private repositories?',
    answer: 'Yes, you can download your own private repositories. The bot uses your GitHub token to authenticate and access your private repositories. You cannot download other users\' private repositories unless you have explicit access.',
    icon: Lock,
  },
  {
    question: 'What happens if I delete a repository?',
    answer: 'Repository deletion requires confirmation and is permanent. The bot will ask you to confirm before deleting any repository. Once deleted, the repository cannot be recovered from GitHub\'s servers. Make sure to download any important code before deletion.',
    icon: Shield,
  },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="border-b border-border last:border-b-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-4 py-5 text-left group"
        whileHover={{ x: 4 }}
        transition={{ duration: 0.2 }}
      >
        <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center 
                      flex-shrink-0 group-hover:bg-primary-500/20 transition-colors">
          <faq.icon className="w-5 h-5 text-primary-500" />
        </div>
        
        <span className="flex-1 text-lg font-medium text-foreground 
                       group-hover:text-primary-500 transition-colors">
          {faq.question}
        </span>
        
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-5 pl-14 pr-4">
              <p className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full 
                      bg-primary-500/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full 
                      bg-secondary-500/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                     bg-secondary border border-border mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
          >
            <HelpCircle className="w-4 h-4 text-primary-500" />
            <span className="text-sm font-medium text-muted-foreground">
              Got Questions?
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 
                           dark:from-primary-400 dark:to-secondary-400 
                           bg-clip-text text-transparent">
              Questions
            </span>
          </motion.h2>

          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Everything you need to know about the GitHub Telegram Bot. 
            Can&apos;t find what you&apos;re looking for? Contact the developer.
          </motion.p>
        </div>

        {/* FAQ List */}
        <motion.div
          className="bg-card border border-border rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
        >
          <div className="p-6 lg:p-8">
            {faqs.map((faq, index) => (
              <FAQItem key={index} faq={faq} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          <p className="text-muted-foreground mb-4">
            Still have questions?
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
            <MessageCircle className="w-5 h-5" />
            <span>Ask on Telegram</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
