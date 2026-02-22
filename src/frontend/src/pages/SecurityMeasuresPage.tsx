import { Lock, Shield, Smartphone, Wifi, HardDrive, Key } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import BilingualText from '../components/BilingualText';

export default function SecurityMeasuresPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-purple-100 dark:bg-purple-900/20 rounded-full mb-4">
            <Lock className="h-12 w-12 text-purple-600" />
          </div>
          <h1 className="text-4xl font-bold mb-4">
            <BilingualText en="Security Measures" hi="सुरक्षा उपाय" />
          </h1>
          <p className="text-xl text-muted-foreground">
            <BilingualText
              en="Practical tools and techniques to protect your digital life"
              hi="अपने डिजिटल जीवन की सुरक्षा के लिए व्यावहारिक उपकरण और तकनीकें"
            />
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="antivirus" className="border rounded-lg px-6">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-purple-600" />
                <span className="font-semibold">
                  <BilingualText en="Antivirus Software" hi="एंटीवायरस सॉफ्टवेयर" />
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-4">
              <div>
                <h4 className="font-semibold mb-2">
                  <BilingualText en="Free Options for Students:" hi="छात्रों के लिए मुफ्त विकल्प:" />
                </h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>
                    <BilingualText
                      en="Windows Defender (built-in for Windows 10/11)"
                      hi="Windows Defender (Windows 10/11 के लिए अंतर्निर्मित)"
                    />
                  </li>
                  <li>
                    <BilingualText
                      en="Avast Free Antivirus - comprehensive protection"
                      hi="Avast Free Antivirus - व्यापक सुरक्षा"
                    />
                  </li>
                  <li>
                    <BilingualText
                      en="AVG AntiVirus Free - lightweight and effective"
                      hi="AVG AntiVirus Free - हल्का और प्रभावी"
                    />
                  </li>
                  <li>
                    <BilingualText
                      en="Bitdefender Antivirus Free Edition - minimal system impact"
                      hi="Bitdefender Antivirus Free Edition - न्यूनतम सिस्टम प्रभाव"
                    />
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">
                  <BilingualText en="Best Practices:" hi="सर्वोत्तम प्रथाएं:" />
                </h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>
                    <BilingualText
                      en="Keep antivirus software updated automatically"
                      hi="एंटीवायरस सॉफ्टवेयर को स्वचालित रूप से अपडेट रखें"
                    />
                  </li>
                  <li>
                    <BilingualText
                      en="Run regular full system scans (weekly recommended)"
                      hi="नियमित पूर्ण सिस्टम स्कैन चलाएं (साप्ताहिक अनुशंसित)"
                    />
                  </li>
                  <li>
                    <BilingualText
                      en="Enable real-time protection features"
                      hi="रीयल-टाइम सुरक्षा सुविधाओं को सक्षम करें"
                    />
                  </li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="2fa" className="border rounded-lg px-6">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-3">
                <Key className="h-5 w-5 text-purple-600" />
                <span className="font-semibold">
                  <BilingualText en="Two-Factor Authentication (2FA)" hi="दो-कारक प्रमाणीकरण (2FA)" />
                </span>
                <Badge variant="secondary">
                  <BilingualText en="Highly Recommended" hi="अत्यधिक अनुशंसित" />
                </Badge>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-4">
              <div>
                <h4 className="font-semibold mb-2">
                  <BilingualText en="What is 2FA?" hi="2FA क्या है?" />
                </h4>
                <p className="text-muted-foreground mb-4">
                  <BilingualText
                    en="Two-factor authentication adds an extra layer of security by requiring two forms of verification: something you know (password) and something you have (phone or security key)."
                    hi="दो-कारक प्रमाणीकरण दो प्रकार के सत्यापन की आवश्यकता के द्वारा सुरक्षा की एक अतिरिक्त परत जोड़ता है: कुछ जो आप जानते हैं (पासवर्ड) और कुछ जो आपके पास है (फोन या सुरक्षा कुंजी)।"
                  />
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">
                  <BilingualText en="Recommended 2FA Apps:" hi="अनुशंसित 2FA ऐप्स:" />
                </h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>
                    <BilingualText
                      en="Google Authenticator - simple and reliable"
                      hi="Google Authenticator - सरल और विश्वसनीय"
                    />
                  </li>
                  <li>
                    <BilingualText
                      en="Microsoft Authenticator - works across platforms"
                      hi="Microsoft Authenticator - प्लेटफार्मों में काम करता है"
                    />
                  </li>
                  <li>
                    <BilingualText
                      en="Authy - cloud backup and multi-device support"
                      hi="Authy - क्लाउड बैकअप और मल्टी-डिवाइस समर्थन"
                    />
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">
                  <BilingualText en="Enable 2FA on:" hi="2FA सक्षम करें:" />
                </h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>
                    <BilingualText
                      en="Email accounts (Gmail, Outlook, etc.)"
                      hi="ईमेल खाते (Gmail, Outlook, आदि)"
                    />
                  </li>
                  <li>
                    <BilingualText
                      en="Banking and financial apps"
                      hi="बैंकिंग और वित्तीय ऐप्स"
                    />
                  </li>
                  <li>
                    <BilingualText
                      en="Social media accounts"
                      hi="सोशल मीडिया खाते"
                    />
                  </li>
                  <li>
                    <BilingualText
                      en="Educational portals and college accounts"
                      hi="शैक्षिक पोर्टल और कॉलेज खाते"
                    />
                  </li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="vpn" className="border rounded-lg px-6">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-3">
                <Wifi className="h-5 w-5 text-purple-600" />
                <span className="font-semibold">
                  <BilingualText en="VPN (Virtual Private Network)" hi="VPN (वर्चुअल प्राइवेट नेटवर्क)" />
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-4">
              <div>
                <h4 className="font-semibold mb-2">
                  <BilingualText en="Why Use a VPN?" hi="VPN का उपयोग क्यों करें?" />
                </h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>
                    <BilingualText
                      en="Encrypts your internet connection for privacy"
                      hi="गोपनीयता के लिए आपके इंटरनेट कनेक्शन को एन्क्रिप्ट करता है"
                    />
                  </li>
                  <li>
                    <BilingualText
                      en="Protects data on public WiFi networks"
                      hi="सार्वजनिक WiFi नेटवर्क पर डेटा की सुरक्षा करता है"
                    />
                  </li>
                  <li>
                    <BilingualText
                      en="Hides your IP address and location"
                      hi="आपके IP पते और स्थान को छुपाता है"
                    />
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">
                  <BilingualText en="Free VPN Options:" hi="मुफ्त VPN विकल्प:" />
                </h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>
                    <BilingualText
                      en="ProtonVPN - unlimited data on free plan"
                      hi="ProtonVPN - मुफ्त योजना पर असीमित डेटा"
                    />
                  </li>
                  <li>
                    <BilingualText
                      en="Windscribe - 10GB free monthly data"
                      hi="Windscribe - 10GB मुफ्त मासिक डेटा"
                    />
                  </li>
                  <li>
                    <BilingualText
                      en="TunnelBear - 500MB free monthly (good for occasional use)"
                      hi="TunnelBear - 500MB मुफ्त मासिक (कभी-कभार उपयोग के लिए अच्छा)"
                    />
                  </li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="mobile" className="border rounded-lg px-6">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-3">
                <Smartphone className="h-5 w-5 text-purple-600" />
                <span className="font-semibold">
                  <BilingualText en="Mobile Security" hi="मोबाइल सुरक्षा" />
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-4">
              <div>
                <h4 className="font-semibold mb-2">
                  <BilingualText en="Essential Mobile Security Steps:" hi="आवश्यक मोबाइल सुरक्षा कदम:" />
                </h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>
                    <BilingualText
                      en="Enable screen lock with PIN, pattern, or biometric authentication"
                      hi="PIN, पैटर्न या बायोमेट्रिक प्रमाणीकरण के साथ स्क्रीन लॉक सक्षम करें"
                    />
                  </li>
                  <li>
                    <BilingualText
                      en="Keep your operating system and apps updated"
                      hi="अपने ऑपरेटिंग सिस्टम और ऐप्स को अपडेट रखें"
                    />
                  </li>
                  <li>
                    <BilingualText
                      en="Download apps only from official stores (Google Play, Apple App Store)"
                      hi="केवल आधिकारिक स्टोर (Google Play, Apple App Store) से ऐप्स डाउनलोड करें"
                    />
                  </li>
                  <li>
                    <BilingualText
                      en="Review app permissions and revoke unnecessary access"
                      hi="ऐप अनुमतियों की समीक्षा करें और अनावश्यक पहुंच रद्द करें"
                    />
                  </li>
                  <li>
                    <BilingualText
                      en="Enable 'Find My Device' feature for theft protection"
                      hi="चोरी सुरक्षा के लिए 'मेरा डिवाइस खोजें' सुविधा सक्षम करें"
                    />
                  </li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="backup" className="border rounded-lg px-6">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-3">
                <HardDrive className="h-5 w-5 text-purple-600" />
                <span className="font-semibold">
                  <BilingualText en="Data Backup" hi="डेटा बैकअप" />
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-4">
              <div>
                <h4 className="font-semibold mb-2">
                  <BilingualText en="3-2-1 Backup Rule:" hi="3-2-1 बैकअप नियम:" />
                </h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>
                    <BilingualText
                      en="Keep 3 copies of important data"
                      hi="महत्वपूर्ण डेटा की 3 प्रतियां रखें"
                    />
                  </li>
                  <li>
                    <BilingualText
                      en="Store on 2 different types of media"
                      hi="2 विभिन्न प्रकार के मीडिया पर संग्रहीत करें"
                    />
                  </li>
                  <li>
                    <BilingualText
                      en="Keep 1 copy offsite (cloud storage)"
                      hi="1 प्रति ऑफसाइट रखें (क्लाउड स्टोरेज)"
                    />
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">
                  <BilingualText en="Free Cloud Storage Options:" hi="मुफ्त क्लाउड स्टोरेज विकल्प:" />
                </h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>
                    <BilingualText
                      en="Google Drive - 15GB free"
                      hi="Google Drive - 15GB मुफ्त"
                    />
                  </li>
                  <li>
                    <BilingualText
                      en="Microsoft OneDrive - 5GB free (more with student account)"
                      hi="Microsoft OneDrive - 5GB मुफ्त (छात्र खाते के साथ अधिक)"
                    />
                  </li>
                  <li>
                    <BilingualText
                      en="Dropbox - 2GB free"
                      hi="Dropbox - 2GB मुफ्त"
                    />
                  </li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
