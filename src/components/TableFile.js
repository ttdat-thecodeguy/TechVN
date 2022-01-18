import TableData from './support/TableData'
const TableFile = ({ columns, dataTable, title }) => {
    return (
        <>
          <div class="d-flex" style={{ marginTop: 20, marginLeft: 20 }}>
            <svg
              class="bd-placeholder-img rounded mr-2"
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              role="img"
            >
              <rect width="100%" height="100%" fill="#007aff"></rect>
            </svg>
            <h5 style={{ textTransform: "uppercase" }}>{title}</h5>
          </div>
          <TableData columns={columns} data={dataTable} />
        </>
      );
}
export default TableFile