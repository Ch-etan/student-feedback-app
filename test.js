const fs = require("fs");

const html = fs.readFileSync("index.html", "utf8");
const css = fs.readFileSync("style.css", "utf8");
const js = fs.readFileSync("script.js", "utf8");

function check(condition, message) {
    if (!condition) {
        throw new Error(`Test failed: ${message}`);
    }

    console.log(`✓ ${message}`);
}

check(html.includes("Student Feedback System"), "HTML contains application title");

check(html.includes('id="name"'), "HTML contains name field");

check(html.includes('id="course"'), "HTML contains course field");

check(html.includes('id="feedback"'), "HTML contains feedback field");

check(html.includes('id="feedbackForm"'), "HTML contains feedback form");

check(js.includes("addEventListener"), "JavaScript contains form event handler");

check(js.includes("feedbackList"), "JavaScript contains feedback list");

check(css.includes(".feedback-card"), "CSS contains feedback card styling");

console.log("\nAll tests passed!");