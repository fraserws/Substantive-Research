/* tslint:disable */
import { useQuery } from "react-query";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const fetchAll = async () => {
  const res = await fetch("http://substantiveresearch.pythonanywhere.com/");
  return await res.json();
};

const BarChartStats = () => {
  const { data, isLoading, isError } = useQuery(
    ["date", "name", "sector_id"],
    fetchAll
  );

  if (isLoading)
    return (
      <div className="absolute right-1/2 bottom-1/2  translate-x-1/2 translate-y-1/2 transform ">
        <div className="h-64 w-64 animate-spin  rounded-full border-8 border-solid border-blue-400 border-t-transparent"></div>
      </div>
    );
  if (isError) return <div>Error</div>;

  const uniqueNames = data.reduce((acc, current) => {
    const x = acc.find((item) => item.name === current.name);
    if (!x) {
      return acc.concat([{ name: current.name, count: 1 }]);
    } else {
      return acc.map((item) =>
        item.name === current.name ? { ...item, count: item.count + 1 } : item
      );
    }
  }, []);
  console.log(uniqueNames);

  return (
    <>
      <h1 className="px-10 text-2xl font-bold">Count</h1>
      <div>
        <BarChart width={600} height={400} data={uniqueNames}>
          <YAxis />
          <XAxis dataKey="name" hide />
          <Tooltip />
          <Bar dataKey="count" fill="#3ABFF8" />
        </BarChart>
      </div>
    </>
  );
};

export default BarChartStats;
