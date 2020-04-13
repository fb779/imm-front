import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    // icon: { icon: 'home', pack: 'fas' },
    link: '/consultant/dashboard',
    home: true,
  },
  {
    title: 'Processes',
    icon: 'edit-2-outline',
    // icon: { icon: 'angry', pack: 'fas' },
    link: '/consultant/processes',
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
];
