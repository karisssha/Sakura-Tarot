import axios from "axios";

const API_URL = "https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/";

export const FetchCards = async () => {
  try {
    const response = await axios.get(API_URL);
    
    const formatCard = response.data.map(card => ({
      id: card.id,
      cardsReverse: card.cardsReverse,
      englishName: card.englishName,
      meaning: card.meaning,
      sakuraCard: card.sakuraCard
    }));
    
    return formatCard;
  } catch (error) {
    console.error("Error fetching cards:", error);
    throw error;
  }
};


