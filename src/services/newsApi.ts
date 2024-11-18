import axios from 'axios';

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = 'https://newsapi.org/v2';

export interface NewsArticle {
  title: string;
  description: string;
  urlToImage: string;
  source: {
    name: string;
  };
  url: string;
  publishedAt: string;
}

export const fetchNewsByTopics = async (topics: string[]): Promise<NewsArticle[]> => {
  const query = topics.join(' OR ');
  try {
    const response = await axios.get(`${BASE_URL}/everything`, {
      params: {
        q: query,
        apiKey: API_KEY,
        language: 'en',
        sortBy: 'publishedAt',
        pageSize: 12,
      },
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'NewsAI/1.0',
      },
    });
    
    if (response.data.status === 'error') {
      throw new Error(response.data.message || 'News API error');
    }
    
    return response.data.articles;
  } catch (error: any) {
    console.error('Error details:', error.response?.data || error.message);
    throw new Error(error.response?.data?.message || error.message);
  }
};