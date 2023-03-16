import {Destinations} from "../interfaces";
import {empty} from "./empty-response";

export const fetchResults = async (title: string): Promise<Destinations> => {
  try {
    const response = await fetch(`https://global.atdtravel.com/api/products?geo=en&title=${title}`);
    if(response.status == 404){
      return empty;
    }
    return await response.json()
  } catch (error) {
    return empty;
  }
};