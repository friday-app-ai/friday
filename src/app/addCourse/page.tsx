'use client'
import React, { useRef } from 'react';
import Header from '@/components/head/header';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Image from 'next/image';
import design from '../../assets/artificial-intelligence.png';

const Page: React.FC = () => {
  const textRef = useRef<HTMLTextAreaElement | null>(null);

  const handleClick = () => {
    const text = textRef.current?.value;
    if (text) {
      console.log(text);
    }
  };

  return (
    <div>
      <Header />
      <div className="grid w-full gap-2 mt-[15vh] px-[30%]">
        <div className="mb-[5rem] h-[20vh] flex justify-center align-items-center">
          <Image src={design} alt="design" priority width={200} height={80} />
        </div>
        <h1 className='text-center text-xl font-semibold'>What do you want to learn today?</h1>
        <Textarea ref={textRef}  placeholder="Write your topic" />
        <Button className='bg-blue-500 hover:bg-blue-700'onClick={handleClick} >Submit</Button>
      </div>
    </div>
  );
}

export default Page;
