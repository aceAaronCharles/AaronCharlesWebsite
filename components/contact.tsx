"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, ArrowUpRight, Send } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="py-24 lg:py-32 bg-secondary/30">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Left Column - Info */}
                    <div>
                        <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-4">
                            Get In Touch
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                            Let&apos;s Build Something Useful
                        </h2>
                        <p className="text-muted-foreground mb-10 leading-relaxed">
                            I&apos;m open to collaborations, speaking opportunities, and building ambitious products with thoughtful teams.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-6 mb-10">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-md bg-background border">
                                    <Mail className="h-5 w-5 text-muted-foreground" />
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                                        Email
                                    </p>
                                    <Link
                                        href="mailto:aceaaroncharles001@gmail.com"
                                        className="text-foreground hover:text-muted-foreground transition-colors animated-underline"
                                    >
                                        aceaaroncharles001@gmail.com
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-3">
                            <Link
                                href="https://github.com/aceAaronCharles"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-md bg-background border hover:bg-foreground hover:text-background transition-colors group"
                            >
                                <Github className="h-5 w-5" />
                            </Link>
                            <Link
                                href="https://www.linkedin.com/in/aceaaroncharles"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-md bg-background border hover:bg-foreground hover:text-background transition-colors group"
                            >
                                <Linkedin className="h-5 w-5" />
                            </Link>

                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <div className="bg-background p-8 rounded-lg border">
                        <h3 className="text-lg font-semibold mb-6">Send a Message</h3>
                        <form
                            action="mailto:aceaaroncharles001@gmail.com"
                            method="POST"
                            encType="text/plain"
                            className="space-y-4"
                        >
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="text-sm text-muted-foreground mb-2 block">
                                        Name
                                    </label>
                                    <Input id="name" name="name" placeholder="Your name" required />
                                </div>
                                <div>
                                    <label htmlFor="email" className="text-sm text-muted-foreground mb-2 block">
                                        Email
                                    </label>
                                    <Input id="email" name="email" type="email" placeholder="your@email.com" required />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="subject" className="text-sm text-muted-foreground mb-2 block">
                                    Subject
                                </label>
                                <Input id="subject" name="subject" placeholder="What's this about?" />
                            </div>
                            <div>
                                <label htmlFor="message" className="text-sm text-muted-foreground mb-2 block">
                                    Message
                                </label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    placeholder="Your message..."
                                    className="min-h-[140px]"
                                    required
                                />
                            </div>
                            <Button type="submit" size="lg" className="w-full group">
                                Send Message
                                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
