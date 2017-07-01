import {
    Component,
    OnInit,
    Input
} from '@angular/core';

import {
    User,
    UsersService
} from '../../';

@Component({
    selector    : 'users-list',
    templateUrl : 'users-list.component.html',
    styleUrls   : [ 'users-list.component.scss' ]
})
export class UsersListComponent implements OnInit {
    @Input() rowspan : any;
    @Input() colspan : any;
    users : User[];

    constructor(private usersService : UsersService) {}

    ngOnInit() {
        this.usersService.getUsers()
                         .subscribe(
                             (users : User[]) => this.users = users,
                             (err : any) => console.log(err)
                         );
    }
}