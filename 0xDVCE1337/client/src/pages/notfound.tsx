import { Link } from "wouter";
import { ArrowLeft, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
            <div className="text-center">
                <Shield className="mx-auto h-24 w-24 text-primary mb-8" />
                <h1 className="text-6xl font-mono font-bold text-primary mb-4">404</h1>
                <h2 className="text-2xl font-mono font-semibold text-secondary mb-6">
                    Access Denied
                </h2>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                    The requested resource could not be found in our secure network.
                </p>
                <Button asChild className="neon-border bg-transparent text-primary hover:bg-primary hover:text-background">
                    <Link href="/">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Return to Base
                    </Link>
                </Button>
            </div>
        </div>
    );
}
