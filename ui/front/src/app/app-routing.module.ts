import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotComponent } from './auth/forgot/forgot.component';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { NewuserComponent } from './auth/newuser/newuser.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'newuser', component: NewuserComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'forgot', component: ForgotComponent },
  { path: '', component: DashboardComponent },
  {
    path: 'customers',
    loadChildren: () =>
      import('./customers/customers.module').then((m) => m.CustomersModule),
  },
  {
    path: 'invoices',
    loadChildren: () =>
      import('./invoices/invoices.module').then((m) => m.InvoicesModule),
  },
  {
    path: 'loans',
    loadChildren: () =>
      import('./loans/loans.module').then((m) => m.LoansModule),
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./settings/settings.module').then((m) => m.SettingsModule),
  },
  {
    path: 'audits',
    loadChildren: () =>
      import('./audits/audits.module').then((m) => m.AuditsModule),
  },
  {
    path: 'payments',
    loadChildren: () =>
      import('./payments/payments.module').then((m) => m.PaymentsModule),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./users/users.module').then((m) => m.UsersModule),
  },
  {
    path: 'loantypes',
    loadChildren: () =>
      import('./loantypes/loantypes.module').then((m) => m.LoantypesModule),
  },
  {
    path: 'reports',
    loadChildren: () =>
      import('./reports/reports.module').then((m) => m.ReportsModule),
  },
  { path: 'activity', loadChildren: () => import('./activity/activity.module').then(m => m.ActivityModule) },
  {
    path: '**',
    component: ErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
