import {Routes,RouterModule} from '@angular/router';
import {LoginComponent} from '../app/login/login.component';
import {DasboardComponent} from '../app/dasboard/dasboard.component';
import {AuthGuard} from '../app/guards/auth.guard';


// const routes : Routes =[
//     {path:'/', component:LoginComponent},
//     {path:'login',redirectTo:'/'}
// ]

const routes: Routes = [
    { path: 'login', component: LoginComponent },
     { path: 'dashboard', component: DasboardComponent},
    // { path: 'employee', component: EmployeeComponent, canActivate: [AuthGuard] },
    // { path: 'create', component: CreateemployeeComponent, canActivate: [AuthGuard] },
    // {path:'employee/:id',component:EmployeedetailsComponent,canActivate:[AuthGuard]},
    // otherwise redirect to home
    { path: '**', redirectTo: 'login' }
    
];

export const routing  = RouterModule.forRoot(routes);