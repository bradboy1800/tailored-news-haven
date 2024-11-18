import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

interface ArticleCardProps {
  title: string;
  description: string;
  imageUrl: string;
  source: string;
  url: string;
  date: string;
}

const ArticleCard = ({ title, description, imageUrl, source, url, date }: ArticleCardProps) => {
  return (
    <Card className="overflow-hidden card-hover">
      <div className="aspect-video relative">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-full"
        />
        <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
          {source}
        </div>
      </div>
      <CardHeader className="space-y-1">
        <CardTitle className="text-xl line-clamp-2">{title}</CardTitle>
        <CardDescription className="text-sm text-gray-500">{date}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 line-clamp-3 mb-4">{description}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-primary hover:underline"
        >
          Read more <ExternalLink className="ml-1 h-4 w-4" />
        </a>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;