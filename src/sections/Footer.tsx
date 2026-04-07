import { motion } from 'framer-motion';
import { 
  Github, 
  MessageCircle, 
  Instagram, 
  Heart,
  ExternalLink
} from 'lucide-react';

const footerLinks = [
  {
    title: 'Product',
    links: [
      { name: 'Features', href: '#features' },
      { name: 'Commands', href: '#commands' },
      { name: 'How It Works', href: '#how-it-works' },
    ],
  },
  {
    title: 'Support',
    links: [
      { name: 'FAQ', href: '#faq' },
      { name: 'Contact', href: 'https://t.me/finial_GIT1_bot' },
    ],
  },
  {
    title: 'Developer',
    links: [
      { name: 'About', href: '#developer' },
      { name: 'GitHub', href: 'https://github.com/abbn7' },
      { name: 'Instagram', href: 'https://www.instagram.com/abdelhamed__nada' },
    ],
  },
];

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/abbn7' },
  { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/abdelhamed__nada' },
  { name: 'Telegram', icon: MessageCircle, href: 'https://t.me/finial_GIT1_bot' },
];

export function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="relative border-t border-border">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] 
                      bg-gradient-to-t from-primary-500/5 to-transparent 
                      rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="col-span-2 md:col-span-4 lg:col-span-2">
              <motion.a
                href="#hero"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#hero');
                }}
                className="inline-flex items-center gap-2 mb-4"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 
                              flex items-center justify-center">
                  <Github className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 
                               dark:from-primary-400 dark:to-secondary-400 bg-clip-text text-transparent">
                  GitHub Bot
                </span>
              </motion.a>
              
              <p className="text-muted-foreground max-w-sm mb-6">
                The most powerful GitHub management bot on Telegram. 
                Manage your repositories with simple commands.
              </p>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center
                             hover:bg-primary-500/10 transition-colors group"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    title={social.name}
                  >
                    <social.icon className="w-5 h-5 text-muted-foreground 
                                          group-hover:text-primary-500 transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Links */}
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h4 className="font-semibold text-foreground mb-4">
                  {group.title}
                </h4>
                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={link.name}>
                      {link.href.startsWith('#') ? (
                        <motion.a
                          href={link.href}
                          onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(link.href);
                          }}
                          className="text-muted-foreground hover:text-foreground 
                                   transition-colors inline-flex items-center gap-1"
                          whileHover={{ x: 2 }}
                        >
                          {link.name}
                        </motion.a>
                      ) : (
                        <motion.a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-foreground 
                                   transition-colors inline-flex items-center gap-1"
                          whileHover={{ x: 2 }}
                        >
                          {link.name}
                          <ExternalLink className="w-3 h-3" />
                        </motion.a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center sm:text-left">
              © {new Date().getFullYear()} GitHub Telegram Bot. All rights reserved.
            </p>
            
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by{' '}
              <a 
                href="https://github.com/abbn7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-500 hover:underline"
              >
                Abdelhamed Nada
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
