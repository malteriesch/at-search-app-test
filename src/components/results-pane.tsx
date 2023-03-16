import '../App.css'
import {Destination, Destinations} from "../interfaces";
import {ResultRow} from "./result-row";
import {useState} from "react";
import {ResultsHeader} from "./result-header";
import {ResultsTable} from "./result-table";



export const ResultsPane = (props: { results: Destinations }) => props.results.data?.length > 0 ? <div id={"results"}>
  <section>
    <ResultsHeader/>
    <ResultsTable results={props.results}/>
  </section>
</div> : null;