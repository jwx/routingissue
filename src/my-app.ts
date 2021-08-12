import {route} from 'aurelia';
import {Editor} from './view/editor';
import {List} from "./view/list";
@route({
  routes: [
    { id: 'editor', path: 'editor', component: Editor, title: 'Home - Editor', viewport: "editor-view"  },
    { id: 'list', path: 'list', component: List, title: 'Home - List', viewport: "editor-view" },
  ]
})


export class MyApp {
}
