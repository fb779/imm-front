import { NbMenuItem } from '@nebular/theme';

export const CLIENT_MENU_ITEMS: NbMenuItem[] = [
    {
      title: 'Dashboard',
      icon: 'home-outline',
      // icon: { icon: 'home', pack: 'fas' },
      link: '/pages/dashboard',
      home: true,
    },
    {
      title: 'Assessment Form',
      icon: 'edit-2-outline',
      // icon: { icon: 'angry', pack: 'fas' },
      link: '/pages/assessment-form',
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
      title: 'Forms & Guides',
      icon: 'file-text-outline',
      link: '/pages/forms-guides',
    },
    {
      title: 'My Documents',
      icon: 'folder-outline',
      link: '/pages/documents',
    },
    {
      title: 'My Visa',
      icon: 'person-outline',
      link: '/pages/visa',

    },
    {
      title: 'My Family',
      icon: 'people-outline',
      link: '/pages/family',
      hidden: false,
    },
    {
      title: 'My Consultant',
      icon: 'hard-drive-outline',
      link: '/pages/consultant',

    },
    {
      title: 'Add-Ons',
      icon: 'keypad-outline',
      link: '/pages/add-ons',

    },
    {
      title: 'Coupons',
      icon: 'gift-outline',
      link: '/pages/coupons',

    },
    {
      title: 'Free Resources',
      icon: 'grid-outline',
      link: '/pages/free-resources',

    },
    {
      title: 'Admission',
      icon: 'done-all-outline',
      link: '/pages/admission',

    },
    {
      title: 'Appointment',
      icon: 'bookmark-outline',
      link: '/pages/appoinment',

    },
    {
      title: 'Billin & Invoice',
      icon: 'trending-up-outline',
      link: '/pages/billin-invoice',

    },
];

export const ADMIN_MENU_ITEMS: NbMenuItem[] = [
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
  ];

export const USER_MENU_ITEMS: NbMenuItem[] = [
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
  ];;