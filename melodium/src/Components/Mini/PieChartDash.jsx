import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import './PieChartDash.css';

const PieRechartComponent = () => {
  const [bookingDetails, setBookingDetails] = useState([]);
  const API_BASE = 'http://localhost:3001';

  const COLORS = ["#8884d8", "#82ca9d", "#FFBB28", "#FF8042", "#AF19FF","#fff"];

  // Initial pie data
  const initialPieData = [
    { name: "Audio Recording", value: 0 },
    { name: "Video Recording", value: 0 },
    { name: "Mixing and Mastering", value: 0 },
    { name: "Jam Room", value: 0 },
    { name: "Music Production", value: 0 },
    { name: "Session Artist", value: 0 }
  ];

  const [pieData, setPieData] = useState(initialPieData);

  const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      return (
        <div
          className="custom-tooltip"
          style={{
            backgroundColor: "#ffff",
            padding: "5px",
            border: "1px solid #cccc"
          }}
        >
          <label>{`${payload[0].name} : ${payload[0].value}`}</label>
        </div>
      );
    }
    return null;
  };

  const GetBookings = () => {
    let apiEndpoint = API_BASE + '/BookingDisplay';
    fetch(apiEndpoint)
      .then(res => res.json())
      .then(data => {
        // Calculate counts for each category
        const counts = data.reduce((acc, booking) => {
          const category = booking.TypeOfSession;
          if (acc[category]) {
            acc[category]++;
          } else {
            acc[category] = 1;
          }
          return acc;
        }, {});

        // Update the pie data
        const updatedPieData = pieData.map(item => ({
          ...item,
          value: counts[item.name] || 0
        }));

        console.log('Updated Pie Data:', updatedPieData); // Log the updated pie data

        setPieData(updatedPieData);
      })
      .catch((err) => console.error("Error: ", err));
  };

  useEffect(() => {
    // Call the function to fetch bookings
    GetBookings();
  }, []); // Empty dependency array means this effect runs once after initial render

  return (
    <div className="PieChartContainer">
      <PieChart width={600} height={300} className="Chars">
        <Pie
          data={pieData}
          color="#000000"
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={120}
          fill="#8884d8"
        >
          {pieData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
        <Legend />
      </PieChart>
    </div>
  );
};

export default PieRechartComponent;
