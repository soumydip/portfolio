/* eslint-disable @next/next/no-img-element */
"use client";

import { GitPullRequest, Activity, Code2, Github } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

export default function GitHubSection() {
  const USERNAME = "soumydip";

  const streakUrl =
    `https://streak-stats.demolab.com/?user=${USERNAME}` +
    `&theme=transparent` +
    `&hide_border=true` +
    `&stroke=6366f1` +
    `&ring=6366f1` +
    `&fire=f59e0b` +
    `&currStreakLabel=6366f1` +
    `&sideLabels=a1a1aa` +
    `&dates=a1a1aa` +
    `&sideNums=e4e4e7`;

  return (
    <section id="github" className="bg-slate-950 px-4 py-20">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <Badge
            variant="outline"
            className="
              mb-4
              border-primary/30
              text-primary
            "
          >
            <Activity className="mr-1 h-3 w-3" />
            Open Source Activity
          </Badge>

          <h2
            className="
              mb-3
              text-3xl
              font-bold
              text-foreground
              md:text-4xl
            "
          >
            GitHub Stats
          </h2>

          <p className="mx-auto max-w-md text-muted-foreground">
            My open source contributions and coding activity
          </p>
        </div>

        <Card
          className="
            mb-6
            overflow-hidden
            border-slate-800
            bg-slate-900
            transition-colors
            duration-300
            hover:border-primary/50
          "
        >
          <CardContent
            className="
              flex
              justify-center
              overflow-x-auto
              p-4
            "
          >
            <img
              src={streakUrl}
              alt="GitHub contribution streak"
              className="
                h-auto
                w-full
                max-w-xl
                object-contain
              "
              loading="lazy"
              decoding="async"
            />
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <a
            href={`https://github.com/${USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className=" inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900 px-6 py-3 text-sm font-medium text-muted-foreground transition-all duration-200 hover:border-primary/50 hover:bg-primary/5 hover:text-foreground
            "
          >
            <Github className="h-4 w-4" />
            View Full GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}
