const API_URL = process.env.NEXT_PUBLIC_SERVER_URL;



export const defaultAPI = async (
  method = "GET",
  path,
  data = null,
  headers = {},
) => {
  try {
    const res = await fetch(`${API_URL}${path}`, {
      method,
      headers: {
        ...headers,
        "Content-Type": "application/json",
      },
      body: data ? JSON.stringify(data) : undefined,
    });

    const result = await res.json();
    if (!res.ok) {
      throw new Error(result.message || "Something went wrong");
    }
    return result;
  } catch (error) {
    console.error("API request failed:", error);
    throw error;
  }
};
