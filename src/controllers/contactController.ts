import { Request, Response } from 'express';
import { dynamicsWebApi } from '../models/d365Model';
import {
  ContactInterface,
  ContactsFieldList,
} from '../interfaces/contactInterface';
import DynamicsWebApi from 'dynamics-web-api';

export async function getContacts(req: Request, res: Response): Promise<void> {
  try {
    const request: DynamicsWebApi.RetrieveMultipleRequest = {
      collection: 'contacts',
      select: ContactsFieldList,
      expand: [
        {
          property: 'parentcustomerid_account',
          select: ['accountid', 'name'],
        },
      ],
      filter: 'statecode eq 0',
      maxPageSize: 10,
      count: true,
    };

    const response = await dynamicsWebApi.retrieveMultiple<ContactInterface>(
      request,
    );
    const count = response.oDataCount;
    const nextLink = response.oDataNextLink;
    const records = response.value;
    res
      .status(200)
      .json({ count, nextLink, records, message: 'Success', error: null });
  } catch (error) {
    console.error(`Error in getContacts: ${error}`);
    res.status(500).json({
      count: null,
      nextLink: '',
      records: [],
      message: '',
      error: 'Internal Server Error',
    });
  }
}

export async function getContactsActiveCount(
  req: Request,
  res: Response,
): Promise<void> {
  try {
    const totalActiveRecords = await dynamicsWebApi.count({
      collection: 'contacts',
      filter: 'statecode eq 0',
    });
    res.status(500).json({
      count: totalActiveRecords,
      nextLink: '',
      records: [],
      message: 'Success',
      error: '',
    });
  } catch (error) {
    console.error(`Error in getContactsActiveCount: ${error}`);
    res.status(500).json({
      count: null,
      nextLink: '',
      records: [],
      message: '',
      error: 'Internal Server Error',
    });
  }
}

export async function getContactsInActiveCount(
  req: Request,
  res: Response,
): Promise<void> {
  try {
    const totalInActiveRecords = await dynamicsWebApi.count({
      collection: 'contacts',
      filter: 'statecode eq 1',
    });
    res.status(500).json({
      count: totalInActiveRecords,
      nextLink: '',
      records: [],
      message: 'Success',
      error: '',
    });
  } catch (error) {
    console.error(`Error in getContactsInActiveCount: ${error}`);
    res.status(500).json({
      count: null,
      nextLink: '',
      records: [],
      message: '',
      error: 'Internal Server Error',
    });
  }
}

export async function getcontactsTotalCount(
  req: Request,
  res: Response,
): Promise<void> {
  try {
    const totalRecords = await dynamicsWebApi.count({
      collection: 'contacts',
    });
    res.status(500).json({
      count: totalRecords,
      nextLink: '',
      records: [],
      message: 'Success',
      error: '',
    });
  } catch (error) {
    console.error(`Error in getContactsTotalCount: ${error}`);
    res.status(500).json({
      count: null,
      nextLink: '',
      records: [],
      message: '',
      error: 'Internal Server Error',
    });
  }
}

export async function getContactById(
  req: Request,
  res: Response,
): Promise<void> {
  try {
    const accountId = req.params.id;
    const request: DynamicsWebApi.RetrieveRequest = {
      collection: 'contacts',
      key: accountId,
      select: ContactsFieldList,
      expand: [
        {
          property: 'parentcustomerid_account',
          select: ['accountid', 'name'],
        },
      ],
    };
    const response = await dynamicsWebApi.retrieve<ContactInterface>(request);
    res.status(200).json(response);
  } catch (err) {
    console.error(`Error in getContactById: ${err}`);
    res.status(404).json({ error: 'Record not found' });
  }
}
