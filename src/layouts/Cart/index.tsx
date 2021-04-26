import React from 'react';
import Layout from '../../components/Layout';
import CartContent from '../../components/Cart/CartContent';

const Cart: React.FC = () => {
  return (
    <Layout>
      <main className="main">
        <CartContent />
      </main>
    </Layout>
  );
};

export default Cart;
