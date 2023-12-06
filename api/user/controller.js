import { create, extraDetails, showDetails } from "./service.js";

export const createUser = (req, res) => {
  const body = req.body;

  create(body, (error, results) => {
    if (error) {
      console.log(error);
      return res.status(400).json({
        success: false,
        message: "Database connection error",
      });
    }

    res.status(201).json({
      success: true,
      message: "user created successfully",
      data: results,
    });
  });
};
export const details = (req, res) => {
  const body = req.body;

  extraDetails(body, (error, results) => {
    if (error) {
      console.log(error);
      return res.status(400).json({
        success: false,
        message: "Database connection error",
      });
    }

    res.status(201).json({
      success: true,
      message: "user created successfully",
      data: results,
    });
  });
};
export const getDetails = (req, res) => {
//   const body = req.body;


  showDetails("", (error, results) => {
    if (error) {
      console.log(error);
      return res.status(400).json({
        success: false,
        message: "Database connection error",
      });
    }

    res.status(201).json({
      success: true,
    //   message: "user created successfully",
      data: results,
    });
  });
};
