import { useEffect, useState } from "react";
import { SearchBar } from "./SearchBar";
import { ProductList } from "./ProductList";
import { Axios } from "../../configs/axios";
import { RiErrorWarningLineIcon } from "../../assets/icon";

export const Products = ({ setLoading, loading }) => {
  const [products, setProducts] = useState([]);

  const [error, setError] = useState();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await Axios.get("products");
        setProducts(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [setLoading]);

  if (loading) {
    return (
      <div className="flex space-x-2 m-2  items-center">
        <p className="text-3xl text-gray-700 h-11">Loading</p>
        <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
        <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
        <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center p-4 text-red-700">
        <RiErrorWarningLineIcon className="w-7 h-7" />
        <p className="text-3xl mr-2">{error}</p>
      </div>
    );
  }

  const fiteredProduct = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  );

  return (
    <div>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ProductList Products={fiteredProduct} />
    </div>
  );
};
