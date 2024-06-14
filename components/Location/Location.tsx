import React from "react";

function Location() {
  return (
    <div className="h-[400px] lg:h-fill w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12853.014111618368!2d6.6350943055100275!3d36.35463746740721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f17717c4785627%3A0x25fb307fd08801a!2sConstantine!5e0!3m2!1sen!2sdz!4v1718370289816!5m2!1sen!2sdz"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Location;
