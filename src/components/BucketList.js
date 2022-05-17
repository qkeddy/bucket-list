// Import React and destructure `useState`
import React, { useState } from "react";
import BucketForm from "./BucketForm";
import Bucket from "./Bucket";

function BucketList() {
    // Establish a new state variable `bucket` default as an array
    const [bucket, setBucket] = useState([]);

    // Helper function to add a bucket list item
    const addBucketItem = (item) => {
        console.log("🚀 ~ file: BucketList.js ~ line 11 ~ addBucketItem ~ item", item);

        // Check to see if the item text is empty
        if (!item.text) {
            return;
        }

        // Add the new bucket list item to the existing array of objects
        const newBucket = [item, ...bucket];

        // Call `setBucket` to update state with our new set of bucket list items
        setBucket(newBucket);
    };

    // Helper function to mark bucket list item as complete
    const completeBucketItem = (id) => {
        // With Map, loop over each item and test if the `id` passed to this function matches the `item.id` of the item that was clicked and mark it as complete
        let updatedBucket = bucket.map((item) => {
            // If `item.id` from the props equals the element `id`, then mark as complete
            if (item.id === id) {
                // Toggle the complete flag
                item.isComplete = !item.isComplete;
            }
            // Return the status of the item
            return item;
        });

        // Call the `setBucket` to update item complete state
        setBucket(updatedBucket);
    };

    // Helper function to remove bucket list item and update state
    const removeBucketItem = (id) => {
        // With filter, loop over each item and create a new list of items that do not match the passed in `id`
        // Spreading `bucket` for a shallow copy of the state variable so not mutating the state variable directly 
        const updatedBucket = [...bucket].filter((item) => item.id !== id);

        // Call `setBucket` to update state with our new set of bucket list items
        setBucket(updatedBucket);
    };

    // Helper function to edit the bucket list item with the `itemId` and the corresponding `newValue`
    const editBucketItem = (itemId, newValue) => {
        // Make sure that the value isn't empty
        if (!newValue.text) {
            return;
        }

        // We use the `prev` argument provided with the useState hook (`setBucket`) to map through our list of items
        // Only update items where the `item.id` matches the `itemId` with `newValue`. Otherwise, use the current value.
        // `prev` argument is the current state variable's contents aka bucket aka our current array of bucket list items/objects.
        // We then check to see if the item ID matches the id of the item that was clicked and if so, we set it to a new value
        setBucket((prev) => prev.map((item) => (item.id === itemId ? newValue : item)));
    };

    return (
        <div>
            <h1>What is on your bucket list?</h1>
            {/* Form to add item to list with button to add  */}
            <BucketForm onSubmit={addBucketItem} />

            {/* Render (in other words "send down") `Bucket` with a list of items on the bucket list with corresponding elements to display and respond to complete, remove, and edit items*/}
            <Bucket
                // `bucket` is an state variable that is an array of objects
                bucket={bucket}

                // Corresponding elements
                completeBucketItem={completeBucketItem}
                removeBucketItem={removeBucketItem}
                editBucketItem={editBucketItem}>
            </Bucket>
        </div>
    );
}

// Export so `BucketList` can be used by `App`
export default BucketList;
