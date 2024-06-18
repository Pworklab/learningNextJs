import React from 'react';

import Header from './header';
import Footer from './footer';
import MainContainers from './container';
import {
  PopularFeedsContainer,
  NewFeedsContainer,
  TopFeedsContainer,
} from './container';
export default function Page() {
  return (
    <body className="bg-blue-100">
      <div className="flex h-screen flex-col justify-between">
        <div>
          <Header />
        </div>

        <>
          <TopFeedsContainer />
          <PopularFeedsContainer />
          <NewFeedsContainer />
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
