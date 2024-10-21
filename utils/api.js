const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const API_ENDPOINT = `${API_BASE_URL}/api/v1`;

export function getFullImageUrl(relativeUrl) {
  if (!relativeUrl) return "/api/placeholder/300/300"; // Placeholder image
  if (relativeUrl.startsWith("http")) return relativeUrl; // Already a full URL
  return `${API_BASE_URL}${relativeUrl}`;
}

async function fetchData(endpoint) {
  try {
    console.log(`Fetching data from ${API_ENDPOINT}${endpoint}`);
    const response = await fetch(`${API_ENDPOINT}${endpoint}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(`Data received from ${endpoint}:`, data);
    return data;
  } catch (error) {
    console.error(`Error fetching data from ${endpoint}:`, error);
    return null;
  }
}

export async function fetchProjects() {
  const data = await fetchData("/projects");
  console.log("Projects data:", data);
  return data && data.items ? data.items : [];
}

export async function fetchAboutMe() {
  const data = await fetchData("/about-me");
  console.log("About me data:", data);
  return data || {};
}

export async function fetchSocialNetworks() {
  const data = await fetchData("/social-networks");
  console.log("Raw social networks data:", data);
  const networks = data && data.items ? data.items : [];
  console.log("Processed social networks:", networks);
  return networks;
}

export async function fetchTechnologies() {
  const data = await fetchData("/technologies");
  console.log("Raw technologies data:", data);
  const technologies = data && data.items ? data.items : [];
  console.log("Processed technologies:", technologies);
  return technologies;
}

export async function fetchExperiences() {
  const data = await fetchData("/experiences");
  console.log("Raw experiences data:", data);
  const experiences = data && data.items ? data.items : [];
  console.log("Processed experiences:", experiences);
  return experiences;
}
