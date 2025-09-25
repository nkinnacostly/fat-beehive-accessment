const express = require("express");
const Twig = require("twig");
const path = require("path");

const app = express();
const PORT = 3000;

// Configure Twig
Twig.cache(false); // Disable caching for development

// Set up Twig as the template engine
app.set("view engine", "twig");
app.set("views", path.join(__dirname, "project/templates"));

// Serve static files (CSS, JS, images)
app.use("/assets", express.static(path.join(__dirname, "project/assets")));

// Routes
app.get("/", (req, res) => {
  res.render("pages/index.html.twig");
});

app.get("/about", (req, res) => {
  res.render("pages/index.html.twig", {
    title: "About Us - Demo",
    content: "<h1>About Us</h1><p>Learn more about our company!</p>",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Twig development server running at http://localhost:${PORT}`);
  console.log("📝 Edit Twig files in project/templates/ and see changes live!");
  console.log("🎨 Sass is already watching for CSS changes");
});
