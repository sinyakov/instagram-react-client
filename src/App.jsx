import React from 'react';
import 'normalize.css';
import 'flexboxgrid2/flexboxgrid2.css';

import Header from './components/Header';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

export default () => (
  <div className="container">
    <Header />
    <Gallery />
    <Footer />
  </div>
);
