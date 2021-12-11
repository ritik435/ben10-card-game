import react from "react";
import './search.styles.css'

export const SearchBox = ({ placeholder, onChange }) => {
    return (
        <input
            className="search"
            type="search"
            placeholder={placeholder}
            onChange={onChange}
        />
    )
}
