import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: ''
    ,redirectTo:'login',pathMatch:'full'
  },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'user-dashboard', loadChildren: './user-dashboard/user-dashboard.module#UserDashboardPageModule' },
  // { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' },
  // { path: 'quotations', loadChildren: './quotations/quotations.module#QuotationsPageModule' },
  // { path: 'invoices', loadChildren: './invoices/invoices.module#InvoicesPageModule' },
  // { path: 'customers', loadChildren: './customers/customers.module#CustomersPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
