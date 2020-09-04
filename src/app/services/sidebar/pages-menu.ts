import { NbMenuItem } from "@nebular/theme";

export const CLIENT_MENU_ITEMS: NbMenuItem[] = [
  {
    title: "Dashboard",
    icon: "home-outline",
    link: "/pages/dashboard",
    home: true,
  },
  {
    title: "Settings",
    icon: "person-outline",
    link: "/pages/settings",
  },
  {
    title: "Assessment Form",
    icon: "edit-2-outline",
    link: "/pages/assessment-form",
  },
  {
    title: "Forms & Guides",
    icon: "file-text-outline",
    link: "/pages/forms-guides",
  },
  {
    title: "My Documents",
    icon: "folder-outline",
    link: "/pages/documents",
  },
  {
    title: "My Visa",
    icon: "person-outline",
    link: "/pages/visa",
    hidden: true,
  },
  {
    title: "My Family",
    icon: "people-outline",
    link: "/pages/family",
  },
  {
    title: "My Consultant",
    icon: "hard-drive-outline",
    link: "/pages/my-consultant",
  },
  {
    title: "Add-Ons",
    icon: "keypad-outline",
    link: "/pages/add-ons",
    hidden: true,
  },
  {
    title: "Coupons",
    icon: "gift-outline",
    link: "/pages/coupons",
    hidden: true,
  },
  {
    title: "Free Resources",
    icon: "grid-outline",
    link: "/pages/free-resources",
    hidden: true,
  },
  {
    title: "Admission",
    icon: "done-all-outline",
    link: "/pages/admission",
    hidden: true,
  },
  {
    title: "Appointment",
    icon: "bookmark-outline",
    link: "/pages/appoinment",
    hidden: true,
  },
  {
    title: "Billin & Invoice",
    icon: "trending-up-outline",
    link: "/pages/billin-invoice",
    hidden: true,
  },
  {
    title: "Messages",
    icon: "message-circle-outline",
    link: "/pages/messages",
  },
  {
    title: "Log Out",
    icon: "power-outline",
    link: "/auth/logout",
  },
];

export const ADMIN_MENU_ITEMS: NbMenuItem[] = [
  {
    title: "Dashboard",
    icon: "home-outline",
    link: "/admin/dashboard",
    home: true,
  },
  {
    title: "Settings",
    icon: "person-outline",
    link: "/admin/settings",
  },
  {
    title: "Users",
    icon: "settings-2-outline",
    link: "/admin/users",
  },
  {
    title: "Clients",
    icon: "people-outline",
    link: "/admin/clients",
  },
  {
    title: "Checklist",
    icon: "checkmark-square-outline",
    link: "/admin/checklist",
  },
  {
    title: "Visa Category",
    icon: "book-open-outline",
    link: "/admin/visa-category",
  },
  {
    title: "Processes",
    icon: "archive-outline",
    link: "/admin/processes",
  },
  {
    title: "Log Out",
    icon: "power-outline",
    link: "/auth/logout",
  },
];

export const USER_MENU_ITEMS: NbMenuItem[] = [
  {
    title: "Dashboard",
    icon: "home-outline",
    link: "/consultant/dashboard",
    home: true,
  },
  {
    title: "Settings",
    icon: "person-outline",
    link: "/consultant/settings",
  },
  {
    title: "Processes",
    icon: "edit-2-outline",
    link: "/consultant/processes",
  },
  {
    title: "Appointment",
    icon: "bookmark-outline",
    link: "/consultant/appointment",
  },
  {
    title: "Log Out",
    icon: "power-outline",
    link: "/auth/logout",
  },
];
