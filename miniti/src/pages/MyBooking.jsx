import React, { useState } from 'react';
import { Calendar, globalizeLocalizer } from 'react-big-calendar';
import globalize from 'globalize';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from 'lucide-react';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Header from '../components/Header';

const localizer = globalizeLocalizer(globalize);

// Sample events with more details
const events = [
  { 
    title: 'Pickup Scheduled',
    start: new Date(2025, 1, 15),
    type: 'pickup',
    status: 'confirmed'
  },
  { 
    title: 'Delivery Expected',
    start: new Date(2025, 1, 18),
    type: 'delivery',
    status: 'pending'
  }
];

const MyBooking = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [view, setView] = useState('month');

  // Custom toolbar component
  const CustomToolbar = (toolbar) => {
    const goToBack = () => {
      toolbar.onNavigate('PREV');
    };

    const goToNext = () => {
      toolbar.onNavigate('NEXT');
    };

    const goToToday = () => {
      toolbar.onNavigate('TODAY');
    };

    return (
      <div className="flex justify-between items-center p-4 bg-white border-b">
        <div className="flex items-center gap-4">
          <button
            onClick={goToToday}
            className="px-4 py-2 text-sm bg-green-50 text-[#4DA674] rounded-full hover:bg-blue-100 transition-colors flex items-center gap-2"
          >
            <CalendarIcon className="w-4 h-4" />
            Today
          </button>
          <div className="flex items-center gap-2">
            <button
              onClick={goToBack}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={goToNext}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
        <h2 className="text-xl font-semibold text-gray-800">
          {toolbar.label}
        </h2>
        <div className="flex gap-2">
          {['month', 'week', 'day'].map(viewName => (
            <button
              key={viewName}
              onClick={() => setView(viewName)}
              className={`px-4 py-2 rounded-full text-sm capitalize transition-colors ${
                view === viewName 
                  ? 'bg-[#4DA674] text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {viewName}
            </button>
          ))}
        </div>
      </div>
    );
  };

  // Custom event component with tooltips
  const CustomEvent = ({ event }) => {
    const isPickup = event.type === 'pickup';
    const statusColors = {
      confirmed: 'bg-green-500',
      pending: 'bg-yellow-500'
    };

    return (
      <div className="group relative">
        <div className={`w-full h-2 ${statusColors[event.status]} rounded-lg`} />
        <div className="absolute hidden group-hover:block z-10 p-3 bg-white rounded-lg shadow-lg border mt-2 w-48">
          <div className="text-sm">
            <p className="font-semibold text-gray-800">{event.title}</p>
            <p className="text-gray-600 capitalize">
              Status: {event.status}
            </p>
            <p className="text-gray-600">
              {new Date(event.start).toLocaleTimeString([], { 
                hour: '2-digit', 
                minute: '2-digit' 
              })}
            </p>
          </div>
        </div>
      </div>
    );
  };

  // Custom styles for date cells
  const dayPropGetter = (date) => {
    const today = new Date();
    const isToday = date.getDate() === today.getDate() && 
                   date.getMonth() === today.getMonth() && 
                   date.getYear() === today.getYear();
    
    return {
      className: `${
        isToday ? 'bg-blue-50' : ''
      } hover:bg-gray-50 transition-colors`,
      style: {
        margin: '1px',
        borderRadius: '8px'
      }
    };
  };

  return (
    <div className="w-full">
      <Header/>

<div className=" bg-white min-h-screen">
  <div className="max-w-6xl mx-auto ">
    <div className="bg-white rounded-xl shadow-lg p-8 overflow-hidden">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="start"
        style={{ height: 700 }}
        view={view}
        onView={setView}
        dayPropGetter={dayPropGetter}
        components={{
          toolbar: CustomToolbar,
          event: CustomEvent
        }}
        onSelectSlot={(slotInfo) => setSelectedDate(slotInfo.start)}
        selectable
        popup
      />
    </div>

    {selectedDate && (
      <div className="mt-4 p-4 bg-white rounded-lg shadow border">
        <h3 className="text-lg font-semibold text-gray-800">
          Selected Date: {selectedDate.toLocaleDateString()}
        </h3>
        <button
          onClick={() => setSelectedDate(null)}
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Schedule Pickup
        </button>
      </div>
    )}
  </div>
</div>
      </div>
  );
};

export default MyBooking;