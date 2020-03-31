import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListsComponent } from './members/member-lists/member-lists.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberEditResolver } from './_resolvers/member-edit.resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { ListsResolver } from './_resolvers/lists.resolver';
import { MessagesResolver } from './_resolvers/messages.resolver';
import { MemberListResolver } from './_resolvers/member-list.resolver';

export const appRoutes: Routes = [
    {path : '' , component: HomeComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            {path : 'members' , component: MemberListsComponent, resolve: {user: MemberListResolver}},
            {path : 'members/:id' , component: MemberDetailComponent, resolve: {user: MemberDetailResolver}},
            {path : 'messages' , component: MessagesComponent, resolve: {messages: MessagesResolver}},
            {path : 'member/edit' , component: MemberEditComponent,
                resolve: {user: MemberEditResolver}, canDeactivate: [PreventUnsavedChanges]},
        ]
    },
    {path : 'lists' , component: ListsComponent, canActivate: [AuthGuard], resolve: {user: ListsResolver}},
    {path : '**' , redirectTo: '' , pathMatch: 'full'}
];
