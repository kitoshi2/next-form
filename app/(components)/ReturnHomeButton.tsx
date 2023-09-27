'use client';

import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function ReturnHomeButton() {
  const router = useRouter();

  return (
    <Button
      type='button'
      onClick={() => router.push('/')}
      sx={{ color: 'white' }}
    >
      ICBC
    </Button>
  );
}
