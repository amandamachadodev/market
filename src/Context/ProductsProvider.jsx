import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProductsContext from './ProductsContext';
import { fetchProducts } from '../service/api';

function ProductsProvider({ children }) {
  const [data, setProducts] = useState([]);

  async function getProducts() {
    const products = await fetchProducts('computador');
    setProducts(products.results);
  }

  const contextValue = {
    data,
    getProducts,
  };

  return (
    <main>
      <ProductsContext.Provider value={ contextValue }>
        { children }
      </ProductsContext.Provider>
    </main>
  );
}

ProductsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProductsProvider;