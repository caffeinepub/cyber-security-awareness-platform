import { useNavigate } from '@tanstack/react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Brain, Building2, Lock, AlertCircle, BookOpen, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import BilingualText from '../components/BilingualText';
import { translations } from '../utils/translations';

export default function HomePage() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const sections = [
    {
      icon: Shield,
      titleEn: 'Online Safety',
      titleHi: 'ऑनलाइन सुरक्षा',
      descEn: 'Learn essential cyber security practices, password safety, and how to identify phishing attacks',
      descHi: 'आवश्यक साइबर सुरक्षा प्रथाओं, पासवर्ड सुरक्षा और फ़िशिंग हमलों की पहचान करना सीखें',
      path: '/online-safety',
      image: '/assets/generated/online-safety-icon.dim_200x200.png',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Brain,
      titleEn: 'Digital Wellbeing',
      titleHi: 'डिजिटल कल्याण',
      descEn: 'Understand the psychological impacts of excessive screen time and social media usage',
      descHi: 'अत्यधिक स्क्रीन समय और सोशल मीडिया उपयोग के मनोवैज्ञानिक प्रभावों को समझें',
      path: '/digital-wellbeing',
      image: '/assets/generated/digital-wellbeing-icon.dim_200x200.png',
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: Building2,
      titleEn: 'Government Initiatives',
      titleHi: 'सरकारी पहल',
      descEn: 'Explore Indian government programs and policies for cyber security awareness',
      descHi: 'साइबर सुरक्षा जागरूकता के लिए भारत सरकार के कार्यक्रमों और नीतियों का अन्वेषण करें',
      path: '/government-initiatives',
      image: '/assets/generated/govt-initiatives-icon.dim_200x200.png',
      color: 'from-blue-500 to-indigo-500',
    },
    {
      icon: Lock,
      titleEn: 'Security Measures',
      titleHi: 'सुरक्षा उपाय',
      descEn: 'Practical tools and techniques to protect your devices and personal information',
      descHi: 'अपने उपकरणों और व्यक्तिगत जानकारी की सुरक्षा के लिए व्यावहारिक उपकरण और तकनीकें',
      path: '/security-measures',
      image: '/assets/generated/security-measures-icon.dim_200x200.png',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: AlertCircle,
      titleEn: 'Report Cyber Crime',
      titleHi: 'साइबर अपराध रिपोर्ट करें',
      descEn: 'Access helplines and learn how to report cyber crimes to authorities',
      descHi: 'हेल्पलाइन तक पहुंचें और अधिकारियों को साइबर अपराध की रिपोर्ट करना सीखें',
      path: '/complaint-mechanisms',
      image: '/assets/generated/complaint-icon.dim_200x200.png',
      color: 'from-red-500 to-orange-500',
    },
    {
      icon: BookOpen,
      titleEn: 'Resources',
      titleHi: 'संसाधन',
      descEn: 'Download guides, infographics, and access external educational materials',
      descHi: 'गाइड, इन्फोग्राफिक्स डाउनलोड करें और बाहरी शैक्षिक सामग्री तक पहुंचें',
      path: '/resources',
      image: '/assets/generated/cyber-threats-infographic.dim_800x600.png',
      color: 'from-amber-500 to-yellow-500',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 dark:from-orange-950/20 dark:via-amber-950/20 dark:to-yellow-950/20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-6">
              <Shield className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
              <BilingualText
                en={translations.home.hero.title.en}
                hi={translations.home.hero.title.hi}
              />
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              <BilingualText
                en={translations.home.hero.subtitle.en}
                hi={translations.home.hero.subtitle.hi}
              />
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" onClick={() => navigate({ to: '/online-safety' })} className="gap-2">
                <BilingualText en="Get Started" hi="शुरू करें" />
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate({ to: '/complaint-mechanisms' })}>
                <AlertCircle className="h-5 w-5 mr-2" />
                <BilingualText en="Report Cyber Crime" hi="साइबर अपराध रिपोर्ट करें" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sections Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <Card
                key={section.path}
                className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-primary/50"
                onClick={() => navigate({ to: section.path })}
              >
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${section.color} shadow-lg`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    <BilingualText en={section.titleEn} hi={section.titleHi} />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    <BilingualText en={section.descEn} hi={section.descHi} />
                  </CardDescription>
                  <Button variant="ghost" className="mt-4 w-full group-hover:bg-primary/10">
                    <BilingualText en="Learn More" hi="और जानें" />
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">1930</div>
              <p className="text-muted-foreground">
                <BilingualText en="Cyber Crime Helpline" hi="साइबर क्राइम हेल्पलाइन" />
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <p className="text-muted-foreground">
                <BilingualText en="Support Available" hi="सहायता उपलब्ध" />
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <p className="text-muted-foreground">
                <BilingualText en="Free Resources" hi="मुफ्त संसाधन" />
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
