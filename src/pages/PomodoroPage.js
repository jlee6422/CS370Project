import React, { useState } from "react";
import { TodoWrapper } from "./TodoWrapper"; // Import TodoWrapper
import ChatComponent from "./ChatComponent"; // Import the ChatComponent
import Timer from "./Alarm/Timer"; // Ensure this path is correct
import Function from "./Alarm/TimerFunction";
import SettingsContext from "./Alarm/SettingsContext";

const PomodoroPage = () => {
  const [completedPomodoros, setCompletedPomodoros] = useState(0); // State for completedPomodoros
  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);
  const [sessionCount, setSessionCount] = useState(0);

  // Function to increment completedPomodoros
  const incrementCompletedPomodoros = () => {
    setCompletedPomodoros((prevCount) => prevCount + 1);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-1/5 bg-gray-800 text-white h-full">
        {/* Channels section */}
        <div className="overflow-y-auto p-4 mt-20 h-1/2">
          <div className="bg-gray-800 p-4 rounded-lg mb-4">
            <h2 className="font-bold">Channels</h2>
            <ul>
              <li>
                CS 377
                <ul>
                  <li>Group 1</li>
                  <li>Group 2</li>
                </ul>
              </li>
              <li>
                CS 370
                <ul>
                  <li>Group 1</li>
                  <li>Group 2</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        {/* Todo component */}
        <div className="overflow-y-auto h-1/2">
          <TodoWrapper />
        </div>
      </div>

      {/* Main content area with bottom bar */}
      <div className="w-4/5 flex flex-col bg-gray-700 h-screen">
        <SettingsContext.Provider
          value={{
            showSettings,
            setShowSettings,
            workMinutes,
            breakMinutes,
            setWorkMinutes,
            setBreakMinutes,
            sessionCount,
            setSessionCount,
          }}
        >
          <div className="h-1/5 bg-gray-700 p-4">
            <Function />
          </div>
          <div className="text-white">Completed Sessions: {sessionCount}</div>
        </SettingsContext.Provider>
      </div>
    </div>
  );
};

export default PomodoroPage;
