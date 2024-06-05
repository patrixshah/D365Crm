import { Request, Response } from 'express';
import { dynamicsWebApi } from '../models/d365Model';
import {
  AccountInterface,
  AccountsFieldList,
} from '../interfaces/accountInterface';
import DynamicsWebApi from 'dynamics-web-api';

export async function getAccounts(req: Request, res: Response): Promise<void> {
  try {
    const request: DynamicsWebApi.RetrieveMultipleRequest = {
      collection: 'accounts',
      select: AccountsFieldList,
      filter: 'statecode eq 0',
      maxPageSize: 10,
      count: true,
    };

    const response = await dynamicsWebApi.retrieveMultiple<AccountInterface>(
      request,
    );
    const count = response.oDataCount;
    const nextLink = response.oDataNextLink;
    const records = response.value;
    res
      .status(200)
      .json({ count, nextLink, records, message: 'Success', error: null });
  } catch (error) {
    console.error(`Error in getAccounts: ${error}`);
    res.status(500).json({
      count: null,
      nextLink: '',
      records: [],
      message: '',
      error: 'Internal Server Error',
    });
  }
}

export async function getAccountsActiveCount(
  req: Request,
  res: Response,
): Promise<void> {
  try {
    const totalActiveRecords = await dynamicsWebApi.count({
      collection: 'accounts',
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
    console.error(`Error in getAccountsActiveCount: ${error}`);
    res.status(500).json({
      count: null,
      nextLink: '',
      records: [],
      message: '',
      error: 'Internal Server Error',
    });
  }
}

export async function getAccountsInActiveCount(
  req: Request,
  res: Response,
): Promise<void> {
  try {
    const totalInActiveRecords = await dynamicsWebApi.count({
      collection: 'accounts',
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
    console.error(`Error in getAccountsInActiveCount: ${error}`);
    res.status(500).json({
      count: null,
      nextLink: '',
      records: [],
      message: '',
      error: 'Internal Server Error',
    });
  }
}

export async function getAccountsTotalCount(
  req: Request,
  res: Response,
): Promise<void> {
  try {
    const totalRecords = await dynamicsWebApi.count({
      collection: 'accounts',
    });
    res.status(500).json({
      count: totalRecords,
      nextLink: '',
      records: [],
      message: 'Success',
      error: '',
    });
  } catch (error) {
    console.error(`Error in getAccountsTotalCount: ${error}`);
    res.status(500).json({
      count: null,
      nextLink: '',
      records: [],
      message: '',
      error: 'Internal Server Error',
    });
  }
}

export async function getAccountById(
  req: Request,
  res: Response,
): Promise<void> {
  try {
    const accountId = req.params.id;
    const request: DynamicsWebApi.RetrieveRequest = {
      collection: 'accounts',
      key: accountId,
      select: AccountsFieldList,
    };
    const response = await dynamicsWebApi.retrieve<AccountInterface>(request);
    res.status(200).json(response);
  } catch (err) {
    console.error(`Error in getAccountById: ${err}`);
    res.status(404).json({ error: 'Record not found' });
  }
}
