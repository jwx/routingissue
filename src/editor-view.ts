import {inject, bindable} from 'aurelia';
@inject()
export class EditorView{
    
    @bindable show: boolean = true;
    showId(){
        console.log("EDITOR: ", this.show)
    }
}