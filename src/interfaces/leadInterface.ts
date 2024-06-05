export interface LeadInterface {
  // Contact Information
  leadid?: string;
  subject?: string;
  firstname?: string;
  lastname?: string;
  jobtitle?: string;
  telephone1?: string;
  mobilephone?: string;
  emailaddress1?: string;
  fullname?: string;

  // Company Information
  companyname?: string;
  websiteurl?: string;
  address1_line1?: string;
  address1_line2?: string;
  address1_line3?: string;
  address1_city?: string;
  address1_stateorprovince?: string;
  address1_postalcode?: string;
  address1_country?: string;

  // Lead Information
  description?: string;
  industrycode?: number;
  revenue?: number;
  numberofemployees?: number;
  sic?: string;
  transactioncurrencyid?: string;

  // Contact Methods
  preferredcontactmethodcode?: number;
  donotemail?: boolean;
  followemail?: boolean;
  donotbulkemail?: boolean;
  donotphone?: boolean;
  donotpostalmail?: boolean;

  // Other
  leadsourcecode?: number;
  leadqualitycode?: number;

  statuscode?: number;
  statecode?: number;
  ownerid?: string;
  createdon?: Date;
  createdby?: string;
  modifiedon?: Date;
  modifiedby?: string;
}

export type LeadColDefObject = Record<keyof LeadInterface, undefined>;
export const LeadColDefProperties: LeadColDefObject = {
  leadid: undefined,
  subject: undefined,
  firstname: undefined,
  lastname: undefined,
  jobtitle: undefined,
  telephone1: undefined,
  mobilephone: undefined,
  emailaddress1: undefined,
  fullname: undefined,
  companyname: undefined,
  websiteurl: undefined,
  address1_line1: undefined,
  address1_line2: undefined,
  address1_line3: undefined,
  address1_city: undefined,
  address1_stateorprovince: undefined,
  address1_postalcode: undefined,
  address1_country: undefined,
  description: undefined,
  industrycode: undefined,
  revenue: undefined,
  numberofemployees: undefined,
  sic: undefined,
  transactioncurrencyid: undefined,
  preferredcontactmethodcode: undefined,
  donotemail: undefined,
  followemail: undefined,
  donotbulkemail: undefined,
  donotphone: undefined,
  donotpostalmail: undefined,
  leadsourcecode: undefined,
  leadqualitycode: undefined,
  statuscode: undefined,
  statecode: undefined,
  ownerid: undefined,
  createdon: undefined,
  createdby: undefined,
  modifiedon: undefined,
  modifiedby: undefined,
};

export const LeadsFieldList = Object.keys(
  LeadColDefProperties,
) as (keyof LeadInterface)[];
