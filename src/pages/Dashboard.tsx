import { useQuery } from "@tanstack/react-query";
import ArticleCard from "@/components/ArticleCard";
import Header from "@/components/Header";
import { fetchNewsByTopics } from "@/services/newsApi";
import type { NewsArticle } from "@/services/newsApi";
import { format } from "date-fns";

const Dashboard = () => {
  // In a real app, these would come from user preferences stored in the backend
  const userTopics = ["Technology", "Science", "Business"];

  const { data: articles, isLoading, error } = useQuery({
    queryKey: ['news', userTopics],
    queryFn: () => fetchNewsByTopics(userTopics),
    refetchInterval: 5 * 60 * 1000, // Refetch every 5 minutes
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-8">Your News Feed</h1>
        {isLoading && (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        )}
        {error && (
          <div className="text-center text-red-500">
            Failed to load news: {(error as Error).message}
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles?.map((article: NewsArticle, index: number) => (
            <ArticleCard
              key={index}
              title={article.title}
              description={article.description || "No description available"}
              imageUrl={article.urlToImage || "https://source.unsplash.com/random/800x600?news"}
              source={article.source.name}
              url={article.url}
              date={format(new Date(article.publishedAt), 'yyyy-MM-dd')}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;