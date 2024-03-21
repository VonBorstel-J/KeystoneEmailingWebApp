import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTemplates, createTemplate, updateTemplate, deleteTemplate } from '../redux/actions/templateActions';
import TemplateList from '../components/TemplateList';
import TemplateForm from '../components/TemplateForm';

const TemplatesPage = () => {
  const dispatch = useDispatch();
  const templates = useSelector((state) => state.templates.templates);
  const isLoading = useSelector((state) => state.templates.isLoading);
  const error = useSelector((state) => state.templates.error);
  const [showForm, setShowForm] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  useEffect(() => {
    dispatch(fetchTemplates());
  }, [dispatch]);

  const handleCreateTemplate = (template) => {
    dispatch(createTemplate(template));
    setShowForm(false);
  };

  const handleUpdateTemplate = (updatedTemplate) => {
    dispatch(updateTemplate(updatedTemplate));
    setSelectedTemplate(null);
    setShowForm(false);
  };

  const handleDeleteTemplate = (templateId) => {
    dispatch(deleteTemplate(templateId));
  };

  const handleShowForm = () => {
    setShowForm(true);
    setSelectedTemplate(null);
  };

  const handleEditTemplate = (template) => {
    setSelectedTemplate(template);
    setShowForm(true);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-blue-900 mb-4">Templates</h1>
      {isLoading ? (
        <p>Loading templates...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <>
          <div className="mb-4">
            <button
              onClick={handleShowForm}
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
            >
              Create Template
            </button>
          </div>
          <TemplateList
            templates={templates}
            onEdit={handleEditTemplate}
            onDelete={handleDeleteTemplate}
          />
          {showForm && (
            <TemplateForm
              template={selectedTemplate}
              onSubmit={selectedTemplate ? handleUpdateTemplate : handleCreateTemplate}
              onCancel={() => setShowForm(false)}
            />
          )}
        </>
      )}
    </div>
  );
};

export default TemplatesPage;