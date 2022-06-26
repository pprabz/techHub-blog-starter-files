import React from 'react';
import { SearchModalContextProvider } from '../context/SearchModalContext';
import GlobalStyles from '../styles/GlobalStyles';
import Header from './Header';
import Footer from './footer';
import Search from './search/SearchModal';

function Layout({ children }) {
  return (
    <SearchModalContextProvider>
      <GlobalStyles />
      <Header />
      <Search />
      {children}
      <Footer />
    </SearchModalContextProvider>
  );
}

export default Layout;
