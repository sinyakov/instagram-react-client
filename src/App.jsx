import React from 'react';
import 'normalize.css';
import 'flexboxgrid2/flexboxgrid2.css';

import Header from './Header';
import Gallery from './Gallery';
import Footer from './Footer';

export default () => (
  <div className="container">
    <Header />
    <Gallery />
    <Footer />
  </div>
);
