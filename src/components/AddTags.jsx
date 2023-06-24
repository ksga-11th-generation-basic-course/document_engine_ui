import React, { useState } from 'react'

function AddTags() {
    const [tags, setTags] = useState([]);
    const handleAddTag = (event) => {
        event.preventDefault();
        // Prevent submitting the form

        // Get the tag value from the input
        const tagValue = event.target.elements.tag.value.trim();

        // Add the tag to the list of tags if it is not empty
        if (tagValue !== '') {
            setTags([...tags, tagValue]);

            // Clear the input field
            event.target.elements.tag.value = '';
        }
    };
    const handleRemoveTag = (index) => {
        // Remove the tag at the specified index
        setTags(tags.filter((_, i) => i !== index));
    };
    return (
        <div>
            <div>
                <form onSubmit={handleAddTag} className='grid grid-cols-10'>
                
                {
                        tags.map((tag, index) => (
                            <li key={index}>
                                <input type="text" value={tag} />{tag}
                                <button className='text-red-600' onClick={() => handleRemoveTag(index)}>x</button>
                            </li>
                        ))
                    }
                    <input type="text" disabled value={} />
                    <input type="text" name="tag" placeholder="Enter a tag..."
                    value=
                    />
                    <button type="submit">Add tag</button>
                </form>

                
            </div>
        </div>
    )
}

export default AddTags