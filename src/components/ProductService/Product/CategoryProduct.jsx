// import "./Layout6.css";
import { useGetProductSubCategoryGalleryQuery } from "../../../services/post";
import CategoryProductCard from "./CategoryProductCard";
import { useParams } from "react-router-dom";

const CategoryProduct = () => {
  const { id } = useParams();
  const ProductRes = useGetProductSubCategoryGalleryQuery(id);
  const productData = ProductRes?.data?.data || [];
  return (
    <>
      <div className="container p-5">
        <div className="row d-flex mt-5 pt-5">
          {productData.map((product) => (
            <CategoryProductCard
              key={product.id}
              product={product}
            ></CategoryProductCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryProduct;
