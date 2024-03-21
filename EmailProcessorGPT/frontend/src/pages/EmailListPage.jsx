import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmails } from '../redux/actions/emailActions';
import EmailList from '../components/EmailList';

const EmailListPage = () => {
  const dispatch = useDispatch();
  const emails = useSelector((state) => state.emails.emails);
  const isLoading = useSelector((state) => state.emails.isLoading);
  const error = useSelector((state) => state.emails.error);

  useEffect(() => {
    dispatch(fetchEmails());
  }, [dispatch]);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-blue-900 mb-4">Email List</h1>
      {isLoading ? (
        <p>Loading emails...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <EmailList emails={emails} />
      )}
    </div>
  );
};

export default EmailListPage;