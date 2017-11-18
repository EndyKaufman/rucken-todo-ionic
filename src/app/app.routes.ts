import { LoginPageRoutes } from './todo/pages/login-page/login-page.routes';
import { HomePageRoutes } from './todo/pages/home-page/home-page.routes';
import { AdminPageRoutes } from './todo/pages/admin-page/admin-page.routes';
import { IRoute } from './todo/shared/interfaces/route.interface';
import { AccountPageRoutes } from './todo/pages/account-page/account-page.routes';

export const TodoIonicframeworkRoutes: IRoute[] = [
  ...HomePageRoutes,
  ...AdminPageRoutes,
  ...AccountPageRoutes,
  ...LoginPageRoutes
];
