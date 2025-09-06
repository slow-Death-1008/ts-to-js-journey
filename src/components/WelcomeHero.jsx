import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Shield, Users, Award } from "lucide-react";

const WelcomeHero = ({ onStartAssessment }) => {
  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="w-24 h-24 bg-gradient-calm rounded-full flex items-center justify-center mx-auto mb-6 animate-breathe">
              <Heart className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Your Mental Wellness
              <br />
              <span className="bg-gradient-text bg-clip-text text-transparent">Assessment</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Take a moment to check in with yourself. Our comprehensive assessment helps you understand 
              your current mental health state and provides personalized recommendations for your wellness journey.
            </p>
            <Button
              onClick={onStartAssessment}
              size="lg"
              className="text-lg px-8 py-6 bg-gradient-calm hover:opacity-90 transition-gentle shadow-gentle"
            >
              Start Your Assessment
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 animate-fade-in">
            <Card className="text-center shadow-gentle border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Completely Private</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Your responses are kept completely confidential and are never shared with anyone.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center shadow-gentle border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <Heart className="w-12 h-12 text-secondary mx-auto mb-4" />
                <CardTitle className="text-xl">Evidence-Based</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Our assessment is based on validated psychological wellness frameworks and research.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center shadow-gentle border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <Award className="w-12 h-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-xl">Personalized Results</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Receive tailored recommendations and resources based on your unique responses.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* What to Expect */}
          <Card className="max-w-4xl mx-auto shadow-calm border-0 animate-fade-in">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl mb-4">What to Expect</CardTitle>
              <CardDescription className="text-lg">
                The assessment takes about 5-10 minutes and covers key areas of mental wellness
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg text-foreground">Assessment Areas:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Stress and anxiety levels</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Sleep quality and patterns</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Social connections and support</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Academic performance satisfaction</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Self-care and coping strategies</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg text-foreground">You'll Receive:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span>Your personal happiness meter score</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span>Customized wellness recommendations</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span>Access to curated music library</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span>Progress tracking dashboard</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span>Professional support resources</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default WelcomeHero;