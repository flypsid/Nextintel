import React from "react";
import { useTranslations } from "next-intl";

const Homepage = () => {
  const t = useTranslations("HomePage");

  return (
    <section className="hero-section py-16 px-4 text-center bg-gray-50">
      <h1 className="text-4xl font-bold mb-4">{t("heroTitle")}</h1>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto">
        {t("heroDescription")}
      </p>
    </section>
  );
};

export default Homepage;
