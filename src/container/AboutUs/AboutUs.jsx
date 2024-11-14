import React from "react";
import images from "../../constants/images";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    {/* BACKGROUND - G */}
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G" />
    </div>

    <div className="app__aboutus-content flex__center">
      {/* ABOUT US SECTION */}
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
          aut ea a veritatis dolores ab fugit sint optio est, eum quas
          repudiandae provident laborum. Veniam molestias quod accusamus omnis
          aliquid.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>

      {/* KNIFE IMAGE */}
      <div class="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="knife" />
      </div>
      {/* OUR HISTORY SECTION */}
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
          aut ea a veritatis dolores ab fugit sint optio est, eum quas
          repudiandae provident laborum. Veniam molestias quod accusamus omnis
          aliquid.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
