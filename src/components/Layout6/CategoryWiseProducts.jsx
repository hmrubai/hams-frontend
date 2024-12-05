import "./Layout6.css";
import { useGetProductSubCategoryGalleryQuery } from "../../services/post";
import ProductGalleryCard from "./ProductGalleryCard";
import { useParams } from "react-router-dom";

const CategoryWiseProducts = () => {
  const { id } = useParams();
  const ProductRes = useGetProductSubCategoryGalleryQuery(id);
  const productData = ProductRes?.data?.data || [];
  return (
    <>
      <div className="container p-5">
        <div className="row d-flex mt-5 pt-5">
          {productData.map((product) => (
            <ProductGalleryCard
              key={product.id}
              product={product}
            ></ProductGalleryCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryWiseProducts;
