import React from 'react';

// test ここから、 使い回し出来るようにする

// because on typeScript data should be explicit type or defined types
interface ContainerProps {
  imageUrl: string;
  category: string;
  content: string;
  date: string;
  id: string;
}

const data: ContainerProps[] = [
  {
    imageUrl: '/test.png',
    category: '人材採用',
    content: 'セロはこどものおみかい下らを楽屋がし次たん。',
    date: '2024.03.05',
    id: 'a0',
  },
  {
    imageUrl: '/test.png',
    category: '人材育成',
    content: 'またすこしまじめましないという楽譜ただ。',
    date: '2024.03.05',
    id: 'a1',
  },
  {
    imageUrl: '/test.png',
    category: '雇用管理',
    content:
      '何だかぐっとゴーシュを窓を云いずう。何たったにゴーシュへしてふしぎをなるんなく。下がわらわたまし。「楽⻑…',
    date: '2024.03.05',
    id: 'a2',
  },
  {
    imageUrl: '/test.png',
    category: '雇用管理',
    content:
      '何だかぐっとゴーシュを窓を云いずう。何たったにゴーシュへしてふしぎをなるんなく。下がわらわたまし。「楽⻑…',
    date: '2024.03.05',
    id: 'a3',
  },
];

//     '何だかぐっとゴーシュを窓を云いずう。何たったにゴーシュへしてふしぎをなるんなく。下がわらわたまし。「楽⻑…',
//      '上⼿だだんたはんまたおっかさんの⽣意気⼿のっきりがはしきりに気の毒たたて、何かもシュッへこすりせのました。',

function Container({ imageUrl, category, content, date }: ContainerProps) {
  return (
    <div className="flex sm:justify-center">
      <div className="h-full w-80 flex-auto rounded-lg bg-white shadow-md">
        <img src={imageUrl} alt="Image" className="h-40 w-full "></img>
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

function WideContainer({ imageUrl, category, content, date }: ContainerProps) {
  return (
    <div className="flex sm:justify-center">
      <div className="w-120 h-full min-w-min flex-auto rounded-lg bg-white shadow-md">
        <img src={imageUrl} alt="Image" className="h-40 w-full "></img>
        <div className="">
          <span className="my-3 inline-block rounded-full bg-blue-500 p-2 px-3 py-2 text-sm font-semibold text-white">
            {category}
          </span>
          <p className="text-balance text-ec mt-4 line-clamp-3 overflow-clip text-gray-700">
            {content}
          </p>
          <p className="mt-2 text-blue-500">{date}</p>
        </div>
      </div>
    </div>
  );
}

function MainContainers() {
  return (
    <div>
      <section className="overflow-auto bg-blue-50">
        <h1 className="flex  font-extrabold text-blue-400">人気記事</h1>
        <div className="flex flex-col  gap-4 overflow-auto sm:flex-row">
          {data.map((item) => (
            <Container
              key={item.id} //Use a unique key for each item
              id={item.id}
              imageUrl={item.imageUrl}
              category={item.category}
              content={item.content}
              date={item.date}
            />
          ))}
        </div>
        <div className="flex ">
          <div className="box-border w-20 rounded-lg bg-blue-600 text-center text-white">
            記事一覧
          </div>
        </div>
      </section>
    </div>
  );
}

//人気記事
export function PopularContainers() {
  return (
    <div>
      <section className="overflow-auto bg-blue-50">
        <h1 className="flex  py-10 font-extrabold text-blue-400">人気記事</h1>
        <div className="flex flex-col  gap-4 overflow-auto sm:flex-row">
          {data.map((item) => (
            <Container
              key={item.id} //Use a unique key for each item
              id={item.id}
              imageUrl={item.imageUrl}
              category={item.category}
              content={item.content}
              date={item.date}
            />
          ))}
        </div>
        <div className="flex ">
          <div className="box-border w-20 rounded-lg bg-blue-600 py-5 text-center text-white">
            記事一覧
          </div>
        </div>
      </section>
    </div>
  );
}

//新規記事
export function NewContainers() {
  return (
    <div>
      <section className="overflow-auto bg-blue-50">
        <h1 className="flex  py-10 font-extrabold text-blue-400">新規記事</h1>
        <div className="flex flex-col  gap-4 overflow-auto sm:flex-row">
          {data.map((item) => (
            <Container
              key={item.id} //Use a unique key for each item
              id={item.id}
              imageUrl={item.imageUrl}
              category={item.category}
              content={item.content}
              date={item.date}
            />
          ))}
        </div>
        <div className="flex ">
          <div className="box-border w-20 rounded-lg bg-blue-600 py-5 text-center text-white">
            記事一覧
          </div>
        </div>
      </section>
    </div>
  );
}

//新規記事
export function TopContainer() {
  return (
    <div>
      <section className="overflow-auto bg-blue-50">
        <div className="flex flex-col  gap-4 overflow-auto sm:flex-row">
          {data.map((item) => (
            <WideContainer
              key={item.id} //Use a unique key for each item
              id={item.id}
              imageUrl={item.imageUrl}
              category={item.category}
              content={item.content}
              date={item.date}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default MainContainers;
