import { Shield, Lock, Mail, Share2, ShoppingCart, Wifi } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import ContentSection from '../components/ContentSection';
import BilingualText from '../components/BilingualText';

export default function OnlineSafetyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-orange-100 dark:bg-orange-900/20 rounded-full mb-4">
            <Shield className="h-12 w-12 text-orange-600" />
          </div>
          <h1 className="text-4xl font-bold mb-4">
            <BilingualText en="Online Safety" hi="ऑनलाइन सुरक्षा" />
          </h1>
          <p className="text-xl text-muted-foreground">
            <BilingualText
              en="Essential cyber security practices for staying safe online"
              hi="ऑनलाइन सुरक्षित रहने के लिए आवश्यक साइबर सुरक्षा प्रथाएं"
            />
          </p>
        </div>

        <Alert className="mb-8 border-orange-500/50 bg-orange-50 dark:bg-orange-900/20">
          <Shield className="h-5 w-5 text-orange-600" />
          <AlertTitle>
            <BilingualText en="Stay Vigilant" hi="सतर्क रहें" />
          </AlertTitle>
          <AlertDescription>
            <BilingualText
              en="Cyber threats are constantly evolving. Stay informed and practice safe online habits."
              hi="साइबर खतरे लगातार विकसित हो रहे हैं। सूचित रहें और सुरक्षित ऑनलाइन आदतों का अभ्यास करें।"
            />
          </AlertDescription>
        </Alert>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="passwords" className="border rounded-lg px-6">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-3">
                <Lock className="h-5 w-5 text-orange-600" />
                <span className="font-semibold">
                  <BilingualText en="Password Security" hi="पासवर्ड सुरक्षा" />
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-4">
              <div>
                <h4 className="font-semibold mb-2">
                  <BilingualText en="Best Practices:" hi="सर्वोत्तम प्रथाएं:" />
                </h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>
                    <BilingualText
                      en="Use passwords with at least 12 characters including uppercase, lowercase, numbers, and symbols"
                      hi="कम से कम 12 अक्षरों वाले पासवर्ड का उपयोग करें जिसमें अपरकेस, लोअरकेस, संख्याएं और प्रतीक शामिल हों"
                    />
                  </li>
                  <li>
                    <BilingualText
                      en="Never reuse passwords across different accounts"
                      hi="विभिन्न खातों में पासवर्ड का पुन: उपयोग कभी न करें"
                    />
                  </li>
                  <li>
                    <BilingualText
                      en="Avoid personal information like birthdays, names, or phone numbers"
                      hi="जन्मदिन, नाम या फोन नंबर जैसी व्यक्तिगत जानकारी से बचें"
                    />
                  </li>
                  <li>
                    <BilingualText
                      en="Use a password manager to securely store your passwords"
                      hi="अपने पासवर्ड को सुरक्षित रूप से संग्रहीत करने के लिए पासवर्ड मैनेजर का उपयोग करें"
                    />
                  </li>
                  <li>
                    <BilingualText
                      en="Enable two-factor authentication (2FA) wherever possible"
                      hi="जहां भी संभव हो दो-कारक प्रमाणीकरण (2FA) सक्षम करें"
                    />
                  </li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="phishing" className="border rounded-lg px-6">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-orange-600" />
                <span className="font-semibold">
                  <BilingualText en="Phishing Awareness" hi="फ़िशिंग जागरूकता" />
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-4">
              <div>
                <h4 className="font-semibold mb-2">
                  <BilingualText en="Common Indian Phishing Scams:" hi="सामान्य भारतीय फ़िशिंग घोटाले:" />
                </h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>
                    <BilingualText
                      en="Fake UPI payment requests claiming failed transactions"
                      hi="नकली UPI भुगतान अनुरोध जो विफल लेनदेन का दावा करते हैं"
                    />
                  </li>
                  <li>
                    <BilingualText
                      en="Messages pretending to be from banks asking for KYC updates"
                      hi="बैंकों से होने का दिखावा करने वाले संदेश जो KYC अपडेट मांगते हैं"
                    />
                  </li>
                  <li>
                    <BilingualText
                      en="Fake government schemes offering money or benefits"
                      hi="नकली सरकारी योजनाएं जो पैसे या लाभ की पेशकश करती हैं"
                    />
                  </li>
                  <li>
                    <BilingualText
                      en="Lottery or prize winning notifications from unknown sources"
                      hi="अज्ञात स्रोतों से लॉटरी या पुरस्कार जीतने की सूचनाएं"
                    />
                  </li>
                  <li>
                    <BilingualText
                      en="Fake job offers requiring upfront payment"
                      hi="नकली नौकरी के प्रस्ताव जिनमें अग्रिम भुगतान की आवश्यकता होती है"
                    />
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">
                  <BilingualText en="How to Identify Phishing:" hi="फ़िशिंग की पहचान कैसे करें:" />
                </h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>
                    <BilingualText
                      en="Check sender's email address carefully for misspellings"
                      hi="गलत वर्तनी के लिए प्रेषक के ईमेल पते की सावधानीपूर्वक जांच करें"
                    />
                  </li>
                  <li>
                    <BilingualText
                      en="Hover over links before clicking to see the actual URL"
                      hi="वास्तविक URL देखने के लिए क्लिक करने से पहले लिंक पर होवर करें"
                    />
                  </li>
                  <li>
                    <BilingualText
                      en="Be suspicious of urgent requests for personal information"
                      hi="व्यक्तिगत जानकारी के लिए तत्काल अनुरोधों से सावधान रहें"
                    />
                  </li>
                  <li>
                    <BilingualText
                      en="Verify requests by contacting the organization directly"
                      hi="संगठन से सीधे संपर्क करके अनुरोधों को सत्यापित करें"
                    />
                  </li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="social-media" className="border rounded-lg px-6">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-3">
                <Share2 className="h-5 w-5 text-orange-600" />
                <span className="font-semibold">
                  <BilingualText en="Social Media Privacy" hi="सोशल मीडिया गोपनीयता" />
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-4">
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>
                  <BilingualText
                    en="Review and adjust privacy settings on all social media platforms"
                    hi="सभी सोशल मीडिया प्लेटफॉर्म पर गोपनीयता सेटिंग्स की समीक्षा और समायोजन करें"
                  />
                </li>
                <li>
                  <BilingualText
                    en="Be cautious about sharing personal information like location, phone number, or address"
                    hi="स्थान, फोन नंबर या पते जैसी व्यक्तिगत जानकारी साझा करने में सावधान रहें"
                  />
                </li>
                <li>
                  <BilingualText
                    en="Think before posting - once online, content can be difficult to remove"
                    hi="पोस्ट करने से पहले सोचें - एक बार ऑनलाइन होने पर, सामग्री को हटाना मुश्किल हो सकता है"
                  />
                </li>
                <li>
                  <BilingualText
                    en="Be selective about friend/follower requests from unknown people"
                    hi="अज्ञात लोगों से मित्र/फॉलोअर अनुरोधों के बारे में चयनात्मक रहें"
                  />
                </li>
                <li>
                  <BilingualText
                    en="Avoid sharing sensitive information in public posts or comments"
                    hi="सार्वजनिक पोस्ट या टिप्पणियों में संवेदनशील जानकारी साझा करने से बचें"
                  />
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="shopping" className="border rounded-lg px-6">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-3">
                <ShoppingCart className="h-5 w-5 text-orange-600" />
                <span className="font-semibold">
                  <BilingualText en="Safe Online Shopping" hi="सुरक्षित ऑनलाइन शॉपिंग" />
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-4">
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>
                  <BilingualText
                    en="Shop only on trusted websites with HTTPS (look for padlock icon)"
                    hi="केवल HTTPS वाली विश्वसनीय वेबसाइटों पर खरीदारी करें (पैडलॉक आइकन देखें)"
                  />
                </li>
                <li>
                  <BilingualText
                    en="Use credit cards or secure payment gateways instead of debit cards"
                    hi="डेबिट कार्ड के बजाय क्रेडिट कार्ड या सुरक्षित भुगतान गेटवे का उपयोग करें"
                  />
                </li>
                <li>
                  <BilingualText
                    en="Be wary of deals that seem too good to be true"
                    hi="ऐसे सौदों से सावधान रहें जो सच होने के लिए बहुत अच्छे लगते हैं"
                  />
                </li>
                <li>
                  <BilingualText
                    en="Check seller ratings and reviews before making purchases"
                    hi="खरीदारी करने से पहले विक्रेता रेटिंग और समीक्षाओं की जांच करें"
                  />
                </li>
                <li>
                  <BilingualText
                    en="Keep records of transactions and receipts"
                    hi="लेनदेन और रसीदों का रिकॉर्ड रखें"
                  />
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="wifi" className="border rounded-lg px-6">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-3">
                <Wifi className="h-5 w-5 text-orange-600" />
                <span className="font-semibold">
                  <BilingualText en="Public WiFi Safety" hi="सार्वजनिक WiFi सुरक्षा" />
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4 space-y-4">
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>
                  <BilingualText
                    en="Avoid accessing sensitive accounts (banking, email) on public WiFi"
                    hi="सार्वजनिक WiFi पर संवेदनशील खातों (बैंकिंग, ईमेल) तक पहुंचने से बचें"
                  />
                </li>
                <li>
                  <BilingualText
                    en="Use a VPN when connecting to public networks"
                    hi="सार्वजनिक नेटवर्क से कनेक्ट करते समय VPN का उपयोग करें"
                  />
                </li>
                <li>
                  <BilingualText
                    en="Turn off automatic WiFi connection on your devices"
                    hi="अपने उपकरणों पर स्वचालित WiFi कनेक्शन बंद करें"
                  />
                </li>
                <li>
                  <BilingualText
                    en="Verify the network name with staff before connecting"
                    hi="कनेक्ट करने से पहले कर्मचारियों के साथ नेटवर्क नाम सत्यापित करें"
                  />
                </li>
                <li>
                  <BilingualText
                    en="Use mobile data for sensitive transactions when possible"
                    hi="जब संभव हो तो संवेदनशील लेनदेन के लिए मोबाइल डेटा का उपयोग करें"
                  />
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
