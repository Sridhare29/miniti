import React, { useEffect, useState } from "react";
import { Calendar, globalizeLocalizer } from "react-big-calendar";
import globalize from "globalize";
import {
  ChevronLeft,
  ChevronRight,
  Calendar as CalendarIcon,
  Plus,
  Clock,
  Package,
} from "lucide-react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Header from "../components/Header";
import { getAllPickup } from "../state/actions/Pickup.action";
import { useDispatch, useSelector } from "react-redux";

const localizer = globalizeLocalizer(globalize);

const MyBooking = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [view, setView] = useState("month");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPickup());
  }, [dispatch]);

  const pickupState = useSelector((state) => state.pickup.fetchedPickups);

  // Enhanced pickup events with more details and slot-specific titles
  const pickupEvents =
    pickupState?.map((pickup) => {
      // Generate appropriate title based on time slot
      const slotTitles = {
        morning: "Morning Pickup",
        afternoon: "Afternoon Pickup",
        evening: "Evening Pickup",
      };

      // Time ranges for each slot
      const slotTimeRanges = {
        morning: "8:00 AM - 12:00 PM",
        afternoon: "1:00 PM - 5:00 PM",
        evening: "6:00 PM - 9:00 PM",
      };

      // Create event with enhanced details
      return {
        title: slotTitles[pickup.pickupSlot] || "Pickup Scheduled",
        start: new Date(pickup.pickupDate),
        end: new Date(pickup.pickupDate),
        type: "pickup",
        status: pickup.status || "pending",
        slot: pickup.pickupSlot,
        timeRange: slotTimeRanges[pickup.pickupSlot] || "",
        weight: pickup.expectedWeight,
        id: pickup.id,
      };
    }) || [];

  const CustomToolbar = (toolbar) => {
    const goToBack = () => {
      const today = new Date();
      const currentDate = new Date(toolbar.date);
      if (currentDate > today) {
        toolbar.onNavigate("PREV");
      }
    };

    const goToNext = () => {
      toolbar.onNavigate("NEXT");
    };

    const goToToday = () => {
      toolbar.onNavigate("TODAY");
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
          {["month", "week", "day"].map((viewName) => (
            <button
              key={viewName}
              onClick={() => setView(viewName)}
              className={`px-4 py-2 rounded-full text-sm capitalize transition-colors ${
                view === viewName
                  ? "bg-[#4DA674] text-white"
                  : "text-gray-600 hover:bg-gray-100"
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
    // Color mapping for different slots
    const slotColors = {
      morning: "bg-blue-500",
      afternoon: "bg-orange-500",
      evening: "bg-purple-500",
    };

    // Status indicator colors
    const statusColors = {
      confirmed: "bg-green-500",
      started: "bg-blue-500",
      pending: "bg-yellow-500",
      completed: "bg-gray-500",
    };

    // Status text for readability
    const statusText = {
      confirmed: "Confirmed",
      started: "In Progress",
      pending: "Pending",
      completed: "Completed",
    };

    return (
      <div className="group relative">
        <div
          className={`flex items-center gap-1 px-1 py-0.5 rounded-sm ${
            slotColors[event.slot] || "bg-gray-400"
          }`}
        >
          <Clock className="w-3 h-3 text-white" />
          <span className="text-xs font-medium text-white truncate">
            {event.slot
              ? event.slot.charAt(0).toUpperCase() + event.slot.slice(1)
              : "Pickup"}
          </span>
          <div
            className={`ml-auto w-2 h-2 rounded-full ${
              statusColors[event.status] || "bg-gray-200"
            }`}
          />
        </div>

        {/* Enhanced tooltip with more details */}
        <div className="absolute hidden group-hover:block z-10 p-3 bg-white rounded-lg shadow-lg border mt-2 w-64 left-0">
          <div className="text-sm">
            <div className="flex justify-between items-center mb-2">
              <p className="font-semibold text-gray-800">{event.title}</p>
              <span
                className={`px-2 py-0.5 text-xs rounded-full text-white ${
                  statusColors[event.status] || "bg-gray-400"
                }`}
              >
                {statusText[event.status] || event.status}
              </span>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="w-4 h-4" />
                <span>{event.timeRange}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Package className="w-4 h-4" />
                <span>Weight: {event.weight} kg</span>
              </div>
              <p className="text-gray-600 pt-1">
                {new Date(event.start).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Custom date cell renderer to mark days with events
  const CustomDateCellWrapper = ({ children, value }) => {
    // Check if there are events on this date
    const hasEvents = pickupEvents.some((event) => {
      const eventDate = new Date(event.start);
      return (
        eventDate.getDate() === value.getDate() &&
        eventDate.getMonth() === value.getMonth() &&
        eventDate.getFullYear() === value.getFullYear()
      );
    });

    // Find events for this date
    const dateEvents = pickupEvents.filter((event) => {
      const eventDate = new Date(event.start);
      return (
        eventDate.getDate() === value.getDate() &&
        eventDate.getMonth() === value.getMonth() &&
        eventDate.getFullYear() === value.getFullYear()
      );
    });

    // Group events by slot
    const slots = {
      morning: dateEvents.filter((e) => e.slot === "morning").length,
      afternoon: dateEvents.filter((e) => e.slot === "afternoon").length,
      evening: dateEvents.filter((e) => e.slot === "evening").length,
    };

    return (
      <div className="relative w-full h-full">
        {children}
        {hasEvents && (
          <div className="absolute bottom-1 left-0 right-0 flex justify-center gap-1">
            {slots.morning > 0 && <div className="w-2 h-2 rounded-full bg-blue-500" />}
            {slots.afternoon > 0 && <div className="w-2 h-2 rounded-full bg-orange-500" />}
            {slots.evening > 0 && <div className="w-2 h-2 rounded-full bg-purple-500" />}
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
          {/* Legend for time slots */}
          <div className="bg-white p-4 mb-4 rounded-lg shadow flex items-center gap-8 justify-end">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500" />
              <span className="text-sm">Morning</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-orange-500" />
              <span className="text-sm">Afternoon</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-purple-500" />
              <span className="text-sm">Evening</span>
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
                className: isPastDate ? "bg-gray-100 text-gray-400" : "",
                style: {
                  margin: "1px",
                  borderRadius: "8px",
                  pointerEvents: isPastDate ? "none" : "auto",
                },
              };
            }}
            eventPropGetter={(event) => {
              const now = new Date();
              const eventDate = new Date(event.start);
              const isPastEvent = eventDate < now.setHours(0, 0, 0, 0);

              return {
                className: isPastEvent ? "opacity-40 pointer-events-none" : "",
                style: {},
              };
            }}
            onSelectSlot={(slotInfo) => setSelectedDate(slotInfo.start)}
          />

          {/* Schedule Pickup panel visibility based on selected date */}
          {selectedDate && new Date(selectedDate) >= new Date() && (
            <div className="fixed bottom-4 left-4 bg-green-100 text-gray-700 p-4 rounded-lg">
              {/* Panel Content for scheduling */}
              <h3 className="text-lg font-semibold">Schedule Pickup</h3>
              <div>
                <span className="block">Select a pickup time slot below:</span>
                <div className="flex gap-4 mt-2">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                    Morning
                  </button>
                  <button className="bg-orange-500 text-white px-4 py-2 rounded-lg">
                    Afternoon
                  </button>
                  <button className="bg-purple-500 text-white px-4 py-2 rounded-lg">
                    Evening
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyBooking;
