"use client";

export function Footer() {
    return (
        <footer className="py-8 border-t">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
                    <p>
                        © 2025 Aaron Charles — Building practical AI systems from Kenya.
                    </p>
                    <p className="text-xs">
                        Designed & built by me.
                    </p>
                </div>
            </div>
        </footer>
    );
}
