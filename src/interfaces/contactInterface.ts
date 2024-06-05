import { AccountLookup } from './accountInterface';
export interface ContactInterface {
  // Contact Information
  contactid?: string;
  firstname?: string;
  lastname?: string;
  jobtitle?: string;
  parentcustomerid_account?: AccountLookup;
  emailaddress1?: string;
  telephone1?: string;
  mobilephone?: string;
  fax?: string;
  address1_line1?: string;
  address1_line2?: string;
  address1_line3?: string;
  address1_city?: string;
  address1_stateorprovince?: string;
  address1_postalcode?: string;
  address1_country?: string;

  // Personal Information
  gendercode?: number;
  familystatuscode?: number;
  spousesname?: string;
  birthdate?: Date;
  anniversary?: Date;

  // Personal Notes
  description?: string;

  // Contact Preferences
  preferredcontactmethodcode?: number;
  donotemail?: boolean;
  followemail?: boolean;
  donotbulkemail?: boolean;
  donotphone?: boolean;
  donotfax?: boolean;
  donotpostalmail?: boolean;

  // Billing Information
  transactioncurrencyid?: string;
  creditlimit?: number;
  creditonhold?: boolean;
  paymenttermscode?: number;

  // Shipping Information
  address1_shippingmethodcode?: number;
  address1_freighttermscode?: number;

  // Other
  statuscode?: number;
  statecode?: number;
  ownerid?: string;
  createdon?: Date;
  createdby?: string;
  modifiedon?: Date;
  modifiedby?: string;
}

export type ContactColDefObject = Record<keyof ContactInterface, undefined>;
export const ContactColDefProperties: ContactColDefObject = {
  contactid: undefined,
  firstname: undefined,
  lastname: undefined,
  jobtitle: undefined,
  parentcustomerid_account: undefined,
  emailaddress1: undefined,
  telephone1: undefined,
  mobilephone: undefined,
  fax: undefined,
  address1_line1: undefined,
  address1_line2: undefined,
  address1_line3: undefined,
  address1_city: undefined,
  address1_stateorprovince: undefined,
  address1_postalcode: undefined,
  address1_country: undefined,
  gendercode: undefined,
  familystatuscode: undefined,
  spousesname: undefined,
  birthdate: undefined,
  anniversary: undefined,
  description: undefined,
  preferredcontactmethodcode: undefined,
  donotemail: undefined,
  followemail: undefined,
  donotbulkemail: undefined,
  donotphone: undefined,
  donotfax: undefined,
  donotpostalmail: undefined,
  transactioncurrencyid: undefined,
  creditlimit: undefined,
  creditonhold: undefined,
  paymenttermscode: undefined,
  address1_shippingmethodcode: undefined,
  address1_freighttermscode: undefined,
  statuscode: undefined,
  statecode: undefined,
  ownerid: undefined,
  createdon: undefined,
  createdby: undefined,
  modifiedon: undefined,
  modifiedby: undefined,
};

export const ContactsFieldList = Object.keys(
  ContactColDefProperties,
) as (keyof ContactInterface)[];
