import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgForm } from '@angular/forms'
import { PostsService } from '../posts.service';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {




  constructor(public postsService: PostsService) { }

  enteredTitle = "";
  enteredContent = "";
  @Output() postCreated = new EventEmitter<Post>();

  ngOnInit() {
  }

  onAddPost(form: NgForm){

    if(form.invalid){ return; }

    // this.postCreated.emit(post); USE A SERVICE!!

    this.postsService.addPost(form.value.title, form.value.content)


  }

}
