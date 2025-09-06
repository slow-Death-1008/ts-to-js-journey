import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, Heart, MessageCircle, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import WelcomeHero from "@/components/WelcomeHero";

const questions = [
  {
    id: 1,
    question: "How often do you feel overwhelmed by your academic responsibilities?",
    options: ["Never", "Rarely", "Sometimes", "Often", "Always"]
  },
  {
    id: 2,
    question: "How well do you sleep at night?",
    options: ["Very well", "Well", "Okay", "Poorly", "Very poorly"]
  },
  {
    id: 3,
    question: "How connected do you feel to your friends and family?",
    options: ["Very connected", "Connected", "Somewhat connected", "Disconnected", "Very disconnected"]
  },
  {
    id: 4,
    question: "How often do you engage in physical exercise or activities?",
    options: ["Daily", "Few times a week", "Weekly", "Rarely", "Never"]
  },
  {
    id: 5,
    question: "How satisfied are you with your current academic performance?",
    options: ["Very satisfied", "Satisfied", "Neutral", "Dissatisfied", "Very dissatisfied"]
  },
  {
    id: 6,
    question: "How often do you feel anxious or worried?",
    options: ["Never", "Rarely", "Sometimes", "Often", "Always"]
  },
  {
    id: 7,
    question: "How well do you manage your time and priorities?",
    options: ["Very well", "Well", "Okay", "Poorly", "Very poorly"]
  },
  {
    id: 8,
    question: "How often do you take breaks for self-care activities?",
    options: ["Daily", "Few times a week", "Weekly", "Rarely", "Never"]
  },
  {
    id: 9,
    question: "How comfortable are you seeking help when needed?",
    options: ["Very comfortable", "Comfortable", "Neutral", "Uncomfortable", "Very uncomfortable"]
  },
  {
    id: 10,
    question: "How positive do you feel about your future?",
    options: ["Very positive", "Positive", "Neutral", "Negative", "Very negative"]
  }
];

const Assessment = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [additionalConcerns, setAdditionalConcerns] = useState("");
  const navigate = useNavigate();

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const isLastQuestion = currentQuestion === questions.length - 1;

  const handleStartAssessment = () => {
    setHasStarted(true);
  };

  const handleAnswer = (value) => {
    setAnswers({ ...answers, [currentQuestion]: value });
  };

  const handleNext = () => {
    if (isLastQuestion) {
      setShowResults(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  const calculateHappinessMeter = () => {
    const scores = Object.values(answers).map(answer => {
      const optionIndex = questions[0].options.indexOf(answer);
      return 5 - optionIndex; // Higher score for better answers
    });

    const totalScore = scores.reduce((sum, score) => sum + score, 0);
    const maxScore = questions.length * 5;
    return Math.round((totalScore / maxScore) * 100);
  };

  // Show welcome screen if user hasn't started
  if (!hasStarted) {
    return (
      <div>
        <Navigation />
        <WelcomeHero onStartAssessment={handleStartAssessment} />
      </div>
    );
  }

  if (showResults) {
    const happinessScore = calculateHappinessMeter();

    return (
      <div className="min-h-screen bg-gradient-hero">
        <Navigation />
        <div className="container mx-auto px-4 pt-20 pb-8">
          <div className="max-w-2xl mx-auto animate-fade-in">
            <Card className="shadow-calm border-0">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-calm rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Your Wellness Assessment</CardTitle>
                <CardDescription>Here's your current happiness meter and recommendations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{happinessScore}%</div>
                  <p className="text-muted-foreground">Happiness Meter</p>
                  <Progress value={happinessScore} className="mt-4" />
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Recommendations for You:</h3>
                  {happinessScore >= 70 ? (
                    <div className="p-4 bg-success/10 border border-success/20 rounded-lg">
                      <h4 className="font-medium text-success mb-2">Lifestyle Enhancement</h4>
                      <p className="text-sm text-muted-foreground">
                        Great job! Focus on maintaining your sleep cycle, healthy eating, and social connections.
                      </p>
                    </div>
                  ) : happinessScore >= 40 ? (
                    <div className="p-4 bg-warning/10 border border-warning/20 rounded-lg">
                      <h4 className="font-medium text-warning mb-2">Lifestyle + Library Support</h4>
                      <p className="text-sm text-muted-foreground">
                        Consider improving your daily routines and explore our calming music library.
                      </p>
                    </div>
                  ) : (
                    <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                      <h4 className="font-medium text-destructive mb-2">Professional Support Recommended</h4>
                      <p className="text-sm text-muted-foreground">
                        We recommend connecting with professional counselors and support resources.
                      </p>
                    </div>
                  )}
                </div>

                {additionalConcerns && (
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Additional Concerns:</h3>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm">{additionalConcerns}</p>
                    </div>
                  </div>
                )}

                <div className="flex gap-4">
                  <Button onClick={() => navigate("/library")} className="flex-1" variant="calm">
                    <Music className="w-4 h-4 mr-2" />
                    Explore Library
                  </Button>
                  <Button onClick={() => navigate("/dashboard")} className="flex-1" variant="peaceful">
                    View Dashboard
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      <div className="container mx-auto px-4 pt-20 pb-8">
        <div className="max-w-2xl mx-auto animate-fade-in">
          <Card className="shadow-calm border-0">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-xl">Mental Wellness Assessment</CardTitle>
                  <CardDescription>Question {currentQuestion + 1} of {questions.length}</CardDescription>
                </div>
                <div className="text-sm text-muted-foreground">
                  {Math.round(progress)}% Complete
                </div>
              </div>
              <Progress value={progress} className="mt-4" />
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-lg font-medium leading-relaxed">
                  {questions[currentQuestion].question}
                </h2>

                <RadioGroup
                  value={answers[currentQuestion] || ""}
                  onValueChange={handleAnswer}
                  className="space-y-3"
                >
                  {questions[currentQuestion].options.map((option, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                      <RadioGroupItem value={option} id={`option-${index}`} />
                      <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {isLastQuestion && (
                <div className="space-y-2">
                  <Label htmlFor="concerns">Any additional concerns you'd like to share? (Optional)</Label>
                  <Textarea
                    id="concerns"
                    placeholder="Share any specific challenges or concerns you're facing..."
                    value={additionalConcerns}
                    onChange={(e) => setAdditionalConcerns(e.target.value)}
                    className="min-h-[100px]"
                  />
                </div>
              )}

              <div className="flex justify-between pt-4">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                  className="flex items-center space-x-2"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </Button>

                <Button
                  onClick={handleNext}
                  disabled={!answers[currentQuestion]}
                  className="flex items-center space-x-2 bg-gradient-calm hover:opacity-90"
                >
                  <span>{isLastQuestion ? "Complete Assessment" : "Next"}</span>
                  {!isLastQuestion && <ChevronRight className="w-4 h-4" />}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Assessment;