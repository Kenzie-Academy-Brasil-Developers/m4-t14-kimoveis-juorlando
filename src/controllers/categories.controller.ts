import { Request, Response } from "express";
import {
  iCategory,
  iCategoryReturns,
} from "../interfaces/categories.interface";
import { retrieveCategoryService } from "../services/categories/categoryRetrieve.service";
import categoryRetrieveRealEstateService from "../services/categories/categoryRetrieveRealEstate.service";
import { createCategoryService } from "../services/categories/createCategory.service";

const createCategoryController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const categoryData: iCategory = request.body;

  const newCategory = await createCategoryService(categoryData);

  return response.status(201).json(newCategory);
};

const retrieveCategoryController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const getCategory: iCategoryReturns = await retrieveCategoryService();

  return response.status(200).json(getCategory);
};

const categoryRetrieveRealEstateController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const categoryId: number = parseInt(request.params.id);

  const categoryEstate = await categoryRetrieveRealEstateService(categoryId);

  return response.status(200).json(categoryEstate);
};

export {
  createCategoryController,
  retrieveCategoryController,
  categoryRetrieveRealEstateController,
};
