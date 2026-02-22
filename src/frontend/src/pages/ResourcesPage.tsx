import { BookOpen, Download, ExternalLink } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ResourceCard from '../components/ResourceCard';
import BilingualText from '../components/BilingualText';
import { useLanguage } from '../contexts/LanguageContext';

export default function ResourcesPage() {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-amber-100 dark:bg-amber-900/20 rounded-full mb-4">
            <BookOpen className="h-12 w-12 text-amber-600" />
          </div>
          <h1 className="text-4xl font-bold mb-4">
            <BilingualText en="Resources" hi="संसाधन" />
          </h1>
          <p className="text-xl text-muted-foreground">
            <BilingualText
              en="Educational materials, guides, and external resources for cyber security awareness"
              hi="साइबर सुरक्षा जागरूकता के लिए शैक्षिक सामग्री, गाइड और बाहरी संसाधन"
            />
          </p>
        </div>

        <Tabs defaultValue="government" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="government">
              {t('Government', 'सरकारी')}
            </TabsTrigger>
            <TabsTrigger value="educational">
              {t('Educational', 'शैक्षिक')}
            </TabsTrigger>
            <TabsTrigger value="tools">
              {t('Tools', 'उपकरण')}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="government" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ResourceCard
                titleEn="CERT-In Resources"
                titleHi="CERT-In संसाधन"
                descriptionEn="Official guidelines, advisories, and best practices from India's Computer Emergency Response Team"
                descriptionHi="भारत की कंप्यूटर आपातकालीन प्रतिक्रिया टीम से आधिकारिक दिशानिर्देश, सलाह और सर्वोत्तम प्रथाएं"
                type="external"
                url="https://www.cert-in.org.in"
                category={t('Official', 'आधिकारिक')}
              />
              <ResourceCard
                titleEn="MeitY Cyber Security"
                titleHi="MeitY साइबर सुरक्षा"
                descriptionEn="Ministry of Electronics and IT resources on cyber security policies and initiatives"
                descriptionHi="इलेक्ट्रॉनिक्स और सूचना प्रौद्योगिकी मंत्रालय के साइबर सुरक्षा नीतियों और पहलों पर संसाधन"
                type="external"
                url="https://www.meity.gov.in"
                category={t('Official', 'आधिकारिक')}
              />
              <ResourceCard
                titleEn="Cyber Crime Portal"
                titleHi="साइबर क्राइम पोर्टल"
                descriptionEn="National portal for reporting cyber crimes and accessing safety resources"
                descriptionHi="साइबर अपराधों की रिपोर्ट करने और सुरक्षा संसाधनों तक पहुंचने के लिए राष्ट्रीय पोर्टल"
                type="external"
                url="https://cybercrime.gov.in"
                category={t('Official', 'आधिकारिक')}
              />
              <ResourceCard
                titleEn="Digital India Resources"
                titleHi="डिजिटल इंडिया संसाधन"
                descriptionEn="Educational materials on digital literacy and online safety from Digital India initiative"
                descriptionHi="डिजिटल इंडिया पहल से डिजिटल साक्षरता और ऑनलाइन सुरक्षा पर शैक्षिक सामग्री"
                type="external"
                url="https://www.digitalindia.gov.in"
                category={t('Official', 'आधिकारिक')}
              />
            </div>
          </TabsContent>

          <TabsContent value="educational" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ResourceCard
                titleEn="Cyber Threats Infographic"
                titleHi="साइबर खतरे इन्फोग्राफिक"
                descriptionEn="Visual guide to common cyber threats in Indian context including phishing, UPI fraud, and social engineering"
                descriptionHi="फ़िशिंग, UPI धोखाधड़ी और सोशल इंजीनियरिंग सहित भारतीय संदर्भ में सामान्य साइबर खतरों के लिए दृश्य गाइड"
                type="download"
                url="/assets/generated/cyber-threats-infographic.dim_800x600.png"
                category={t('Infographic', 'इन्फोग्राफिक')}
              />
              <ResourceCard
                titleEn="Password Security Guide"
                titleHi="पासवर्ड सुरक्षा गाइड"
                descriptionEn="Comprehensive guide on creating and managing strong passwords"
                descriptionHi="मजबूत पासवर्ड बनाने और प्रबंधित करने पर व्यापक गाइड"
                type="external"
                url="https://www.cert-in.org.in"
                category={t('Guide', 'गाइड')}
              />
              <ResourceCard
                titleEn="Social Media Safety Tips"
                titleHi="सोशल मीडिया सुरक्षा टिप्स"
                descriptionEn="Best practices for protecting your privacy on social media platforms"
                descriptionHi="सोशल मीडिया प्लेटफॉर्म पर अपनी गोपनीयता की रक्षा के लिए सर्वोत्तम प्रथाएं"
                type="external"
                url="https://www.cert-in.org.in"
                category={t('Guide', 'गाइड')}
              />
              <ResourceCard
                titleEn="Digital Wellbeing Resources"
                titleHi="डिजिटल कल्याण संसाधन"
                descriptionEn="Information on managing screen time and maintaining mental health in the digital age"
                descriptionHi="डिजिटल युग में स्क्रीन समय प्रबंधन और मानसिक स्वास्थ्य बनाए रखने पर जानकारी"
                type="external"
                url="https://www.meity.gov.in"
                category={t('Guide', 'गाइड')}
              />
            </div>
          </TabsContent>

          <TabsContent value="tools" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ResourceCard
                titleEn="Have I Been Pwned"
                titleHi="Have I Been Pwned"
                descriptionEn="Check if your email or phone has been compromised in a data breach"
                descriptionHi="जांचें कि क्या आपका ईमेल या फोन डेटा उल्लंघन में समझौता किया गया है"
                type="external"
                url="https://haveibeenpwned.com"
                category={t('Security Tool', 'सुरक्षा उपकरण')}
              />
              <ResourceCard
                titleEn="VirusTotal"
                titleHi="VirusTotal"
                descriptionEn="Scan files and URLs for viruses and malware"
                descriptionHi="वायरस और मैलवेयर के लिए फ़ाइलों और URL को स्कैन करें"
                type="external"
                url="https://www.virustotal.com"
                category={t('Security Tool', 'सुरक्षा उपकरण')}
              />
              <ResourceCard
                titleEn="Google Password Checkup"
                titleHi="Google पासवर्ड चेकअप"
                descriptionEn="Check the strength and security of your saved passwords"
                descriptionHi="अपने सहेजे गए पासवर्ड की ताकत और सुरक्षा की जांच करें"
                type="external"
                url="https://passwords.google.com/checkup"
                category={t('Security Tool', 'सुरक्षा उपकरण')}
              />
              <ResourceCard
                titleEn="Privacy Checkup Tools"
                titleHi="गोपनीयता चेकअप उपकरण"
                descriptionEn="Review and adjust privacy settings across your online accounts"
                descriptionHi="अपने ऑनलाइन खातों में गोपनीयता सेटिंग्स की समीक्षा और समायोजन करें"
                type="external"
                url="https://myaccount.google.com/privacycheckup"
                category={t('Security Tool', 'सुरक्षा उपकरण')}
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
