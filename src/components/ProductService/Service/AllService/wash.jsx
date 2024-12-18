import React from "react";

const wash = () => {
  return (
    <>
      <div className="container my-3 mx-3">
        <div>
          <h3 className="fw-bold fs-3">Wash</h3>
          <p className="my-3 text-justify">
            In the realm of garment finishing, HAMS Garments takes pride in its
            comprehensive wash profile, offering a spectrum of techniques that
            elevate the appeal and character of each garment.
          </p>
        </div>

        <div className="my-3">
          <h3 className="fw-bold fs-3">Distinct Washes</h3>
          <p className="my-3">
            HAMS specializes in a variety of wash techniques, including but not
            limited to
          </p>
        </div>
      </div>
      <div>
        <div
          className="my-3 rounded"
          style={{ backgroundColor: "rgba(255, 204, 128, 0.1)" }}
        >
          <div className="row p-5">
            <div className="col-sm-12 col-md-6">
              <div className="gap-3 rounded justify-content-center my-2">
                <p
                  className="p-2 rounded"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
                >
                  <span className="fw-bold">Enzyme Wash:</span>Achieving a soft
                  and worn-in feel.
                </p>
                <p
                  className="p-2 rounded"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
                >
                  <span className="fw-bold">Acid Wash:</span>Introducing unique
                  patterns and textures.
                </p>
                <p
                  className="p-2 rounded"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
                >
                  <span className="fw-bold">Garment Dyeing:</span>Ensuring
                  vibrant and consistent colors.
                </p>
              </div>
            </div>

            <div className="col-sm-12 col-md-6">
              <div className="gap-3 rounded justify-content-center my-2">
                <p
                  className="p-2 rounded"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
                >
                  <span className="fw-bold">Stone Wash:</span>Creating a
                  vintage, faded appearance
                </p>
                <p
                  className="p-2 rounded"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
                >
                  <span className="fw-bold">Bleach Wash: </span>Providing a
                  distressed and lived-in look.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-3">
        <div className="d-flex gap-5">
          <div className="text-justify">
            <h5 className="fw-bold text-justify">
              Customization and Innovation
            </h5>
            <p className="my-3 me-2 text-justify">
              The wash profile at HAMS is not just about processes but a canvas
              for creativity. Customization is key, allowing clients to tailor
              wash effects to suit their brand identity. The commitment to
              innovation means that HAMS continually explores new wash
              techniques to stay ahead of trends
            </p>
          </div>
          <div className="mt-3 text-justify">
            <p className="mt-4 me-2 text-justify">
              HAMS integrates sustainable practices into its wash profile, using
              eco-friendly detergents and implementing water-saving measures.
              The aim is to minimize the environmental impact while maintaining
              the highest standards of quality.
            </p>
            <h5 className="fw-bold text-justify text-end">
              Sustainability Focus
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default wash;
