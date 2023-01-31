/* tslint:disable */
import { useQuery } from "react-query";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const fetchAll = async () => {
  const res = await fetch("https://substantiveresearch.pythonanywhere.com/");
  return await res.json();
};

const PieChartStats = () => {
  //daisyui colors
  const COLORS = [
    "#3ABFF8",
    "#828DF8",
    "#F471B5",
    "#0CA6E9",
    "#2BD4BD",
    "#a78bfa",
    "#f472b6",
  ];

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
  const total = uniqueNames.reduce((acc, current) => {
    return acc + current.count;
  }, 0);

  const percentage = uniqueNames.map((item) => {
    const percentage = Math.round((item.count / total) * 100);
    return { name: item.name, percentage: percentage };
  });

  return (
    <div className="px-10">
      <h1 className="text-2xl font-bold">Percentage Breakdown</h1>
      <PieChart width={700} height={400}>
        <Pie
          data={percentage}
          cx={300}
          cy={200}
          innerRadius={90}
          outerRadius={150}
          labelLine={true}
          label={({ name, percentage }) => `${name} (${percentage}%)`}
          fill="#8884d8"
          dataKey={"percentage"}
        >
          {uniqueNames.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default PieChartStats;
