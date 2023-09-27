import { vehicleMakes } from '../api/vehicles/route';

export async function loadVehicles() {
  return vehicleMakes;
}
