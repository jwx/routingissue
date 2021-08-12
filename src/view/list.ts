
import {inject, IRouter, route, bindable} from 'aurelia';

@inject()
export class List {
    loading: boolean = true;
    products: any;
    @bindable show: boolean;

    async viewEditor() {
        // console.log("Hallo")
        this.router.load('editor');
    }

    constructor(@IRouter private router: IRouter){
        // console.log(this.router)
    }
   
    showId(){
        console.log("LIST: ", this.show)
        this.show ? this.show = false : this.show = true;
    }
}