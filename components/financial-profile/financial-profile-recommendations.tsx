"use client";

import {
  Award,
  BookOpen,
  CheckCircle,
  ChevronRight,
  Target,
} from "lucide-react";
import { motion } from "motion/react";

import { Recommendation } from "@/lib/validations/financial-profile";
import { Button } from "@/components/ui/button";

interface FinancialProfileRecommendationsProps {
  recommendations: Recommendation | null;
  onFinish: () => void;
}

export function FinancialProfileRecommendations({
  recommendations,
  onFinish,
}: FinancialProfileRecommendationsProps) {
  if (!recommendations) {
    return (
      <div className="text-center">
        <p className="text-muted-foreground">Loading recommendations...</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-8 px-4 md:space-y-12 2xl:space-y-16"
    >
      {/* Learning Path */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-card border-border w-full rounded-lg border p-6"
      >
        <div className="flex items-center gap-3">
          <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-full">
            <Target className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold">Your Learning Path</h2>
        </div>
        <div className="mt-4">
          <h3 className="text-primary text-xl font-semibold">
            {recommendations.learningPath.title}
          </h3>
          <p className="text-muted-foreground mt-2">
            {recommendations.learningPath.description}
          </p>
        </div>
      </motion.div>

      {/* Challenges */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-card border-border rounded-lg border p-6"
      >
        <div className="flex items-center gap-3">
          <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-full">
            <Award className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold">Your Challenges</h2>
        </div>
        <div className="mt-4 space-y-4">
          {recommendations.challenges.map((challenge, index) => (
            <div
              key={index}
              className="bg-background/50 flex items-start gap-3 rounded-md p-3"
            >
              <CheckCircle className="text-muted-foreground mt-0.5 h-5 w-5" />
              <div>
                <p className="font-medium">{challenge.title}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Tips */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="from-card to-card/50 border-border/50 rounded-xl border bg-gradient-to-br p-8 shadow-lg"
      >
        <div className="flex items-center gap-3">
          <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-full">
            <BookOpen className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold">Financial Tips</h2>
        </div>
        <div className="mt-4 space-y-4">
          {recommendations.tips.slice(0, 5).map((tip, index) => (
            <div
              key={index}
              className="bg-background/80 flex items-start gap-3 rounded-lg p-4 shadow-sm transition-colors"
            >
              <div className="bg-primary/20 text-primary flex h-6 w-6 items-center justify-center rounded-full text-sm font-medium">
                {index + 1}
              </div>
              <p>{tip}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Next Steps */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="from-card to-card/50 border-border/50 rounded-xl border bg-gradient-to-br p-8 shadow-lg"
      >
        <h2 className="mb-4 text-2xl font-bold">Next Steps</h2>
        <div className="space-y-4">
          {recommendations.nextSteps.slice(0, 3).map((step, index) => (
            <div
              key={index}
              className="bg-background/80 flex items-start gap-3 rounded-lg p-4 shadow-sm transition-colors"
            >
              <div className="bg-primary/20 text-primary flex h-6 w-6 items-center justify-center rounded-full text-sm font-medium">
                {index + 1}
              </div>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Continue to Dashboard Button */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex justify-center pt-8"
      >
        <Button
          onClick={onFinish}
          size="lg"
          className="gap-2 px-8 py-6 text-lg font-semibold shadow-lg transition-transform hover:scale-105"
        >
          Continue to Dashboard
          <ChevronRight className="h-4 w-4" />
        </Button>
      </motion.div>
    </motion.div>
  );
}
