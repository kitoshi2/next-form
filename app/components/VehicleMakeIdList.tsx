import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Skeleton,
  Typography
} from '@mui/material';
import { VehicleMake, Vehicles } from '../api/vehicles/route';
import { Key } from 'react';
import VehicleAddForm from './VehicleAddForm';

export default async function VehicleMakeIdList({ vehicles }: Vehicles) {
  return (
    <Grid container spacing={4}>
      {vehicles ? (
        vehicles?.map((car: VehicleMake, key: Key) => {
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

export async function getStaticProps() {
  const res = await fetch('/api/vehicles');
  const vehicles: Vehicles = await res.json();

  return {
    props: {
      vehicles
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10 // In seconds
  };
}
