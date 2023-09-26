'use client';

import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function ClearButton() {
  const router = useRouter();

  return (
    <Button
      type='button'
      onClick={() => router.push('/clear')}
      sx={{ color: 'white' }}
    >
      Clear
    </Button>
  );
}
