import React from "react";
import { images, data } from "../../constants";
import { SubHeading, MenuItem } from "../../components";
import "./SpecialMenu.css";

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    {/* HEADINGS */}
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits your Pallete" />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>
    {/* MENU */}
    <div className="app__specialMenu-menu">
      {/* WINE AND BEER */}
      <div className="app__specialMenu-menu_wine">
        <p className="app__specialMenu-menu_heading">Wine & Beer</p>
        <div className="app__specialMenu-menu_items">
          {data.wines.map((wine, index) => (
            <MenuItem
              key={wine.title + index}
              title={wine.title}
              price={wine.price}
              tags={wine.tags}
            />
          ))}
        </div>
      </div>
      {/* DRINK IMAGE */}
      <div className="app_specialMenu-menu_img">
        <img src={images.menu} alt="drink" />
      </div>
      {/* COCKTAILS */}
      <div className="app__specialMenu-menu_cocktails">
        <p className="app__specialMenu-menu_heading">Cocktails</p>
        <div className="app__specialMenu-menu_items">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem
              key={cocktail.title + index}
              title={cocktail.title}
              price={cocktail.price}
              tags={cocktail.tags}
            />
          ))}
        </div>
      </div>
    </div>
    {/* VIEW MORE BUTTON */}
    <div style={{ marginTop: "15px" }}>
      <button type="button" className="custom__button">
        View More
      </button>
    </div>
    {/* // */}
  </div>
);

export default SpecialMenu;
