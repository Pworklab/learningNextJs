'use client';

import Image from 'next/image'; // Ensure correct import if using Next.js
import React from 'react';
import { noto_sans } from '@/lib/fonts';

// because on typeScript data should be explicit type or defined types
interface CardProps {
  image: string;
  category: string;
  content: string;
  date: string;
  id: string;
}

interface ContainerProps {
  title?: string;
}

const data: CardProps[] = [
  {
    image: '/test.png',
    category: '人材採用',
    content: 'セロはこどものおみかい下らを楽屋がし次たん。',
    date: '2024.03.05',
    id: 'a0',
  },
  {
    image: '/test.png',
    category: '雇用管理',
    content:
      '何だかぐっとゴーシュを窓を云いずう。何たったにゴーシュへったにゴーシュへしてふしぎをなるんなったにゴーシュへしてふしぎをなるんなったにゴーシュへしてふしぎをなるんなったにゴーシュへしてふしぎをなるんなったにゴーシュへしてふしぎをなるんなったにゴーシュへしてふしぎをなるんなったにゴーシュへしてふしぎをなるんなったにゴーシュへしてふしぎをなるんなったにゴーシュへしてふしぎをなるんなったにゴーシュへしてふしぎをなるんなったにゴーシュへしてふしぎをなるんなったにゴーシュへしてふしぎをなるんなったにゴーシュへしてふしぎをなるんなったにゴーシュへしてふしぎをなるんなったにゴーシュへしてふしぎをなるんなったにゴーシュへしてふしぎをなるんなったにゴーシュへしてふしぎをなるんなったにゴーシュへしてふしぎをなるんなったにゴーシュへしてふしぎをなるんなったにゴーシュへしてふしぎをなるんなったにゴーシュへしてふしぎをなるんなったにゴーシュへしてふしぎをなるんなったにゴーシュへしてふしぎをなるんなったにゴーシュへしてふしぎをなるんなったにゴーシュへしてふしぎをなるんなったにゴーシュへしてふしぎをなるんなったにゴーシュへしてふしぎをなるんなったにゴーシュへしてふしぎをなるんなったにゴーシュへしてふしぎをなるんなったにゴーシュへしてふしぎをなるんなったにゴーシュへしてふしぎをなるんなったにゴーシュへしてふしぎをなるんなったにゴーシュへしてふしぎをなるんなったにゴーシュへしてふしぎをなるんなったにゴーシュへしてふしぎをなるんなったにゴーシュへしてふしぎをなるんなったにゴーシュへしてふしぎをなるんなったにゴーシュへしてふしぎをなるんなったにゴーシュへしてふしぎをなるんなったにゴーシュへしてふしぎをなるんなったにゴーシュへしてふしぎをなるんなったにゴーシュへしてふしぎをなるんなったにゴーシュへしてふしぎをなるんなったにゴーシュへしてふしぎをなるんなったにゴーシュへしてふしぎをなるんなったにゴーシュへしてふしぎをなるんなったにゴーシュへしてふしぎをなるんなしてふしぎをなるんなく。下がわらわたまし。「楽⻑…',
    date: '2024.03.05',
    id: 'a2',
  },
  {
    image: '/test.png',
    category: '人材育成',
    content: 'またすこしまじめましないという楽譜ただ。',
    date: '2024.03.05',
    id: 'a1',
  },
  {
    image: '/test.png',
    category: '雇用管理',
    content:
      '何だかぐっとゴーシュを窓を云いずう。何たったにゴーシュへしてふしぎをなるんなく。下がわらわたまし。「楽⻑…',
    date: '2024.03.05',
    id: 'a2',
  },
  {
    image: '/test.png',
    category: '雇用管理',
    content:
      '何だかぐっとゴーシュを窓を云いずう。何たったにゴーシュへしてふしぎをなるんなく。下がわらわたまし。「楽⻑…',
    date: '2024.03.05',
    id: 'a3',
  },
];

// className={`${lusitana.className} text-xl text-green-400 md:text-3xl md:leading-normal
//       className={`
//${lusitana.className} text-xl text-green-400 md:text-3xl md:leading-normal
//`}

function MediaCard({ image, category, content, date }: CardProps) {
  return (
    <div
      className={`${noto_sans.className} overflow-hidden rounded-lg bg-white drop-shadow-md`}
    >
      <div className="h-60">
        <Image
          src={image}
          alt={category}
          fill
          className="max-h-60 object-cover"
          blurDataURL="LEAAH[n%01W=snfQS4a|0KbH~Bni"
          placeholder="blur"
        />
      </div>
      <div className="flex-col-3  content mx-5 my-7 space-y-5">
        <div className="inline-block rounded-full bg-blue-400 px-4 py-0.5 text-base text-white">
          {category}
        </div>
        <div className="flex flex-col gap-5">
          <div className="line-clamp-1 text-base font-bold">{content}</div>
          <div className="text-sm font-bold text-blue-400">{date}</div>
        </div>
      </div>
    </div>
  );
}

