import { VscChromeMinimize } from "react-icons/vsc";
import "./Layout7.css";
import { useParams } from "react-router-dom";
import { useGetProductDetailsQuery } from "../../services/post";

const Product = () => {
  const { id } = useParams();
  const ProductDetailsRes = useGetProductDetailsQuery(id);
  const productDetails = ProductDetailsRes?.data?.data || [];
  console.log(productDetails);
  return (
    <div className="div-gradient-clr py-5">
      <div className="container pt-5">
        <div className="my-4">
          <div className="d-flex row mt-5">
            <div className="col-md-6">
              <img
                className="w-100 blur"
                src={`${import.meta.env.VITE_IMAGE_URL}/${
                  productDetails?.image
                }`}
                width={400}
                height={500}
                alt=""
              />
            </div>
            <div className="col-md-6 my-auto">
              <h6 className="H6D-txt-Color pt-4">
                <VscChromeMinimize className="fs-2 VscChromeMinimizeColor" />
                OUR PRODUCT
              </h6>
              <h4 className="Product-txt-color">{productDetails.title}</h4>
              <p className="product-p-color text-justify">
                Small description : Product description will coming soon
              </p>
              <h6 className="bold">
                Delivery Date:{" "}
                <span className="delivery-date-color">
                  Delivery date will coming soon
                </span>
              </h6>
              <h6 className="bold">
                Client:{" "}
                <span className="delivery-date-color">
                  Client name will coming soon
                </span>
              </h6>
            </div>
          </div>
        </div>
        <div>
          <div className="col-md-10">
            <div className="">
              <h5 className="productOver-color">
                <VscChromeMinimize className="VscChromeMinimizeColor fs-3" />
                Product overview
              </h5>
              <p className="productOver-p-color text-justify">
                {productDetails.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
