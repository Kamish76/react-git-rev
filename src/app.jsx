import { useState } from 'react';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Basic Info Shiz</h1>
            <div className="card">
                <p>sup im jabez lols</p>
                <p> im just having fun and doin random things in life</p>
                <p>checkout my <a className="link" href ="https://nfcentry76.vercel.app/">project</a> that i worked on websys</p>
            </div>
        </div>
    );
}

export default App