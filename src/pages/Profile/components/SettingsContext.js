import react from 'react';

const SettingsContext = react.createContext({
  workMinutes: 1,
  breakMinutes: 5,
  setShowSettings: () => {}, // Placeholder function
  setWorkMinutes: () => {}, // Placeholder function
  setBreakMinutes: () => {}, // Placeholder function
  sessionCount: 0,
  setSessionCount: () => {}, // Add this line
});

export default SettingsContext;