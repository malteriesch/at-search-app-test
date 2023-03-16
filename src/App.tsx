import {useState} from 'react'
import './App.css'
import {fetchResults} from "./api/fetch-results";
import {Messages} from "./components/messages";
import {SearchBar} from "./components/search-bar";
import {ResultsPane} from "./components/results-pane";
import {empty} from "./api/empty-response";


const App = () => {
  const [title, setTitle] = useState('')
  const [results, setResults] = useState(empty)
  const [searchInProgress, setSearchInProgress] = useState(false)

  const performSearch = async () => {

    setSearchInProgress(true)
    setResults(empty)
    const data = await fetchResults(title)
    setResults(data)
    setSearchInProgress(false)
  };

  return (
      <div className="App">
        <h1>Product Search</h1>
        <SearchBar
            onChange={(title) => {
              setTitle(title)
            }}
            performSearch={performSearch}
            searchInProgress={searchInProgress}
        />
        <Messages results={results} searchInProgress={searchInProgress}/>
        <ResultsPane results={results}/>
      </div>
  )
};

export default App