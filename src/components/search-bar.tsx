import {useState} from "react";
import '../App.css'

export  const SearchBar = (props: { onChange: (title: string) => void, performSearch: () => void, searchInProgress: boolean }) => {
  const [title, setTitle] = useState('')

  return <div id={"search-row"}>
    <label htmlFor={"title"}>
      Title
    </label>
    <input
        id="title"
        maxLength={20}
        type="text"
        value={title}
        onChange={({target: {value}}) => {
          setTitle(value)
          props.onChange(value);
        }}
    />
    <button
        id="search"
        type="button"
        onClick={async () => {
          await props.performSearch();
        }}
        disabled={props.searchInProgress}
    >Search
    </button>
  </div>
};