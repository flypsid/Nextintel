"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { getContactSchema } from "@/app/schema/contactSchema";

// Définition d'un type pour les erreurs de champ
interface FieldErrors {
  name?: string;
  email?: string;
  message?: string;
}

const ContactSection = () => {
  const t = useTranslations("ContactPage");

  // Schéma de validation Zod avec messages d'erreur traduits
  const schema = getContactSchema(t);

  const [errors, setErrors] = useState<FieldErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };
    
    const result = schema.safeParse(data);
    if (!result.success) {
      const fieldErrors: FieldErrors = {};
      result.error.errors.forEach((err) => {
        if (err.path[0] && typeof err.path[0] === "string") {
          fieldErrors[err.path[0] as keyof FieldErrors] = err.message;
        }
      });
      setErrors(fieldErrors);
    } else {
      setErrors({});
      setIsSubmitted(true);
      // Réinitialiser le formulaire après la soumission réussie
      e.currentTarget.reset();
    }
  };

  return (
    <section id="contact" className="py-16 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t("title")}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>

        <div className="bg-card border border-muted rounded-2xl shadow-lg p-6 md:p-8">
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {t("form.success.title")}
              </h3>
              <p className="text-muted-foreground mb-6">
                {t("form.success.message")}
              </p>
              <Button
                onClick={() => setIsSubmitted(false)}
                variant="outline"
              >
                {t("form.success.button")}
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">{t("form.name")}</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder={t("form.namePlaceholder")}
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive">{errors.name}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{t("form.email")}</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={t("form.emailPlaceholder")}
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">{errors.email}</p>
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">{t("form.message")}</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder={t("form.messagePlaceholder")}
                  rows={5}
                  className={errors.message ? "border-destructive" : ""}
                />
                {errors.message && (
                  <p className="text-sm text-destructive">{errors.message}</p>
                )}
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-2">
                <p className="text-sm text-muted-foreground">
                  {t.rich("form.requiredFields", {
                    span: (chunks) => (
                      <span className="text-destructive">{chunks}</span>
                    ),
                  })}
                </p>
                <Button type="submit" className="w-full sm:w-auto">
                  {t("form.submit")}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
