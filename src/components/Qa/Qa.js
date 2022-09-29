import React from 'react';
import './Qa.css';

const Qa = () => {
    return (
        <div className='qa-container'>
            <h2> Question-Answers</h2>
            <h4>How does react work?</h4>
            <p><strong>React</strong> creates a virtual DOM, while works. whenever any change needs to be updated, react finds that specific area in the virtual DOM and compare it with the browser DOM and then update the browser DOM without affecting other things. React elements are plain objects and are cheap to create.
                <br />
                So when React needs to read or write to the DOM, it will use the virtual representation of it. And it is faster.</p>

            <br />

            <h4>Differences between props and state</h4>
            <p><strong>Props</strong> is an object which stores the value of attributes of a tag. It passes the data one component to another. Props are read-only and immutable.
                <br />
                <strong>State</strong> is a structure which can be used to contain data or information about the component and it can change over time. State is mutable and state changes can be asynchronous. </p>

            <br />

            <h4>Where useEffect can be used other than loading data?</h4>
            <p>The <strong>useEffect</strong> Hook allows us to perform side effects in the components.
                Other than fetching or loading data it also can directly update the DOM and set up subscriptions or timers.</p>
        </div>
    );
};

export default Qa;