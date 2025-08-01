import axios from "axios";

const base_url = "https://youtube-v31.p.rapidapi.com";

export const options = {
  params: {
    maxResults: "51",
  },
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_YOUTUBE_API_KEY || "demo-key-for-testing",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

const fetchApi = async (url) => {
  try {
    const { data } = await axios.get(`${base_url}/${url}`, options);
    return data;
  } catch (error) {
    console.log("error in fetch api", error);
    // Return mock data for demo purposes when API fails
    return {
      items: [
        {
          id: { videoId: "demo1" },
          snippet: {
            title: "Demo Video - React Tutorial",
            thumbnails: {
              medium: {
                url: "https://via.placeholder.com/320x180/ff0000/ffffff?text=Demo+Video+1"
              }
            },
            channelTitle: "Demo Channel",
            channelId: "demo-channel-1",
            publishedAt: new Date().toISOString(),
            description: "This is a demo video for testing purposes."
          }
        },
        {
          id: { videoId: "demo2" },
          snippet: {
            title: "Demo Video - JavaScript Basics",
            thumbnails: {
              medium: {
                url: "https://via.placeholder.com/320x180/00ff00/ffffff?text=Demo+Video+2"
              }
            },
            channelTitle: "Demo Channel",
            channelId: "demo-channel-2",
            publishedAt: new Date().toISOString(),
            description: "This is another demo video for testing purposes."
          }
        }
      ]
    };
  }
};

export default fetchApi;