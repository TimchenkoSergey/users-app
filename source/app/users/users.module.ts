import { NgModule }         from '@angular/core';
import { CommonModule }     from '@angular/common';
import { HttpModule }       from '@angular/http';
import { MdGridListModule } from '@angular/material';
import { MdCardModule }     from '@angular/material';
import { MdButtonModule }   from '@angular/material';

import {
    CommentsListComponent,
    PostsListComponent,
    UsersListComponent,
    CommentsService,
    UsersService,
    PostsService
} from './';

@NgModule({
    imports : [
        CommonModule,
        HttpModule,
        MdGridListModule,
        MdCardModule,
        MdButtonModule
    ],
    declarations : [
        CommentsListComponent,
        PostsListComponent,
        UsersListComponent
    ],
    exports      : [
        CommentsListComponent,
        PostsListComponent,
        UsersListComponent
    ],
    providers    : [
        CommentsService,
        UsersService,
        PostsService
    ]
})
export class UsersModule {  }