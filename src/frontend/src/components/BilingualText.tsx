import { useLanguage } from '../contexts/LanguageContext';

interface BilingualTextProps {
  en: string;
  hi: string;
  className?: string;
}

export default function BilingualText({ en, hi, className = '' }: BilingualTextProps) {
  const { language } = useLanguage();

  if (language === 'en') return <span className={className}>{en}</span>;
  if (language === 'hi') return <span className={className}>{hi}</span>;

  return (
    <span className={className}>
      <span className="block mb-1">{en}</span>
      <span className="block text-muted-foreground">{hi}</span>
    </span>
  );
}
