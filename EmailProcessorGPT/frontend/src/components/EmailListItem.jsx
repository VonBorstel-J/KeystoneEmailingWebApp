import React from 'react';
import PropTypes from 'prop-types';
import { formatDate } from '../utils/dateUtils';

const EmailListItem = ({ email }) => (
  <li className="border-b border-gray-200 p-4 flex items-center">
    <div className="flex-shrink-0">
      <svg
        className="h-5 w-5 text-blue-900"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
      </svg>
    </div>
    <div className="ml-4">
      <div className="text-sm font-medium text-blue-900">{email.subject}</div>
      <div className="text-sm text-gray-700">
        From: {email.sender} | {formatDate(email.date)}
      </div>
    </div>
  </li>
);

EmailListItem.propTypes = {
  email: PropTypes.shape({
    subject: PropTypes.string.isRequired,
    sender: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default EmailListItem;