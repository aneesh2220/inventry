import React, { useState } from 'react';

const Dropdown = ({ options }) => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div>
            <label htmlFor="dynamic-options">Choose an option:</label>
            <select id="dynamic-options" value={selectedOption} onChange={handleChange}>
                <option value="">Select an option</option>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
          
        </div>
    );
};

export default Dropdown;
