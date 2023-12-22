import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import SelectBox from '@/utils/SelectBox';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [selected, setSelected] = useState<string | undefined>('text1');
  return (
    <>
      <SelectBox
        options={[
          { label: 'test1', value: 'text1' },
          { label: 'test2', value: 'text2' },
          { label: 'test3', value: 'text3' },
        ]}
        value={selected || ''}
        onChange={(value) => {
          setSelected(value);
        }}
      />
    </>
  )
}
