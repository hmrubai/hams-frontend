import "./Layout.css";
import { useGetAllPostQuery } from "../../services/post";
import QualityCard from "./QualityCard";

const QualitySection = () => {
  const aboutRes = useGetAllPostQuery();

  if (aboutRes.isFetching) return <div></div>;
  if (aboutRes.isError) return <h1>An error occur {aboutRes.error.error}</h1>;

  const qualityData = aboutRes?.data?.data?.quality_feature;

  return (
    <div className="quality-bg py-3">
      <div className="container">
        <div className="text-center">
          <h4 className="quality">
            {aboutRes?.data?.data?.quality.short_title}
          </h4>

          <div className="row mx-auto my-2">
            <div className="col-lg-7 col-sm-12 mx-auto">
              <p className="" style={{ color: "rgba(51, 51, 51, 0.75)" }}>
                {aboutRes?.data?.data?.quality.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualitySection;
