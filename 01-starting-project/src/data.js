import componentImg from "./assets/components.png";
import propsImg from "./assets/config.png";
import jsxImg from "./assets/jsx-ui.png";
import stateImg from "./assets/state-mgmt.png";

export const CORE_CONCEPTS = [
    {
        image: componentImg,
        title: "Components",
        description: "The core UI building block. A component is a self-contained, reusable piece of UI."
    },
    {
        image: propsImg,
        title: "Props",
        description: "A way to pass data from a parent component to a child component. It is read-only."
    },
    {
        image: jsxImg,
        title: "JSX",
        description: "A syntax extension for JavaScript. Allows you to write HTML in JavaScript."
    },
    {
        image: stateImg,
        title: "State Management",
        description: "A way to manage the state of a component. It is the source of truth."
    }
];

export const EXAMPLES = {
    components: {
        title: 'Components',
        description: 
            'Components are the building blocks of React apps. They are self-contained, reusable pieces of UI.',
        code: `
        function Welcome(){
            return (
                <h1>Hello, world!</h1>;
            )
        }
        `,
    },
    jsx: {
        title: 'JSX',
        description: 
            'JSX is a syntax extension for JavaScript. It allows you to write HTML in JavaScript.',
        code: `
       <div> 
            <h1>Hello, {userName}!</h1>;
            <p>This is a paragraph.</p>;
       </div> 
        `,
    },
    props: {
        title: 'Props',
        description: 
            'Props are a way to pass data from a parent component to a child component. They are read-only.',
        code: `
        function Welcome(props) {
            return (
                <h1>Hello, {props.userName}!</h1>;
            )
        }`,
    },
    state: {
        title: 'State Management',
        description: 
            'State management is a way to manage the state of a component. It is the source of truth.',
        code: `
        function Welcome() {
            const [userName, setUserName] = useState('');
            return (
                <h1>Hello, {userName}!</h1>;
            )
        }`,
    }   
}
