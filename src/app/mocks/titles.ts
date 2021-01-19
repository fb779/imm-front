import { IOption, IOptionNumber } from "../models/Option";
import { Title } from "../models/Titlel";

export const opsRoles: IOption[] = [
  { value: "ADMIN_ROLE", name: "ADMIN" },
  { value: "USER_ROLE", name: "USER" },
  // {value: "CLIENT_ROLE", name: "CLIENT"},
];

export const opsAccompanying: IOptionNumber[] = [
  { value: 0, name: "0" },
  { value: 1, name: "1" },
  { value: 2, name: "2" },
  { value: 3, name: "3" },
  { value: 4, name: "4" },
  { value: 5, name: "5" },
  { value: 6, name: "6" },
  { value: 7, name: "7" },
  { value: 8, name: "8" },
  { value: 9, name: "9" },
  { value: 10, name: "10" },
];

export const opsAges: IOptionNumber[] = [
  { value: 1, name: "1" },
  { value: 2, name: "2" },
  { value: 3, name: "3" },
  { value: 4, name: "4" },
  { value: 5, name: "5" },
  { value: 6, name: "6" },
  { value: 7, name: "7" },
  { value: 8, name: "8" },
  { value: 9, name: "9" },
  { value: 10, name: "10" },
  { value: 11, name: "11" },
  { value: 12, name: "12" },
  { value: 13, name: "13" },
  { value: 14, name: "14" },
  { value: 15, name: "15" },
  { value: 16, name: "16" },
  { value: 17, name: "17" },
  { value: 18, name: "18" },
  { value: 19, name: "19" },
  { value: 20, name: "20" },
  { value: 21, name: "21" },
  { value: 999, name: "22 and over (with disability)" },
];

export const opsRelationships: IOption[] = [
  { value: "SPOUSE", name: "Spouse" },
  { value: "PARTNER", name: "Common-law / Partner" },
  { value: "CHILDREN", name: "Dependent Child" },
];

export const opsTitles: Title[] = [
  { value: "mr", name: "Mr" },
  { value: "mrs", name: "Mrs" },
  { value: "miss", name: "Miss" },
  { value: "ms", name: "Ms" },
];

export const opsYesNo: IOption[] = [
  { value: "1", name: "Yes" },
  { value: "2", name: "No" },
];

export const opsSex: IOption[] = [
  { value: "1", name: "Male" },
  { value: "2", name: "Female" },
];

export const opsStatus: IOption[] = [
  { value: "1", name: "Citizen" },
  { value: "2", name: "Visitor" },
  { value: "3", name: "Student" },
  { value: "4", name: "Worker" },
  { value: "5", name: "Other" },
];

export const opsProvinces: IOption[] = [
  { value: "1", name: "Ontario" },
  { value: "2", name: "Quebec" },
  { value: "3", name: "British Columbia" },
  { value: "4", name: "Alberta" },
  { value: "5", name: "Manitoba" },
  { value: "6", name: "Saskatchewan" },
  { value: "7", name: "Nova Scotia" },
  { value: "8", name: "New Brunswick" },
  { value: "9", name: "Newfoundland and Labrador" },
  { value: "10", name: "Prince Edward Island" },
  { value: "11", name: "Northwest Territories" },
  { value: "12", name: "Nunavut" },
  { value: "13", name: "Yukon" },
];

export const opsMaritalStatus: IOption[] = [
  { value: "1", name: "Single" },
  { value: "2", name: "Married or Common-law" },
  { value: "3", name: "Separated" },
  { value: "4", name: "Divorced" },
  { value: "5", name: "Widowed" },
];

export const opsPropousVisit: IOption[] = [
  { value: "1", name: "business" },
  { value: "2", name: "tourism" },
  { value: "3", name: "visiting relatives" },
  { value: "4", name: "visiting friends" },
  { value: "5", name: "medical treatment " },
  { value: "6", name: "other" },
];

export const opsStayCanada: IOption[] = [
  { value: "1", name: "0-6 months" },
  { value: "2", name: "6 months or more" },
];

