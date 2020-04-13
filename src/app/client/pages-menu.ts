import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    // icon: { icon: 'home', pack: 'fas' },
    link: '/client/dashboard',
    home: true,
  },
  {
    title: 'Assessment Form',
    icon: 'edit-2-outline',
    // icon: { icon: 'angry', pack: 'fas' },
    link: '/client/assessment-form',
    // children: [
    //   {
    //     title: 'Visitor',
    //     link: '/client/assessment-form/visit',
    //   },
    //   {
    //     title: 'Student',
    //     link: '/client/assessment-form/study',
    //   },
    //   {
    //     title: 'Work Permit',
    //     link: '/client/assessment-form/work-permit',
    //   },
    // ]
  },
  {
    title: 'Forms & Guides',
    icon: 'file-text-outline',
    link: '/client/forms-guides',

  },
  {
    title: 'My Documents',
    icon: 'folder-outline',
    link: '/client/documents',

  },
  {
    title: 'My Visa',
    icon: 'person-outline',
    link: '/client/visa',

  },
  {
    title: 'My Family',
    icon: 'people-outline',
    link: '/client/family',
    hidden: false,
  },
  {
    title: 'My Consultant',
    icon: 'hard-drive-outline',
    link: '/client/consultant',

  },
  {
    title: 'Add-Ons',
    icon: 'keypad-outline',
    link: '/client/add-ons',

  },
  {
    title: 'Coupons',
    icon: 'gift-outline',
    link: '/client/coupons',

  },
  {
    title: 'Free Resources',
    icon: 'grid-outline',
    link: '/client/free-resources',

  },
  {
    title: 'Admission',
    icon: 'done-all-outline',
    link: '/client/admission',

  },
  {
    title: 'Appointment',
    icon: 'bookmark-outline',
    link: '/client/appoinment',

  },
  {
    title: 'Billin & Invoice',
    icon: 'trending-up-outline',
    link: '/client/billin-invoice',

  },
];
