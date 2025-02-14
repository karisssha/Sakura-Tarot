import axios from "axios";

const API_URL = "https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/";

export const FetchCards = async () => {
  try {
    const response = await axios.get(API_URL);
    return response;
  } catch (error) {
    console.error("Error fetching cards:", error);
    throw error;
  }
};


