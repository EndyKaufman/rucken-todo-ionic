export interface IRoute {
  component: any,
  data: {
    [name: string]: any;
  },
  children?: IRoute[]
}
