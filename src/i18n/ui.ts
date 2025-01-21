export const languages = {
  en: "🇺🇸 English",
  es: "🇪🇸 Español",
  fr: "🇫🇷 Français",
};

export const showDefaultLang = false;
export const defaultLang = "en";

interface Translations {
  [key: string]: string;
}

export const ui: { en: Translations; es: Translations; fr: Translations } = {
  en: {
    // SEO
    "index.title": "High-quality editing without relying on AI",
    "index.description":
      "We're just a couple of good folks building weekend projects & fun apps for the creative community out there.",

    "support.title": "Pictum Support",
    "support.description":
      "Get in touch with the Pictum team to ask for help, suggest features, report any bugs, or just say hi.",

    // Gui
    "canva.tryonapp": "Try App on Canva",
    "last-updated": "Last updated:",
    "support.name": "Your name",
    "support.email": "Your email goes here",
    "support.message": "Write your message",
    "support.submit": "Send Message",
    "support.name.error": "Your name must be at least 3 characters",
    "support.email.error": "Use a valid email",
    "support.message.error": "Your message must be at least 10 characters",
    "support.submit.sending": "Sending...",
    "form.succesOne": "Thank You!",
    "form.succesTwo": "Your details have been successfully submitted. Thanks!",
    "form.errorOne": "Error",
    "form.errorTwo": "There was an error. Please try again later.",

    // Footer
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms and conditions",
    "footer.support": "Support",

    // FAQ
    "faq.1.title": "Is Pictum free to use?",
    "faq.1.body": "Yes, Pictum (TypeDecoration) is completely free for everyone.",
    "faq.2.title": "Do I need a commercial license to use Pictum?",
    "faq.2.body": "No license is required. You can use Pictum for any purpose, personal or commercial.",
    "faq.3.title": "Can I upload my own fonts?",
    "faq.3.body": "Currently, you cannot upload custom fonts. However, this is a feature we plan to implement in the future.",
    "faq.4.title": "What platforms is Pictum available on?",
    "faq.4.body": "Pictum is currently only available on Canva. A web app version is planned for the future.",
    "faq.5.title": "How do I report a bug or suggest a feature?",
    "faq.5.body": "You can contact us through the 'Support button below.",
    "faq.6.title": "What kind of support do you offer?",
    "faq.6.body": "We only offer email support at the moment.",
    "faq.7.title": "Do you collect user data? How is it used?",
    "faq.7.body": "We do not collect any user data. This means we don't track your usage within the app, store any personal information, or share any data with third parties. Your privacy is our priority.",
    "faq.8.title": "Can I create tutorials or videos featuring Pictum?",
    "faq.8.body": "Absolutely! We encourage tutorials and videos. We'd love for you to share them with us when you're done!",
  },
  es: {
    // SEO
    "index.title": "Crea patrones geométricos elegantes.",
    "index.description":
      "Solo somos un par de buenas personas que crean proyectos de fin de semana y aplicaciones divertidas para la comunidad creativa.",

    "support.title": "Soporte de Pictum",
    "support.description":
      "Póngase en contacto con el equipo de Pictum para pedir ayuda, sugerir características, informar de cualquier error o simplemente hablar.",

    // Gui
    "canva.tryonapp": "Probar app en Canva",
    "last-updated": "Última actualización:",
    "support.name": "Tu nombre",
    "support.email": "Tu correo electrónico",
    "support.message": "Escribe tu mensaje",
    "support.submit": "Enviar Mensaje",
    "support.name.error": "Tu nombre debe tener al menos 3 caracteres",
    "support.email.error": "Utiliza un correo electrónico válido",
    "support.message.error": "Tu mensaje debe tener al menos 10 caracteres",
    "support.submit.sending": "Enviando...",
    "form.succesOne": "¡Gracias!",
    "form.succesTwo": "¡Tus detalles han sido enviados con éxito. ¡Gracias!",
    "form.errorOne": "Error",
    "form.errorTwo": "Hubo un error. Por favor, inténtalo de nuevo más tarde.",

    // Footer
    "footer.privacy": "Política de privacidad",
    "footer.terms": "Términos y condiciones",
    "footer.support": "Soporte",

    // FAQ
    "faq.1.title": "¿Puedo usar mis fuentes en tu aplicación?",
    "faq.1.body":
      "No puedes cargar tus fuentes por el momento, pero lo implementaremos en el futuro",
    "faq.2.title": "¿Tus aplicaciones son gratuitas?",
    "faq.2.body": "Sí, Pictum es gratuito para todos.",
    "faq.3.title": "¿Tiene una licencia comercial para usar sus aplicaciones?",
    "faq.3.body":
      "No, puedes usar Pictum donde quieras. No se requiere licencia.",
    "faq.4.title": "¿Puedo hacer tutoriales de tu aplicación?",
    "faq.4.body":
      "¡Absolutamente! Nos encanta cuando la gente hace tutoriales de nuestra aplicación. ¡Compártelo con nosotros si lo haces!",
  },
  fr: {
    // SEO
    "index.title": "Créer des motifs géométriques élégants.",
    "index.description":
      "Nous ne sommes que quelques bonnes personnes qui créent des projets de week-end et des applications amusantes pour la communauté créative.",

    "support.title": "TypeDécoration Support",
    "support.description":
      "Contactez l'équipe Pictum pour demander de l'aide, suggérer des fonctionnalités, signaler des bugs ou simplement dire bonjour.",

    // Gui
    "canva.tryonapp": "Essayer l'App sur Canva",
    "last-updated": "Dernière mise à jour:",
    "support.name": "Votre nom",
    "support.email": "Votre adresse e-mail",
    "support.message": "Écrivez votre message",
    "support.submit": "Envoyer",
    "support.name.error": "Votre nom doit comporter au moins 3 caractères",
    "support.email.error": "Utilisez une adresse e-mail valide",
    "support.message.error": "Votre message doit comporter au moins 10 caractères",
    "support.submit.sending": "Envoi en cours...",
    "form.succesOne": "Merci!",
    "form.succesTwo": "Vos détails ont été envoyés avec succès. Merci!",
    "form.errorOne": "Erreur",
    "form.errorTwo": "Il y a eu une erreur. Veuillez réessayer plus tard.",

    // Footer
    "footer.terms": "Termes et conditions",
    "footer.privacy": "Politique de confidentialité",
    "footer.support": "Support",

    // FAQ
    "faq.1.title": "Puis-je utiliser mes polices dans votre application ?",
    "faq.1.body":
      "Vous ne pouvez pas télécharger vos polices pour le moment, mais nous le mettrons en œuvre à l'avenir",
    "faq.2.title": "Vos applications sont-elles gratuites ?",
    "faq.2.body": "Oui, Pictum est gratuit pour tout le monde.",
    "faq.3.title":
      "Avez-vous une licence commerciale pour utiliser vos applications ?",
    "faq.3.body":
      "Non, vous pouvez utiliser Pictum où vous le souhaitez. Aucune licence n'est requise.",
    "faq.4.title": "Puis-je faire des tutoriels sur votre application ?",
    "faq.4.body":
      "Absolument ! Nous aimons quand les gens font des tutoriels sur notre application. Partagez-les avec nous si vous le faites !",
  },
};
