import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import {
    UsersListComponent,
    PostsListComponent,
    CommentsListComponent
} from './users';

@NgModule({
    imports : [
        RouterModule.forRoot([
            {
                path : 'users-list',
                component : UsersListComponent,
            },
            {
                path : 'posts-list/:userId',
                component : PostsListComponent,
            },
            {
                path : 'comments-list/:postId',
                component : CommentsListComponent,
            },
            {
                path : '',
                redirectTo : '/users-list',
                pathMatch : 'full'
            }
        ])
    ],
    exports : [ RouterModule ]
})
export class AppRoutingModule {  }