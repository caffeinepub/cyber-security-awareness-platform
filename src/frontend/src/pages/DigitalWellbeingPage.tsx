import { Brain, Clock, Heart, Moon, Users, TrendingDown } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import ContentSection from '../components/ContentSection';
import BilingualText from '../components/BilingualText';
import { useLanguage } from '../contexts/LanguageContext';

export default function DigitalWellbeingPage() {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-green-100 dark:bg-green-900/20 rounded-full mb-4">
            <Brain className="h-12 w-12 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold mb-4">
            <BilingualText en="Digital Wellbeing" hi="डिजिटल कल्याण" />
          </h1>
          <p className="text-xl text-muted-foreground">
            <BilingualText
              en="Understanding the psychological impact of digital device usage"
              hi="डिजिटल उपकरण उपयोग के मनोवैज्ञानिक प्रभाव को समझना"
            />
          </p>
        </div>

        <Alert className="mb-8 border-green-500/50 bg-green-50 dark:bg-green-900/20">
          <Heart className="h-5 w-5 text-green-600" />
          <AlertTitle>
            <BilingualText en="Your Mental Health Matters" hi="आपका मानसिक स्वास्थ्य मायने रखता है" />
          </AlertTitle>
          <AlertDescription>
            <BilingualText
              en="Balancing digital life with real-world connections is essential for overall wellbeing."
              hi="समग्र कल्याण के लिए डिजिटल जीवन को वास्तविक दुनिया के संबंधों के साथ संतुलित करना आवश्यक है।"
            />
          </AlertDescription>
        </Alert>

        <Tabs defaultValue="impacts" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-3">
            <TabsTrigger value="impacts">
              {t('Impacts', 'प्रभाव')}
            </TabsTrigger>
            <TabsTrigger value="statistics">
              {t('Statistics', 'आंकड़े')}
            </TabsTrigger>
            <TabsTrigger value="strategies">
              {t('Strategies', 'रणनीतियाँ')}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="impacts" className="space-y-6">
            <ContentSection
              titleEn="Screen Time & Mental Health"
              titleHi="स्क्रीन समय और मानसिक स्वास्थ्य"
              icon={<Clock className="h-6 w-6 text-green-600" />}
            >
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>
                  <BilingualText
                    en="Excessive screen time is linked to increased anxiety and depression"
                    hi="अत्यधिक स्क्रीन समय बढ़ी हुई चिंता और अवसाद से जुड़ा है"
                  />
                </li>
                <li>
                  <BilingualText
                    en="Constant notifications can lead to stress and reduced focus"
                    hi="निरंतर सूचनाएं तनाव और कम ध्यान केंद्रित करने का कारण बन सकती हैं"
                  />
                </li>
                <li>
                  <BilingualText
                    en="Digital overload can cause decision fatigue and mental exhaustion"
                    hi="डिजिटल अधिभार निर्णय थकान और मानसिक थकावट का कारण बन सकता है"
                  />
                </li>
              </ul>
            </ContentSection>

            <ContentSection
              titleEn="Social Media Addiction"
              titleHi="सोशल मीडिया की लत"
              icon={<Users className="h-6 w-6 text-green-600" />}
            >
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>
                  <BilingualText
                    en="Constant comparison with others can lower self-esteem"
                    hi="दूसरों के साथ निरंतर तुलना आत्म-सम्मान को कम कर सकती है"
                  />
                </li>
                <li>
                  <BilingualText
                    en="Fear of missing out (FOMO) drives compulsive checking behavior"
                    hi="छूट जाने का डर (FOMO) बाध्यकारी जांच व्यवहार को बढ़ावा देता है"
                  />
                </li>
                <li>
                  <BilingualText
                    en="Dopamine-driven feedback loops create addictive patterns"
                    hi="डोपामाइन-संचालित फीडबैक लूप नशे की लत पैटर्न बनाते हैं"
                  />
                </li>
                <li>
                  <BilingualText
                    en="Reduced face-to-face interactions affect social skills"
                    hi="आमने-सामने की बातचीत में कमी सामाजिक कौशल को प्रभावित करती है"
                  />
                </li>
              </ul>
            </ContentSection>

            <ContentSection
              titleEn="Sleep Disruption"
              titleHi="नींद में व्यवधान"
              icon={<Moon className="h-6 w-6 text-green-600" />}
            >
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>
                  <BilingualText
                    en="Blue light from screens suppresses melatonin production"
                    hi="स्क्रीन से नीली रोशनी मेलाटोनिन उत्पादन को दबा देती है"
                  />
                </li>
                <li>
                  <BilingualText
                    en="Late-night device usage delays sleep onset and reduces sleep quality"
                    hi="देर रात उपकरण का उपयोग नींद की शुरुआत में देरी करता है और नींद की गुणवत्ता को कम करता है"
                  />
                </li>
                <li>
                  <BilingualText
                    en="Poor sleep affects academic performance and cognitive function"
                    hi="खराब नींद शैक्षणिक प्रदर्शन और संज्ञानात्मक कार्य को प्रभावित करती है"
                  />
                </li>
              </ul>
            </ContentSection>
          </TabsContent>

          <TabsContent value="statistics" className="space-y-6">
            <ContentSection
              titleEn="Indian Context Statistics"
              titleHi="भारतीय संदर्भ आंकड़े"
              icon={<TrendingDown className="h-6 w-6 text-green-600" />}
            >
              <div className="space-y-4">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">4.5+ hours</div>
                  <p className="text-sm text-muted-foreground">
                    <BilingualText
                      en="Average daily screen time for Indian youth"
                      hi="भारतीय युवाओं के लिए औसत दैनिक स्क्रीन समय"
                    />
                  </p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">67%</div>
                  <p className="text-sm text-muted-foreground">
                    <BilingualText
                      en="Indian students report sleep issues due to late-night phone use"
                      hi="भारतीय छात्र देर रात फोन उपयोग के कारण नींद की समस्याओं की रिपोर्ट करते हैं"
                    />
                  </p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">45%</div>
                  <p className="text-sm text-muted-foreground">
                    <BilingualText
                      en="College students experience anxiety related to social media"
                      hi="कॉलेज के छात्र सोशल मीडिया से संबंधित चिंता का अनुभव करते हैं"
                    />
                  </p>
                </div>
              </div>
            </ContentSection>
          </TabsContent>

          <TabsContent value="strategies" className="space-y-6">
            <ContentSection
              titleEn="Healthy Digital Habits"
              titleHi="स्वस्थ डिजिटल आदतें"
              icon={<Heart className="h-6 w-6 text-green-600" />}
            >
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">
                    <BilingualText en="Screen Time Management:" hi="स्क्रीन समय प्रबंधन:" />
                  </h4>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>
                      <BilingualText
                        en="Set daily screen time limits using built-in device features"
                        hi="अंतर्निर्मित उपकरण सुविधाओं का उपयोग करके दैनिक स्क्रीन समय सीमा निर्धारित करें"
                      />
                    </li>
                    <li>
                      <BilingualText
                        en="Take regular breaks using the 20-20-20 rule (every 20 minutes, look 20 feet away for 20 seconds)"
                        hi="20-20-20 नियम का उपयोग करके नियमित ब्रेक लें (हर 20 मिनट में, 20 सेकंड के लिए 20 फीट दूर देखें)"
                      />
                    </li>
                    <li>
                      <BilingualText
                        en="Designate phone-free times during meals and before bed"
                        hi="भोजन के दौरान और सोने से पहले फोन-मुक्त समय निर्धारित करें"
                      />
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">
                    <BilingualText en="Social Media Balance:" hi="सोशल मीडिया संतुलन:" />
                  </h4>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>
                      <BilingualText
                        en="Unfollow accounts that make you feel inadequate or anxious"
                        hi="उन खातों को अनफॉलो करें जो आपको अपर्याप्त या चिंतित महसूस कराते हैं"
                      />
                    </li>
                    <li>
                      <BilingualText
                        en="Turn off non-essential notifications"
                        hi="गैर-आवश्यक सूचनाओं को बंद करें"
                      />
                    </li>
                    <li>
                      <BilingualText
                        en="Schedule specific times for checking social media"
                        hi="सोशल मीडिया की जांच के लिए विशिष्ट समय निर्धारित करें"
                      />
                    </li>
                    <li>
                      <BilingualText
                        en="Practice mindful scrolling - be aware of how content makes you feel"
                        hi="सचेत स्क्रॉलिंग का अभ्यास करें - सामग्री आपको कैसा महसूस कराती है, इसके बारे में जागरूक रहें"
                      />
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">
                    <BilingualText en="Better Sleep Hygiene:" hi="बेहतर नींद स्वच्छता:" />
                  </h4>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>
                      <BilingualText
                        en="Stop using devices at least 1 hour before bedtime"
                        hi="सोने से कम से कम 1 घंटे पहले उपकरणों का उपयोग बंद करें"
                      />
                    </li>
                    <li>
                      <BilingualText
                        en="Enable night mode or blue light filters in the evening"
                        hi="शाम को नाइट मोड या ब्लू लाइट फिल्टर सक्षम करें"
                      />
                    </li>
                    <li>
                      <BilingualText
                        en="Keep devices out of the bedroom or use airplane mode"
                        hi="उपकरणों को बेडरूम से बाहर रखें या हवाई जहाज मोड का उपयोग करें"
                      />
                    </li>
                    <li>
                      <BilingualText
                        en="Replace screen time with reading, meditation, or relaxation"
                        hi="स्क्रीन समय को पढ़ने, ध्यान या विश्राम से बदलें"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </ContentSection>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
