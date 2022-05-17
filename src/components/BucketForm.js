// Import React and destructure `useState`
import React, { useState } from "react";

// Pass in props (values & methods) for a bucket form
function BucketForm(props) {
    // Establish a new state variable `input` default as an empty string
    const [input, setInput] = useState("");

    // Establish a new state variable `eagerness` default as an empty string
    let [eagerness, setEagerness] = useState("");

    // Set possible values for eagerness levels
    const eagernessLevel = ["high", "medium", "low"];

    // Handler for the submit event
    const handleSubmit = (e) => {
        // Prevent the default browser behavior
        e.preventDefault();

        // Default `eagerness` to low if not set
        if (!eagerness) {
            eagerness = "low";
        }

        // Passed down from `Bucket` to invoke `submitUpdate`
        props.onSubmit({
            // Set `id` to a random number for uniqueness
            id: Math.random(Math.floor() * 1000),
            text: input,
            // Set the `eagerness` to the selected level
            eagerness: eagerness,
        });

        // After the submission is complete, reset the inputs to empty strings
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
                    {/* TODO - what is the following indicating?  */}
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
                    {/* Adding specific class styles depending on if `low`, `medium`, or `high` eagerness is selected. If no eagerness is selected, then default to the string of `Priority` on the button */}
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
