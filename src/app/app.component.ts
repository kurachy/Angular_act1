import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

posts =[
{
  title : 'Mon premier post',
  content: 'You can do anything herde. So don t worry about it. A thin paint will stick to a thick paint. It s important to me that you re happy. Here s another little happy bush You gotta think like a tree. Imagination is the key to painting. Decide where your cloud lives. Maybe he lives right in here. And I will hypnotize that just a little bit. There is immense joy in just watching - watching all the little creatures in nature.',
  loveIts: -1,
  created_at: new Date
},
{
title : 'Mon deuxième post',
content: 'You can do danything here. So don t worry about it. A thin paint will stick to a thick paint. It s important to me that you re happy. Here s another little happy bush You gotta think like a tree. Imagination is the key to painting. Decide where your cloud lives. Maybe he lives right in here. And I will hypnotize that just a little bit. There is immense joy in just watching - watching all the little creatures in nature.',
loveIts: 1,
created_at: new Date
},
{
title : 'Encore un post',
content: 'You can do anydthing here. So don t worry about it. A thin paint will stick to a thick paint. It s important to me that you re happy. Here s another little happy bush You gotta think like a tree. Imagination is the key to painting. Decide where your cloud lives. Maybe he lives right in here. And I will hypnotize that just a little bit. There is immense joy in just watching - watching all the little creatures in nature.',
loveIts: 0,
created_at: new Date
},



]

}
