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

function WideContainer({ imageUrl, category, content, date }: ContainerProps) {
  return (
    <div className="">
      <div className="h-full w-full overflow-auto rounded-lg bg-white drop-shadow-md">
        <img src={imageUrl} alt="Image"></img>
        <div className="pl-5">
          <span className="mt-5 inline-block rounded-full bg-blue-400 px-4 text-sm font-semibold text-white">
            {category}
          </span>
          <p className="text-balance mt-2 line-clamp-3 text-gray-700">
            {content}
          </p>
          <p className="my-2 text-blue-400">{date}</p>
        </div>
      </div>
    </div>
  );
}

function Container({ imageUrl, category, content, date }: ContainerProps) {
  return (
    <div className="flex sm:justify-center">
      <div className="h-full w-80 flex-auto overflow-hidden rounded-lg bg-white shadow-md">
        <img src={imageUrl} alt="Image" className="h-40 w-full"></img>
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
    <div className="flex flex-row justify-between bg-transparent">
      <div></div>
      <div className="overflow-auto ">
        <div>
          <section className="pb-20 pt-20">
            <div className="flex justify-center ">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
                {data.slice(0, 2).map((item) => (
                  <WideContainer
                    key={item.id} // Use a unique key for each item
                    id={item.id}
                    imageUrl={item.imageUrl}
                    category={item.category}
                    content={item.content}
                    date={item.date}
                  />
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
      <div></div>
    </div>
  );
}
//人気記事
export function PopularFeedsContainer() {
  return (
    <>
      <div className="bg-white">
        <section>
          <h2 className="mb-6 py-6 text-center text-2xl font-bold text-blue-600">
            人気記事
          </h2>
        </section>
        <section>
          <div className="flex justify-center pb-20">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
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
          </div>
        </section>
        <section>
          <div className="mt-6 pb-10 text-center">
            <button className="rounded-lg bg-blue-500 px-6  py-2 text-white">
              記事一覧
            </button>
          </div>
        </section>
      </div>
    </>
  );
}

//新着記事
export function NewFeedsContainer() {
  return (
    <>
      <div className="bg-white">
        <section>
          <h2 className="mb-6 py-6 text-center text-2xl font-bold text-blue-600">
            新着記事
          </h2>
        </section>
        <section>
          <div className="flex justify-center pb-20">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
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
          </div>
        </section>
        <section>
          <div className="mt-6 pb-10 text-center">
            <button className="rounded-lg bg-blue-500 px-6  py-2 text-white">
              記事一覧
            </button>
          </div>
        </section>
      </div>
    </>
  );
}

export default NewFeedsContainer;
