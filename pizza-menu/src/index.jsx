import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import pizzaData from "./pizzaData";

// 在 react 中状态组件一定要以首字母大写🍤开头！
// JSX 中的 CSS class 一定要用 className
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // 行内式CSS 的 JSX 语法
  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };

  const style = {};

  return (
    <header className="header">
      <h1 style={style} className="header">
        Fast React Pizza Co.
      </h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = []; //不推荐这种，因为数组里面依然是有数据的，在渲染的时候会渲染出一个空节点
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our menu</h2>

      {/*  利用三元运算符来改进 ?  */}
      {/* <react fragment> <></>*/}
      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>

          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
    </main>
  );
}

// props React 中的参数传递
/*
  props are used to pass data from parent components to child components
  
  props are READ-ONLY,they are \wq3122qwaredf

  State is interal data that can be updated by the component's logic

*/

function Pizza({ pizzaObj }) {
  // console.log(props)
  //如果你想返回修改三元表达式中的一个元素的话，你可以用传统的 if 表达式来解决
  // if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>

        {/* {pizzaObj.soldOut ? (
          <span>SOLD OUT</span>
        ) : (
          <span>{pizzaObj.price}</span>
        )} */}

        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer(props) {
  console.log(props);

  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  // const isOpen = hour >= openHour && hour <= closeHour;
  const isOpen = true;
  console.log(isOpen);

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );

  // {new Date().toLocaleTimeString()}. We're currently open
  //   return React.createElement("footer", null, "We're currently open!");
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come to visit us or
        order online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

// React v18写法
// 首先需要创建一个根节点，通过 ReactDOM的根节点 root 渲染
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<App />);   // not using static mode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

//在 Static Mode 下会将所有组件渲染两次以便检查错误
//React 18 版之前的写法： React before 18
// React.render(<App />);

//激活 React 的严格模式 在严格模式下，
// 在严格模式下不能直接将应用程序组件渲染为根组件，需要封装📦成一个严格模式的组件
/*
React 应用中，所有的页面全是由组件构建件而成
构建不同的用户区域 user building block 在 React 中是常见的
每一块 UI 都具有它的数据，逻辑和行为表现（how it works and looks
我们通过构建多种组件，并他们组合来构建复杂的 UI用户界面
组件 components可以被重用、相互嵌套和在他们之前传递数据
通常 React 会将这些组件形成一个 ReactDOM 组件树
 App 通常为 Root 根组件
*/

/*
 声明式语法用来描述组件是如何显示和工作的一种语言
 Declarative syntax to descibe what components look like and how they work

 Components must return a block of JSX
 组件必须由一个 JSX 块来返回

Extension of JavaScript that allows us to embed JavaScript CSS and React components into HTML

Each JSX element is converted to a React.createElement function call

Declarative 声明式
Describe what UI should look like using JSX, based on current data
React is an abstraction away from DOM: we never touch the DOM
Instead, we think of the UI as a reflection of the current data
*/

/* 
        numPizzas > 0 && (
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        )
    */

/* name={pizza.name} photoName={pizza.photoName} */
/* <Pizza pizzaObj={pizza} key={pizza.name} /> */

/* 列表渲染map 方法 */

/*
        <ul className="pizzas">
                {pizzaData.map((pizza) => (
                  <li className="pizza">
                    <img src={pizza.photoName} alt={pizza.name} />
                    <div>
                      <h3>{pizza.name}</h3>
                      <p>{pizza.ingredients}</p>
                      <span>{pizza.price}</span>
                    </div>
                  </li>
                ))}
              </ul>
      */

/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />
      */

//
// function Order(props) {
//   return (
//     <div className="order">
//       <p>
//         We're open until until {props.closeHour}:00. Come to visit us or order
//         online.
//       </p>
//       <button className="btn">Order</button>
//     </div>
//   );
// }

//   if (hour >= openHour && hour <= closeHour) {
//     alert("We're currently open!");
//   } else {
//     alert("Sorry, we're closed");
//   }

// {[open] -> true && <要执行的语句operators and sentence need to be executed>}

// if (!isOpen) return <p>CLOSED</p>;
