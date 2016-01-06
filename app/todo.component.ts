import {Component, OnInit} from "angular2/core";
import {Todo} from "./todo";
import {TodoStatusEnum} from "./todo-status.enum";

@Component({
    selector:'todo',
    templateUrl: '/app/templates/todo.template.html',
    styles:['.done{text-decoration:line-through;}.todo-box{border 1px black;}'],
    inputs:['todo'],
})
export class TodoComponent implements OnInit{

    ngOnInit(){
        if(this.todo.text == '') {
            this.status = TodoStatusEnum[TodoStatusEnum.edit];
        } else {
            this.status = TodoStatusEnum[TodoStatusEnum.view];
        }
    }

    public todo:Todo;
    public status:string;

    switchState(){
        if(this.status == TodoStatusEnum[TodoStatusEnum.edit]) {
            this.status = TodoStatusEnum[TodoStatusEnum.view];
        } else {
            this.status = TodoStatusEnum[TodoStatusEnum.edit];
        }
    }


}