export const opsCountries: IOption[] = [
  { name: "Afghanistan", value: "AF" },
  { name: "Åland Islands", value: "AX" },
  { name: "Albania", value: "AL" },
  { name: "Algeria", value: "DZ" },
  { name: "American Samoa", value: "AS" },
  { name: "Andorra", value: "AD" },
  { name: "Angola", value: "AO" },
  { name: "Anguilla", value: "AI" },
  { name: "Antarctica", value: "AQ" },
  { name: "Antigua and Barbuda", value: "AG" },
  { name: "Argentina", value: "AR" },
  { name: "Armenia", value: "AM" },
  { name: "Aruba", value: "AW" },
  { name: "Australia", value: "AU" },
  { name: "Austria", value: "AT" },
  { name: "Azerbaijan", value: "AZ" },
  { name: "Bahamas", value: "BS" },
  { name: "Bahrain", value: "BH" },
  { name: "Bangladesh", value: "BD" },
  { name: "Barbados", value: "BB" },
  { name: "Belarus", value: "BY" },
  { name: "Belgium", value: "BE" },
  { name: "Belize", value: "BZ" },
  { name: "Benin", value: "BJ" },
  { name: "Bermuda", value: "BM" },
  { name: "Bhutan", value: "BT" },
  { name: "Bolivia (Plurinational State of)", value: "BO" },
  { name: "Bonaire, Sint Eustatius and Saba", value: "BQ" },
  { name: "Bosnia and Herzegovina", value: "BA" },
  { name: "Botswana", value: "BW" },
  { name: "Bouvet Island", value: "BV" },
  { name: "Brazil", value: "BR" },
  { name: "British Indian Ocean Territory", value: "IO" },
  { name: "United States Minor Outlying Islands", value: "UM" },
  { name: "Virgin Islands (British)", value: "VG" },
  { name: "Virgin Islands (U.S.)", value: "VI" },
  { name: "Brunei Darussalam", value: "BN" },
  { name: "Bulgaria", value: "BG" },
  { name: "Burkina Faso", value: "BF" },
  { name: "Burundi", value: "BI" },
  { name: "Cambodia", value: "KH" },
  { name: "Cameroon", value: "CM" },
  { name: "Canada", value: "CA" },
  { name: "Cabo Verde", value: "CV" },
  { name: "Cayman Islands", value: "KY" },
  { name: "Central African Republic", value: "CF" },
  { name: "Chad", value: "TD" },
  { name: "Chile", value: "CL" },
  { name: "China", value: "CN" },
  { name: "Christmas Island", value: "CX" },
  { name: "Cocos (Keeling) Islands", value: "CC" },
  { name: "Colombia", value: "CO" },
  { name: "Comoros", value: "KM" },
  { name: "Congo", value: "CG" },
  { name: "Congo (Democratic Republic of the)", value: "CD" },
  { name: "Cook Islands", value: "CK" },
  { name: "Costa Rica", value: "CR" },
  { name: "Croatia", value: "HR" },
  { name: "Cuba", value: "CU" },
  { name: "Curaçao", value: "CW" },
  { name: "Cyprus", value: "CY" },
  { name: "Czech Republic", value: "CZ" },
  { name: "Denmark", value: "DK" },
  { name: "Djibouti", value: "DJ" },
  { name: "Dominica", value: "DM" },
  { name: "Dominican Republic", value: "DO" },
  { name: "Ecuador", value: "EC" },
  { name: "Egypt", value: "EG" },
  { name: "El Salvador", value: "SV" },
  { name: "Equatorial Guinea", value: "GQ" },
  { name: "Eritrea", value: "ER" },
  { name: "Estonia", value: "EE" },
  { name: "Ethiopia", value: "ET" },
  { name: "Falkland Islands (Malvinas)", value: "FK" },
  { name: "Faroe Islands", value: "FO" },
  { name: "Fiji", value: "FJ" },
  { name: "Finland", value: "FI" },
  { name: "France", value: "FR" },
  { name: "French Guiana", value: "GF" },
  { name: "French Polynesia", value: "PF" },
  { name: "French Southern Territories", value: "TF" },
  { name: "Gabon", value: "GA" },
  { name: "Gambia", value: "GM" },
  { name: "Georgia", value: "GE" },
  { name: "Germany", value: "DE" },
  { name: "Ghana", value: "GH" },
  { name: "Gibraltar", value: "GI" },
  { name: "Greece", value: "GR" },
  { name: "Greenland", value: "GL" },
  { name: "Grenada", value: "GD" },
  { name: "Guadeloupe", value: "GP" },
  { name: "Guam", value: "GU" },
  { name: "Guatemala", value: "GT" },
  { name: "Guernsey", value: "GG" },
  { name: "Guinea", value: "GN" },
  { name: "Guinea-Bissau", value: "GW" },
  { name: "Guyana", value: "GY" },
  { name: "Haiti", value: "HT" },
  { name: "Heard Island and McDonald Islands", value: "HM" },
  { name: "Holy See", value: "VA" },
  { name: "Honduras", value: "HN" },
  { name: "Hong Kong", value: "HK" },
  { name: "Hungary", value: "HU" },
  { name: "Iceland", value: "IS" },
  { name: "India", value: "IN" },
  { name: "Indonesia", value: "ID" },
  { name: "Côte d'Ivoire", value: "CI" },
  { name: "Iran (Islamic Republic of)", value: "IR" },
  { name: "Iraq", value: "IQ" },
  { name: "Ireland", value: "IE" },
  { name: "Isle of Man", value: "IM" },
  { name: "Israel", value: "IL" },
  { name: "Italy", value: "IT" },
  { name: "Jamaica", value: "JM" },
  { name: "Japan", value: "JP" },
  { name: "Jersey", value: "JE" },
  { name: "Jordan", value: "JO" },
  { name: "Kazakhstan", value: "KZ" },
  { name: "Kenya", value: "KE" },
  { name: "Kiribati", value: "KI" },
  { name: "Kuwait", value: "KW" },
  { name: "Kyrgyzstan", value: "KG" },
  { name: "Lao People's Democratic Republic", value: "LA" },
  { name: "Latvia", value: "LV" },
  { name: "Lebanon", value: "LB" },
  { name: "Lesotho", value: "LS" },
  { name: "Liberia", value: "LR" },
  { name: "Libya", value: "LY" },
  { name: "Liechtenstein", value: "LI" },
  { name: "Lithuania", value: "LT" },
  { name: "Luxembourg", value: "LU" },
  { name: "Macao", value: "MO" },
  { name: "Macedonia (the former Yugoslav Republic of)", value: "MK" },
  { name: "Madagascar", value: "MG" },
  { name: "Malawi", value: "MW" },
  { name: "Malaysia", value: "MY" },
  { name: "Maldives", value: "MV" },
  { name: "Mali", value: "ML" },
  { name: "Malta", value: "MT" },
  { name: "Marshall Islands", value: "MH" },
  { name: "Martinique", value: "MQ" },
  { name: "Mauritania", value: "MR" },
  { name: "Mauritius", value: "MU" },
  { name: "Mayotte", value: "YT" },
  { name: "Mexico", value: "MX" },
  { name: "Micronesia (Federated States of)", value: "FM" },
  { name: "Moldova (Republic of)", value: "MD" },
  { name: "Monaco", value: "MC" },
  { name: "Mongolia", value: "MN" },
  { name: "Montenegro", value: "ME" },
  { name: "Montserrat", value: "MS" },
  { name: "Morocco", value: "MA" },
  { name: "Mozambique", value: "MZ" },
  { name: "Myanmar", value: "MM" },
  { name: "Namibia", value: "NA" },
  { name: "Nauru", value: "NR" },
  { name: "Nepal", value: "NP" },
  { name: "Netherlands", value: "NL" },
  { name: "New Caledonia", value: "NC" },
  { name: "New Zealand", value: "NZ" },
  { name: "Nicaragua", value: "NI" },
  { name: "Niger", value: "NE" },
  { name: "Nigeria", value: "NG" },
  { name: "Niue", value: "NU" },
  { name: "Norfolk Island", value: "NF" },
  { name: "Korea (Democratic People's Republic of)", value: "KP" },
  { name: "Northern Mariana Islands", value: "MP" },
  { name: "Norway", value: "NO" },
  { name: "Oman", value: "OM" },
  { name: "Pakistan", value: "PK" },
  { name: "Palau", value: "PW" },
  { name: "Palestine, State of", value: "PS" },
  { name: "Panama", value: "PA" },
  { name: "Papua New Guinea", value: "PG" },
  { name: "Paraguay", value: "PY" },
  { name: "Peru", value: "PE" },
  { name: "Philippines", value: "PH" },
  { name: "Pitcairn", value: "PN" },
  { name: "Poland", value: "PL" },
  { name: "Portugal", value: "PT" },
  { name: "Puerto Rico", value: "PR" },
  { name: "Qatar", value: "QA" },
  { name: "Republic of Kosovo", value: "XK" },
  { name: "Réunion", value: "RE" },
  { name: "Romania", value: "RO" },
  { name: "Russian Federation", value: "RU" },
  { name: "Rwanda", value: "RW" },
  { name: "Saint Barthélemy", value: "BL" },
  { name: "Saint Helena, Ascension and Tristan da Cunha", value: "SH" },
  { name: "Saint Kitts and Nevis", value: "KN" },
  { name: "Saint Lucia", value: "LC" },
  { name: "Saint Martin (French part)", value: "MF" },
  { name: "Saint Pierre and Miquelon", value: "PM" },
  { name: "Saint Vincent and the Grenadines", value: "VC" },
  { name: "Samoa", value: "WS" },
  { name: "San Marino", value: "SM" },
  { name: "Sao Tome and Principe", value: "ST" },
  { name: "Saudi Arabia", value: "SA" },
  { name: "Senegal", value: "SN" },
  { name: "Serbia", value: "RS" },
  { name: "Seychelles", value: "SC" },
  { name: "Sierra Leone", value: "SL" },
  { name: "Singapore", value: "SG" },
  { name: "Sint Maarten (Dutch part)", value: "SX" },
  { name: "Slovakia", value: "SK" },
  { name: "Slovenia", value: "SI" },
  { name: "Solomon Islands", value: "SB" },
  { name: "Somalia", value: "SO" },
  { name: "South Africa", value: "ZA" },
  { name: "South Georgia and the South Sandwich Islands", value: "GS" },
  { name: "Korea (Republic of)", value: "KR" },
  { name: "South Sudan", value: "SS" },
  { name: "Spain", value: "ES" },
  { name: "Sri Lanka", value: "LK" },
  { name: "Sudan", value: "SD" },
  { name: "Suriname", value: "SR" },
  { name: "Svalbard and Jan Mayen", value: "SJ" },
  { name: "Swaziland", value: "SZ" },
  { name: "Sweden", value: "SE" },
  { name: "Switzerland", value: "CH" },
  { name: "Syrian Arab Republic", value: "SY" },
  { name: "Taiwan", value: "TW" },
  { name: "Tajikistan", value: "TJ" },
  { name: "Tanzania, United Republic of", value: "TZ" },
  { name: "Thailand", value: "TH" },
  { name: "Timor-Leste", value: "TL" },
  { name: "Togo", value: "TG" },
  { name: "Tokelau", value: "TK" },
  { name: "Tonga", value: "TO" },
  { name: "Trinidad and Tobago", value: "TT" },
  { name: "Tunisia", value: "TN" },
  { name: "Turkey", value: "TR" },
  { name: "Turkmenistan", value: "TM" },
  { name: "Turks and Caicos Islands", value: "TC" },
  { name: "Tuvalu", value: "TV" },
  { name: "Uganda", value: "UG" },
  { name: "Ukraine", value: "UA" },
  { name: "United Arab Emirates", value: "AE" },
  { name: "United Kingdom of Great Britain and Northern Ireland", value: "GB" },
  { name: "United States of America", value: "US" },
  { name: "Uruguay", value: "UY" },
  { name: "Uzbekistan", value: "UZ" },
  { name: "Vanuatu", value: "VU" },
  { name: "Venezuela (Bolivarian Republic of)", value: "VE" },
  { name: "Viet Nam", value: "VN" },
  { name: "Wallis and Futuna", value: "WF" },
  { name: "Western Sahara", value: "EH" },
  { name: "Yemen", value: "YE" },
  { name: "Zambia", value: "ZM" },
  { name: "Zimbabwe", value: "ZW" },
];

export const opsLevelEducation: IOption[] = [
  { value: "9", name: "Ph.D./ Doctoral Certificate" },
  { value: "8", name: "Post Graduate Certificate or Post Graduate Diploma" },
  { value: "7", name: "Master's or Professional Degree to Practice" },
  { value: "6", name: "Bachelor's Degree" },
  { value: "5", name: "Trade Certificate" },
  { value: "4", name: "Associate Degree" },
  { value: "3", name: "Non-trades certificate or Diploma" },
  { value: "2", name: "High School" },
  { value: "1", name: "Below High School" },
];

export const opsYearsEducation: IOption[] = [
  { value: "1", name: "12- months" },
  { value: "2", name: "1 years" },
  { value: "3", name: "2 years" },
  { value: "4", name: "3 years" },
  { value: "5", name: "4 years" },
  { value: "6", name: "5 years" },
  { value: "7", name: "6 years" },
  { value: "8", name: "7 years" },
  { value: "9", name: "8 years" },
  { value: "10", name: "9 years" },
  { value: "11", name: "10+ years" },
];
