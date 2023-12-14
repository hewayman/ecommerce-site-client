import React from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import { StoreItem } from '@/types';
// import styles from './Navbar.module.css';

type StoreItemsProps = {
  storeItems: StoreItem[];
};

const StoreItems = ({ storeItems }: StoreItemsProps) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* <FilterItems sort={this.props.sort} handleChangeSort={this.props.handleChangeSort}/> */}
      <Grid container spacing={2}>
        {storeItems.map((item, i) => (
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
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default StoreItems;
