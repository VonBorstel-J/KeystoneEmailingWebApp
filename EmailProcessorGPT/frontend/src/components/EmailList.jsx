import React from 'react';
import PropTypes from 'prop-types';
import EmailListItem from './EmailListItem';

const EmailList = ({ emails }) => (
  <div className="bg-white shadow-md rounded-lg">
    <ul>
      {emails.map((email) => (
        <EmailListItem key={email.id} email={email} />
      ))}
    </ul>
  </div>
);

EmailList.propTypes = {
  emails: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default EmailList;