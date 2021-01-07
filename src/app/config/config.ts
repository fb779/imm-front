export const URL_SERVICIOS = "http://localhost:3000/api/v1";

export const status = {
  active: "ACTIVE",
  form: "FORM",
  asigned: "ASIGNED",
  document: "DOCUMENT",
};

export const documentStatus = {
  create: "CREATE",
  uploaded: "UPLOADED",
  approved: "APPROVED",
  rejected: "REJECTED",
};

export const visaCategories = {
  visitor: "VISITOR",
  expressentry: "EXPRESS-ENTRY",
  workpermit: "WORK PERMIT",
  turist: "TURIST",
  study: "STUDY",
};

export const relationships = {
  spouse: "SPOUSE",
  common_law_partner: "PARTNER",
  child: "CHILDREN",
};

export const emailRegex = new RegExp(
  /^[-\w.%+]+@(?:[A-Z0-9-]{2,20}\.){1,5}[A-Z]{2,4}$/im
);

export const passwordRegex = new RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/
);

export const roles = {
  admin: "ADMIN_ROLE",
  client: "CLIENT_ROLE",
  user: "USER_ROLE",
};
