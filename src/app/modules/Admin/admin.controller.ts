import { Request, Response } from "express";
import { adminServices } from "./admin.service";
import pick from "../../../dataPick";
import { filterableFiled } from "./admin.constant";

const fetchAllAdminData = async (req: Request, res: Response) => {
  try {
    const result = await adminServices.getAllAdminData();
    res.status(200).json({
      success: true,
      message: "Admin Fetch Successfuly",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Somthing Went Wrong !",
      error: err,
    });
  }
};

const searchAdminData = async (req: Request, res: Response) => {
  try {
    const filters = pick(req.query, filterableFiled);
    const options = pick(req.query, ["page", "limit", "sortBy", "sortOrder"]);
    const result = await adminServices.getSearchAdminData(filters, options);
    res.status(200).json({
      success: true,
      message: "Admin Search Data Get Successful",
      meta: result.meta,
      data: result.data,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Somthing Went Wrong !",
      error: err,
    });
  }
};

const getIdAdminData = async (req: Request, res: Response) => {
  try {
    const {id} = req.params
    const result = await adminServices.getIdByAdminData(id);
    res.status(200).json({
      success: true,
      message: "Get Id By Admin Data Get Successful",
      data: result
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Somthing Went Wrong !",
      error: err,
    });
  }
};

const updateAdminData = async (req: Request, res: Response) => {
  try {
    const {id} = req.params
    const result = await adminServices.updateByAdminData(id,req.body);
    res.status(200).json({
      success: true,
      message: "Update By Admin Data Successful",
      data: result
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Somthing Went Wrong !",
      error: err,
    });
  }
};

const deleteAdminData = async (req: Request, res: Response) => {
  try {
    const {id} = req.params
    const result = await adminServices.deleteByAdminData(id);
    res.status(200).json({
      success: true,
      message: "Delete By Admin Data Successful",
      data: result
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Somthing Went Wrong !",
      error: err,
    });
  }
};
const softdeleteAdminData = async (req: Request, res: Response) => {
  try {
    const {id} = req.params
    const result = await adminServices.softdeleteByAdminData(id);
    res.status(200).json({
      success: true,
      message: "Delete By Admin Data Successful",
      data: result
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Somthing Went Wrong !",
      error: err,
    });
  }
};

export const adminController = {
  fetchAllAdminData,
  searchAdminData,
  getIdAdminData,
  updateAdminData,
  deleteAdminData,
  softdeleteAdminData
};
