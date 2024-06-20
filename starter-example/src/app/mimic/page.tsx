'use client';
import React from 'react';
import Header from './header';
import Footer from './footer';
import MainContainers, { FeedContainer } from './container';
import { TopFeedsContainer, OriginButton, MyButton } from './container';
export default function Page() {
  const [quote, setQuote] = React.useState<string>('');

  return (
    <body className="">
      <MyButton
        title="Get Quotes"
        debugbtn={(content, author) => {
          setQuote(`Author => ${author} -  ${content}`);
        }}
      />
      <div>Today's Quote : {quote}</div>
      {/* <div className="flex h-screen flex-col justify-between">
        <div>
          <Header />
        </div>
        <>
          <TopFeedsContainer />
          <FeedContainer title="人気記事" />
          <MyButton
            title="a"
            debugbtn={(a, b, c) => {
              alert(a);
              alert(`${b}`);
              alert(`${c}`);
            }}
          />
          <FeedContainer title="新着記事" />
        </>
        <div>
          <Footer />
        </div>
      </div> */}
    </body>
  );
}
//export default function Page() {
//    return <p>Customer Page</p>;
//}
