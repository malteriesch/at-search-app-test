import '../App.css'
import {Destination} from "../interfaces";


export const ResultRow = (props: { result: Destination }) => <div className="row">
  <div className="col image"><img className="result-image" src={props.result.img_sml} alt={props.result.title}/></div>
  <div className="col title">{props.result.title}</div>
  <div className="col destination">{props.result.dest}</div>
</div>;