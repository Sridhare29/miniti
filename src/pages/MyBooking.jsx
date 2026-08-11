import React, { useEffect, useState } from 'react';
import { Calendar, globalizeLocalizer } from 'react-big-calendar';
import globalize from 'globalize';
import {
  ChevronLeft,
  ChevronRight,
  Calendar as CalendarIcon,
  Plus,
  Clock,
  Package,
  X,
  DollarSign,
  Edit3,
} from 'lucide-react';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Header from '../components/Header';
import { getAllPickup } from '../state/actions/Pickup.action';
import { useDispatch, useSelector } from 'react-redux';

const localizer = globalizeLocalizer(globalize);

// Define consistent status colors
const statusColors = {
  pending: {
    bg: 'bg-yellow-100',
    text: 'text-yellow-800',
    border: 'border-yellow-300',
    full: 'bg-yellow-500',
    light: 'bg-yellow-50',
  },
  confirmed: {
    bg: 'bg-green-100',
    text: 'text-green-800',
    border: 'border-green-300',
    full: 'bg-green-500',
    light: 'bg-green-50',
  },
  started: {
    bg: 'bg-blue-100',
    text: 'text-blue-800',
    border: 'border-blue-300',
    full: 'bg-blue-500',
    light: 'bg-blue-50',
  },
  completed: {
    bg: 'bg-gray-100',
    text: 'text-gray-800',
    border: 'border-gray-300',
    full: 'bg-gray-500',
    light: 'bg-gray-50',
  },
  cancelled: {
    bg: 'bg-red-100',
    text: 'text-red-800',
    border: 'border-red-300',
    full: 'bg-red-500',
    light: 'bg-red-50',
  },
};

const statusText = {
  confirmed: 'Confirmed',
  started: 'In Progress',
  pending: 'Pending',
  completed: 'Completed',
  cancelled: 'Cancelled',
};

const slotIcons = {
  morning: '🌅',
  afternoon: '☀️',
  evening: '🌆',
};

