import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type AnchorVariant = React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ShinyButtonProps = (ButtonVariant | AnchorVariant) & {
    className?: string;
    children: React.ReactNode;
};

const ShinyButton = (props: ShinyButtonProps) => {
    const baseClasses =
        "group relative px-6 py-3 font-bold text-white transition-all duration-300 ease-in-out bg-primary-900 border border-primary-400 border-b-4 rounded-full overflow-hidden hover:brightness-125 hover:border-t-4 hover:border-b active:opacity-80 active:translate-y-0.5 outline-none focus-visible:ring-2 focus-visible:ring-primary-200 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900";

    const shineClasses =
        "absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 bg-primary-400 shadow-[0_0_10px_10px_rgba(56,189,248,0.3)]";

    if ("href" in props && props.href) {
        const { href, className, children, ...linkProps } = props as AnchorVariant & { className?: string; children: React.ReactNode };
        return (
            <Link href={href} className={cn(baseClasses, "inline-flex items-center justify-center", className)} {...linkProps}>
                <span className={shineClasses}></span>
                {children}
            </Link>
        );
    }

    const { className, children, ...buttonProps } = props as ButtonVariant & { className?: string; children: React.ReactNode };

    return (
        <button className={cn(baseClasses, className)} {...buttonProps}>
            <span className={shineClasses}></span>
            {children}
        </button>
    );
};

export default ShinyButton;
