import ErrorHandler from "../middlewares/formError.js";
import {FormValidation}  from "../models/formValidationModel.js";


const send_FormValidation = async (req, res, next) => {
  const { firstName, lastName, email, phone, message } = req.body;
  if (!firstName || !lastName || !email || !phone || !message) {
    return next(new ErrorHandler("Please Fill Full Form!", 400));
  }

  try {
    await FormValidation.create({ firstName, lastName, email, phone, message });
    res.status(201).json({
      success: true,
      message: "Form Sent Successfully!",
    });
  } catch (error) {
    // Handle Mongoose validation errors
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map(err => err.message);
      return next(new ErrorHandler(validationErrors.join(', '), 400));
    }

    // Handle other errors
    return next(error);
  }
};


export default send_FormValidation;

