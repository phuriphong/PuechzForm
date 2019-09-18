import { DashboardPageModule } from './../dashboard/dashboard.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'customers',
        loadChildren: () =>
        import('../customers/customers.module').then(m => m.CustomersPageModule)
      },
      {
        path: 'dashboard',
        loadChildren: () =>
        import('../dashboard/dashboard.module').then(m => m.DashboardPageModule)
      },
      {
        path: 'invoices',
        loadChildren: () =>
        import('../invoices/invoices.module').then(m => m.InvoicesPageModule)
      },
      {
        path: 'quotations',
        loadChildren: () =>
        import('../quotations/quotations.module').then(m => m.QuotationsPageModule)
      },
      // {
      //   path: 'tab2',
      //   children: [
      //     {
      //       path: '',
      //       loadChildren: () =>
      //         import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      //     }
      //   ]
      // },
      // {
      //   path: 'tab3',
      //   children: [
      //     {
      //       path: '',
      //       loadChildren: () =>
      //         import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      //     }
      //   ]
      // },
      // {
      //   path: '',
      //   redirectTo: '/tabs/tab1',
      //   pathMatch: 'full'
      // }
    ]
  // },
  // {
  //   path: '',
  //   redirectTo: '/tabs/tab1',
  //   pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
