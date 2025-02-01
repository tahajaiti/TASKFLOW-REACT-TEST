import { useState } from "react";
import { FaMarker } from "react-icons/fa";
import { TaskType } from "./TaskCard";

interface AddModelProps {
  isOpen: boolean;
  onClose: () => void;
  addHandler: (task: Omit<TaskType, "id">) => void;
}

const AddModal: React.FC<AddModelProps> = ({ isOpen, onClose, addHandler }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    status: "todo",
    priority: "P3",
  });
  
  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).id === "backDrop") {
      onClose();
    }
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    if (!formData.title || !formData.description || !formData.date) return;
    
    addHandler(formData);
    setFormData({ title: "", description: "", date: "", status: "todo", priority: "P3" }); // Reset form
    onClose();
  };

  
  
  if (!isOpen) return null;
  return (
    <section
      id="backDrop"
      onClick={handleOutsideClick}
      className="fixed inset-0 flex items-center justify-center bg-gray-900/50 backdrop-blur-md z-50"
    >
      <div className="lg:w-[400px] w-full max-w-lg bg-gray-700 rounded-2xl p-5 flex flex-col border border-gray-500 shadow-lg">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl text-white font-semibold">New Task</h2>
          <FaMarker
            onClick={onClose}
            className="text-xl text-white hover:scale-110 hover:text-red-600 active:scale-95 active:text-red-900 cursor-pointer transition-all"
          />
        </div>

        {/* Form */}
        <div className="space-y-3">
          <div>
            <label htmlFor="title" className="text-lg text-gray-300">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="input-s w-full"
              placeholder="Enter task title"
            />
          </div>
          <div>
            <label htmlFor="description" className="text-lg text-gray-300">Description</label>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="input-s w-full"
              placeholder="Enter task description"
            />
          </div>
          <div>
            <label htmlFor="date" className="text-lg text-gray-300">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="input-s w-full"
              min="2020-01-01"
            />
          </div>
          <div>
            <label htmlFor="status" className="text-lg text-gray-300">Status</label>
            <select name="status" value={formData.status} onChange={handleChange} className="input-s w-full">
              <option value="todo">To Do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
          </div>
          <div>
            <label htmlFor="priority" className="text-lg text-gray-300">Priority</label>
            <select name="priority" value={formData.priority} onChange={handleChange} className="input-s w-full">
              <option value="P3">P3</option>
              <option value="P2">P2</option>
              <option value="P1">P1</option>
            </select>
          </div>
        </div>

        {/* Apply Button */}
        <button onClick={handleSubmit}
          className="btn-primary m-auto flex justify-center p-2 mt-4 w-full disabled:bg-gray-500 disabled:cursor-not-allowed"
          disabled={!formData.title || !formData.description || !formData.date}
        >
          Apply
        </button>
      </div>
    </section>
  );
};

export default AddModal;
