/*function Lifecycle(){
    <image src="/lifecycle"></image>
}*/

import { useEffect } from "react"

/*
-------------------------------------------------
🔹 useEffect in React (NOTES)
-------------------------------------------------

1️⃣ Component Mount (only once - like componentDidMount)
-------------------------------------------------
useEffect(() => {
    // ✅ This code will run only on mount
}, []);
// [] => Empty dependency array means it runs only once when component mounts


2️⃣ Component Update (runs when state/props change)
-------------------------------------------------
useEffect(() => {
    // ✅ This code will run on update (when dependency changes)
}, [state1, props]);
// Pass the states/props you want to track inside dependency array


3️⃣ Component Unmount (cleanup - like componentWillUnmount)
-------------------------------------------------
useEffect(() => {
    return () => {
        // ✅ This code will run on unmount
        // Example: remove event listeners, cancel timers, clear intervals
    };
}, []);
// [] ensures cleanup runs only once when component unmounts


4️⃣ Runs on Every Render (mount + update)
-------------------------------------------------
useEffect(() => {
    // ✅ This code will run after every render
});
// No dependency array => runs on every life cycle event


-------------------------------------------------
📌 Practical Examples
-------------------------------------------------

// Example: Fetching data on mount
useEffect(() => {
    fetch("https://api.example.com/data")
        .then(res => res.json())
        .then(data => console.log(data));
}, []);

// Example: Setting up & cleaning interval
useEffect(() => {
    const interval = setInterval(() => {
        console.log("Interval running...");
    }, 1000);

    return () => clearInterval(interval); // cleanup
}, []);

// Example: Listening & removing event listener
useEffect(() => {
    const handleResize = () => console.log("Window resized");
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
}, []);

-------------------------------------------------
*/
const Counter =({count,data })=>{
    useEffect(()=>{
        console.log("mounting phase only");
    },[])
    return(
        <div>
        <h1>counter value {count}</h1>
        <h1>data value {data}</h1>
        </div>
    )
}
export default Counter