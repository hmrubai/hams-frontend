import React, { useState } from "react";
import { useGetNewsApiQuery } from "../../services/post";
import News from "./News";
import "./NewsEvents.css";
import SideBar from "./SideBar/SideBar.jsx";

const NewsEvents = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const newsRes = useGetNewsApiQuery();
  // console.log(newsRes?.data?.data);

  const newsData = newsRes?.data?.data;

  if (newsRes.isFetching)
    return (
      <div className="spinner-grow" role="status">
        <span className="visually-hidden"></span>
      </div>
    );
  if (newsRes.isError) return <h1>An error occurred {newsRes.error.error}</h1>;

  const sideSectionColor = "rgba(246, 246, 246, 1)";

  // Filter the news data based on the selected category
  const filteredNews = newsData.filter(
    (news) =>
      selectedCategory === "All" ||
      news.category_id.toString() === selectedCategory
  );

  return (
    <div>
      <section className="my-3 container-sm">
        <div className="row news-container mx-auto">
          <div className="col-lg-9 col-md-9 col-sm-12 news-events-cards">
            {filteredNews.map((news) => (
              <News key={news.id} news={news} />
            ))}
          </div>

          <div
            className="col-lg-3 col-md-3 col-sm-12 my-2"
            style={{ backgroundColor: sideSectionColor }}
          >
            <SideBar
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsEvents;
