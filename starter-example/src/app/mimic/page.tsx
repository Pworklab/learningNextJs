import React from 'react';
import Header from './header';
import Footer from './footer';
import MainContainers, { FeedContainer } from './container';
import { TopFeedsContainer, OriginButton, MyButton } from './container';
export default function Page() {
  return (
    <body className="">
      <div className="flex h-screen flex-col justify-between">
        <div>
          <Header />
        </div>
        <>
          <TopFeedsContainer />
          <FeedContainer title="人気記事" />
          <MyButton />
          <FeedContainer title="新着記事" />
          <MyButton />
        </>
        <div>
          <Footer />
        </div>
      </div>
    </body>
  );
}
//export default function Page() {
//    return <p>Customer Page</p>;
//}
