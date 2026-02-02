import React from 'react';
import ReactDOM from 'react-dom/client';

// 在 react 中状态组件一定要以首字母大写🍤开头！
function App() {
    return <h1>Hello React!!!!!</h1>;
}

// React v18写法
// 首先需要创建一个根节点，通过 ReactDOM的根节点 root 渲染
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<App />);   // not using static mode
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
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