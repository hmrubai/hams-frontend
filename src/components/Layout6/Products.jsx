import "./Layout6.css";
import { useGetProductSubCategoryGalleryQuery } from "../../services/post";
import ProductGalleryCard from "./ProductGalleryCard";

const Products = ({ id }) => {
  const ProductRes = useGetProductSubCategoryGalleryQuery();
  const productData = ProductRes?.data?.data || [];

  return (
    <>
      <div>
        {productData.map((product) => (
          <ProductGalleryCard
            key={product.id}
            product={product}
          ></ProductGalleryCard>
        ))}
      </div>
    </>
  );
};

export default Products;
