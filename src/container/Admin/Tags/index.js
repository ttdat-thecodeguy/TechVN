import TableFile from "../../../components/TableFile";
import React, { useEffect } from "react";

import { getTypeRequest } from "../../../store/action/typeAction";
import { loadAction } from "../../../store/action/loadingAction";
import { useDispatch, useSelector } from "react-redux";
import { withTranslation } from "react-i18next";
import { levelTypeSelector } from "../../../store/selector";
const TagsDashBoard = ({ t }) => {
  const dispatch = useDispatch();
  const [types] = useSelector((state) => [state.typeReducers]);
  useEffect(() => {
    dispatch(loadAction(true));
    dispatch(getTypeRequest());
  }, [dispatch]);

  const columns = React.useMemo(
    () => [
      {
        Header: "STT",
        accessor: "stt", // accessor is the "key" in the data
      },
      {
        Header: "Tên Thể Loại",
        accessor: "name",
      },
      {
        Header: "Level",
        accessor: "level",
      },
    ],
    []
  );

  const transData = (data) => {
    return data === undefined
      ? []
      : data.map((type, idx) => {
          return {
            stt: idx,
            name: type.name,
            level: levelTypeSelector(type.level, t),
          };
        });
  };

  const dataTable = React.useMemo(() => transData(types),[types]);

  return (
    <TableFile
      columns={columns}
      dataTable={dataTable}
      title={"Danh Sách Thể Loại"}
    />
  );
};

export default withTranslation("common")(TagsDashBoard);
