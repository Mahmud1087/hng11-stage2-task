'use client';

import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();

  return (
    <button type='button' onClick={() => router.back()}>
      <ArrowLeft />
      <p>Back to product</p>
    </button>
  );
}
