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
    title: "Messages",
    icon: "message-circle-outline",
    link: "/pages/messages",
  },
  {
    title: "Add-Ons",
    icon: "keypad-outline",
    link: "/pages/add-ons",
  },
  {
    title: "Free Resources",
    icon: "grid-outline",
    link: "/pages/free-resources",
    hidden: true,
  },

  {
    title: "Billin & Invoice",
    icon: "trending-up-outline",
    link: "/pages/billin-invoice",
    hidden: true,
  },
  {
    title: "FAQ",
    icon: "question-mark-circle-outline",
    link: "/pages/faq",
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
    title: "Steps",
    icon: "layers-outline",
    link: "/admin/steps",
  },
  {
    title: "Processes",
    icon: "archive-outline",
    link: "/admin/processes",
  },
  {
    title: "AddOns",
    icon: "keypad-outline",
    link: "/admin/add-ons",
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
    title: "AddOns",
    icon: "keypad-outline",
    link: "/consultant/add-ons",
  },
  {
    title: "Log Out",
    icon: "power-outline",
    link: "/auth/logout",
  },
];
