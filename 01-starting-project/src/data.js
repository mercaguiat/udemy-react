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