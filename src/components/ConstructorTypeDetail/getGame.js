import React, { useEffect } from 'react';
import { apiConnector } from '../../services/apiconnector';

const GetGame = ({ get, type,  setGet, setData }) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiConnector('GET', 'https://api.kidsru.uz/v1/game');

        if (response?.data?.length > 0) {
          const filtered = response.data.filter(
            item => item.type === type
          );
          setData(filtered);
        }
      } catch (error) {
        console.error("Xatolik yuz berdi:", error);
      } finally {
        setGet(false);
      }
    };

    if (get) {
      fetchData();
    }
  }, [get, type, module, setGet, setData]);

  return null;
};

export default GetGame;
