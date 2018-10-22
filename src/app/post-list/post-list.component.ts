import { Component, Input , OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  // post: {
  //   title: string,
  //   content: string,
  //   loveIts: number,
  //   created_at: Date
  // }

@Input() postTitle : string;
@Input() postContent : string;
@Input() postLoveIts : 0;
@Input() postCreated_at : Date;

  constructor() { }

  ngOnInit() {
  }


getLoveIt(){
  if(this.postLoveIts === 0){
    return 'black';
  }else if(this.postLoveIts > 0){
    return 'green';
  }else{
    return 'red'

  }
}

onLoveIt(){
this.postLoveIts ++;
}

onDontLoveIt(){
  this.postLoveIts --;
}

}
