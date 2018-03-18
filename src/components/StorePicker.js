import React from 'react'

class StorePicker extends React.Component {
    render(){
        return (
            <form className="Store-Selector">
            <h2>Please Pick A Store</h2>
            <input type ="text" required placeholder="store here"></input>
            <button type ="submit">Submit</button>
            </form>
        )
    }
}

export default StorePicker