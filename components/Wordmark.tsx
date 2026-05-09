import { cn } from "@/lib/cn";

interface WordmarkProps {
    className?: string;
    sublineClassName?: string;
    showSubline?: boolean;
    size?: "sm" | "md" | "lg";
}

const sizeMap = {
    sm: "text-base md:text-lg",
    md: "text-xl md:text-2xl",
    lg: "text-3xl md:text-4xl",
};

export default function Wordmark({
    className,
    sublineClassName,
    showSubline = false,
    size = "md",
}: WordmarkProps) {
    return (
        <span className={cn("inline-flex flex-col leading-none", className)}>
            <span
                className={cn(
                    "font-heading font-bold tracking-tight text-forest",
                    sizeMap[size],
                )}
            >
                Old For<span className="text-ember">(</span>rest<span className="text-ember">)</span> Consulting
            </span>
            {showSubline && (
                <span
                    className={cn(
                        "font-sans text-[0.625rem] md:text-xs uppercase tracking-[0.18em] text-ink-3 mt-1",
                        sublineClassName,
                    )}
                >
                    Est. Utah · Managed Intelligence
                </span>
            )}
        </span>
    );
}
