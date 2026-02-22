import { AlertCircle, Phone, Mail, Globe, FileText } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import HelplineCard from '../components/HelplineCard';
import BilingualText from '../components/BilingualText';

export default function ComplaintMechanismsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-red-100 dark:bg-red-900/20 rounded-full mb-4">
            <AlertCircle className="h-12 w-12 text-red-600" />
          </div>
          <h1 className="text-4xl font-bold mb-4">
            <BilingualText en="Report Cyber Crime" hi="साइबर अपराध रिपोर्ट करें" />
          </h1>
          <p className="text-xl text-muted-foreground">
            <BilingualText
              en="Know your options for reporting cyber crimes and getting help"
              hi="साइबर अपराधों की रिपोर्ट करने और सहायता प्राप्त करने के लिए अपने विकल्पों को जानें"
            />
          </p>
        </div>

        <Alert className="mb-8 border-red-500/50 bg-red-50 dark:bg-red-900/20">
          <AlertCircle className="h-5 w-5 text-red-600" />
          <AlertTitle>
            <BilingualText en="Act Quickly" hi="जल्दी कार्रवाई करें" />
          </AlertTitle>
          <AlertDescription>
            <BilingualText
              en="If you are a victim of cyber crime, report it immediately. Quick action can help prevent further damage and aid in investigation."
              hi="यदि आप साइबर अपराध के शिकार हैं, तो तुरंत रिपोर्ट करें। त्वरित कार्रवाई आगे की क्षति को रोकने और जांच में सहायता कर सकती है।"
            />
          </AlertDescription>
        </Alert>

        <div className="space-y-6 mb-12">
          <h2 className="text-2xl font-bold">
            <BilingualText en="Emergency Helplines" hi="आपातकालीन हेल्पलाइन" />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <HelplineCard
              nameEn="National Cyber Crime Helpline"
              nameHi="राष्ट्रीय साइबर अपराध हेल्पलाइन"
              number="1930"
              descriptionEn="24/7 helpline for reporting cyber crimes and getting immediate assistance"
              descriptionHi="साइबर अपराधों की रिपोर्ट करने और तत्काल सहायता प्राप्त करने के लिए 24/7 हेल्पलाइन"
            />
            <HelplineCard
              nameEn="Women Helpline"
              nameHi="महिला हेल्पलाइन"
              number="1091"
              descriptionEn="Dedicated helpline for women facing cyber harassment or threats"
              descriptionHi="साइबर उत्पीड़न या धमकियों का सामना करने वाली महिलाओं के लिए समर्पित हेल्पलाइन"
            />
          </div>
        </div>

        <Separator className="my-8" />

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">
            <BilingualText en="Online Reporting Options" hi="ऑनलाइन रिपोर्टिंग विकल्प" />
          </h2>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Globe className="h-6 w-6 text-primary" />
                <CardTitle>
                  <BilingualText
                    en="National Cyber Crime Reporting Portal"
                    hi="राष्ट्रीय साइबर अपराध रिपोर्टिंग पोर्टल"
                  />
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <CardDescription className="text-base">
                <BilingualText
                  en="Official government portal for reporting all types of cyber crimes including financial fraud, social media crimes, and online harassment."
                  hi="वित्तीय धोखाधड़ी, सोशल मीडिया अपराध और ऑनलाइन उत्पीड़न सहित सभी प्रकार के साइबर अपराधों की रिपोर्ट करने के लिए आधिकारिक सरकारी पोर्टल।"
                />
              </CardDescription>
              <div className="space-y-2">
                <h4 className="font-semibold">
                  <BilingualText en="How to File a Complaint:" hi="शिकायत कैसे दर्ज करें:" />
                </h4>
                <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                  <li>
                    <BilingualText
                      en="Visit cybercrime.gov.in"
                      hi="cybercrime.gov.in पर जाएं"
                    />
                  </li>
                  <li>
                    <BilingualText
                      en="Click on 'Report' and select the type of cyber crime"
                      hi="'रिपोर्ट' पर क्लिक करें और साइबर अपराध का प्रकार चुनें"
                    />
                  </li>
                  <li>
                    <BilingualText
                      en="Fill in the complaint form with all relevant details"
                      hi="सभी प्रासंगिक विवरणों के साथ शिकायत फॉर्म भरें"
                    />
                  </li>
                  <li>
                    <BilingualText
                      en="Upload supporting documents (screenshots, emails, etc.)"
                      hi="सहायक दस्तावेज़ अपलोड करें (स्क्रीनशॉट, ईमेल, आदि)"
                    />
                  </li>
                  <li>
                    <BilingualText
                      en="Submit and note down your complaint number for tracking"
                      hi="सबमिट करें और ट्रैकिंग के लिए अपनी शिकायत संख्या नोट करें"
                    />
                  </li>
                </ol>
              </div>
              <Button asChild className="w-full">
                <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer">
                  <Globe className="h-4 w-4 mr-2" />
                  <BilingualText en="Visit Portal" hi="पोर्टल पर जाएं" />
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Mail className="h-6 w-6 text-primary" />
                <CardTitle>
                  <BilingualText en="Email Reporting" hi="ईमेल रिपोर्टिंग" />
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">
                  <BilingualText en="CERT-In (Computer Emergency Response Team)" hi="CERT-In (कंप्यूटर आपातकालीन प्रतिक्रिया टीम)" />
                </h4>
                <p className="text-sm text-muted-foreground mb-2">
                  <BilingualText
                    en="For reporting security incidents and vulnerabilities"
                    hi="सुरक्षा घटनाओं और कमजोरियों की रिपोर्ट करने के लिए"
                  />
                </p>
                <a href="mailto:incident@cert-in.org.in" className="text-primary hover:underline">
                  incident@cert-in.org.in
                </a>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <FileText className="h-6 w-6 text-primary" />
                <CardTitle>
                  <BilingualText en="State Cyber Cells" hi="राज्य साइबर सेल" />
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base mb-4">
                <BilingualText
                  en="Each state in India has dedicated cyber crime cells. You can file complaints at your local police station or directly with the state cyber cell."
                  hi="भारत के प्रत्येक राज्य में समर्पित साइबर अपराध सेल हैं। आप अपने स्थानीय पुलिस स्टेशन या सीधे राज्य साइबर सेल में शिकायत दर्ज कर सकते हैं।"
                />
              </CardDescription>
              <p className="text-sm text-muted-foreground">
                <BilingualText
                  en="Contact your state police website or visit the nearest police station for more information."
                  hi="अधिक जानकारी के लिए अपनी राज्य पुलिस वेबसाइट से संपर्क करें या निकटतम पुलिस स्टेशन पर जाएं।"
                />
              </p>
            </CardContent>
          </Card>
        </div>

        <Alert className="mt-8">
          <FileText className="h-5 w-5" />
          <AlertTitle>
            <BilingualText en="Important Tips" hi="महत्वपूर्ण सुझाव" />
          </AlertTitle>
          <AlertDescription>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>
                <BilingualText
                  en="Preserve all evidence (screenshots, messages, transaction details)"
                  hi="सभी सबूत सुरक्षित रखें (स्क्रीनशॉट, संदेश, लेनदेन विवरण)"
                />
              </li>
              <li>
                <BilingualText
                  en="Do not delete any communication with the perpetrator"
                  hi="अपराधी के साथ किसी भी संचार को हटाएं नहीं"
                />
              </li>
              <li>
                <BilingualText
                  en="Note down dates, times, and details of incidents"
                  hi="घटनाओं की तारीखें, समय और विवरण नोट करें"
                />
              </li>
              <li>
                <BilingualText
                  en="Follow up on your complaint regularly using the complaint number"
                  hi="शिकायत संख्या का उपयोग करके नियमित रूप से अपनी शिकायत का अनुसरण करें"
                />
              </li>
            </ul>
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
}
