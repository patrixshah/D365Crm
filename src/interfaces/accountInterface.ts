export interface AccountLookup {
  accountid?: string;
  name?: string;
}

export interface AccountInterface {
  // Account Information
  accountid?: string;
  name?: string;
  telephone1?: string;
  fax?: string;
  websiteurl?: string;
  parentaccountid?: string;
  tickersymbol?: string;

  // Address Information
  address1_line1?: string;
  address1_line2?: string;
  address1_line3?: string;
  address1_city?: string;
  address1_stateorprovince?: string;
  address1_postalcode?: string;
  address1_country?: string;

  // Primary Contact
  primarycontactid?: string;

  // Company Profile
  industrycode?: number;
  sic?: string;
  ownershipcode?: number;

  // Description
  description?: string;

  // Billing
  transactioncurrencyid?: string;
  creditlimit?: number;
  creditonhold?: boolean;
  paymenttermscode?: number;

  // Shipping
  address1_shippingmethodcode?: number;
  address1_freighttermscode?: number;

  // Contact Preferences
  preferredcontactmethodcode?: number;
  donotemail?: boolean;
  followemail?: boolean;
  donotbulkemail?: boolean;
  donotphone?: boolean;
  donotfax?: boolean;
  donotpostalmail?: boolean;

  // Other
  statuscode?: number;
  statecode?: number;
  revenue?: number;
  numberofemployees?: number;
  ownerid?: string;

  createdon?: Date;
  createdby?: string;
  modifiedon?: Date;
  modifiedby?: string;
}

export type AccountColDefObject = Record<keyof AccountInterface, undefined>;
export const AccountColDefProperties: AccountColDefObject = {
  accountid: undefined,
  name: undefined,
  telephone1: undefined,
  fax: undefined,
  websiteurl: undefined,
  parentaccountid: undefined,
  tickersymbol: undefined,
  address1_line1: undefined,
  address1_line2: undefined,
  address1_line3: undefined,
  address1_city: undefined,
  address1_stateorprovince: undefined,
  address1_postalcode: undefined,
  address1_country: undefined,
  primarycontactid: undefined,
  industrycode: undefined,
  sic: undefined,
  ownershipcode: undefined,
  description: undefined,
  transactioncurrencyid: undefined,
  creditlimit: undefined,
  creditonhold: undefined,
  paymenttermscode: undefined,
  address1_shippingmethodcode: undefined,
  address1_freighttermscode: undefined,
  preferredcontactmethodcode: undefined,
  donotemail: undefined,
  followemail: undefined,
  donotbulkemail: undefined,
  donotphone: undefined,
  donotfax: undefined,
  donotpostalmail: undefined,
  statuscode: undefined,
  statecode: undefined,
  revenue: undefined,
  numberofemployees: undefined,
  ownerid: undefined,
  createdon: undefined,
  createdby: undefined,
  modifiedon: undefined,
  modifiedby: undefined,
};

export const AccountsFieldList = Object.keys(
  AccountColDefProperties,
) as (keyof AccountInterface)[];
