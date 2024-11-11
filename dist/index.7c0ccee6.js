// div id="parent " div id="child " then h1
const heading1 = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {}, "h1 from react"),
        React.createElement("h1", {}, "h2 from react")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {}, "h1 from react"),
        React.createElement("h1", {}, "h2 from react")
    ])
]);
// React.createElement   it is craeting an object
const heading2 = React.createElement("h1", {
    id: "heading",
    xyz: "abc"
}, "hello world React!!");
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(heading2);
root2.render(heading1);
console.log(heading1);

//# sourceMappingURL=index.7c0ccee6.js.map
