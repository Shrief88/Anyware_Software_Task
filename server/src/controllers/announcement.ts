import { Request, Response, NextFunction } from "express";
import createHttpError from "http-errors";

import { AnnouncementModel } from "../models/announcement";
import { EmployeeModel } from "../models/employee";

export const getAllAnnouncements = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const announcements = await AnnouncementModel.find().populate("employee");
    res.status(200).json(announcements);
  } catch (error) {
    next(error);
  }
};

export const getAnnouncementById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const announcement = await AnnouncementModel.findById(
      req.params.id
    ).populate("employee");
    if (!announcement) throw createHttpError(404, "Announcement not found");
    res.status(200).json(announcement);
  } catch (error) {
    next(error);
  }
};

export const createAnnouncement = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { employee } = req.body;
    const foundEmployee = await EmployeeModel.findById(employee);
    if (!foundEmployee) throw createHttpError(404, "Employee not found");

    const announcement = new AnnouncementModel(req.body);
    await announcement.save();
    res.status(201).json(announcement);
  } catch (error) {
    next(error);
  }
};

export const updateAnnouncement = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const announcement = await AnnouncementModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    ).populate("employee");
    if (!announcement) throw createHttpError(404, "Announcement not found");
    res.status(200).json(announcement);
  } catch (error) {
    next(error);
  }
};

export const deleteAnnouncement = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await AnnouncementModel.findByIdAndDelete(req.params.id);
    res.status(204).json({ message: "Announcement deleted successfully" });
  } catch (error) {
    next(error);
  }
};
