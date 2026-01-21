import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Subtle gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />

            {/* Content */}
            <div className="container mx-auto px-6 lg:px-12 py-20 relative z-10">
                <div className="max-w-4xl mx-auto text-center lg:text-left">
                    {/* Overline */}
                    <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-6 animate-fade-in">
                        Aaron Charles — Technical Founder
                    </p>

                    {/* Headline */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] mb-6 animate-fade-in [animation-delay:100ms]">
                        Architecting context-aware AI for the next generation of African infrastructure.
                    </h1>

                    {/* Sub-headline */}
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 animate-fade-in [animation-delay:200ms] lg:mx-0 mx-auto">
                        I build scalable systems where education, media, and artificial intelligence intersect. Founder of MasomoGPT and UTU.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in [animation-delay:300ms]">
                        <Button asChild size="lg">
                            <Link href="#work">
                                View Selected Work
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg">
                            <Link href="#contact">Contact Me</Link>
                        </Button>
                    </div>

                    {/* Credibility strip */}
                    <div className="mt-16 pt-8 border-t animate-fade-in [animation-delay:400ms]">
                        <p className="text-xs text-muted-foreground mb-3 tracking-wide">
                            BUILDING
                        </p>
                        <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center lg:justify-start text-sm text-muted-foreground">
                            <span className="hover:text-foreground transition-colors">MasomoGPT</span>
                            <span className="text-border">•</span>
                            <span className="hover:text-foreground transition-colors">UTU Africa</span>
                            <span className="text-border">•</span>
                            <span className="hover:text-foreground transition-colors">GPT Radio</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative element */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-px h-12 bg-border" />
            </div>
        </section>
    );
}
