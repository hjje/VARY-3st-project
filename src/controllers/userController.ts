import { Request, Response, NextFunction } from "express";
import * as userService from "../services/userService";
import { catchAsync, raiseCustomError } from "../utils/error";

export const getUserInfo = catchAsync(async (req: Request, res: Response) => {
  const data = await userService.getUserInfo();
  return res.status(200).json(data);
});

export const getUserDetail = catchAsync(async (req: Request, res: Response) => {
  const userId = req.params.userId;

  if (!userId) {
    raiseCustomError("NEED_USERINFO", 401);
  }

  const userDetail = await userService.getUserDetail(userId);
  return res.status(200).json(userDetail);
});
