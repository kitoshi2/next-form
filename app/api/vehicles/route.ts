import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';

export interface VehicleMake {
  Make_ID: string;
  Make_Name: string;
  Model_ID: number;
  Model_Name: string;
  Value: number;
}
const vehicleMakes: VehicleMake[] = [
  {
    Make_ID: '1',
    Make_Name: 'Toyota',
    Model_ID: 101,
    Model_Name: 'Corolla',
    Value: 25000
  },
  {
    Make_ID: '2',
    Make_Name: 'Ford',
    Model_ID: 201,
    Model_Name: 'Mustang',
    Value: 40000
  },
  {
    Make_ID: '3',
    Make_Name: 'Honda',
    Model_ID: 301,
    Model_Name: 'Civic',
    Value: 22000
  },
  {
    Make_ID: '4',
    Make_Name: 'Chevrolet',
    Model_ID: 401,
    Model_Name: 'Silverado',
    Value: 35000
  },
  {
    Make_ID: '5',
    Make_Name: 'Nissan',
    Model_ID: 501,
    Model_Name: 'Altima',
    Value: 27000
  },
  {
    Make_ID: '6',
    Make_Name: 'BMW',
    Model_ID: 601,
    Model_Name: '3 Series',
    Value: 45000
  },
  {
    Make_ID: '7',
    Make_Name: 'Mercedes-Benz',
    Model_ID: 701,
    Model_Name: 'E-Class',
    Value: 55000
  },
  {
    Make_ID: '8',
    Make_Name: 'Audi',
    Model_ID: 801,
    Model_Name: 'A4',
    Value: 42000
  },
  {
    Make_ID: '9',
    Make_Name: 'Kia',
    Model_ID: 901,
    Model_Name: 'Seltos',
    Value: 23000
  },
  {
    Make_ID: '10',
    Make_Name: 'Hyundai',
    Model_ID: 1001,
    Model_Name: 'Tucson',
    Value: 26000
  },
  {
    Make_ID: '11',
    Make_Name: 'Jeep',
    Model_ID: 1101,
    Model_Name: 'Wrangler',
    Value: 33000
  },
  {
    Make_ID: '12',
    Make_Name: 'Mazda',
    Model_ID: 1201,
    Model_Name: 'CX-5',
    Value: 28000
  },
  {
    Make_ID: '13',
    Make_Name: 'Subaru',
    Model_ID: 1301,
    Model_Name: 'Outback',
    Value: 29000
  },
  {
    Make_ID: '14',
    Make_Name: 'Lexus',
    Model_ID: 1401,
    Model_Name: 'RX',
    Value: 50000
  },
  {
    Make_ID: '15',
    Make_Name: 'GMC',
    Model_ID: 1501,
    Model_Name: 'Sierra',
    Value: 36000
  }
];

export async function GET() {
  return NextResponse.json(vehicleMakes);
}

export async function POST(request: NextRequest) {
  const formData = (await request.json()) as VehicleMake;
  if (formData.Make_ID == `badword`) {
    return NextResponse.json(
      {
        message: 'Bad Word'
      },
      {
        status: 400
      }
    );
  }
  console.log(formData);
  return NextResponse.json('added to db');
}
