import React from 'react';

import Header from './header';
import Footer from './footer';
import Container from './container';
export default function Page() {
  return (
    <body>
      <div className="flex h-screen flex-col justify-between">
        <div>
          <Header />
        </div>

      <div>
      <Container />
        
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
