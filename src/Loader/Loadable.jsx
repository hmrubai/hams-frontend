import React, { Suspense } from "react";
import Spinner from "react-bootstrap/Spinner";

// loader style
const LoaderWrapper = () => ({
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 2001,
  backgroundColor: "white",
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

// ==============================|| CustomLoader ||============================== //

const CustomLoader = () => {
  return React.createElement(
    "div",
    { style: LoaderWrapper() },
    React.createElement(Spinner, {
      animation: "border",
      className: "custom-spinner",
    })
  );
};

// Add displayName to CustomLoader
CustomLoader.displayName = "CustomLoader";

// ==============================|| LOADABLE - LAZY LOADING ||============================== //

const Loadable = (Component) => {
  const LoadableComponent = (props) => (
    <Suspense fallback={<CustomLoader />}>
      <Component {...props} />
    </Suspense>
  );

  // Add displayName to LoadableComponent
  LoadableComponent.displayName = `Loadable(${
    Component.displayName || Component.name || "Component"
  })`;

  return LoadableComponent;
};

export default Loadable;
