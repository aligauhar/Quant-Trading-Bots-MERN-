import mongoose from "mongoose";
import validator from "validator";

const FormSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [3, "First name must be of at least 3 Characters."],
    maxLength: [30, "First name cannot exceed 30 Characters."],
  },
  lastName: {
    type: String,
    required: true,
    minLength: [3, "Last name must be of at least 3 Characters."],
    maxLength: [30, "Last name cannot exceed 30 Characters."],
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Provide a valid email"],
  },
  phone: {
    type: String,
    required: true,
    minLength: [11, "Phone number must contain 11 Digits."],
    maxLength: [11, "Phone number must contain 11 Digits."],
  },
});
// form validation will be set as yo
export const FormValidation = mongoose.model("FormValidation", FormSchema);


// Function to save data to MongoDB
const saveFormData = async (formData) => {
  try {
    // Instantiate a model and set data
    const formInstance = new FormValidation(formData);

    // Save the document to MongoDB
    const savedForm = await formInstance.save();

    console.log('Data saved successfully:', savedForm);
    return savedForm;
  } catch (error) {
    console.error('Error saving data to MongoDB:', error);
    throw error;
  }
};

// Example usage
const formData = {
  firstName: 'Sample_firt_name',
  lastName: 'Sample_last_name',
  date: '0000-00-00',
  time: '00:00',
  email: 'sample.doe@example.com',
  phone: '00000000000',
};

// Call the function to save data
saveFormData(formData);
