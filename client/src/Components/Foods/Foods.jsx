import React, { useState, useEffect, useRef } from 'react';
import Sidebar from '../../Containers/SideBar/SideBar';
import FoodMenu from '../../Containers/Foodmenu/FoodMenu';
const Foods = () => {
  const [activeCategory, setActiveCategory] = useState("What's new");
  const sectionRefs = useRef([]);

  const categories = [
    "What's new",
    'Соло баскеты',
    'Комбо',
    'Боксы',
    'Бургеры и сэндвичи',
    'Комбо баскеты',
    'Сочная курочка',
    'Снэки',
    'Напитки',
    'Дополнительно',
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const handleCategoryClick = (category) => {
    const section = document.getElementById(category);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar */}
      <Sidebar
        categories={categories}
        activeCategory={activeCategory}
        handleCategoryClick={handleCategoryClick}
      />

      {/* Food Menu */}
      <FoodMenu categories={categories} sectionRefs={sectionRefs} />
    </div>
  );
};

export default Foods;
