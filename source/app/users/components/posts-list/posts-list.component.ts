import {
    Component,
    OnInit,
    Input
} from '@angular/core';
import {
    Router,
    ActivatedRoute,
    Params
} from '@angular/router';

import {
    Post,
    PostsService
} from '../../';

@Component({
    selector    : 'posts-list',
    templateUrl : 'posts-list.component.html',
    styleUrls   : [ 'posts-list.component.scss' ]
})
export class PostsListComponent implements OnInit {
    private _userId  : string;
    @Input() rowspan : any;
    @Input() colspan : any;
    posts : Post[];

    constructor(
        private router          : Router,
        private activatedRoute  : ActivatedRoute,
        private postsService    : PostsService
    ) {}

    ngOnInit() {
        this.activatedRoute.params.forEach((param : Params) => {
            this._userId = param['userId'];

            this.postsService.getPosts(this._userId)
                             .subscribe(
                                 (posts : Post[]) => this.posts = posts,
                                 (err : any) => console.log(err)
                             );
        });
    }

    goToUsersList() {
        this.router.navigate(['/users-list']);
    }
}