import { IRoute } from '../../shared/interfaces/route.interface';
import { AccountPageComponent } from './account-page.component';
export const AccountPageRoutes: IRoute[] = [
  { data: { title: 'Account', icon: 'contact' }, component: AccountPageComponent }
];
