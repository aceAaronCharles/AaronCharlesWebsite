import Image from "next/image";

export function About() {
    return (
        <section id="about" className="py-24 lg:py-32">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Image Column */}
                    <div className="order-2 lg:order-1 relative">
                        <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
                            <Image
                                src="/images/me.jpg"
                                alt="Aaron Charles"
                                fill
                                className="object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-500"
                                priority
                            />
                            {/* Decorative border */}
                            <div className="absolute -inset-4 border border-border rounded-lg -z-10" />
                        </div>
                    </div>

                    {/* Text Column */}
                    <div className="order-1 lg:order-2">
                        <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-4">
                            About
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
                            The Executive Summary
                        </h2>

                        <div className="space-y-6 text-muted-foreground leading-relaxed">
                            <p>
                                Technology is only as powerful as its relevance to the user. As a Technical Founder based in Nairobi, I specialize in building Applied AI systems—taking state-of-the-art models and engineering them to solve localized problems in education and business.
                            </p>

                            <p>
                                My work focuses on <span className="text-foreground font-medium">Context-as-a-Service</span>: ensuring AI understands the nuance of African languages, curriculum standards, and operational realities.
                            </p>

                            <p>
                                I've led the creation of platforms like MasomoGPT, an AI tutor built around the Kenyan CBC curriculum, and GPT Radio, an automated AI-powered radio system. My work sits at the intersection of software engineering, applied machine learning, and product design.
                            </p>

                            <p>
                                I care deeply about building systems that are useful, understandable, and resilient — especially in education and media, where technology shapes how people learn and think.
                            </p>
                        </div>

                        <p className="mt-8 text-sm italic text-muted-foreground border-l-2 border-border pl-4">
                            I believe good technology respects context, scales responsibly, and earns trust.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
