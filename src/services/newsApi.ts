import axios from 'axios';

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = 'https://newsapi.org/v2';

// Use a proxy URL when not running locally
const getApiUrl = () => {
  const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  return isLocalhost ? BASE_URL : 'https://newsapi.org/v2';  // You would replace this with your proxy URL
};

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
    const response = await axios.get(`${getApiUrl()}/everything`, {
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