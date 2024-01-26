/** @type {import('next').NextConfig} */
module.exports = {
  i18n: {
    locales: ["en-US", "fr-FR"],
    defaultLocale: "fr-FR",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
};
