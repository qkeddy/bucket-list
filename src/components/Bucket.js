// Import React and destructure `useState`
import React, { useState } from "react";
import BucketForm from "./BucketForm";

// Pass in props (values & methods) for a bucket
function Bucket(props) {
    // Establish a new state variable `edit` default as an object with the properties set to null and empty strings
    const [edit, setEdit] = useState({
        id: null,
        value: "",
        eagerness: "",
    });

    console.log(props);

    // `submitUpdate` takes in a value and then calls an anonymous function to edit the item off of `props`
    const submitUpdate = (value) => {
        props.editBucketItem(edit.id, value);

        // Initialize the key:value pairs in the `edit` object to empty strings
        setEdit({
            id: null,
            value: "",
            eagerness: "",
        });
    };

    // If the user is attempting to edit an item, render the bucket form with the edit variable passed in as a prop
    // Render a child `BucketForm` if there is an editID. Pass down the edit prop.
    if (edit.id) {
        return <BucketForm edit={edit} onSubmit={submitUpdate} />;
    }

    // Returning an HTML object with each item on the bucket list by mapping over each object in the array of objects with their respective values
    return props.bucket.map((item, index) => (
        // Dynamically set styling class based upon eagerness
        <div className={item.isComplete ? `bucket-row complete ${item.eagerness}` : `bucket-row ${item.eagerness}`} key={index}>
            {/* {console.log(item.eagerness)} */}

            {/* Set the key to the item.id; create an onClick event handler to execute `completeBucketItem` on click */}
            <div key={item.id} onClick={() => props.completeBucketItem(item.id)}>
                {item.text}
            </div>

            {/* Set the onClick events for editing (value & eagerness) and removing bucket list items */}
            <div className="icons">
                {/* {console.log(item)} */}
                <p onClick={() => setEdit({ id: item.id, value: item.text, eagerness: item.eagerness })}> ✏️</p>
                <p onClick={() => props.removeBucketItem(item.id)}> 🚮</p>
            </div>
        </div>
    ));
}

export default Bucket;
