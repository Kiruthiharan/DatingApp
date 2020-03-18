import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListsComponent } from './members/member-lists/member-lists.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
    {path : '' , component: HomeComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            {path : 'messages' , component: MessagesComponent, canActivate: [AuthGuard]},
            {path : 'lists' , component: ListsComponent, canActivate: [AuthGuard]}
        ]
    },
    {path : 'members' , component: MemberListsComponent, canActivate: [AuthGuard] },
    {path : '**' , redirectTo: '' , pathMatch: 'full'}
];
