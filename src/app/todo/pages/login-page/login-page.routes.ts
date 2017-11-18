import { IRoute } from '../../shared/interfaces/route.interface';
import { LoginPageComponent } from './login-page.component';
export const LoginPageRoutes: IRoute[] = [
  { data: { title: 'Login', icon: 'log-in' }, component: LoginPageComponent }
];
