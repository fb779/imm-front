import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    // icon: { icon: 'home', pack: 'fas' },
    link: '/admin/dashboard',
    home: true,
  },
  {
    title: 'Users',
    icon: 'people-outline',
    // icon: { icon: 'user-shield', pack: 'fas' },
    link: '/admin/users',
    // children: [
    //   {
    //     title: 'Visitor',
    //     link: '/pages/assessment-form/visit',
    //   },
    //   {
    //     title: 'Student',
    //     link: '/pages/assessment-form/study',
    //   },
    //   {
    //     title: 'Work Permit',
    //     link: '/pages/assessment-form/work-permit',
    //   },
    // ]
  },
  {
    title: 'Processes',
    icon: 'archive-outline',
    // icon: { icon: 'home', pack: 'fas' },
    link: '/admin/processes',
  },
  // menu por defecto
  // {
  //   title: 'FEATURES',
  //   group: true,
  // },
  // {
  //   title: 'E-commerce',
  //   icon: 'shopping-cart-outline',
  //   link: '/pages/dashboard',
  //   home: true,
  // },
  // {
  //   title: 'IoT Dashboard',
  //   icon: 'home-outline',
  //   link: '/pages/iot-dashboard',
  // },

  // {
  //   title: 'Layout',
  //   icon: 'layout-outline',
  //   children: [
  //     {
  //       title: 'Stepper',
  //       link: '/pages/layout/stepper',
  //     },
  //     {
  //       title: 'List',
  //       link: '/pages/layout/list',
  //     },
  //     {
  //       title: 'Infinite List',
  //       link: '/pages/layout/infinite-list',
  //     },
  //     {
  //       title: 'Accordion',
  //       link: '/pages/layout/accordion',
  //     },
  //     {
  //       title: 'Tabs',
  //       pathMatch: 'prefix',
  //       link: '/pages/layout/tabs',
  //     },
  //   ],
  // },

];
