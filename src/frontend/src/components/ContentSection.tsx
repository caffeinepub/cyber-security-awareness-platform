import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '../contexts/LanguageContext';
import { ReactNode } from 'react';

interface ContentSectionProps {
  titleEn: string;
  titleHi: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

export default function ContentSection({ titleEn, titleHi, icon, children, className = '' }: ContentSectionProps) {
  const { language } = useLanguage();

  const getTitle = () => {
    if (language === 'en') return titleEn;
    if (language === 'hi') return titleHi;
    return `${titleEn} | ${titleHi}`;
  };

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          {icon}
          <span>{getTitle()}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
