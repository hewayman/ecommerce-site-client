import { createContext, useContext, useEffect, useState } from 'react';
import APIURL from '@/helpers/environment';
import { StoreItem } from '@/types';

type StoreItemsContextType = {
  storeItems: StoreItem[] | null;
  setStoreItems: (x: any) => void; //fix
};

const storeItemsContextDefaultValues: StoreItemsContextType = {
  storeItems: [
    {
      id: 0,
      itemName: '',
      color: '',
      description: '',
      price: 0,
      itemNum: 0,
      imgURL: '',
    },
  ],
  setStoreItems: () => {},
};

export const StoreItemsContext = createContext<StoreItemsContextType>(
  storeItemsContextDefaultValues
);

export const StoreItemsProvider = ({ children }: any) => {
  const [storeItems, setStoreItems] = useState(null);

  useEffect(() => {
    const url = `${APIURL}/listing`;

    fetch(url, { method: 'GET' })
      .then((res) => res.json())
      .then((data) => {
        setStoreItems(data.listing);
      })
      .catch((error) => {
        // TODO: handle error
      });
  }, []);

  return (
    <StoreItemsContext.Provider value={{ storeItems, setStoreItems }}>
      {children}
    </StoreItemsContext.Provider>
  );
};

export const useStoreItems = () => useContext(StoreItemsContext);
