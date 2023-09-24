import React from 'react'
import './Analytics.css'
import DashboardMenu from '../Mini/DashboardMenu'
import PieRechartComponent from '../Mini/PieChartDash'
// import DayChart from '../Mini/DayChart'
// import {
//   chart as ChartJS,

// } from ChartJS

function Analytics() {
  return (
    <>
    <div className="AnalyticsContainer">
        <DashboardMenu/>
        <h1 className="text-wrapper-analytics">Analytics</h1>
        <div className="analytics-line"/>
        <PieRechartComponent/>
        {/* <DayChart/> */}
    </div>
    </>
  )
}

export default Analytics