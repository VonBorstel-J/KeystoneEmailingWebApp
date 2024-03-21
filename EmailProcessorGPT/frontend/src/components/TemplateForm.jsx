import React, { useState } from 'react';
// Import any additional components or libraries as needed

const TemplateForm = () => {
  // State for input values
  const [templateName, setTemplateName] = useState('');
  const [description, setDescription] = useState('');

  // State for validation messages
  const [templateNameError, setTemplateNameError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');

  // Handler for template name input change
  const handleTemplateNameChange = (e) => {
    const value = e.target.value;
    setTemplateName(value);
    // Reset validation message
    if (value) setTemplateNameError('');
    else setTemplateNameError('Template name is required.');
  };

  // Handler for description input change
  const handleDescriptionChange = (e) => {
    const value = e.target.value;
    setDescription(value);
    // Reset validation message
    if (value) setDescriptionError('');
    else setDescriptionError('Description is required.');
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;

    // Validate template name
    if (!templateName.trim()) {
      setTemplateNameError('Template name is required.');
      isValid = false;
    }

    // Validate description
    if (!description.trim()) {
      setDescriptionError('Description is required.');
      isValid = false;
    }

    // Proceed with form submission if valid
    if (isValid) {
      // Submit the form data
      console.log('Form data:', { templateName, description });
      // Reset form (optional)
      setTemplateName('');
      setDescription('');
      setTemplateNameError('');
      setDescriptionError('');
      // Show a success message or navigate away (optional)
    }
  };

  return (
    <div>
      <h2>Template Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="templateName">Template Name:</label>
          <input
            type="text"
            id="templateName"
            value={templateName}
            onChange={handleTemplateNameChange}
          />
          {templateNameError && <div className="error">{templateNameError}</div>}
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
          ></textarea>
          {descriptionError && <div className="error">{descriptionError}</div>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TemplateForm;
