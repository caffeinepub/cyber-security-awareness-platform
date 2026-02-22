import { Button } from '@/components/ui/button';
import { useLanguage } from '../contexts/LanguageContext';
import { Languages } from 'lucide-react';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const cycleLanguage = () => {
    if (language === 'both') setLanguage('en');
    else if (language === 'en') setLanguage('hi');
    else setLanguage('both');
  };

  const getLabel = () => {
    if (language === 'both') return 'EN | HI';
    if (language === 'en') return 'EN';
    return 'HI';
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={cycleLanguage}
      className="gap-2"
    >
      <Languages className="h-4 w-4" />
      <span className="font-medium">{getLabel()}</span>
    </Button>
  );
}
