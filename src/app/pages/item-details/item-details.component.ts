import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../models/post';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-item-details',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule,MatCardModule],
  templateUrl: './item-details.component.html',
  styleUrl: './item-details.component.css'
})
export class ItemDetailsComponent {
  selectedItem?: Post;
  constructor(private activatedRoute: ActivatedRoute,
    private postsService: PostsService
  ){
    this.activatedRoute.params.subscribe(
      params => {
        if(params['id']){
          this.selectedItem = this.postsService.getPostById(params['id'])
        }
      }
    )
  }
}
