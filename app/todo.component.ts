import {Component} from "angular2/core";
import {Todo} from "./todo";
/**
 * Created by Vincent on 05/01/2016.
 */

@Component({
    selector:'todo',
    templateUrl: '/app/templates/todo.template.html',
    styles:['.done{text-decoration:line-through;}.todo-box{border 1px black;}'],
    inputs:['todo'],
})
export class TodoComponent {

    public todo:Todo;

}