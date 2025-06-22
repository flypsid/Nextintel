import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

const AboutSection = () => {
  const t = useTranslations("AboutPage");

  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t("title")}</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">{t("subtitle")}</h3>
            <p className="text-muted-foreground mb-6">
              {t("description")}
            </p>
            <ul className="space-y-3">
              {[1, 2, 3].map((item) => (
                <li key={item} className="flex items-start">
                  <svg
                    className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{t(`features.${item}`)}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-muted/30 p-6 rounded-xl shadow-inner flex items-center justify-center">
            <div className="relative w-full max-w-xs h-auto">
              <Image
                src="/images/logo.png"
                alt={t("imagePlaceholder")}
                width={300}
                height={100}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
