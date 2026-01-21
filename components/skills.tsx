"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
    Brain,
    Server,
    Palette,
    Wrench,
    Lightbulb
} from "lucide-react";

const skillCategories = [
    {
        icon: Brain,
        title: "AI & Machine Learning",
        skills: [
            "Large Language Models (LLMs)",
            "Prompt Engineering",
            "Model Evaluation",
            "Retrieval-Augmented Generation (RAG)",
            "AI Safety",
            "Applied NLP",
        ],
    },
    {
        icon: Server,
        title: "Backend & Systems",
        skills: [
            "Python",
            "Django",
            "REST APIs",
            "Authentication Systems",
            "Background Jobs",
            "System Architecture",
        ],
    },
    {
        icon: Palette,
        title: "Frontend & Product",
        skills: [
            "HTML, CSS, JavaScript",
            "React & Next.js",
            "Responsive Design",
            "UX-driven Interfaces",
        ],
    },
    {
        icon: Wrench,
        title: "Infrastructure & Tools",
        skills: [
            "Git",
            "Linux",
            "Cloud Deployment",
            "CI/CD",
            "API Integrations",
        ],
    },
    {
        icon: Lightbulb,
        title: "Product & Leadership",
        skills: [
            "Product Strategy",
            "MVP Development",
            "Founder-led Engineering",
            "Stakeholder Communication",
        ],
    },
];

export function Skills() {
    return (
        <section className="py-24 lg:py-32 bg-secondary/30">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Header */}
                <div className="max-w-2xl mb-16">
                    <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-4">
                        Expertise
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                        What I Work With
                    </h2>
                    <p className="text-muted-foreground">
                        Tools and technologies I use to build systems that matter. Grouped by function, not buzzwords.
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, index) => (
                        <Card
                            key={category.title}
                            className="group hover:shadow-lg hover:border-foreground/20 bg-background"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <CardContent className="p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 rounded-md bg-secondary group-hover:bg-foreground group-hover:text-background transition-colors">
                                        <category.icon className="h-5 w-5" />
                                    </div>
                                    <h3 className="font-semibold">{category.title}</h3>
                                </div>
                                <ul className="space-y-2">
                                    {category.skills.map((skill) => (
                                        <li
                                            key={skill}
                                            className="text-sm text-muted-foreground flex items-start gap-2"
                                        >
                                            <span className="text-border mt-1.5">•</span>
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
