# Triebwerk Backend App

## How to start/test

1. Build the Docker image: `docker build -t triebwerk-support .`
2. Run the Docker container: `docker run -p 3000:3000 triebwerk-support`
3. Use Postman to test the APIs.
4. Postman json file is attached in the root (import it into Postman app).

## APIs

## Issue Routes

- GET /issues/ List all issues
- POST /issues/ Report a new issue
- POST /issues/:id Resolve an issue
- DELETE /issues/:id Remove an issue

## SupportAgent Routes

- POST /support-agents/ Add a new support agent
- GET /support-agents/ List all support agent
- GET /support-agents/:id List a single support agent
- DELETE /support-agents/:id Remove support agent
- POST /support-agents/:id Change support agents status
