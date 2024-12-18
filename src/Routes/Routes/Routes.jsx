import React, { Children, Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
const Home = Loadable(
  lazy(() => import("../../components/HomePage/Home/Home"))
);
const Layout0 = Loadable(
  lazy(() => import("../../components/LayOut0/LayOut0"))
);
const CSR = Loadable(lazy(() => import("../../components/CSR/CSR")));
const CompanyMenu = Loadable(
  lazy(() => import("../../components/CompanyMenu/CompanyMenu/CompanyMenu"))
);
const NewsEvents = Loadable(
  lazy(() => import("../../components/NewsEvents/NewsPhotoTab"))
);
const ServicesMenu = Loadable(
  lazy(() => import("../../components/ServicesMenu/ServicesMenu"))
);
const Login = Loadable(lazy(() => import("../../components/Login/Login")));
const OurBusiness = Loadable(
  lazy(() => import("../../components/OurBusiness/OurBusiness"))
);
const Contact = Loadable(
  lazy(() => import("../../components/ContactDetails/Contact"))
);
import BusinessMenu from "../../components/BusinessMenu/BusinessMenu";
import CertificationDetails from "../../components/CertificationDetails/CertificationDetails";
import SpecificNews from "../../components/NewsEvents/Specificnews/SpecificNews";
import { Layout } from "../../components/Layout6/Layout";
import Layout7 from "../../components/Layout7/Layout7";
import LearnMore from "../../components/HomePage/LearnMore/LearnMore";
import LearnMore3 from "../../components/HomepageLearnMore3/LearnMore3";
import LearnMore4 from "../../components/HomepageLearnMore4/LearnMore4";
import LearnMore5 from "../../components/HomePageLearnMore5/LearnMore5";
import LearnMore6 from "../../components/HomePageLearnMore6/LearnMore6";
import { NotFoundPages } from "../../components/NotFoundComponent/NotFoundPages";
import Loadable from "../../Loader/Loadable";
import AchievementLink from "../../components/HomePage/AchievementLink/AchievementLink";
import ProductList from "../../components/Layout6/Products";
import Products from "../../components/Layout6/Products";
import SustainabilityCardDetails from "../../components/HomePage/Sustainability/SustainabilityCardDetails";
import ScrollToTop from "../../hooks/useScrollToTop";
import Signup from "../../components/Login/Signup";
import Auth from "../../components/Login/Auth";
import UpdatedCC from "../../components/CSR/UpdatedCC";
import TQM from "../../components/HomePage/CardSlider/CardLink/TQM";
import Victoria from "../../components/HomePage/CardSlider/CardLink/Victoria";
import HamsGarment from "../../components/HomePage/CardSlider/CardLink/HamsGarment";
import { ProductCategory } from "../../components/HomePage/LatestProducts/productCategory/ProductCategory";
import TabProductList from "../../components/Layout6/TabProduct/TabProductList";
import TabProduct from "../../components/Layout6/TabProduct";
import CategoryWiseProducts from "../../components/Layout6/CategoryWiseProducts";
import DhakaGarment from "../../components/HomePage/CardSlider/CardLink/DhakaGarment";
import HamsFasion from "../../components/HomePage/CardSlider/CardLink/HamsFasion";
import GarmentTShirt from "../../components/HomePage/CardSlider/CardLink/GarmentTShirt";
import UnderGarment from "../../components/HomePage/CardSlider/CardLink/UnderGarment";
import Knitting from "../../components/HomePage/CardSlider/CardLink/Knitting";
import Dyeing from "../../components/HomePage/CardSlider/CardLink/Dyeing";
import Shanta from "../../components/HomePage/CardSlider/CardLink/Shanta";
import DhakaGW from "../../components/HomePage/CardSlider/CardLink/DhakaGW";
import Cutting from "../../components/Layout6/DiscoverDetail/Cutting";
import DesignStudio from "../../components/Layout6/DiscoverDetail/DesignStudio";
import ProductsDevelopment from "../../components/Layout6/DiscoverDetail/ProductsDevelopment";
import Fabrication from "../../components/Layout6/DiscoverDetail/Fabrication";
import ChestPrint from "../../components/Layout6/DiscoverDetail/ChestPrint";
import Embroidery from "../../components/Layout6/DiscoverDetail/Embroidery";
import Garments from "../../components/Layout6/DiscoverDetail/Garments";
import Wash from "../../components/Layout6/DiscoverDetail/Wash";
import Accreditation from "../../components/Layout6/DiscoverDetail/Accreditation";
import UnderGarments from "../../components/Layout6/DiscoverDetail/UnderGarments";
import Discover from "../../components/Layout6/Discover";
import ElevatingSection from "../../components/LayOut0/ElevatingSection";
import Achievment from "../../components/Layout6/Achievment";
import QualitySection from "../../components/LayOut0/QualitySection";
import PhotoGallery from "../../components/NewsEvents/PhotoGallery";
import OurClients from "../../components/HomePage/OurClients/OurClients";

// =====================New route start =================
// Our Business routes file path start ==
const OurBusin = Loadable(
  lazy(() => import("../../components/OurBusin/index"))
);

// Going Green file path start ==
const GoingGreen = Loadable(
  lazy(() => import("../../components/GoingGreen/Index"))
);

// Employee First  file path start ==
const EmployeeFirst = Loadable(
  lazy(() => import("../../components/EmployeeFirst/index"))
);

//Compliance & CSR file path start ==
const ComplianceCSR = Loadable(
  lazy(() => import("../../components/ComplianceCSR/index"))
);

//Impact Store file path start ==
const ImpactStore = Loadable(
  lazy(() => import("../../components/ImpactStore/index"))
);

//Home Page file path start ==
const HomePage = Loadable(lazy(() => import("../../components/Home/index")));

//About Us file path start ==
const AboutUs = Loadable(lazy(() => import("../../components/About/index")));

//Product & Services file path start ==
const ProductService = Loadable(
  lazy(() => import("../../components/ProductService/index"))
);

// =====================New route end ===================

// Company name wise start file path =======

//HAMS Fashion LTD file path ==
const HAMSfashionLtd = Loadable(
  lazy(() =>
    import("../../components/Home/OtherCompany/CompanyPage/HamsFasionLTD")
  )
);

//Victoria Intimate LTD file path ==
const VictoriaIntimateLtd = Loadable(
  lazy(() =>
    import("../../components/Home/OtherCompany/CompanyPage/VictoriaIntimateLTD")
  )
);

//Dhaka Garment & Wash Ltd file path ==
const DhakaGarmentWashLtd = Loadable(
  lazy(() =>
    import("../../components/Home/OtherCompany/CompanyPage/DhakaGarmentWashLtd")
  )
);

//Hams Garment Ltd file path ==
const HamsGarmentLtd = Loadable(
  lazy(() =>
    import("../../components/Home/OtherCompany/CompanyPage/HamsGarmentLtd")
  )
);

//Garment T-Shirt Ltd file path ==
const GarmentTShirtLtd = Loadable(
  lazy(() =>
    import("../../components/Home/OtherCompany/CompanyPage/GarmentTShirt")
  )
);

// TQM LTD file path ==
const TQMLTD = Loadable(
  lazy(() => import("../../components/Home/OtherCompany/CompanyPage/TQM"))
);

//Knitting Unit file path ==
const KnittingUnit = Loadable(
  lazy(() =>
    import("../../components/Home/OtherCompany/CompanyPage/KnittingUnit")
  )
);

//Dyeing Unit file path ==
const DyeingUnit = Loadable(
  lazy(() =>
    import("../../components/Home/OtherCompany/CompanyPage/DyeingUnit")
  )
);

//Shanta LTD file path ==
const ShantaUnit = Loadable(
  lazy(() =>
    import("../../components/Home/OtherCompany/CompanyPage/ShantaUnit")
  )
);

// Company name wise routes end file path =========

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Main />
        <ScrollToTop />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/learn-more",
        element: <LearnMore />,
      },
      {
        path: "/about",
        element: <Layout0 />,
      },

      {
        path: "/product-details/:id",
        element: <Layout7 />,
      },
      // {
      //   path: "/our-business",
      //   element: <OurBusiness />,
      // },
      {
        path: "/employee-first",
        element: <CertificationDetails />,
      },
      {
        path: "/products",
        element: <Layout />,
      },
      {
        path: "/products/:id",
        element: <Layout />,
      },
      {
        path: "/impact-stories",
        element: <NewsEvents />,
      },
      {
        path: "/single-news",
        element: <SpecificNews />,
      },
      {
        path: "/learn-more-3",
        element: <LearnMore3 />,
      },
      {
        path: "/learn-more-4",
        element: <LearnMore4 />,
      },
      {
        path: "/learn-more-5",
        element: <LearnMore5 />,
      },
      {
        path: "/learn-more-6",
        element: <LearnMore6 />,
      },
      {
        path: "/compliance-csr",
        element: <UpdatedCC />,
      },
      {
        path: "/achieveLink",
        element: <AchievementLink />,
      },
      {
        path: "/productTab",
        element: <Products />,
      },
      {
        path: "/tabProduct",
        element: <TabProduct />,
      },
      {
        path: "/productCatagoryList/:id",
        element: <TabProductList />,
      },
      {
        path: "/product-list/:id",
        element: <CategoryWiseProducts></CategoryWiseProducts>,
      },
      {
        path: "/sustainability",
        element: <SustainabilityCardDetails />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/tqm",
        element: <TQM />,
      },
      {
        path: "/victoriaIntimate",
        element: <Victoria />,
      },
      {
        path: "/hamsGarment",
        element: <HamsGarment />,
      },
      {
        path: "/dhakaGarment",
        element: <DhakaGarment />,
      },
      {
        path: "/hamsFasion",
        element: <HamsFasion />,
      },
      {
        path: "/garmentTShirt",
        element: <GarmentTShirt />,
      },
      {
        path: "/underGarment",
        element: <UnderGarment />,
      },
      {
        path: "/knitting",
        element: <Knitting />,
      },
      {
        path: "/dyeing",
        element: <Dyeing />,
      },
      {
        path: "/shanta",
        element: <Shanta />,
      },
      {
        path: "/DhakaGW",
        element: <DhakaGW />,
      },
      {
        path: "/discover",
        element: <Discover />,
      },
      {
        path: "/products",
        element: <ProductCategory />,
      },
      {
        path: "/designStudio",
        element: <DesignStudio />,
      },
      {
        path: "/productsdevelopment",
        element: <ProductsDevelopment />,
      },
      {
        path: "/fabrication",
        element: <Fabrication />,
      },
      {
        path: "/cutting",
        element: <Cutting />,
      },
      {
        path: "/chestprint",
        element: <ChestPrint></ChestPrint>,
      },
      {
        path: "/embroidery",
        element: <Embroidery />,
      },
      {
        path: "/garments",
        element: <Garments />,
      },
      {
        path: "/wash",
        element: <Wash />,
      },
      {
        path: "/accreditation",
        element: <Accreditation />,
      },
      {
        path: "/undergarments",
        element: <UnderGarments />,
      },
      {
        path: "/elevating",
        element: <ElevatingSection />,
      },
      {
        path: "/achievement",
        element: <Achievment />,
      },
      {
        path: "/buyer",
        element: <OurClients />,
      },
      // ================== new route path start ===============

      // == Our Business Route path start ==

      {
        path: "/our-business",
        element: <OurBusin />,
      },

      // == Our Business Route path end ==

      // == Going Green Route path start ==

      {
        path: "/going-green",
        element: <GoingGreen />,
      },

      // == Going Green Route path end ==

      // == Employee First Route path start ==

      {
        path: "/employee-first-route",
        element: <EmployeeFirst />,
      },

      // == Employee First Route path end ==

      // Compliance & CSR Route path star ==
      {
        path: "/compliance-csr-route",
        element: <ComplianceCSR />,
      },
      // Compliance & CSR Route path end ===

      //Impact Stories Route path star ==
      {
        path: "/impact-stories-route",
        element: <ImpactStore />,
      },
      //Impact Stories Route path end ==

      //Home page Route path star ==
      {
        path: "/home-page-route",
        element: <HomePage />,
      },

      //Home page Route path end ==

      //About Us Route path star ==
      {
        path: "/about-route",
        element: <AboutUs />,
      },

      //About Us page Route path end ==

      // Product & Service Route path star ==
      {
        path: "/product-service-route",
        element: <ProductService />,
      },

      // Product & Service Route path end ==

      // ================== new route path end =================
      //Company Name Route path start ==

      //HAMS Fasion LTD
      {
        path: "/hams-fashion-ltd",
        element: <HAMSfashionLtd />,
      },
      //Victoria Intimate Ltd
      {
        path: "/victoria-intimate-ltd",
        element: <VictoriaIntimateLtd />,
      },
      //Dhaka Garment & Wash Ltd path start ==
      {
        path: "/dhaka-garment-wash-ltd",
        element: <DhakaGarmentWashLtd />,
      },
      //Hams Garment Ltd path start ==
      {
        path: "/hams-garment-ltd",
        element: <HamsGarmentLtd />,
      },
      //Garment T-Shirt Ltd path start ==
      {
        path: "/garment-shirt-ltd",
        element: <GarmentTShirtLtd />,
      },
      //TQM Path start ==
      {
        path: "/tqm-ltd",
        element: <TQMLTD />,
      },
      //Knitting Unit Path start ==
      {
        path: "/knitting-unit",
        element: <KnittingUnit />,
      },
      //Dyeing Unit Path start ==
      {
        path: "/dyeing-unit",
        element: <DyeingUnit />,
      },
      //Shanta Unit Path start ==
      {
        path: "/shanta-unit",
        element: <ShantaUnit />,
      },

      //Company Name Route path end ==
    ],
  },
  {
    path: "login",
    element: <Login></Login>,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/*",
    element: <NotFoundPages />,
  },
]);

export default router;
