import {useState} from 'react'
import ky from "ky"
import './App.css'

const THIRTY_SECONDS = 60 * 1000;
export const api = ky.create({
  timeout: THIRTY_SECONDS
})

interface Destination {
  id: number;
  title: string;
  dest: string;
  img_sml: string;
}

interface Destinations {
  data: Destination[];
}

const empty: Destinations = {
  "data": []
}

const fetchResults = async (title: string): Promise<Destinations> => {
  try {
    return await api
        .get(`https://global.atdtravel.com/api/products`, {
          searchParams: {
            geo: "en",
            title
          },
        })
        .json();
  } catch (error) {
    return empty;
  }
};

function ResultRow(props: { result: Destination }) {
  return <div className="row">
    <div className="col image"><img className="result-image" src={props.result.img_sml}/></div>
    <div className="col title">{props.result.title}</div>
    <div className="col destination">{props.result.dest}</div>
  </div>;
}

function ResultsHeader() {
  return <header>
    <div className="col image">Image</div>
    <div className="col title">Title</div>
    <div className="col destination">Destination</div>
  </header>;
}

function Messages(props: { results: Destinations, searchInProgress: boolean }) {
  return <>
    {(props.results?.data?.length == 0 && !props.searchInProgress) ? 'No Results' : ''}
    {props.searchInProgress ? 'Loading...' : ''}
  </>;
}

function ResultsTable(props: { results: Destinations }) {
  return <>
    {props.results?.data?.map((result: Destination) => {
      return <ResultRow key={result.id} result={result}/>
    })}
  </>;
}

function SearchBar(props: { onChange: (title: string) => void, performSearch: () => void, searchInProgress: boolean }) {
  const [title, setTitle] = useState('')

  return <div id={"search-row"}>
    <div>Title</div>
    <div>
      <input
          id="title"
          type="text"
          value={title}
          onChange={({target: {value}}) => {
            setTitle(value)
            props.onChange(title);
          }}
      />
    </div>
    <div>
      <input
          id="title"
          type="button"
          value={"Search"}
          onClick={async () => {
            await props.performSearch();
          }}
          disabled={props.searchInProgress}
      />
    </div>
  </div>
}

function ResultsPane(props: { results: Destinations, searchInProgress: boolean }) {
  return <div id={"results"}>
    <section>
      <ResultsHeader/>
      <Messages results={props.results} searchInProgress={props.searchInProgress}/>
      <ResultsTable results={props.results}/>
    </section>
  </div>;
}

function App() {
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
            onChange={setTitle}
            performSearch={performSearch}
            searchInProgress={searchInProgress}
        />
        <ResultsPane results={results} searchInProgress={searchInProgress} />
      </div>
  )
}

export default App