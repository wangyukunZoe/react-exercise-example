import React from "react";
import ReactDOM from "react-dom/client";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

// 在 react 中状态组件一定要以首字母大写🍤开头！
function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return <h1>Fast React Pizza Co.</h1>;
}

function Menu() {
  return (
    <div>
      <h2>Our menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  const ipOpen = hour >= openHour && hour <= closeHour;
  console.log(ipOpen);

  //   if (hour >= openHour && hour <= closeHour) {
  //     alert("We're currently open!");
  //   } else {
  //     alert("Sorry, we're closed");
  //   }

  return (
    <footer>{new Date().toLocaleTimeString()}. We're currently open</footer>
  );
  //   return React.createElement("footer", null, "We're currently open!");
}

function Pizza() {
  return (
    <div>
      <img src="pizzas/spinaci.jpg" alt="Pizza spinaci" />
      <h2>Pizza Spinaci</h2>
      <p>Tomato, mozarella, spinach, and ricotta cheese</p>
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
