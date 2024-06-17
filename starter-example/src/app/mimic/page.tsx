import React from 'react';

import Header from './header';
import Footer from './footer';
import MainContainers from './container';
import { PopularContainers, NewContainers, TopContainer } from './container';
export default function Page() {
  return (
    <body>
      <div className="flex h-screen flex-col justify-between">
        <div>
          <Header />
        </div>

        <div>
          <TopContainer />
          <PopularContainers />
          <NewContainers />
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </body>
  );
}

//export default function Page() {
//    return <p>Customer Page</p>;
//  }