function MediaCardSmall({ image, category, content, date }: CardProps) {
  return (
    <div
      className={`${noto_sans.className} overflow-hidden rounded-lg bg-white drop-shadow-md`}
    >
      <div className="h-60">
        <Image
          src={image}
          alt={category}
          fill
          className="max-h-60 object-cover"
          blurDataURL="LEAAH[n%01W=snfQS4a|0KbH~Bni"
          placeholder="blur"
        />
      </div>
      <div className="content mx-5 my-7 flex flex-col space-y-5">
        <div className="flex">
          <div className="rounded-full bg-blue-500 px-4 py-0.5 text-base text-white">
            {category}
          </div>
        </div>
        <div className="flex h-screen max-h-28 flex-col justify-between">
          <div className="line-clamp-3 text-base font-bold">{content}</div>
          <div className="text-sm text-blue-500">{date}</div>
        </div>
      </div>
    </div>
  );
}

function MediaCardtest({ image, category, content, date }: CardProps) {
  return (
    <div
      className={`${noto_sans.className} relative overflow-hidden rounded-lg bg-white drop-shadow-md`}
    >
      <div className="h-60">
        <Image
          src={image}
          alt={category}
          fill
          className="max-h-60 object-cover"
          blurDataURL="LEAAH[n%01W=snfQS4a|0KbH~Bni"
          placeholder="blur"
        />
      </div>
      <div className="mt-7 inline-block rounded-full bg-blue-400 px-4 py-0.5 text-base text-white">
        {category}
      </div>

      <div className="line-clamp-3 bg-green-200 py-5 text-base font-bold">
        {content}
      </div>

      <div className="bold absolute bottom-0 left-0 mt-5 flex bg-white  text-blue-400">
        {date}
      </div>
    </div>
  );
}

function Container({ image, category, content, date }: CardProps) {
  return (
    <div className="flex sm:justify-center">
      <div className="h-full w-80 flex-auto overflow-hidden rounded-lg bg-white shadow-md">
        <img src={image} alt="Image" className="h-40 w-full"></img>
        <div className="">
          <span className="my-3 inline-block rounded-full bg-blue-500 p-2 px-3 py-2 text-sm font-semibold text-white">
            {category}
          </span>
          <p className="text-balance mt-4 line-clamp-3 text-gray-700">
            {content}
          </p>
          <p className="mt-2 text-blue-500">{date}</p>
        </div>
      </div>
    </div>
  );
}

//目次記事
export function TopFeedsContainer() {
  return (
    <div className=" bg-blue-100">
      <div className="">
        <section className="mx-20 pb-12 pt-12">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2">
            {data.slice(0, 2).map((item) => (
              <MediaCard
                key={item.id}
                id={item.id}
                image={item.image}
                category={item.category}
                content={item.content}
                date={item.date}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
//
//function MediaCard({ image, category, content, date }: ContainerProps) {
export function FeedContainer({ title }: ContainerProps) {
  return (
    <div className="bg-white pt-32">
      <section>
        <h2 className="pb-12 text-center text-2xl font-bold text-blue-600">
          {title}
        </h2>
      </section>
      <section>
        <div className="mx-20 pb-12">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {data.map((item) => (
              <MediaCardSmall
                key={item.id}
                id={item.id}
                image={item.image}
                category={item.category}
                content={item.content}
                date={item.date}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export const OriginButton: React.FC = () => {
  const handleClick = () => {
    console.log('Button was clicked!');
  };

  return (
    <button onClick={handleClick} className="bg-green-200">
      MyButton
    </button>
  );
};

interface ButtonPros {
  title: string;
  debugbtn: (content: string, author: string) => void;
}

interface APIData {
  content: string;
  author: string;
}
export function MyButton({ title, debugbtn }: ButtonPros) {
  const onButtonClick = async () => {
    const result = await fetch('https://api.quotable.io/quotes/random');
    const json = (await result.json()) as APIData[];
    void debugbtn(json[0].content, json[0].author);
  };

  return (
    <div className="">
      <button
        onClick={onButtonClick}
        className="w-min-20 text-ms  mx-auto block overflow-clip rounded-lg bg-blue-400 p-2"
      >
        {title}
      </button>
    </div>
  );
}

export default FeedContainer;
