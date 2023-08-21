import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Skeleton,
  Typography
} from '@mui/material';
import { VehicleMake } from '../api/vehicles/route';
import { Key } from 'react';
import VehicleAddForm from './VehicleAddForm';

export default async function VehicleMakeIdList() {
  const vehicles = await fetch('http://localhost:3000/api/vehicles').then(
    (res) => res.json()
  );

  return (
    <Grid container spacing={3}>
      {vehicles ? (
        vehicles?.map((car: VehicleMake, key: Key) => {
          return (
            <Grid item xs={4} key={key}>
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
