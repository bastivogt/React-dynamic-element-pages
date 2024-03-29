import React, { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";

import { useRerender } from "./hooks/useRerender";
import DynamicElement from "./components/DynamicElement";
import Shizo from "./components/Shizo";

let renderCount = 0;

function App() {
  const [pages, setPages] = useState([
    { name: "Home Page", component: Home },
    { name: "About Us", component: About },
    { name: "Contact", component: Contact },
  ]);
  const [currentPage, setCurrentPage] = useState(pages[0]);

  const pageComponents = {
    Home,
    About,
    Contact,
  };

  console.log("pageComponents", pageComponents);

  const render = useRerender();

  console.log(currentPage);

  renderCount++;
  console.log("renderCount", renderCount);

  function onNavClick(page) {
    setCurrentPage(page);
  }

  return (
    <>
      <nav>
        <ul>
          {pages.map((page) => {
            return (
              <li key={page.name}>
                <button
                  className={`${currentPage.name === page.name && "active"}`}
                  onClick={() => onNavClick(page)}
                >
                  {page.name}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
      <hr />
      {React.createElement(currentPage.component, {
        onClick: () => console.log("Page clicked"),
      })}
      <hr />
      <DynamicElement
        is={currentPage.component}
        onClick={() => console.log("Page clicked")}
      ></DynamicElement>
      <Shizo
        is={currentPage.component}
        onClick={() => console.log("Page clicked Shizo")}
      ></Shizo>
      <hr />
      <DynamicElement is="h1">Test</DynamicElement>
      <Shizo is="h2">Test 2</Shizo>
      <Shizo is={pageComponents["About"]}></Shizo>
      <hr />
      <button
        onClick={() => {
          render();
        }}
      >
        Reremder
      </button>
    </>
  );
}

export default App;
