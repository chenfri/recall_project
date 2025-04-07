import React from 'react';

interface DatePickerProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({ label, value, onChange }) => {
  return (
    <div className="date-picker">
      <label>
        {label}
      </label>
        <input
          type="date"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="date-input"
        />
    </div>
  );
};

export default DatePicker; 