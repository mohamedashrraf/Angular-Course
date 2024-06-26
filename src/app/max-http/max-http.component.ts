import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-max-http',
  templateUrl: './max-http.component.html',
  styleUrls: ['./max-http.component.scss']
})
export class MaxHttpComponent {

  loadedPosts: any
  isFetching = false;
  error = null;
  private errorSub!: Subscription;

  // constructor(private http: HttpClient, private postsService: PostsService) {}

  ngOnInit() {
    // this.errorSub = this.postsService.error.subscribe(errorMessage => {
    //   this.error = errorMessage;
    // });

    // this.isFetching = true;
    // this.postsService.fetchPosts().subscribe(
    //   posts => {
    //     this.isFetching = false;
    //     this.loadedPosts = posts;
    //   },
    //   error => {
    //     this.isFetching = false;
    //     this.error = error.message;
    //   }
    // );
  }

  onCreatePost(postData: any) {
    // Send Http request
    // this.postsService.createAndStorePost(postData.title, postData.content);
  }

  onFetchPosts() {
    // Send Http request
    // this.isFetching = true;
    // this.postsService.fetchPosts().subscribe(
    //   posts => {
    //     this.isFetching = false;
    //     this.loadedPosts = posts;
    //   },
    //   error => {
    //     this.isFetching = false;
    //     this.error = error.message;
    //     console.log(error);
    //   }
    // );
  }

  onClearPosts() {
    // Send Http request
    // this.postsService.deletePosts().subscribe(() => {
    //   this.loadedPosts = [];
    // });
  }

  onHandleError() {
    this.error = null;
  }

  ngOnDestroy() {
    this.errorSub.unsubscribe();
  }
}
