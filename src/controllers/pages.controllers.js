/**
 * res.render: take a template file from views folder, fill it with data, convert it to HTML
 * and send it to the browser.
 * so it does three things:
 * 1. fimds the template, 2. injects data into the template, 3. sends the generated HTML to the client.
 * We're using EJS. EJS means: HTMl with embedded JavaScript. 
 * Example Template: <h1><%= title %></h1>
 */

import { translations } from "../utils/translations.js";

const getLang = (req) => {
  const lang = req.query.lang || "de";
  return translations[lang] ? lang : "de";
};

const teamMembers = [
  { name: "Name 1", role: "Leitung" },
  { name: "Name 2", role: "Organisation" },
  { name: "Name 3", role: "Kommunikation" },
  { name: "Name 4", role: "Ordnung / Sicherheit" },
];

export const getHomePage = (req, res) => {
  const lang = getLang(req);
  const t = translations[lang];

  res.render("index", {
    title: t.home.title,
    t,
    lang,
  });
};

export const getAboutPage = (req, res) => {
  const lang = getLang(req);
  const t = translations[lang];

  res.render("about", {
    title: t.about.title,
    t,
    lang,
    teamMembers,
  });
};

export const getEventsPage = (req, res) => {
  const lang = getLang(req);
  const t = translations[lang];

  res.render("events", {
    title: t.events.title,
    t,
    lang,
  });
};

export const getContactPage = (req, res) => {
  const lang = getLang(req);
  const t = translations[lang];

  res.render("contact", {
    title: t.contact.title,
    t,
    lang,
  });
};

/**
 * res.render() takes a template file from the views folder, fills it with data, converts it into HTML,
 * and sends the page to the browser.
 * 
 * Think of render() like this
 * Imagine a Word document template:    Hello {name}
 * Then you insert: {name} = Kian
 * Final output: Kian.
 */