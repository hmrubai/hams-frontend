import React from "react";

const factoryGMap = () => {
  return (
    <>
      <div className="my-auto my-1">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3639.3915553774978!2d90.45293749999999!3d24.1930625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375679003a734f6d%3A0x7c8f4e259ab14cd3!2sHAMS%20GARMENTS%20LTD!5e0!3m2!1sen!2sbd!4v1729681349868!5m2!1sen!2sbd"
          referrerPolicy="no-referrer-when-downgrade"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Google Map"
        ></iframe>
      </div>
    </>
  );
};

export default factoryGMap;