const MyBooking = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [view, setView] = useState('month');
  const [showEditForm, setShowEditForm] = useState(false);
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [editFormData, setEditFormData] = useState({
    eventId: null,
    status: '',
    paymentAmount: '',
    notes: '',
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPickup());
  }, [dispatch]);

  const pickupState = useSelector((state) => state.pickup.fetchedPickups);

  const pickupEvents =
    pickupState?.map((pickup) => {
      const slotTimeRanges = {
        morning: '8:00 AM - 12:00 PM',
        afternoon: '1:00 PM - 5:00 PM',
        evening: '6:00 PM - 9:00 PM',
      };

      return {
        title: `${pickup.pickupSlot ? pickup.pickupSlot.charAt(0).toUpperCase() + pickup.pickupSlot.slice(1) : ''} Pickup`,
        start: new Date(pickup.pickupDate),
        end: new Date(pickup.pickupDate),
        type: 'pickup',
        status: pickup.status || 'pending',
        slot: pickup.pickupSlot,
        timeRange: slotTimeRanges[pickup.pickupSlot] || '',
        weight: pickup.expectedWeight,
        id: pickup.id,
        paymentAmount: pickup.paymentAmount || 0,
      };
    }) || [];

  const CustomToolbar = (toolbar) => {
    const goToBack = () => {
      const today = new Date();
      const currentDate = new Date(toolbar.date);
      if (currentDate > today) {
        toolbar.onNavigate('PREV');
      }
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
        <h2 className="text-xl font-semibold text-gray-800">{toolbar.label}</h2>
        <div className="flex gap-2">
          {['month', 'week', 'day'].map((viewName) => (
            <button
              key={viewName}
              onClick={() => setView(viewName)}
              className={`px-4 py-2 rounded-full text-sm capitalize transition-colors ${
                view === viewName ? 'bg-[#4DA674] text-white' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {viewName}
            </button>
          ))}
        </div>
      </div>
    );
  };

  const CustomEvent = ({ event }) => {
    const status = event.status || 'pending';
    const colors = statusColors[status] || statusColors.pending;

    return (
      <div className="group relative">
        <div className={`${colors.bg} ${colors.border} border-l-4 p-1 rounded-md`}>
          <div className="flex items-center gap-1">
            <span className="text-xs mr-1">{slotIcons[event.slot] || '📦'}</span>
            <div className="flex flex-col flex-1 min-w-0">
              <span className={`text-xs font-medium ${colors.text} truncate`}>
                {event.slot ? event.slot.charAt(0).toUpperCase() + event.slot.slice(1) : 'Pickup'}
              </span>
              <span className={`text-xs ${colors.text} opacity-90 truncate`}>
                {statusText[status] || status}
              </span>
            </div>
          </div>
        </div>

        <div className="absolute hidden group-hover:block z-10 p-4 bg-white rounded-lg shadow-xl border-2 mt-2 w-72 left-0">
          <div className="text-sm">
            <div className="flex justify-between items-start mb-3">
              <div>
                <p className="font-semibold text-gray-800 text-base">{event.title}</p>
                <p className="text-gray-500 text-xs">
                  {new Date(event.start).toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
              <span
                className={`px-3 py-1 text-xs rounded-full text-white font-medium ${colors.full}`}
              >
                {statusText[status] || status}
              </span>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-3 text-gray-600">
                <Clock className="w-4 h-4 text-blue-500" />
                <span className="font-medium">{event.timeRange}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Package className="w-4 h-4 text-orange-500" />
                <span>
                  Expected Weight: <strong>{event.weight} kg</strong>
                </span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <DollarSign className="w-4 h-4 text-green-500" />
                <span>
                  Payment: <strong>${event.paymentAmount || 0}</strong>
                </span>
              </div>
            </div>

            <div className="mt-3 pt-2 border-t border-gray-100">
              <p className="text-xs text-gray-500">Click the date to edit pickup details</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const handleDateCellClick = (date, events) => {
    if (events.length > 0) {
      setSelectedEvents(events);
      setShowEditForm(true);
      setEditFormData({
        eventId: events[0].id,
        status: events[0].status,
        paymentAmount: events[0].paymentAmount || '',
        notes: '',
      });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Updated data:', editFormData);
    setShowEditForm(false);
    setSelectedEvents([]);
    setEditFormData({
      eventId: null,
      status: '',
      paymentAmount: '',
      notes: '',
    });
  };

  const handleInputChange = (field, value) => {
    setEditFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const CustomDateCellWrapper = ({ children, value }) => {
    const dateEvents = pickupEvents.filter((event) => {
      const eventDate = new Date(event.start);
      return (
        eventDate.getDate() === value.getDate() &&
        eventDate.getMonth() === value.getMonth() &&
        eventDate.getFullYear() === value.getFullYear()
      );
    });

    const hasEvents = dateEvents.length > 0;
    const today = new Date();
    const isToday =
      value.getDate() === today.getDate() &&
      value.getMonth() === today.getMonth() &&
      value.getFullYear() === today.getFullYear();
    const isPastDate = value < today.setHours(0, 0, 0, 0);

    return (
      <div
        className={`relative w-full h-full ${isToday ? 'bg-blue-50' : ''} ${isPastDate ? 'opacity-70' : ''}`}
        onClick={() => hasEvents && handleDateCellClick(value, dateEvents)}
      >
        {children}
        {hasEvents && (
          <div className="absolute bottom-1 left-1 right-1 flex justify-center gap-1">
            {dateEvents.map((event, index) => {
              const status = event.status || 'pending';
              const colors = statusColors[status] || statusColors.pending;
              return (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${colors.full}`}
                  title={`${statusText[status] || status} pickup`}
                />
              );
            })}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="w-full relative">
      <Header />

      <div className="bg-white min-h-screen relative">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white p-4 mb-4 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-600">Click on dates with events to edit</div>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-gray-700">Time Slots:</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">🌅 Morning</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">☀️ Afternoon</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">🌆 Evening</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-gray-700">Status:</span>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <span className="text-sm">Pending</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="text-sm">Confirmed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-500" />
                    <span className="text-sm">In Progress</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-gray-500" />
                    <span className="text-sm">Completed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <span className="text-sm">Cancelled</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Calendar
            localizer={localizer}
            events={pickupEvents}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 700 }}
            view={view}
            onView={setView}
            selectable
            popup
            components={{
              toolbar: CustomToolbar,
              event: CustomEvent,
              dateCellWrapper: CustomDateCellWrapper,
            }}
            dayPropGetter={(date) => {
              const today = new Date();
              const normalizedToday = new Date(today.setHours(0, 0, 0, 0));
              const normalizedDate = new Date(date.setHours(0, 0, 0, 0));
              const isPastDate = normalizedDate < normalizedToday;

              return {
                className: isPastDate ? 'bg-gray-50 text-gray-400' : '',
                style: {
                  margin: '1px',
                  borderRadius: '8px',
                  pointerEvents: isPastDate ? 'none' : 'auto',
                },
              };
            }}
            eventPropGetter={(event) => {
              const status = event.status || 'pending';
              const colors = statusColors[status] || statusColors.pending;
              const now = new Date();
              const eventDate = new Date(event.start);
              const isPastEvent = eventDate < now.setHours(0, 0, 0, 0);

              return {
                className: `${isPastEvent ? 'opacity-70' : ''} ${colors.bg} ${colors.text} ${colors.border}`,
                style: {
                  borderLeftWidth: '4px',
                  borderRadius: '4px',
                  padding: '2px 4px',
                  margin: '1px 0',
                  fontSize: '12px',
                },
              };
            }}
            onSelectSlot={(slotInfo) => setSelectedDate(slotInfo.start)}
          />

          {showEditForm && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
                <div className="flex items-center justify-between p-6 border-b">
                  <h2 className="text-xl font-semibold text-gray-800">Edit Pickup Details</h2>
                  <button
                    onClick={() => setShowEditForm(false)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <form onSubmit={handleFormSubmit} className="p-6 space-y-6">
                  {selectedEvents.length > 0 && (
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="font-medium text-gray-800 mb-2">Pickup Information</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Date:</span>
                          <span>{new Date(selectedEvents[0].start).toLocaleDateString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Time Slot:</span>
                          <span className="capitalize">{selectedEvents[0].slot}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Weight:</span>
                          <span>{selectedEvents[0].weight} kg</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Current Status:</span>
                          <span className="capitalize font-medium">{selectedEvents[0].status}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                    <select
                      value={editFormData.status}
                      onChange={(e) => handleInputChange('status', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    >
                      <option value="">Select Status</option>
                      <option value="pending">Pending</option>
                      <option value="confirmed">Confirmed</option>
                      <option value="started">In Progress</option>
                      <option value="completed">Completed</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Payment Amount ($)
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="number"
                        step="0.01"
                        min="0"
                        value={editFormData.paymentAmount}
                        onChange={(e) => handleInputChange('paymentAmount', e.target.value)}
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="0.00"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Notes (Optional)
                    </label>
                    <textarea
                      value={editFormData.notes}
                      onChange={(e) => handleInputChange('notes', e.target.value)}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Add any additional notes..."
                    />
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button
                      type="button"
                      onClick={() => setShowEditForm(false)}
                      className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    >
                      Update Pickup
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyBooking;
