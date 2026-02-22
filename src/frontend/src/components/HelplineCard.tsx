import { Card, CardContent } from '@/components/ui/card';
import { Phone } from 'lucide-react';
import BilingualText from './BilingualText';

interface HelplineCardProps {
  nameEn: string;
  nameHi: string;
  number: string;
  descriptionEn: string;
  descriptionHi: string;
}

export default function HelplineCard({ nameEn, nameHi, number, descriptionEn, descriptionHi }: HelplineCardProps) {
  return (
    <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
      <CardContent className="pt-6">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-primary/10 rounded-full">
            <Phone className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-1">
              <BilingualText en={nameEn} hi={nameHi} />
            </h3>
            <p className="text-2xl font-bold text-primary mb-2">{number}</p>
            <p className="text-sm text-muted-foreground">
              <BilingualText en={descriptionEn} hi={descriptionHi} />
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
