import { Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(window.location.hostname || 'suraksha-shiksha');

  return (
    <footer className="border-t bg-muted/30 mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-3">
              {t('About', 'के बारे में')}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t(
                'A comprehensive cyber security awareness platform for Indian colleges.',
                'भारतीय कॉलेजों के लिए एक व्यापक साइबर सुरक्षा जागरूकता मंच।'
              )}
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-3">
              {t('Emergency Helplines', 'आपातकालीन हेल्पलाइन')}
            </h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>{t('Cyber Crime Helpline: 1930', 'साइबर क्राइम हेल्पलाइन: 1930')}</li>
              <li>{t('Women Helpline: 1091', 'महिला हेल्पलाइन: 1091')}</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-3">
              {t('Resources', 'संसाधन')}
            </h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>
                <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  cybercrime.gov.in
                </a>
              </li>
              <li>
                <a href="https://www.cert-in.org.in" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  CERT-In
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
          <p>
            © {currentYear} {t('Suraksha Shiksha', 'सुरक्षा शिक्षा')}. {t('All rights reserved.', 'सर्वाधिकार सुरक्षित।')}
          </p>
          <p className="mt-2 flex items-center justify-center gap-1">
            {t('Built with', 'के साथ बनाया गया')} <Heart className="h-4 w-4 text-red-500 fill-red-500" /> {t('using', 'उपयोग करके')}{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
