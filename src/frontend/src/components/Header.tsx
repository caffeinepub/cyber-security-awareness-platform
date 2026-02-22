import { Link, useNavigate } from '@tanstack/react-router';
import { Shield, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { t } = useLanguage();

  const navItems = [
    { path: '/', label: t(translations.nav.home.en, translations.nav.home.hi) },
    { path: '/online-safety', label: t(translations.nav.onlineSafety.en, translations.nav.onlineSafety.hi) },
    { path: '/digital-wellbeing', label: t(translations.nav.digitalWellbeing.en, translations.nav.digitalWellbeing.hi) },
    { path: '/government-initiatives', label: t(translations.nav.govInitiatives.en, translations.nav.govInitiatives.hi) },
    { path: '/security-measures', label: t(translations.nav.securityMeasures.en, translations.nav.securityMeasures.hi) },
    { path: '/complaint-mechanisms', label: t(translations.nav.complaints.en, translations.nav.complaints.hi) },
    { path: '/resources', label: t(translations.nav.resources.en, translations.nav.resources.hi) },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Shield className="h-8 w-8 text-primary" />
            <span className="font-bold text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t(translations.branding.name.en, translations.branding.name.hi)}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.path}
                variant="ghost"
                size="sm"
                onClick={() => navigate({ to: item.path })}
                className="text-sm font-medium"
              >
                {item.label}
              </Button>
            ))}
          </nav>

          <div className="flex items-center space-x-2">
            <LanguageToggle />
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 space-y-2 border-t">
            {navItems.map((item) => (
              <Button
                key={item.path}
                variant="ghost"
                className="w-full justify-start"
                onClick={() => {
                  navigate({ to: item.path });
                  setMobileMenuOpen(false);
                }}
              >
                {item.label}
              </Button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
