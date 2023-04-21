import axios from "axios";

export const getBrand = async (_id) => {
    return await axios.get(`http://localhost:8000/api/brand/${_id}`);
}
  
export const getBrands = async () => {
  return await axios.get(`http://localhost:8000/api/brands`);
}

export const createBrand = async (brand, authtoken) => {
    return await axios.post(`http://localhost:8000/api/brand`, brand, {
      headers: {
          authtoken,
      },
    });
  }

export const removeBrand = async (slug, authtoken) => {
  return await axios.delete(`http://localhost:8000/api/brand/${slug}`, {
    headers: {
        authtoken,
    },
  });
}

export const updateBrand = async (slug, product, authtoken) => {
  return await axios.put(`http://localhost:8000/api/brand/${slug}`, product, {
    headers: {
        authtoken,
    },
  });
}

