import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Arrow1 from "../../assets/arrow/arrowClr.png";
import Arrow2 from "../../assets/arrow/Arrow2.png";
import Arrow3 from "../../assets/arrow/Arrow3.png";
import Arrow4 from "../../assets/arrow/Arrow4.png";
import Arrow5 from "../../assets/arrow/Arrow5.png";
import Arrow6 from "../../assets/arrow/Arrow6.png";
import "./Layout.css";
import { useGetAllPostQuery } from "../../services/post";

const TimeLineM = () => {
  const aboutRes = useGetAllPostQuery();

  const timelineObjApi = aboutRes?.data?.data?.journey;
  const timelineMapApi = aboutRes?.data?.data?.journey_timeline;

  if (aboutRes.isFetching) return <div></div>;

  if (aboutRes.isError) return <h1>An error occur {aboutRes.error.error}</h1>;

  return (
    <div className="">
      <div
        className="d-block d-sm-none"
        style={{ background: "rgba(245, 245, 247, 1)" }}
      >
        <VerticalTimeline>
          <div>
            <div className="text-white text-center">
              <h5
                className=""
                style={{
                  color: "black",
                  borderBottom: "3px solid rgba(255, 97, 0, 1)",
                  display: "inline",
                  paddingBottom: "3px",
                }}
              >
                {timelineObjApi.short_title}
              </h5>
              <h4 className="mt-2 mb-2" style={{ color: "black" }}>
                {timelineObjApi.title}
              </h4>
              <p className="px-2 text-black">{timelineObjApi.description}</p>
            </div>
          </div>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(29, 47, 64)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(29, 47, 64)" }}
            iconStyle={{ background: "rgb(29, 47, 64)", color: "#fff" }}
            icon={<img src={Arrow1} width="100%" />}
          >
            <p
              className="m-0 p-0 vertical-timeline-element-title"
              style={{ fontWeight: "bold", color: "#F48CB4" }}
            >
              {timelineMapApi.length > 0 && timelineMapApi[0]?.year}
            </p>
            <p
              className="m-0 p-0 vertical-timeline-element-subtitle"
              style={{ fontWeight: "bold" }}
            >
              {timelineMapApi.length > 0 && timelineMapApi[0]?.title}
            </p>
            <p className="m-0 p-0">
              {timelineMapApi.length > 0 && timelineMapApi[0]?.description}
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(29, 47, 64)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(29, 47, 64)" }}
            iconStyle={{ background: "rgb(29, 47, 64)", color: "#fff" }}
            icon={<img src={Arrow2} width="100%" />}
          >
            <p
              className="m-0 p-0 vertical-timeline-element-title"
              style={{ fontWeight: "bold", color: "#ffc83c" }}
            >
              {timelineMapApi.length > 0 && timelineMapApi[1]?.year}
            </p>
            <p
              className="m-0 p-0 vertical-timeline-element-subtitle"
              style={{ fontWeight: "bold" }}
            >
              {timelineMapApi.length > 0 && timelineMapApi[1]?.title}
            </p>
            <p className="m-0 p-0">
              {timelineMapApi.length > 0 && timelineMapApi[1]?.description}
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(29, 47, 64)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(29, 47, 64)" }}
            iconStyle={{ background: "rgb(29, 47, 64)", color: "#fff" }}
            icon={<img src={Arrow3} width="100%" />}
          >
            <p
              className="m-0 p-0 vertical-timeline-element-title"
              style={{ fontWeight: "bold", color: "#5CA4C4" }}
            >
              {timelineMapApi.length > 0 && timelineMapApi[2]?.year}
            </p>
            <p
              className="m-0 p-0 vertical-timeline-element-subtitle"
              style={{ fontWeight: "bold" }}
            >
              {timelineMapApi.length > 0 && timelineMapApi[2]?.title}
            </p>
            <p className="m-0 p-0">
              {timelineMapApi.length > 0 && timelineMapApi[2]?.description}
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(29, 47, 64)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(29, 47, 64)" }}
            iconStyle={{ background: "rgb(29, 47, 64)", color: "#fff" }}
            icon={<img src={Arrow4} width="100%" />}
          >
            <p
              className="m-0 p-0 vertical-timeline-element-title"
              style={{ fontWeight: "bold", color: "#a864b0" }}
            >
              {timelineMapApi.length > 0 && timelineMapApi[3]?.year}
            </p>
            <p
              className="m-0 p-0 vertical-timeline-element-subtitle"
              style={{ fontWeight: "bold" }}
            >
              {timelineMapApi.length > 0 && timelineMapApi[3]?.title}
            </p>
            <p className="m-0 p-0">
              {timelineMapApi.length > 0 && timelineMapApi[3]?.description}{" "}
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "rgb(29, 47, 64)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(29, 47, 64)" }}
            iconStyle={{ background: "rgb(29, 47, 64)", color: "#fff" }}
            icon={<img src={Arrow5} width="100%" />}
          >
            <p
              className="m-0 p-0 vertical-timeline-element-title"
              style={{ fontWeight: "bold", color: "#92d04f" }}
            >
              {timelineMapApi.length > 0 && timelineMapApi[4]?.year}
            </p>
            <p
              className="m-0 p-0 vertical-timeline-element-subtitle"
              style={{ fontWeight: "bold" }}
            >
              {timelineMapApi.length > 0 && timelineMapApi[4]?.title}
            </p>
            <p className="m-0 p-0">
              {timelineMapApi.length > 0 && timelineMapApi[4]?.description}{" "}
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "rgb(29, 47, 64)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(29, 47, 64)" }}
            iconStyle={{ background: "rgb(29, 47, 64)", color: "#fff" }}
            icon={<img src={Arrow6} width="100%" />}
          >
            <p
              className="m-0 p-0 vertical-timeline-element-title"
              style={{ fontWeight: "bold", color: "#a16bdd" }}
            >
              {timelineMapApi.length > 0 && timelineMapApi[5]?.year}
            </p>
            <p
              className="m-0 p-0 vertical-timeline-element-subtitle"
              style={{ fontWeight: "bold" }}
            >
              {timelineMapApi.length > 0 && timelineMapApi[5]?.title}
            </p>
            <p className="m-0 p-0">
              {timelineMapApi.length > 0 && timelineMapApi[5]?.description}{" "}
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "rgb(29, 47, 64)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(29, 47, 64)" }}
            iconStyle={{ background: "rgb(29, 47, 64)", color: "#fff" }}
            icon={<img src={Arrow1} width="100%" />}
          >
            <p
              className="m-0 p-0 vertical-timeline-element-title"
              style={{ fontWeight: "bold", color: "#F48CB4" }}
            >
              {timelineMapApi.length > 0 && timelineMapApi[11]?.year}
            </p>
            <p
              className="m-0 p-0 vertical-timeline-element-subtitle"
              style={{ fontWeight: "bold" }}
            >
              {timelineMapApi.length > 0 && timelineMapApi[11]?.title}
            </p>
            <p className="m-0 p-0">
              {timelineMapApi.length > 0 && timelineMapApi[11]?.description}{" "}
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "rgb(29, 47, 64)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(29, 47, 64)" }}
            iconStyle={{ background: "rgb(29, 47, 64)", color: "#fff" }}
            icon={<img src={Arrow2} width="100%" />}
          >
            <p
              className="m-0 p-0 vertical-timeline-element-title"
              style={{ fontWeight: "bold", color: "#ffc83c" }}
            >
              {timelineMapApi.length > 0 && timelineMapApi[10]?.year}
            </p>
            <p
              className="m-0 p-0 vertical-timeline-element-subtitle"
              style={{ fontWeight: "bold" }}
            >
              {timelineMapApi.length > 0 && timelineMapApi[10]?.title}
            </p>
            <p className="m-0 p-0">
              {" "}
              {timelineMapApi.length > 0 &&
                timelineMapApi[10]?.description}{" "}
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "rgb(29, 47, 64)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(29, 47, 64)" }}
            iconStyle={{ background: "rgb(29, 47, 64)", color: "#fff" }}
            icon={<img src={Arrow3} width="100%" />}
          >
            <p
              className="m-0 p-0 vertical-timeline-element-title"
              style={{ fontWeight: "bold", color: "#5CA4C4" }}
            >
              {timelineMapApi.length > 0 && timelineMapApi[9]?.year}
            </p>
            <p
              className="m-0 p-0 vertical-timeline-element-subtitle"
              style={{ fontWeight: "bold" }}
            >
              {timelineMapApi.length > 0 && timelineMapApi[9]?.title}
            </p>
            <p className="m-0 p-0">
              {timelineMapApi.length > 0 && timelineMapApi[9]?.description}
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "rgb(29, 47, 64)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(29, 47, 64)" }}
            iconStyle={{ background: "rgb(29, 47, 64)", color: "#fff" }}
            icon={<img src={Arrow4} width="100%" />}
          >
            <p
              className="m-0 p-0 vertical-timeline-element-title"
              style={{ fontWeight: "bold", color: "#a864b0" }}
            >
              {timelineMapApi.length > 0 && timelineMapApi[8]?.year}
            </p>
            <p
              className="m-0 p-0 vertical-timeline-element-subtitle"
              style={{ fontWeight: "bold" }}
            >
              {timelineMapApi.length > 0 && timelineMapApi[8]?.title}
            </p>
            <p className="m-0 p-0">
              {timelineMapApi.length > 0 && timelineMapApi[8]?.description}
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "rgb(29, 47, 64)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(29, 47, 64)" }}
            iconStyle={{ background: "rgb(29, 47, 64)", color: "#fff" }}
            icon={<img src={Arrow5} width="100%" />}
          >
            <p
              className="m-0 p-0 vertical-timeline-element-title"
              style={{ fontWeight: "bold", color: "#92d04f" }}
            >
              {timelineMapApi.length > 0 && timelineMapApi[7]?.year}
            </p>
            <p
              className="m-0 p-0 vertical-timeline-element-subtitle"
              style={{ fontWeight: "bold" }}
            >
              {timelineMapApi.length > 0 && timelineMapApi[7]?.title}
            </p>
            <p className="m-0 p-0">
              {timelineMapApi.length > 0 && timelineMapApi[7]?.description}
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "rgb(29, 47, 64)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(29, 47, 64)" }}
            iconStyle={{ background: "rgb(29, 47, 64)", color: "#fff" }}
            icon={<img src={Arrow6} width="100%" />}
          >
            <p
              className="m-0 p-0 vertical-timeline-element-title"
              style={{ fontWeight: "bold", color: "#a16bdd" }}
            >
              {timelineMapApi.length > 0 && timelineMapApi[6]?.year}
            </p>
            <p
              className="m-0 p-0 vertical-timeline-element-subtitle"
              style={{ fontWeight: "bold" }}
            >
              {timelineMapApi.length > 0 && timelineMapApi[6]?.title}
            </p>
            <p className="m-0 p-0">
              {timelineMapApi.length > 0 && timelineMapApi[6]?.description}{" "}
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default TimeLineM;
