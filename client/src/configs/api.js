import axios from 'axios'

// Normalize VITE_BASE_URL to avoid malformed values in production builds
function getBaseURL() {
    let base = import.meta.env.VITE_BASE_URL ?? '';

    // If the value accidentally contains a single slash after the protocol (http:/example)
    // fix it to have the double slash (http://example)
    base = base.replace(/^http:\/([^\/])/, 'http://$1');
    base = base.replace(/^https:\/([^\/])/, 'https://$1');

    // remove trailing slash to avoid double-slash when joining paths
    if (base.endsWith('/')) base = base.slice(0, -1);

    if (!base) {
        // no base URL provided — axios will use relative paths which is often correct
        // for same-origin APIs. Log a warning to help diagnose deployment issues.
        // eslint-disable-next-line no-console
        console.warn('VITE_BASE_URL not set — requests will be sent as relative paths');
    }

    return "https://ai-based-resume-generator-server.vercel.app/";
}

const api = axios.create({
    baseURL: getBaseURL(),
});

export default api;