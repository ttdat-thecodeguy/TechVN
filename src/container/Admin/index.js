import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsersRequest } from '../../store/action/adminAction'

import TableFile from "../../components/TableFile";


import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


const AdminDashboard = (props) => {
  return (
    <>
      <div>Hello</div>
    </>
  );
};
export default AdminDashboard;
