import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllUsersRequest } from '../../../store/action/adminAction'
import { loadAction } from '../../../store/action/loadingAction'

import TableFile from "../../../components/TableFile";


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

const UserDashboard = (props) => {
  const dispatch = useDispatch();
  const [ users ] = useSelector((state) => [state.admin.users]);
  useEffect(() => {
    dispatch(loadAction(true))
    dispatch(getAllUsersRequest())
  },[dispatch])
  const columns = React.useMemo(
    () => [
      {
        Header: "STT",
        accessor: "stt" // accessor is the "key" in the data
      },
      {
        Header: "Tên Đăng Nhập",
        accessor: "username"
      },
      {
        Header: "Email",
        accessor: "email"
      },
      {
        Header: "Trạng thái",
        accessor: "status"
      }
    ],
    []
  );
  
  const transData = (data) => {
  
    return data === undefined ? [] : data.map(user => {
      return {
        stt: user.stt,
        username: user.child.username,
        email: user.child.email,
        status: user.child.status === 1 ? (<i class="fa fa-unlock" style={{ fontSize: 30 }} aria-hidden="true"></i>) : (<i style={{ fontSize: 30 }} class="fa fa-lock" aria-hidden="true"></i>),
      }
    })
  }

  const dataTable = React.useMemo(
    () => transData(users),
    [users]
  );
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };

  const columnData = {
    labels,
    datasets: [
      {
        label: 'Lượng Người Dùng',
        data: [1,2,3,45,65,6],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  const Columnoptions = {
    maintainAspectRatio: false,
    responsive: false,
  };
  
  return (
    <>
      <TableFile columns={columns} dataTable={dataTable} title={"Danh Sách Người Dùng"} />
      <Line options={Columnoptions}  data={columnData} width={400} height={400}  />
    </>
  );
}
export default UserDashboard;
