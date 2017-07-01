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
    Comment,
    CommentsService
} from '../../';

@Component({
    selector    : 'comments-list',
    templateUrl : 'comments-list.component.html',
    styleUrls   : [ 'comments-list.component.scss' ]
})
export class CommentsListComponent implements OnInit {
    private _postId  : string;
    private _userId  : string;
    @Input() rowspan : any;
    @Input() colspan : any;
    comments : Comment[];

    constructor(
        private router          : Router,
        private activatedRoute  : ActivatedRoute,
        private commentsService : CommentsService
    ) {}

    ngOnInit() {
        this.activatedRoute.params.forEach((param : Params) => {
            this._postId = param['postId'];

            this.commentsService.getComments(this._postId)
                                .subscribe(
                                    (comments : Comment[]) => this.comments = comments,
                                    (err : any) => console.log(err)
                                );
        });
    }

    goToUsersList() {
        this.router.navigate(['/users-list']);
    }
}