import {Injectable} from "angular2/core";
import {Todo} from "./todo";
/**
 * Created by Vincent on 05/01/2016.
 */

@Injectable()
export class TodoService {

    getTodos(){
        return Promise.resolve(TODOS);
    }

}

var TODOS:Todo[] = [
    {"text": "testing demo", "done": true},
    {"text": "testing demo a second times", "done": false}
];