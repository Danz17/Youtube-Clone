import axios from "axios";

const base_url = "https://youtube-v31.p.rapidapi.com";

export const options = {
  params: {
    maxResults: "51",
  },
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_YOUTUBE_API_KEY || "your-api-key-here",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

const fetchApi = async (url) => {
  try {
    const { data } = await axios.get(`${base_url}/${url}`, options);
    return data;
  } catch (error) {
    console.log("error in fetch api", error);
    return { items: [] };
  }
};

export default fetchApi;