import ArticleCard from "@/components/ArticleCard";
import Header from "@/components/Header";

// Placeholder data - in a real app, this would come from an API
const articles = [
  {
    title: "The Future of Artificial Intelligence in News Curation",
    description: "AI is revolutionizing how we consume news, making it more personalized and relevant than ever before...",
    imageUrl: "https://source.unsplash.com/random/800x600?technology",
    source: "Tech Daily",
    url: "#",
    date: "2024-02-20",
  },
  {
    title: "Breaking: Major Scientific Discovery in Space Exploration",
    description: "Scientists have made a groundbreaking discovery that could change our understanding of the universe...",
    imageUrl: "https://source.unsplash.com/random/800x600?space",
    source: "Science Weekly",
    url: "#",
    date: "2024-02-19",
  },
  {
    title: "Global Climate Summit Reaches Historic Agreement",
    description: "World leaders have come together to sign a landmark climate agreement that sets ambitious goals...",
    imageUrl: "https://source.unsplash.com/random/800x600?climate",
    source: "World News",
    url: "#",
    date: "2024-02-18",
  },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-8">Your News Feed</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;