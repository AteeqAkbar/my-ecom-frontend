import React from "react";

export default function Instagram() {
  return (
    <div className="owl-item active" style="width: 204px; margin-right: 24px;">
      <div
        className="bb-instagram-card aos-init aos-animate"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <div className="instagram-img relative overflow-hidden rounded-[30px]">
          <a>
            <img
              src="assets/img/instagram/1.jpg"
              alt="instagram-1"
              className="w-full rounded-[20px]"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
