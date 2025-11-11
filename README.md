# AI Resume Builder

AI Resume Builder is a full-stack web application that helps users create professional, ATS-friendly resumes in minutes. It combines AI-powered content enhancement and extraction with template-based rendering and automated image processing (face crop + optional background removal) to produce polished, recruiter-ready resumes.

## Key features

- AI-powered content: auto-enhance professional summaries and job descriptions using OpenAI.
- Resume extraction: convert uploaded resume text into a structured JSON schema (skills, experience, education, personal info) so users can edit and refine quickly.
- Multiple templates: preview and switch between clean, ATS-friendly templates (Classic, Minimal, Modern, etc.).
- Image handling: ImageKit integration for face-crop and optional background removal (e-bgremove).
- User profiles & persistence: Node/Express API + MongoDB to save multiple resumes per user, with JWT-based auth.
- Save / update / delete / publish resumes; get public resume links.

## How it works (high level)

1. Frontend (client): a React + Vite single-page app. The UI uses Redux Toolkit to store user/session state and axios to call the backend API.
2. Backend (server): Express.js API that manages users, resumes, file uploads, and AI endpoints. The server persists resume documents in MongoDB.
3. AI integration: The server uses the OpenAI SDK to:
	- Enhance short text (professional summary / job description) via chat-completions with curated system prompts.
	- Extract structured resume data from uploaded resume text by asking the model to return a strict JSON object matching a predefined schema.
4. Image processing: Uploaded profile photos are sent to ImageKit. When requested, the server applies face-focused cropping and the `e-bgremove` transformation to remove the background and produce a polished headshot URL saved on the resume.

## Where AI is used

- `enhanceProfessionalSummary` and `enhanceJobDescription` endpoints send user-written text to OpenAI with prompts that request concise, ATS-friendly rewrites.
- `uploadResume` endpoint sends raw resume text to OpenAI and requests a JSON-only response containing professional_summary, skills, personal_info, experience, project, and education arrays/objects. The server parses the JSON and stores it as a `Resume` document.

Files of interest (server-side):
- `server/Controllers/aiController.js` — AI prompts and request/response handling.
- `server/Controllers/ResumeController.js` — resume creation, update, image upload and background-removal transformation.
- `server/Configs/Ai.js` — OpenAI SDK config (env: `OPENAI_API_KEY`, `OPENAI_BASE_URL`, `OPENAI_MODEL`).
- `server/Configs/ImageKit.js` — ImageKit SDK config (env: `IMAGEKIT_PRIVATE_KEY`).

## Tech stack

- Frontend: React 19, Vite, Tailwind CSS, Redux Toolkit, react-router, axios
- Backend: Node.js (ESM), Express.js, Mongoose (MongoDB), multer for uploads
- AI: OpenAI (chat completions)
- Image handling: ImageKit (`@imagekit/nodejs`) for uploads, face crop and background removal
- Auth: JWT + bcrypt

_(See `client/package.json` and `server/package.json` for exact dependencies.)_

## Environment variables

Server (example envs required):
- MONGODB_URI — your MongoDB connection URI (without trailing slash). The server appends `/resume-builder`.
- OPENAI_API_KEY — OpenAI API key
- OPENAI_BASE_URL — (optional) base URL for OpenAI-compatible API
- OPENAI_MODEL — model name used for chat completions
- IMAGEKIT_PRIVATE_KEY — ImageKit private key (used by server upload logic)
- JWT_SECRET — secret used to sign/verify JWT tokens

Client (build-time envs for Vite):
- VITE_BASE_URL — the base URL for the backend API used at build time (e.g., `https://api.example.com` or leave blank to use relative paths `/api`)

Important: Vite injects `VITE_*` variables at build time. If you change `VITE_BASE_URL` on your hosting provider (Vercel/Netlify), you must rebuild the client for changes to take effect.

## Local development

1. Start the server

```powershell
cd server
npm install
# create a .env with the server environment variables (MONGODB_URI, OPENAI_API_KEY, JWT_SECRET, etc.)
npm run server
```

2. Start the client (local dev server)

```powershell
cd client
npm install
# for local testing you can set VITE_BASE_URL to http://localhost:3000
$env:VITE_BASE_URL='http://localhost:3000'
npm run dev
```

3. Build for production

```powershell
cd client
npm run build
# deploy the contents of client/dist to your static host (Vercel/Netlify) — ensure VITE_BASE_URL is set in the build env
```

## Deployment notes (Vercel)

- Frontend: Add `VITE_BASE_URL` in Project Settings → Environment Variables (Production). Re-deploy after setting it.
- Backend: Deploy the `server/` app to Render, Heroku, DigitalOcean App Platform, or similar. Set envs for MongoDB, OpenAI keys, ImageKit key and `JWT_SECRET`.

If your frontend and backend share the same domain (CNAME), you may prefer leaving `VITE_BASE_URL` blank and use relative `/api/...` calls to avoid CORS and make deployment simpler.

## Real-world problems solved

- Saves job seekers time by converting free-form or uploaded resume text into structured sections instantly.
- Improves the quality of summaries and bullet points by rewriting them to be action-oriented and ATS-friendly.
- Lowers friction for users who can't edit images — automatic face-cropping and optional background removal produces consistent profile photos for resumes.

