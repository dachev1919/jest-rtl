import { useEffect, useState } from "react";

function App() {
    const [data, setData] = useState();
    const [toggle, setToggle] = useState(false);
    const [inputValue, setInputValue] = useState("");

    const onClick = () => setToggle(prev => !prev);

    useEffect(() => {
        setTimeout(() => {
            setData({});
        }, 100);
    }, []);
    return (
        <div className="App">
            { toggle === true && <div data-testid="toggle-elem">toggle</div> }
            { data && <div>data</div> }
            <h1>Text</h1>
            <button data-testid="toggle-btn" onClick={ onClick }>Button</button>
            <input data-testid="toggle-input" value={ inputValue } onChange={ e => setInputValue(e.target.value) }
                   type="text" placeholder="Text"/>
        </div>
    );
}

export default App;
