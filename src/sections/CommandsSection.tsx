import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { 
  Terminal, 
  Copy, 
  Check, 
  Play,
  Search,
  MessageSquare
} from 'lucide-react';
import { Input } from '@/components/ui/input';

const commands = [
  {
    command: '/start',
    description: 'Start the bot and connect your GitHub account',
    usage: '/start',
    example: 'Connects your GitHub PAT',
    category: 'Basic',
  },
  {
    command: '/repos',
    description: 'List all your GitHub repositories',
    usage: '/repos',
    example: 'Shows: my-project, telegram-bot, website...',
    category: 'Repository',
  },
  {
    command: '/uploadzip',
    description: 'Upload a ZIP file as a new repository',
    usage: '/uploadzip',
    example: 'Send ZIP file → Enter repo name',
    category: 'Repository',
  },
  {
    command: '/downloadrepo',
    description: 'Download a repository as ZIP file',
    usage: '/downloadrepo',
    example: 'Enter: my-project → Get ZIP',
    category: 'Repository',
  },
  {
    command: '/deleterepo',
    description: 'Delete a repository (with confirmation)',
    usage: '/deleterepo',
    example: 'Enter: old-project → Confirm deletion',
    category: 'Repository',
  },
  {
    command: '/setprivacy',
    description: 'Change repository visibility (public/private)',
    usage: '/setprivacy',
    example: 'Select repo → Choose visibility',
    category: 'Settings',
  },
  {
    command: '/fetchrepo',
    description: 'Download any public repository by URL',
    usage: '/fetchrepo',
    example: 'Enter: https://github.com/user/repo',
    category: 'Utility',
  },
  {
    command: '/help',
    description: 'Show help message with all commands',
    usage: '/help',
    example: 'Displays command list',
    category: 'Basic',
  },
  {
    command: '/cancel',
    description: 'Cancel current operation',
    usage: '/cancel',
    example: 'Stops ongoing process',
    category: 'Basic',
  },
];

const categories = ['All', 'Basic', 'Repository', 'Settings', 'Utility'];

function CommandCard({ cmd, index }: { cmd: typeof commands[0]; index: number }) {
  const [copied, setCopied] = useState(false);

  const copyCommand = () => {
    navigator.clipboard.writeText(cmd.command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      className="group relative bg-card border border-border rounded-xl overflow-hidden
                hover:border-primary-500/30 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -2 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border 
                    bg-secondary/30">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center">
            <Terminal className="w-4 h-4 text-primary-500" />
          </div>
          <code className="text-sm font-mono font-semibold text-foreground">
            {cmd.command}
          </code>
        </div>
        <motion.button
          onClick={copyCommand}
          className="w-8 h-8 rounded-lg flex items-center justify-center
                   bg-secondary hover:bg-primary-500/10 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          title="Copy command"
        >
          <AnimatePresence mode="wait">
            {copied ? (
              <motion.div
                key="check"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
              >
                <Check className="w-4 h-4 text-green-500" />
              </motion.div>
            ) : (
              <motion.div
                key="copy"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
              >
                <Copy className="w-4 h-4 text-muted-foreground" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <p className="text-sm text-muted-foreground">
          {cmd.description}
        </p>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs">
            <span className="text-muted-foreground">Usage:</span>
            <code className="px-2 py-0.5 rounded bg-secondary font-mono text-foreground">
              {cmd.usage}
            </code>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span className="text-muted-foreground">Example:</span>
            <span className="text-foreground">{cmd.example}</span>
          </div>
        </div>
      </div>

      {/* Category Badge */}
      <div className="absolute top-4 right-14">
        <span className="px-2 py-0.5 rounded-full text-[10px] font-medium
                       bg-secondary text-muted-foreground uppercase tracking-wider">
          {cmd.category}
        </span>
      </div>
    </motion.div>
  );
}

export function CommandsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCommands = commands.filter(cmd => {
    const matchesCategory = activeCategory === 'All' || cmd.category === activeCategory;
    const matchesSearch = cmd.command.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         cmd.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section
      ref={sectionRef}
      id="commands"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full 
                      bg-primary-500/5 blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full 
                      bg-secondary-500/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                     bg-secondary border border-border mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
          >
            <Terminal className="w-4 h-4 text-primary-500" />
            <span className="text-sm font-medium text-muted-foreground">
              Command Reference
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            All{' '}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 
                           dark:from-primary-400 dark:to-secondary-400 
                           bg-clip-text text-transparent">
              Commands
            </span>
          </motion.h2>

          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Simple, intuitive commands to manage your GitHub repositories 
            directly from Telegram.
          </motion.p>
        </div>

        {/* Search & Filter */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
        >
          {/* Search */}
          <div className="relative flex-1 max-w-md mx-auto sm:mx-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search commands..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-card border-border"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                          ${activeCategory === category
                            ? 'bg-primary-500 text-white'
                            : 'bg-secondary text-muted-foreground hover:text-foreground'
                          }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Commands Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredCommands.map((cmd, index) => (
              <CommandCard key={cmd.command} cmd={cmd} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredCommands.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <MessageSquare className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">No commands found</p>
          </motion.div>
        )}

        {/* Quick Start CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          <p className="text-muted-foreground mb-4">
            Ready to try these commands?
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
            <Play className="w-5 h-5" />
            <span>Start Using Bot</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
