import React, { useContext } from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import Filters from './Filters';
import { StoreItemsContext } from '../StoreItemsContext';
// import styles from './Navbar.module.css';

const StoreItems = () => {
  const storeItemsContext = useContext(StoreItemsContext);
  const storeItems = storeItemsContext.storeItems || [];
  const sortedItems = [...storeItems];

  const sortItems = (sortType: string) => {
    if (sortType !== '') {
      sortedItems.sort((a, b) =>
        sortType === 'lowest'
          ? a.price > b.price
            ? 1
            : -1
          : a.price < b.price
          ? 1
          : -1
      );
    } else {
      sortedItems.sort((a, b) => (a.id > b.id ? 1 : -1));
    }

    storeItemsContext.setStoreItems(sortedItems);

    // return { filteredItems: storeItems };
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Filters handleSort={sortItems} />
      <Grid container spacing={2}>
        {storeItems &&
          storeItems.map((item, i) => (
            <Grid item xs={2} md={4}>
              <Card sx={{ maxWidth: 345 }} key={i}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={item.imgURL}
                  title={item.itemName}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.itemName}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.price}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default StoreItems;
