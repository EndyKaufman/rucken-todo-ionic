import { IRoute } from '../../shared/interfaces/route.interface';
import { AdminPageComponent } from './admin-page.component';
import { GroupsFrameRoutes } from './groups-frame/groups-frame.routes';
import { UsersFrameRoutes } from './users-frame/users-frame.routes';
const children = [
  ...UsersFrameRoutes,
  ...GroupsFrameRoutes
];
export const AdminPageRoutes: IRoute[] = [
  { data: { title: 'Admin', icon: 'lock' }, component: AdminPageComponent, children: children },
];
