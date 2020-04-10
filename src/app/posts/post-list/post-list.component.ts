import { Component, Input } from '@angular/core';

@Component({
    selector: 'post-list-app',
    templateUrl: './post-list.component.html',
    styleUrls:['./post-list.component.css'],
})

export class PostListModule {
    // posts = [
    //     {title:'First Post', content:'Thisis the first posts content'},
    //     {title:'Second Post', content:'Thisis the second posts content'},
    //     {title:'Third Post', content:'This is the third posts content'},

    // ];
    @Input() posts = [];
}