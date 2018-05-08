import {Routes,RouterModule} from '@angular/router';
import {LoginComponent} from '../app/login/login.component';


const routes : Routes =[
    {path:'', component:LoginComponent},
    {path:'login',component:LoginComponent}
]

export const routing  = RouterModule.forRoot(routes);