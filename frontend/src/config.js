export const API_BASE = "http://localhost:4000";

export function apiUrl(path) {
  if (!path) return API_BASE;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${API_BASE}${normalized}`;
}
