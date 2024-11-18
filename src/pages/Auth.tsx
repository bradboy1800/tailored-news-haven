import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import TopicSelector from "@/components/TopicSelector";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const handleTopicSelect = (topics: string[]) => {
    if (topics.length >= 3) {
      // In a real app, we would save the topics to the user's profile
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        {step === 1 ? (
          <>
            <CardHeader>
              <CardTitle>Create your account</CardTitle>
              <CardDescription>
                Start your personalized news journey
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={(e) => { e.preventDefault(); setStep(2); }} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="Create a password" required />
                </div>
                <Button type="submit" className="w-full">
                  Continue
                </Button>
              </form>
            </CardContent>
          </>
        ) : (
          <CardContent className="pt-6">
            <TopicSelector onSelect={handleTopicSelect} />
          </CardContent>
        )}
      </Card>
    </div>
  );
};

export default Auth;