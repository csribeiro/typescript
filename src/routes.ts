import { Request, Response } from "express";
import CreateCouseService from "./CreateCourseService";

export function createCourse(request: Request, response: Response) {
  CreateCouseService.execute({
    name: "NodeJS",
    educator: "Dani",
    duration: 10,
  });

  CreateCouseService.execute({
    name: "ReactJS",
    educator: "Diego",
    // duration: 10,
  });

  return response.send();
}
