import { useState } from 'react';
import HomePage from './HomePage';
import StickersPage from './StickersPage';
import TicketsPage from './TicketsPage';
import type { Page } from '../lib/types';

function Shop() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleSelectCategory = (category: 'stickers' | 'tickets') => {
    setCurrentPage(category);
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
  };

  return (
    <>
      <section id="shop">
        {currentPage === 'home' && (
          <HomePage onSelectCategory={handleSelectCategory} />
        )}
        {currentPage === 'stickers' && (
          <StickersPage onBack={handleBackToHome} />
        )}
        {currentPage === 'tickets' && (
          <TicketsPage onBack={handleBackToHome} />
        )}
      </section>
    </>
  );
}

export default Shop;