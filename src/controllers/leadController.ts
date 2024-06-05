import { Request, Response } from 'express';
import { dynamicsWebApi } from '../models/d365Model';
import { LeadInterface, LeadsFieldList } from '../interfaces/leadInterface';
import DynamicsWebApi from 'dynamics-web-api';

export async function getLeads(req: Request, res: Response): Promise<void> {
  try {
    const request: DynamicsWebApi.RetrieveMultipleRequest = {
      collection: 'leads',
      select: LeadsFieldList,
      filter: 'statecode eq 0',
      maxPageSize: 10,
      count: true,
    };

    const response =
      await dynamicsWebApi.retrieveMultiple<LeadInterface>(request);
    const count = response.oDataCount;
    const nextLink = response.oDataNextLink;
    const records = response.value;
    res
      .status(200)
      .json({ count, nextLink, records, message: 'Success', error: null });
  } catch (error) {
    console.error(`Error in getLeads: ${error}`);
    res.status(500).json({
      count: null,
      nextLink: '',
      records: [],
      message: '',
      error: 'Internal Server Error',
    });
  }
}

export async function getLeadsActiveCount(
  req: Request,
  res: Response,
): Promise<void> {
  try {
    const totalActiveRecords = await dynamicsWebApi.count({
      collection: 'leads',
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
    console.error(`Error in getLeadsActiveCount: ${error}`);
    res.status(500).json({
      count: null,
      nextLink: '',
      records: [],
      message: '',
      error: 'Internal Server Error',
    });
  }
}

export async function getLeadsInActiveCount(
  req: Request,
  res: Response,
): Promise<void> {
  try {
    const totalInActiveRecords = await dynamicsWebApi.count({
      collection: 'leads',
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
    console.error(`Error in getLeadsInActiveCount: ${error}`);
    res.status(500).json({
      count: null,
      nextLink: '',
      records: [],
      message: '',
      error: 'Internal Server Error',
    });
  }
}

export async function getLeadsTotalCount(
  req: Request,
  res: Response,
): Promise<void> {
  try {
    const totalRecords = await dynamicsWebApi.count({
      collection: 'leads',
    });
    res.status(500).json({
      count: totalRecords,
      nextLink: '',
      records: [],
      message: 'Success',
      error: '',
    });
  } catch (error) {
    console.error(`Error in getLeadsTotalCount: ${error}`);
    res.status(500).json({
      count: null,
      nextLink: '',
      records: [],
      message: '',
      error: 'Internal Server Error',
    });
  }
}

export async function getLeadById(req: Request, res: Response): Promise<void> {
  try {
    const leadId = req.params.id;
    const request: DynamicsWebApi.RetrieveRequest = {
      collection: 'leads',
      key: leadId,
      select: LeadsFieldList,
    };
    const response = await dynamicsWebApi.retrieve<LeadInterface>(request);
    res.status(200).json(response);
  } catch (error) {
    console.error(`Error in getLeadById: ${error}`);
    res.status(404).json({ error: 'Record not found' });
  }
}
