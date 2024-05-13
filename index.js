// const reactElement = React.createElement("h1",{id:"Heading"}," HELLO PEEPS");

// ReactDOM.createRoot(document.getElementById("root")).render(reactElement);

//This is imperative way/style of writing code
// introducing JSX where we will even make this code shorter
const jsxElt =  <>
                <h1>Hello World!!</h1>
                <p> This is lob </p>
                <h2>All About React</h2>
                <ul>
                    <li>Declarative</li>
                    <li>Single Page Application</li>
                </ul>
                </>
                
ReactDOM.createRoot(document.getElementById("root")).render(jsxElt);
//Problem is this will give error saying it doesnt understand <> as browser doesnt understand html so overcome this we will add Babel a compiler used to convert html to equivalent js
//So in html file use CDN and add type="text/babel in script tag"
