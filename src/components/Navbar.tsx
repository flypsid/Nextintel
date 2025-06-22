"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const navigation = [
  { name: "home", href: "#home" },
  { name: "about", href: "#about" },
  { name: "contact", href: "#contact" },
];

export default function Navbar() {
  const t = useTranslations("HomePage");
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-muted/60 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={`${pathname}${item.href}`}
                className="text-base font-medium text-foreground hover:text-primary transition-colors"
              >
                {t(`nav.${item.name}`)}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
}
