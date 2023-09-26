import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Skeleton,
  Typography
} from '@mui/material';
import { VehicleList, VehicleMake } from '../api/vehicles/route';
import { Key, useState } from 'react';
import VehicleAddForm from './VehicleAddForm';

async function getData() {
  const res = await fetch('http://localhost:3000/api/vehicles');
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function VehicleMakeIdList() {
  const vehicles = await getData();

  return (
    <Grid container spacing={4}>
      {vehicles ? (
        vehicles.map((car: VehicleMake, key: Key) => {
          return (
            <Grid item xs={4} key={key} sx={{ paddingX: 2 }} zeroMinWidth>
              <Card>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color='text.secondary'
                    gutterBottom
                  >
                    Cars of the Day
                  </Typography>
                  <Typography variant='h5' component='div'>
                    {car.Make_Name}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                    ${car.Value}
                  </Typography>
                  <Typography variant='body2'>
                    Model: {car.Model_Name} ID: {car.Model_ID}
                    <br />
                    {car.Make_ID}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size='small'>Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })
      ) : (
        <Skeleton variant='rectangular' width={210} height={118} />
      )}
      <Grid item xs={4}>
        <VehicleAddForm />
      </Grid>
    </Grid>
  );
}
