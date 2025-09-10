export default function TabButton({children}) {
    function handleClick() {
        console.log('kamusta kalibutan');
    }
    
    return (
    <li>
        <button onClick={handleClick}>{children}</button>
    </li>
    );
}