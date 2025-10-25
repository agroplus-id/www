import { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "Light" | "Dark";
type Size = "N" | "L";
type ButtonProps = {
  variant?: Variant;
  size?: Size;
  children?: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
} & ComponentPropsWithoutRef<"a">;

export default function Button({
  variant = "Light",
  children,
  leftIcon,
  rightIcon,
  className,
  ...props
}: ButtonProps) {
  const variantClasses: Record<Variant, string> = {
    Light: "bg-agro-green-100 text-agro-green-600",
    Dark: "bg-agro-green-600 text-agro-green-100",
  };

  const lPadding = leftIcon != undefined ? "pl-2" : "pl-4";
  const rPadding = rightIcon != undefined ? "pr-2" : "pr-4";

  return (
    <a
      className={`flex flex-row w-fit items-center gap-2 rounded-full py-2 ${lPadding} ${rPadding} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {leftIcon}
      <span className="font-bold">{children}</span>
      {rightIcon}
    </a>
  );
}
