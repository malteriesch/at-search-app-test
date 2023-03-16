import '../App.css'
import {Destinations} from "../interfaces";


export const Messages = (props: { results: Destinations, searchInProgress: boolean }) => {
  return <div id={"messages"}>
    {(props.results?.data?.length == 0 && !props.searchInProgress) ? 'No Results' : ''}
    {props.searchInProgress ? 'Loading...' : ''}
  </div>;
};