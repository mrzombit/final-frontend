import React from 'react'
import './editInputOnSidebar.css'

const editInputOnSidebar = (props) => {
    return (
        <div>
            {props.resultDisplay ?
                <div className='side-edit-result-container'>
                    <div className='side-edit-result-card'>
                        <div className='side-edit-input-name'>{props.name}</div>
                        <div className='side-edit-result'>{props.defaultValue} บาท</div>
                    </div>
                </div>
                :
                <div className='side-edit-input-container'>
                <div className='side-edit-input-card'>
                    <div className='side-edit-input-name'>{props.name}</div>
                    <input
                        className='side-edit-input-box'
                        type={props.type}
                        defaultValue={props.defaultValue}
                        onChange={props.onChange}
                    />
                </div>
                </div>
            }
        </div>
    )
}

export default editInputOnSidebar
