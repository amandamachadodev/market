const fetchProducts = async (computador) => {
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${computador}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      Error(`You must provide an url\n${error}`);
    }
  };
  
  if (typeof module !== 'undefined') {
    module.exports = {
      fetchProducts,
    };
  }