import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        console.log('Upper case is clicked');
        setText('You have clicked on handle on Click')
    }
    const handleOnChange = () => {
        console.log('On Change')
    }
    const [text, setText] = useState('');
    return (
        <>
            <div>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} placeholder='Enter text here' id="myText" rows={8} defaultValue={""} />
                </div>
                <button className='btn btn-primary' onClick={handleUpClick}>Convert to UpperCase</button>
            </div>
        </>
    )
}
