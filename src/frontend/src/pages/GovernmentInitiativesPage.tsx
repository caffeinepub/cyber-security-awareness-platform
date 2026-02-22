import { Building2, Shield, GraduationCap, Globe } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import BilingualText from '../components/BilingualText';

export default function GovernmentInitiativesPage() {
  const initiatives = [
    {
      icon: Shield,
      titleEn: 'Cyber Surakshit Bharat',
      titleHi: 'साइबर सुरक्षित भारत',
      descEn: 'A comprehensive initiative to spread awareness about cybercrime and build capacity for safety measures in Indian cyberspace.',
      descHi: 'साइबर अपराध के बारे में जागरूकता फैलाने और भारतीय साइबरस्पेस में सुरक्षा उपायों के लिए क्षमता निर्माण की एक व्यापक पहल।',
      url: 'https://www.meity.gov.in',
      color: 'from-blue-500 to-indigo-500',
    },
    {
      icon: GraduationCap,
      titleEn: 'Information Security Education and Awareness (ISEA)',
      titleHi: 'सूचना सुरक्षा शिक्षा और जागरूकता (ISEA)',
      descEn: 'A project to create a pool of trained manpower in information security through education and awareness programs.',
      descHi: 'शिक्षा और जागरूकता कार्यक्रमों के माध्यम से सूचना सुरक्षा में प्रशिक्षित जनशक्ति का एक पूल बनाने की परियोजना।',
      url: 'https://www.meity.gov.in',
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: Building2,
      titleEn: 'National Cyber Security Policy',
      titleHi: 'राष्ट्रीय साइबर सुरक्षा नीति',
      descEn: 'A comprehensive policy framework to protect information and information infrastructure in cyberspace.',
      descHi: 'साइबरस्पेस में सूचना और सूचना बुनियादी ढांचे की रक्षा के लिए एक व्यापक नीति ढांचा।',
      url: 'https://www.meity.gov.in',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Globe,
      titleEn: 'Digital India Initiative',
      titleHi: 'डिजिटल इंडिया पहल',
      descEn: 'A flagship program to transform India into a digitally empowered society with emphasis on digital literacy and cyber safety.',
      descHi: 'डिजिटल साक्षरता और साइबर सुरक्षा पर जोर देने के साथ भारत को डिजिटल रूप से सशक्त समाज में बदलने का एक प्रमुख कार्यक्रम।',
      url: 'https://www.digitalindia.gov.in',
      color: 'from-orange-500 to-red-500',
    },
  ];

  const resources = [
    {
      nameEn: 'CERT-In (Indian Computer Emergency Response Team)',
      nameHi: 'CERT-In (भारतीय कंप्यूटर आपातकालीन प्रतिक्रिया टीम)',
      descEn: 'National nodal agency for responding to computer security incidents',
      descHi: 'कंप्यूटर सुरक्षा घटनाओं का जवाब देने के लिए राष्ट्रीय नोडल एजेंसी',
      url: 'https://www.cert-in.org.in',
    },
    {
      nameEn: 'Ministry of Electronics and IT (MeitY)',
      nameHi: 'इलेक्ट्रॉनिक्स और सूचना प्रौद्योगिकी मंत्रालय (MeitY)',
      descEn: 'Government ministry overseeing cyber security policies and initiatives',
      descHi: 'साइबर सुरक्षा नीतियों और पहलों की देखरेख करने वाला सरकारी मंत्रालय',
      url: 'https://www.meity.gov.in',
    },
    {
      nameEn: 'National Cyber Crime Reporting Portal',
      nameHi: 'राष्ट्रीय साइबर अपराध रिपोर्टिंग पोर्टल',
      descEn: 'Official portal for reporting cyber crimes in India',
      descHi: 'भारत में साइबर अपराधों की रिपोर्ट करने के लिए आधिकारिक पोर्टल',
      url: 'https://cybercrime.gov.in',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 dark:bg-blue-900/20 rounded-full mb-4">
            <Building2 className="h-12 w-12 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold mb-4">
            <BilingualText en="Government Initiatives" hi="सरकारी पहल" />
          </h1>
          <p className="text-xl text-muted-foreground">
            <BilingualText
              en="Indian government programs and policies for cyber security awareness"
              hi="साइबर सुरक्षा जागरूकता के लिए भारत सरकार के कार्यक्रम और नीतियां"
            />
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {initiatives.map((initiative) => {
            const Icon = initiative.icon;
            return (
              <Card key={initiative.titleEn} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${initiative.color} mb-3 w-fit`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">
                    <BilingualText en={initiative.titleEn} hi={initiative.titleHi} />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    <BilingualText en={initiative.descEn} hi={initiative.descHi} />
                  </CardDescription>
                  <Button asChild variant="outline" className="w-full">
                    <a href={initiative.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      <BilingualText en="Learn More" hi="और जानें" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-muted/30 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">
            <BilingualText en="Official Resources" hi="आधिकारिक संसाधन" />
          </h2>
          <div className="space-y-4">
            {resources.map((resource) => (
              <Card key={resource.nameEn}>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">
                        <BilingualText en={resource.nameEn} hi={resource.nameHi} />
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        <BilingualText en={resource.descEn} hi={resource.descHi} />
                      </p>
                    </div>
                    <Button asChild variant="outline">
                      <a href={resource.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        <BilingualText en="Visit" hi="देखें" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
