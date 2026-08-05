// Simple test script to POST to the local contact API
// Usage: run the dev server (npm run dev), then in another terminal: npm run test:contact

const url = process.env.TEST_URL || "http://localhost:3000/api/contact";

const payload = {
  name: "Test User",
  email: "test@example.com",
  projectType: "Web Development",
  budget: "Let's talk",
  message: "This is a test message from the automated contact tester.",
};

async function run() {
  console.log("Posting to", url);
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const text = await res.text();
    console.log("Status:", res.status);
    try {
      console.log("Body:", JSON.parse(text));
    } catch (e) {
      console.log("Body (raw):", text);
    }
  } catch (err) {
    console.error("Request failed:", err);
    process.exit(1);
  }
}

run();
