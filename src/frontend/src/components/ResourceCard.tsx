import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Download } from 'lucide-react';
import BilingualText from './BilingualText';

interface ResourceCardProps {
  titleEn: string;
  titleHi: string;
  descriptionEn: string;
  descriptionHi: string;
  type: 'download' | 'external';
  url: string;
  category?: string;
}

export default function ResourceCard({ titleEn, titleHi, descriptionEn, descriptionHi, type, url, category }: ResourceCardProps) {
  return (
    <Card className="h-full hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-lg">
            <BilingualText en={titleEn} hi={titleHi} />
          </CardTitle>
          {category && <Badge variant="secondary">{category}</Badge>}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">
          <BilingualText en={descriptionEn} hi={descriptionHi} />
        </p>
        <Button asChild variant="outline" className="w-full">
          <a href={url} target="_blank" rel="noopener noreferrer">
            {type === 'download' ? (
              <>
                <Download className="h-4 w-4 mr-2" />
                <BilingualText en="Download" hi="डाउनलोड करें" />
              </>
            ) : (
              <>
                <ExternalLink className="h-4 w-4 mr-2" />
                <BilingualText en="Visit" hi="देखें" />
              </>
            )}
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}
