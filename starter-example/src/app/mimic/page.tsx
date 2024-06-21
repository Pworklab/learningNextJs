'use client';
import React from 'react';
import MainContainers, { FeedContainer } from './container';
import { TopFeedsContainer, OriginButton, MyButton } from './container';

export default function Page() {
  const [quote, setQuote] = React.useState<string>('');

  return (
    <div className="flex h-screen flex-col justify-between">
      <>
        <TopFeedsContainer />
        <FeedContainer title="人気記事" />
        <FeedContainer title="新着記事" />
      </>
    </div>
  );
}
//export default function Page() {
//    return <p>Customer Page</p>;
//}

/*
  <MyButton
        title="Get Quotes"
        debugbtn={(content, author) => {
          setQuote(`Author => ${author} -  ${content}`);
        }}
      />
      <div>Today's Quote : {quote}</div>

        
*/
