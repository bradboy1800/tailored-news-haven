import { Button } from "@/components/ui/button";
import { ArrowRight, Newspaper, Sparkles, Target } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      <div className="hero-gradient text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Your Personalized News Experience
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-white/90">
            Discover news that matters to you, powered by AI
          </p>
          <Link to="/auth">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Target className="h-8 w-8 text-primary" />}
            title="Personalized Feed"
            description="Select your interests and let AI curate the perfect news feed for you"
          />
          <FeatureCard
            icon={<Newspaper className="h-8 w-8 text-primary" />}
            title="Multiple Sources"
            description="Get news from various trusted sources, all in one place"
          />
          <FeatureCard
            icon={<Sparkles className="h-8 w-8 text-primary" />}
            title="AI-Powered"
            description="Smart recommendations that get better as you read"
          />
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-card p-6 rounded-lg card-hover">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Index;