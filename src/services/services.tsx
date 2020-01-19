import makeRequest from "../../../react-les/src/api/helpers/makeRequest";
import {any} from "prop-types";

let mainServerUrl = 'https://appevent.ru/';

export default class apiService {

    makeRequest({url, options = {}, baseUrl = mainServerUrl}: { url: any, options?: {}, baseUrl?: string }):Promise<void | any | never>{
        return fetch('https://appevent.ru/dev/task1/catalog').then((response) => {
            if(response.status !== 200){
                return response.text().then(function(text){
                    throw new Error(text);
                });
            }

            return response.json();
        });
    }


}



