import '../App.css'
import {Destination, Destinations} from "../interfaces";
import {ResultRow} from "./result-row";


export const ResultsTable = (props: { results: Destinations }) => <>
  {props.results?.data?.map((result: Destination) => {
    return <ResultRow key={result.id} result={result}/>
  })}
</>;