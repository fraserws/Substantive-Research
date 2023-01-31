import { useQuery } from "react-query";
import { DataGrid } from "@mui/x-data-grid";

const fetchAll = async () => {
  const res = await fetch("https://substantiveresearch.pythonanywhere.com/");
  return await res.json();
};

const Table = () => {
  const { data, isLoading, isError } = useQuery(
    ["date", "name", "sector_id"],
    fetchAll
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  const columns = [
    { field: "date", headerName: "Date", width: 150 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "sector_id", headerName: "Sector ID", width: 150 },
  ];

  const rows = data.map((item) => {
    return {
      date: item.date,
      name: item.name,
      sector_id: item.sector_id,
    };
  });

  return (
    <div className="mx-auto w-7/12 rounded py-10">
      <div
        style={{
          height: "100%",
          width: "90%",
          background: "white",
        }}
        className="w-full"
      >
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={25}
          checkboxSelection
          getRowId={(row) => row.date + row.name}
        />
      </div>
    </div>
  );
};

export default Table;
