import { VscChromeMinimize } from "react-icons/vsc";
import "./Layout7.css";
import { useParams } from "react-router-dom";
import { useGetProductDetailsQuery } from "../../services/post";

const Product = () => {
  const { id } = useParams();
  const ProductDetailsRes = useGetProductDetailsQuery(id);
  const productDetails = ProductDetailsRes?.data?.data || [];
  // console.log(productDetails);
  return (
    <div className="div-gradient-clr py-5">
      <div className="container pt-5">
        <div className="my-4">
          <div className="d-flex row">
            <div className="col-md-6">
              <img
                className="w-100 blur"
                style={{ width: "790px", height: "700px" }}
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
              <h4 className="Product-txt-color">PRODUCT NAME</h4>
              <p className="product-p-color text-justify">
                Small description : Lorem ipsum dolor sit amet consectetur.
                Felis est habitasse nec gravida tincidunt et. Amet maecenas
                fames sit diam adipiscing nibh id. Pellentesque duis non nunc
                egestas aenean fringilla platea magna et. Nibh nunc diam blandit
                risus dictum sem nibh eu.
              </p>
              <h6 className="bold">
                Delivery Date:
                <span className="delivery-date-color"> 1 July 22</span>
              </h6>
              <h6 className="bold">
                Client:<span className="delivery-date-color">DIOR</span>
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
                Lorem ipsum dolor sit amet consectetur. Urna maecenas sed massa
                malesuada platea. Placerat ut posuere morbi eget ut. Enim id nec
                fermentum aenean. Netus purus lorem porttitor id sit. Mauris
                phasellus amet dui ultricies malesuada quis tortor senectus nec.
                Sit tincidunt id ut venenatis vel nam. Convallis gravida
                scelerisque vehicula facilisis lectus porttitor. Ac mauris
                bibendum et nec. Condimentum eget turpis libero quis velit eros
                euismod. Orci euismod mattis laoreet sagittis velit. Dignissim
                faucibus quis pellentesque diam. Aliquet sit et ullamcorper
                tortor pellentesque lorem donec. Risus nibh phasellus id
                ultricies facilisi neque phasellus diam. Ullamcorper sapien
                nulla facilisi consectetur. Risus urna volutpat et ut. Sodales
                vitae sit elit ac. Enim libero eros nisi elit in sed.
                Scelerisque quis adipiscing amet vitae felis scelerisque
                sollicitudin. Volutpat gravida dictumst sit velit nunc vulputate
                penatibus a nunc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
