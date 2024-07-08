'use client';

import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      type='button'
      onClick={() => router.back()}
      className='text-[#BF5428] flex gap-2 items-center font-semibold mb-10'
    >
      <ArrowLeft size={16} />
      <p>Back to product</p>
    </button>
  );
}
