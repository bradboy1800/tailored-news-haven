import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

const topics = [
  "Technology",
  "Business",
  "Science",
  "Health",
  "Entertainment",
  "Sports",
  "Politics",
  "Environment",
  "Education",
  "Travel",
];

interface TopicSelectorProps {
  onSelect: (topics: string[]) => void;
}

const TopicSelector = ({ onSelect }: TopicSelectorProps) => {
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

  const toggleTopic = (topic: string) => {
    const newTopics = selectedTopics.includes(topic)
      ? selectedTopics.filter((t) => t !== topic)
      : [...selectedTopics, topic];
    
    setSelectedTopics(newTopics);
    onSelect(newTopics);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Select your interests</h2>
      <p className="text-gray-600">Choose at least 3 topics to get started</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {topics.map((topic) => (
          <Button
            key={topic}
            variant="outline"
            className={cn(
              "h-auto py-4 px-6",
              selectedTopics.includes(topic) &&
                "bg-primary text-white hover:bg-primary/90"
            )}
            onClick={() => toggleTopic(topic)}
          >
            {topic}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default TopicSelector;