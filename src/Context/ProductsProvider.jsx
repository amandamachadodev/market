import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProductsContext from './ProductsContext';
import { fetchProducts } from '../service/api';

function ProductsProvider({ children }) {
  const [data, setProducts] = useState([]);
  const [inputSearch, setInputSearch] = useState('');
  const [loading, setLoading] = useState(false);

  async function getProductsFiltered(inputSearch) {
    setLoading(true);
    const products = await fetchProducts(inputSearch);
    setProducts(products.results);
    setLoading(false);
  }

  async function getProducts() {
    setLoading(true);
    const products = await fetchProducts();
    setProducts(products.results);
    setLoading(false);
  }

  const contextValue = {
    data,
    getProducts,
    getProductsFiltered,
    inputSearch,
    setInputSearch,
    loading
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