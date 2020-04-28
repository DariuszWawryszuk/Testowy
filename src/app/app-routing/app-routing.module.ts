import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {UserComponent} from '../user/user.component';
import {BoczneMenuComponent} from '../admin/boczne-menu/boczne-menu.component';
import {AuthGuard} from '../auth/auth.guard';
import {RegistryComponent} from '../admin/registry/registry.component';
import {AddColectionComponent} from '../admin/add-colection/add-colection.component';
import {AddBlockComponent} from '../admin/add-block/add-block.component';
import {AdminComponent} from '../admin/admin.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    component: BoczneMenuComponent,
    children: [
      {
        path: 'start',
        component: AdminComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'registry',
        component: RegistryComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'addColection',
        component: AddColectionComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'addBlock',
        component: AddBlockComponent,
        canActivate: [AuthGuard]
      },
    ]
  },
  {
    path: 'user',
    component: UserComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
