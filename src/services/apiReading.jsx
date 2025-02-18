import axios from 'axios';

const API_URL = 'http://localhost:3000/readings';


export const getReadings = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error getting readings:", error);
    throw error;
  }
};


export const deleteReading = async (readingId) => {
  try {
 
    const stringId = String(readingId);
    await axios.delete(`${API_URL}/${stringId}`);
  } catch (error) {
    console.error("Error deleting reading:", error);
    throw error;
  }
};


export const updateReadingNickname = async (readingId, newNickname) => {
  try {
    const stringId = String(readingId);
    await axios.patch(`${API_URL}/${stringId}`, { nickname: newNickname });
  } catch (error) {
    console.error("Error updating nickname:", error);
    throw error;
  }
};

export const deleteAllReadings = async () => {
  try {
    const response = await axios({
      method: 'get',
      url: API_URL
    });
    const readings = response.data;

    for (const reading of readings) {
      await axios({
        method: 'delete',
        url: `${API_URL}/${reading.id}`
      });
    }
  } catch (error) {
    console.error("Error deleting all readings:", error);
    throw error;
  }
};

export const saveReading = async (newReading) => {
  try {
    const response = await axios({
      method: 'post',
      url: API_URL,
      data: newReading,
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error saving reading:', error.response?.data || error.message);
    throw new Error('Failed to save reading');
  }
};

export const removeReading = async (id, setReadings) => {
  console.log(`Attempting to erase the reading with id: ${id}`);
  
  try {
    await axios({
      method: 'delete',
      url: `${API_URL}/${Number(id)}`,
    });
    setReadings(prevReadings => prevReadings.filter(reading => reading.id !== id));
    console.log(`Reading with id: ${id} removed from API`);
  } catch (error) {
    console.error("Error deleting reading:", error);
    throw error;
  }
};
