const useProducts = () => {
  const total = useState("total", () => 0);
  const products = useState("products", () => null);
  const activeProduct = useState("activeProduct", () => null);
  const filterBy = useState("filterBy", () => null);
  const filterType = useState("filterType", () => null);
  const config = useRuntimeConfig();

  const fetchAllProduct = async (skip = 0, fBy = null, fType = null) => {
    await useFetch("/products", {
      baseURL: config.public.apiBase,
      query: {
        limit: 5,
        skip: skip,
      },
      onResponse({ response }) {
        filterBy.value = fBy;
        filterType.value = fType;
        // FILTER PRODUCTS
        if (fBy === "price") {
          if (fType === "ascending") {
            products.value = response._data.products.sort(
              (a, b) => a.price - b.price
            );
          } else if (fType === "descending") {
            products.value = response._data.products.sort(
              (a, b) => b.price - a.price
            );
          }
        } else if (fBy === "rating") {
          if (fType === "ascending") {
            products.value = response._data.products.sort(
              (a, b) => a.rating - b.rating
            );
          } else if (fType === "descending") {
            products.value = response._data.products.sort(
              (a, b) => b.rating - a.rating
            );
          }
        } else {
          products.value = response._data.products;
        }
        total.value = response._data.total;
      },
    });
  };

  const fetchSingleProduct = async (id = null) => {
    if (id) {
      await useFetch(`/products/${id}`, {
        baseURL: config.public.apiBase,
        onResponse({ response }) {
          activeProduct.value = response._data;
        },
      });
    } else {
      activeProduct.value = null;
    }
  };
  return {
    total,
    products,
    fetchAllProduct,
    fetchSingleProduct,
    activeProduct,
    filterBy,
    filterType,
  };
};

export default useProducts;
