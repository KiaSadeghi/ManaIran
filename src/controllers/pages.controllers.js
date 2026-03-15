/**
 * res.render: take a template file from views folder, fill it with data, convert it to HTML
 * and send it to the browser.
 * so it does three things:
 * 1. fimds the template, 2. injects data into the template, 3. sends the generated HTML to the client.
 * We're using EJS. EJS means: HTMl with embedded JavaScript. 
 * Example Template: <h1><%= title %></h1>
 */

export const getHomePage = (req, res) => {
    res.render("index", {title: "Mana Iran"});
};

export const getAboutPage = (req, res) =>{
    res.render("about", {title: "Über Mana Iran"});
};

export const getEventsPage = (req, res) =>{
    res.render("events", {title: "Veranstaltungen"});
};

export const getContactPage = (req, res) =>{
    res.render("contact", {title: "Kontakt"});
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