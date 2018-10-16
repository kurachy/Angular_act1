import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  post: {
    title: string,
    content: string,
    loveIts: number,
    created_at: Date
  }


  constructor() { }

  ngOnInit() {
  }

}
