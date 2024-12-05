import React, { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TabPanel, useTabs } from "react-headless-tabs";

function Discover2() {
  const [tabs, setTabs] = useState([
    {
      id: "1",
      text: "My Account",
    },
    {
      id: "2",
      text: "Company",
    },
    {
      id: "3",
      text: "Team Members",
    },
    {
      id: "4",
      text: "Billing",
    },
  ]);

  const [selectedTab, setSelectedTab] = useTabs(tabs.map(({ id }) => id));

  const moveTab = (dragIndex, hoverIndex) => {
    const dragTab = tabs[dragIndex];
    const tabsCopy = [...tabs];

    tabsCopy.splice(dragIndex, 1);
    tabsCopy.splice(hoverIndex, 0, dragTab);

    setTabs(tabsCopy);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex flex-col">
        {tabs.map((tab, i) => (
          <TabSelector
            key={tab.id}
            isActive={selectedTab === tab.id}
            id={tab.id}
            index={i}
            moveTab={moveTab}
            onClick={() => setSelectedTab(tab.id)}
          >
            {tab.text}
          </TabSelector>
        ))}
      </div>
      <div className="flex-grow p-4">
        {tabs.map((tab) => (
          <TabPanel key={tab.id} hidden={selectedTab !== tab.id}>
            {tab.text}
          </TabPanel>
        ))}
      </div>
    </DndProvider>
  );
}

const ItemTypes = {
  TAB: "tab",
};

const TabSelector = ({ isActive, children, id, index, moveTab, onClick }) => {
  const ref = React.useRef(null);

  const [, drop] = useDrop({
    accept: ItemTypes.TAB,
    hover(item) {
      if (!ref.current) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = item.clientOffset;
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveTab(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [, drag] = useDrag({
    type: ItemTypes.TAB,
    item: { id, index },
  });

  drag(drop(ref));

  return (
    <div
      className={`mr-4 group inline-flex items-center px-2 py-4 border-l-2 font-medium text-sm leading-5 cursor-pointer whitespace-nowrap ${
        isActive
          ? "border-indigo-500 text-indigo-600 focus:outline-none focus:text-indigo-800 focus:border-indigo-700"
          : "border-transparent text-gray-500 hover:text-gray-600 hover:border-gray-300 focus:text-gray-600 focus:border-gray-300"
      }`}
      onClick={onClick}
      ref={ref}
    >
      {children}
    </div>
  );
};

export default Discover2;
