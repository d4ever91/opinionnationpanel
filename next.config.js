const { i18n } = require("./next-i18next.config");
/** @type {import('next').NextConfig} */
module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "cn","jp","id","it","es","fr","pt","de","sa"],
  },
};