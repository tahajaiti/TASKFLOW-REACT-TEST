import React from 'react';
import {
  FaCheckCircle,
  FaClock,
  FaRegCircle,
  FaArrowUp,
  FaArrowRight,
  FaArrowDown
} from 'react-icons/fa';
import { TaskType } from '../types/TaskType';

const TaskCard: React.FC<TaskType> = ({
  title,
  description,
  status,
  priority,
  createdAt,
  updatedAt
}) => {
  const getPriorityColor = () => {
    switch (priority.toLowerCase()) {
      case 'high':
        return 'bg-red-900 border-red-700 hover:bg-red-800';
      case 'medium':
        return 'bg-orange-900 border-orange-700 hover:bg-orange-800';
      case 'low':
        return 'bg-green-900 border-green-700 hover:bg-green-800';
      default:
        return 'bg-gray-900 border-gray-700 hover:bg-gray-800';
    }
  };

  const getPriorityIcon = () => {
    switch (priority.toLowerCase()) {
      case 'high':
        return <FaArrowUp className="w-4 h-4 text-red-400" />;
      case 'medium':
        return <FaArrowRight className="w-4 h-4 text-orange-400" />;
      case 'low':
        return <FaArrowDown className="w-4 h-4 text-green-400" />;
      default:
        return null;
    }
  };

  const getStatusIcon = () => {
    switch (status.toLowerCase()) {
      case 'done':
        return <FaCheckCircle className="w-4 h-4" />;
      case 'doing':
        return <FaClock className="w-4 h-4" />;
      case 'todo':
        return <FaRegCircle className="w-4 h-4" />;
      default:
        return null;
    }
  };

  const getStatusColor = () => {
    switch (status.toLowerCase()) {
      case 'done':
        return 'bg-green-500/20 text-green-300 border border-green-500/30';
      case 'doing':
        return 'bg-blue-500/20 text-blue-300 border border-blue-500/30';
      case 'todo':
        return 'bg-gray-500/20 text-gray-300 border border-gray-500/30';
      default:
        return 'bg-gray-500/20 text-gray-300 border border-gray-500/30';
    }
  };

  return (
    <div className={`w-full h-fit mx-auto max-w-md rounded-lg border p-4 shadow-lg transition-all duration-200 ${getPriorityColor()}`}>
      <div className="mb-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <div className="flex items-center gap-2">
            {getPriorityIcon()}
            <span className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1.5 ${getStatusColor()}`}>
              {getStatusIcon()}
              {status.toUpperCase()}
            </span>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-sm text-gray-300">{description}</p>
      </div>

      <div className="flex justify-between text-xs text-gray-400 border-t border-gray-700 pt-3">
        <div>Created: {new Date(createdAt).toLocaleDateString()}</div>
        <div>Updated: {new Date(updatedAt).toLocaleDateString()}</div>
      </div>
    </div>
  );
};

export default TaskCard;