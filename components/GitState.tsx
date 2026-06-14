/* eslint-disable @next/next/no-img-element */
"use client";

import { GitPullRequest, Activity, Code2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function GitHubSection() {
  const USERNAME = "soumydip";

  return (
    <section className="py-20 px-4 bg-slate-950" id="github">
      <div className="max-w-6xl mx-auto">

        {/* ── Header ── */}
        <div className="mb-12 text-center">
          <Badge variant="outline" className="mb-4 text-primary border-primary/30">
            <Activity className="w-3 h-3 mr-1" />
            Open Source Activity
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            GitHub Stats
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            My open source contributions and coding activity
          </p>
        </div>

        {/* ── 1. Total Contributions + Streak ── */}
        <Card className="bg-slate-900 border-slate-800 p-4 flex items-center justify-center mb-6 hover:border-primary/50 transition-all duration-300">
          <img
            src={`https://github-readme-streak-stats.herokuapp.com/?user=${USERNAME}&theme=transparent&hide_border=true&stroke=6366f1&ring=6366f1&fire=f59e0b&currStreakLabel=6366f1&sideLabels=a1a1aa&dates=a1a1aa&sideNums=e4e4e7`}
            alt="GitHub Streak & Total Contributions"
            className="w-full max-w-lg"
            loading="lazy"
          />
        </Card>

        {/* ── 2. Top Languages ── */}
        <Card className="bg-slate-900 border-slate-800 p-4 mb-6 hover:border-primary/50 transition-all duration-300">
          <CardHeader className="px-2 pt-2 pb-4">
            <CardTitle className="text-base font-medium text-muted-foreground flex items-center gap-2">
              <Code2 className="w-4 h-4 text-primary" />
              Top Languages
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 flex justify-center">
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${USERNAME}&layout=compact&theme=transparent&hide_border=true&langs_count=6&title_color=6366f1&text_color=a1a1aa`}
              alt="Top Languages"
              className="w-full max-w-lg"
              loading="lazy"
            />
          </CardContent>
        </Card>

        {/* ── 3. Contribution Graph ── */}
        <Card className="bg-slate-900 border-slate-800 p-4 overflow-hidden hover:border-primary/50 transition-all duration-300">
          <CardHeader className="px-2 pt-2 pb-4">
            <CardTitle className="text-base font-medium text-muted-foreground flex items-center gap-2">
              <GitPullRequest className="w-4 h-4 text-primary" />
              Contribution Graph
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 flex justify-center">
            <img
              src={`https://github-readme-activity-graph.vercel.app/graph?username=${USERNAME}&theme=react-dark&hide_border=true&bg_color=transparent&color=6366f1&line=6366f1&point=f59e0b&area=true&area_color=6366f130`}
              alt="Contribution Graph"
              className="w-full rounded-lg"
              loading="lazy"
            />
          </CardContent>
        </Card>

        {/* ── GitHub Profile Link ── */}
        <div className="mt-8 text-center">
          <a
            href={`https://github.com/${USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-800 bg-slate-900 text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 text-sm font-medium"
          >
            <GitPullRequest className="w-4 h-4" />
            View Full GitHub Profile →
          </a>
        </div>

      </div>
    </section>
  );
}