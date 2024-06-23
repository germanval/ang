import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { PrincipalComponent } from './principal/principal.component';
import { MateriasComponent } from './principal/materias/materias.component';
import { SalarioComponent } from './principal/salario/salario.component';
import { TraficoComponent } from './principal/trafico/trafico.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    {path:"login",component:LoginComponent},
    {path:"principal",component:PrincipalComponent,
        canActivate: [authGuard],
        children:[
            {path:"materias",component:MateriasComponent},
            {path:"salario",component:SalarioComponent},
            {path:"trafico",component:TraficoComponent}
        ]
    },
    {path:"",redirectTo:"login",pathMatch:"full"}
];
