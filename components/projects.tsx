"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CircleDot } from "lucide-react";

const projects = [
    {
        number: "01",
        title: "MasomoGPT",
        role: "Founder & Lead Architect",
        domain: "EdTech / AI Agents",
        description:
            "The first AI-powered learning platform aligned strictly with the Kenyan CBC curriculum. MasomoGPT democratizes access to private tutoring by combining curriculum-mapped PDFs with safe, hallucination-resistant AI agents.",
        stack: ["Python", "RAG", "Vector Search", "Gamification Engines"],
        status: "Live & Scaling",
        link: "https://masomogpt.com",
        regions: [
            { name: "Kenya (HQ)", url: "https://masomogpt.com", status: "online" },
            { name: "Rwanda", url: "https://rwanda.masomogpt.com", status: "online" },
            { name: "Uganda", url: "https://uganda.masomogpt.com", status: "online" },
            { name: "DRC", url: "https://drc.masomogpt.com", status: "online" },
        ],
    },
    {
        number: "02",
        title: "UTU",
        role: "Founder",
        domain: "Deep Tech / AI Infrastructure",
        description:
            '"Context-as-a-Service." UTU is building the infrastructure to train and fine-tune AI models on indigenous African languages and cultural datasets, bridging the gap between global LLMs and local utility.',
        stack: ["LLM Fine-tuning", "Data Pipelines"],
        status: "In Development",
        link: "https://utuafrica.com",
    },
    {
        number: "03",
        title: "GPT Radio",
        role: "Creator",
        domain: "Media / Automation",
        description:
            "An experimental autonomous broadcasting system. This project explores the intersection of generative audio and traditional media workflows, automating content delivery without sacrificing engagement.",
        stack: ["Generative Audio", "Automation"],
        status: "Experimental",
        link: null,
    },
];

export function Projects() {
    return (
        <section id="work" className="py-24 lg:py-32">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Header */}
                <div className="max-w-2xl mb-16">
                    <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-4">
                        Selected Work
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                        Case Studies
                    </h2>
                    <p className="text-muted-foreground">
                        A selection of projects that demonstrate my approach to building AI-powered systems.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="space-y-8">
                    {projects.map((project) => (
                        <Card
                            key={project.title}
                            className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-border/50 hover:border-foreground/20"
                        >
                            <CardContent className="p-0">
                                <div className="grid lg:grid-cols-[120px_1fr] gap-0">
                                    {/* Number Column */}
                                    <div className="hidden lg:flex items-center justify-center border-r bg-secondary/30 text-3xl font-bold text-muted-foreground/30">
                                        {project.number}
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 lg:p-8">
                                        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                                            <div>
                                                <div className="flex items-center gap-3 mb-2">
                                                    <h3 className="text-xl lg:text-2xl font-semibold">
                                                        {project.title}
                                                    </h3>
                                                    <span className="text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
                                                        {project.domain}
                                                    </span>
                                                </div>
                                                <p className="text-sm text-muted-foreground">
                                                    {project.role}
                                                </p>
                                            </div>

                                            {/* Status indicator */}
                                            <div className="flex items-center gap-2 text-sm">
                                                <CircleDot
                                                    className={`h-3 w-3 ${project.status === "Live & Scaling" || project.status === "Live"
                                                        ? "text-green-500"
                                                        : project.status === "In Development"
                                                            ? "text-yellow-500"
                                                            : "text-muted-foreground"
                                                        }`}
                                                />
                                                <span className="text-muted-foreground">{project.status}</span>
                                            </div>
                                        </div>

                                        <p className="text-muted-foreground mb-6 leading-relaxed">
                                            {project.description}
                                        </p>

                                        {/* Stack */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.stack.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="text-xs px-3 py-1 rounded-full border bg-background text-muted-foreground"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Regional platforms for MasomoGPT */}
                                        {project.regions && (
                                            <div className="mb-6 p-4 rounded-lg bg-secondary/30 border">
                                                <p className="text-xs tracking-widest text-muted-foreground uppercase mb-3">
                                                    Regional Platforms
                                                </p>
                                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                                    {project.regions.map((region) => (
                                                        <Link
                                                            key={region.name}
                                                            href={region.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="group/region flex items-center justify-between p-3 rounded-md bg-background border hover:border-foreground/30 transition-colors"
                                                        >
                                                            <div className="flex items-center gap-2">
                                                                <div className="w-2 h-2 rounded-full bg-green-500" />
                                                                <span className="text-sm font-medium">{region.name}</span>
                                                            </div>
                                                            <ArrowUpRight className="h-3 w-3 opacity-0 group-hover/region:opacity-100 transition-opacity" />
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Link */}
                                        {project.link && (
                                            <Button asChild variant="outline" size="sm" className="group/btn">
                                                <Link href={project.link} target="_blank" rel="noopener noreferrer">
                                                    View Platform
                                                    <ArrowUpRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                                </Link>
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
