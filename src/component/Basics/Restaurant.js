import React, {useState} from 'react';
import "./style.css";
import Menu from "./menuApi";
import MenuCard from './MenuCard';
import NavBar from './NavBar';

const uniqueList = [
  ...new Set(
    Menu.map((curElm) => {
      return curElm.category;
    })
  ),
  "All",
];
const Restaurant = () => {
  const[menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);
  console.log(menuData);
  const filterItem = (category) => {
    if(category === "All"){
      setMenuData(Menu);
      return;
    }
    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setMenuData(updatedList);
  };
  
  return (
    <>
      <NavBar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Restaurant;
