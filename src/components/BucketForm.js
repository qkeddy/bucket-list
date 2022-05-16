import React, { useState } from 'react';

function BucketForm(props) {
    // Establish a new state variable `input` default as an empty string
    const [input, setInput] = useState("");

    // Establish a new state variable `eagerness` default as an empty string
    let [eagerness, setEagerness] = useState("");

    const eagernessLevel = ["high", "medium", "low"];

    const handleSubmit = (e) => {
        // Prevent the default browser behavior
        e.preventDefault();

        // Default `eagerness` to low if not set
        if (!eagerness) {
            eagerness = "low";
        }

        //
        props.onSubmit({
            // Set `id` to a random number for uniqueness
            id: Math.random(Math.floor() * 1000),
            text: input,
            // Set the `eagerness` to the selected level
            eagerness: eagerness,
        });

        setInput("");
        setEagerness("");
    };

    // Listens to changes to the input field (see HTML below)
    const handleChange = (e) => {
        setInput(e.target.value);
    };

    // First we check to see if "edit" prop exists. 
    return !props.edit ? (
        // If not, render the normal edit form
        <div>
            <form className="bucket-form" onSubmit={handleSubmit}>
                <input type="text" placeholder="Add to your bucket list" value={input} name="text" className="bucket-input" onChange={handleChange}></input>
                <div className="dropdown">
                    <button className={`dropbtn ${eagerness}`}>{eagerness || "Priority"}</button>
                    <div className="dropdown-content">
                        {/* onClick events that will set the corresponding eagerness level from the `eagernessLevel` array */}
                        <p onClick={() => setEagerness(eagernessLevel[0])}>Must do</p>
                        <p onClick={() => setEagerness(eagernessLevel[1])}>Want to do</p>
                        <p onClick={() => setEagerness(eagernessLevel[2])}>Take it or leave it</p>
                    </div>
                </div>
                <button className="bucket-button">Add bucket list item</button>
            </form>
        </div>
    ) : (
        // If the prop "edit" exists, render the update form instead
        <div>
            <h3>Update entry: {props.edit.value}</h3>
            <form className="bucket-form" onSubmit={handleSubmit}>
                <input type="text" placeholder={props.edit.value} value={input} name="text" className="bucket-input" onChange={handleChange}></input>
                <div className="dropdown">
                    <button className={`dropbtn ${eagerness}`}>{eagerness || "Priority"}</button>
                    <div className="dropdown-content">
                        {/* onClick events that will set the corresponding eagerness level from the `eagernessLevel` array */}
                        <p onClick={() => setEagerness(eagernessLevel[0])}>Must do</p>
                        <p onClick={() => setEagerness(eagernessLevel[1])}>Want to do</p>
                        <p onClick={() => setEagerness(eagernessLevel[2])}>Take it or leave it</p>
                    </div>
                </div>
                <button className="bucket-button">Update</button>
            </form>
        </div>
    );
}

export default BucketForm;
