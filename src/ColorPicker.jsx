import React, {useState} from 'react'

const ColorPicker = () => {

    // Creating a state variable to store the color value
    const [color, setColor] = useState('#FFFFFF')

    // Creating a function to handle the color change
    function handleColorChange(event) {
    setColor(event.target.value)
    }
    return (
        <div className='color-picker'>
            {/* Creating The Color Picker section */}
            <h2>Color Picker</h2>
            <legend>Pick Your Color Below 👇👇</legend>
            <input type="color" value={color} onChange={handleColorChange}/>

            {/* Creating the display for the Picked color  */}
            <div className="color-display" style={{backgroundColor: color}}>
            <p>Selected color is {color}</p>
            </div>

        </div>
  )
}

export default ColorPicker