import Photo1 from "../../../assets/AllAssets/About/Journey/downPink.png";
import Photo2 from "../../../assets/AllAssets/About/Journey/upArrowMagenta.png";
import Photo3 from "../../../assets/AllAssets/About/Journey/downArrowGreen.png";
import Photo4 from "../../../assets/AllAssets/About/Journey/upArrowPurple.png";
import Photo5 from "../../../assets/AllAssets/About/Journey/downArrowPaste.png";
import Photo6 from "../../../assets/AllAssets/About/Journey/upArrowYellow.png";
import { useGetAllPostQuery } from "../../../services/post";

const index = () => {
  const aboutRes = useGetAllPostQuery();

  const timelineObjApi = aboutRes?.data?.data?.journey;
  const timelineMapApi = aboutRes?.data?.data?.journey_timeline;

  if (aboutRes.isFetching) return <div></div>;

  if (aboutRes.isError) return <h1>An error occur {aboutRes.error.error}</h1>;

  return (
    <div
      className="d-none d-lg-block"
      style={{ backgroundColor: "rgba(29, 47, 64, 1)" }}
    >
      <div className="container p-3">
        <div className="text-white text-center mt-5">
          <h5
            className=""
            style={{
              color: "rgba(255, 255, 255, 1)",
              borderBottom: "3px solid rgba(255, 97, 0, 1)",
              display: "inline",
              paddingBottom: "3px",
            }}
          >
            {timelineObjApi.short_title}
          </h5>
          <h4 className="mt-4 mb-2" style={{ color: "rgba(255, 255, 255, 1)" }}>
            {timelineObjApi.title}
          </h4>
          <p className="px-5">{timelineObjApi.description}</p>
        </div>
        <div className="timeline ">
          <div className="down-image">
            <img src={Photo1} alt="Flat Panel Image" className="img-fluid" />
          </div>
          <div className="timeline-item above-line">
            <div className="timeline-line-horizontal" />
            <div className="px-2 text-white">
              <div
                className="timeline-date p-0 m-0"
                style={{ color: "rgba(245, 139, 180, 1)" }}
              >
                {timelineMapApi.length > 0 && timelineMapApi[0]?.year}
              </div>
              <h5 className="p-0 m-0">
                {timelineMapApi.length > 0 && timelineMapApi[0]?.title}
              </h5>
              <p className="" style={{ fontSize: "12px" }}>
                {timelineMapApi.length > 0 && timelineMapApi[0]?.description}
              </p>
            </div>
          </div>
          <div className="up-image">
            <img src={Photo6} alt="Flat Panel Image" className="img-fluid" />
          </div>
          <div className="timeline-item below-line">
            <div className="px-2 text-white">
              <div
                className="timeline-date p-0 m-0"
                style={{ color: "rgba(253, 201, 50, 1)" }}
              >
                {timelineMapApi.length > 0 && timelineMapApi[1]?.year}
              </div>
              <h5 className="p-0 m-0">
                {timelineMapApi.length > 0 && timelineMapApi[1]?.title}
              </h5>
              <p className="" style={{ fontSize: "12px" }}>
                {timelineMapApi.length > 0 && timelineMapApi[1]?.description}
              </p>
            </div>

            <div className="timeline-line-horizontal" />
          </div>
          <div className="down-image">
            <img src={Photo5} alt="Flat Panel Image" className="img-fluid" />
          </div>
          <div className="timeline-item above-line">
            <div className="timeline-line-horizontal" />
            <div className="px-2 text-white">
              <div
                className="timeline-date p-0 m-0"
                style={{ color: "rgba(102, 184, 211, 1)" }}
              >
                {timelineMapApi.length > 0 && timelineMapApi[2]?.year}
              </div>
              <h5 className="p-0 m-0">
                {" "}
                {timelineMapApi.length > 0 && timelineMapApi[2]?.title}
              </h5>
              <p className="" style={{ fontSize: "12px" }}>
                {timelineMapApi.length > 0 && timelineMapApi[2]?.description}
              </p>
            </div>
          </div>
          <div className="up-image">
            <img src={Photo2} alt="Flat Panel Image" className="img-fluid" />
          </div>
          <div className="timeline-item below-line ">
            <div className="px-2 text-white">
              <div
                className="timeline-date p-0 m-0"
                style={{ color: "rgba(189, 100, 175, 1)" }}
              >
                {timelineMapApi.length > 0 && timelineMapApi[3]?.year}
              </div>
              <h5 className="p-0 m-0">
                {timelineMapApi.length > 0 && timelineMapApi[3]?.title}
              </h5>
              <p className="" style={{ fontSize: "12px" }}>
                {timelineMapApi.length > 0 && timelineMapApi[3]?.description}
              </p>
            </div>
            <div className="timeline-line-horizontal" />
          </div>
          <div className="down-image">
            <img src={Photo3} alt="Flat Panel Image" className="img-fluid" />
          </div>
          <div className="timeline-item above-line">
            <div className="timeline-line-horizontal" />
            <div className="px-2 text-white ">
              <div
                className="timeline-date  p-0 m-0"
                style={{ color: "rgba(146, 208, 79, 1)" }}
              >
                {timelineMapApi.length > 0 && timelineMapApi[4]?.year}
              </div>
              <h5 className="p-0 m-0">
                {timelineMapApi.length > 0 && timelineMapApi[4]?.title}
              </h5>
              <p className="" style={{ fontSize: "12px" }}>
                {timelineMapApi.length > 0 && timelineMapApi[4]?.description}
              </p>
            </div>
          </div>
          <div className="up-image">
            <img src={Photo4} alt="Flat Panel Image" className="img-fluid" />
          </div>
          <div className="timeline-item below-line half_border">
            <div className="px-2 text-white ">
              <div
                className="timeline-date p-0 m-0"
                style={{ color: "rgba(161, 107, 221, 1)" }}
              >
                {timelineMapApi.length > 0 && timelineMapApi[5]?.year}
              </div>
              <h5 className="p-0 m-0">
                {" "}
                {timelineMapApi.length > 0 && timelineMapApi[5]?.title}
              </h5>
              <p className="" style={{ fontSize: "12px" }}>
                {timelineMapApi.length > 0 && timelineMapApi[5]?.description}
              </p>
            </div>

            <div className="timeline-line-horizontal" />
          </div>
        </div>

        <div className="timeline">
          <div className="down-image">
            <img src={Photo1} alt="Flat Panel Image" className="img-fluid" />
          </div>
          <div className="timeline-item above-line">
            <div className="timeline-line-horizontal" />
            <div className="px-2 text-white">
              <div
                className="timeline-date p-0 m-0"
                style={{ color: "rgba(245, 139, 180, 1)" }}
              >
                {timelineMapApi.length > 0 && timelineMapApi[6]?.year}
              </div>
              <h5 className="p-0 m-0">
                {" "}
                {timelineMapApi.length > 0 && timelineMapApi[6]?.title}
              </h5>
              <p className="" style={{ fontSize: "12px" }}>
                {timelineMapApi.length > 0 && timelineMapApi[6]?.description}
              </p>
            </div>
          </div>
          <div className="up-image">
            <img src={Photo6} alt="Flat Panel Image" className="img-fluid" />
          </div>
          <div className="timeline-item below-line">
            <div className="px-2 text-white">
              <div
                className="timeline-date p-0 m-0"
                style={{ color: "rgba(253, 201, 50, 1)" }}
              >
                {timelineMapApi.length > 0 && timelineMapApi[7]?.year}
              </div>
              <h5 className="p-0 m-0">
                {" "}
                {timelineMapApi.length > 0 && timelineMapApi[7]?.title}
              </h5>
              <p className="" style={{ fontSize: "12px" }}>
                {timelineMapApi.length > 0 && timelineMapApi[7]?.description}
              </p>
            </div>

            <div className="timeline-line-horizontal" />
          </div>
          <div className="down-image">
            <img src={Photo5} alt="Flat Panel Image" className="img-fluid" />
          </div>
          <div className="timeline-item above-line">
            <div className="timeline-line-horizontal" />
            <div className="px-2 text-white">
              <div
                className="timeline-date p-0 m-0"
                style={{ color: "rgba(102, 184, 211, 1)" }}
              >
                {timelineMapApi.length > 0 && timelineMapApi[8]?.year}
              </div>
              <h5 className="p-0 m-0">
                {" "}
                {timelineMapApi.length > 0 && timelineMapApi[8]?.title}
              </h5>
              <p className="" style={{ fontSize: "12px" }}>
                {timelineMapApi.length > 0 && timelineMapApi[8]?.description}
              </p>
            </div>
          </div>
          <div className="up-image">
            <img src={Photo2} alt="Flat Panel Image" className="img-fluid" />
          </div>
          <div className="timeline-item below-line">
            <div className="px-2 text-white">
              <div
                className="timeline-date p-0 m-0"
                style={{ color: "rgba(245, 139, 180, 1)" }}
              >
                {timelineMapApi.length > 0 && timelineMapApi[9]?.year}
              </div>
              <h5 className="p-0 m-0">
                {timelineMapApi.length > 0 && timelineMapApi[9]?.title}
              </h5>
              <p className="" style={{ fontSize: "12px" }}>
                {timelineMapApi.length > 0 && timelineMapApi[9]?.description}
              </p>
            </div>
            <div className="timeline-line-horizontal" />
          </div>
          <div className="down-image">
            <img src={Photo3} alt="Flat Panel Image" className="img-fluid" />
          </div>
          <div className="timeline-item above-line">
            <div className="timeline-line-horizontal" />
            <div className="px-2 text-white">
              <div
                className="timeline-date p-0 m-0"
                style={{ color: "rgba(146, 208, 79, 1)" }}
              >
                {timelineMapApi.length > 0 && timelineMapApi[10]?.year}
              </div>
              <h5 className="p-0 m-0">
                {timelineMapApi.length > 0 && timelineMapApi[10]?.title}
              </h5>
              <p className="" style={{ fontSize: "12px" }}>
                {timelineMapApi.length > 0 && timelineMapApi[10]?.description}
              </p>
            </div>
          </div>
          <div className="up-image">
            <img src={Photo4} alt="Flat Panel Image" className="img-fluid" />
          </div>
          <div className="timeline-item below-line">
            <div className="px-2 text-white">
              <div
                className="timeline-date p-0 m-0"
                style={{ color: "rgba(161, 107, 221, 1)" }}
              >
                {timelineMapApi.length > 0 && timelineMapApi[11]?.year}
              </div>
              <h5 className="p-0 m-0">
                {timelineMapApi.length > 0 && timelineMapApi[11]?.title}
              </h5>
              <p className="" style={{ fontSize: "12px" }}>
                {timelineMapApi.length > 0 && timelineMapApi[11]?.description}
              </p>
            </div>

            <div className="timeline-line-horizontal" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
