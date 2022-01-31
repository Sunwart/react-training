import './ColorPicker.css';

import { useState } from 'react';

export default function ColorPicker({ options }) {
  const [activeOptionId, setActiveOptionId] = useState(0);
  const { label } = options[activeOptionId];

  const makeOptionClassName = index => {
    const optionClasses = ['ColorPicker__option'];
    if (index === activeOptionId) {
      optionClasses.push('ColorPicker__option--active');
    }
    return optionClasses.join(' ');
  };

  return (
    <div>
      <h2>Color Picker</h2>
      <p>Selected color: {label}</p>
      <div className="ColorPicker__container">
        {options.map(({ label, value }, index) => (
          <button
            type="button"
            key={label}
            className={makeOptionClassName(index)}
            style={{ backgroundColor: value }}
            onClick={() => setActiveOptionId(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}
