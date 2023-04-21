import axios from "axios";

export const getCrousel = async () => {
    return await axios.get(`http://localhost:8000/api/carousel`);
}

export const createCrousel = async (values, authtoken) => {
    return await axios.post(`http://localhost:8000/api/carousel/create`, values, {
      headers: {
          authtoken,
      },
    });
  }

