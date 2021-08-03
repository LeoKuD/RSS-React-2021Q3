// import React from 'react'

import React from 'react'

export const SearchPlugin = (props) => {

    const onTextChanged = (e) => {
        let text = e.currentTarget.value.trim();
        props.filter(text);
    }
    return (
        <input placeholder="Поиск" onChange={onTextChanged} />
    ) 
}