import {
  Table,
  TableHead,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
  Card,
  Text,
} from "@tremor/react";

const Loading = () => {
  const items = Array.from({ length: 10 });

  return (
    <section className="container flex items-center justify-center h-full mx-auto">
      <Card className="flex flex-col justify-between  lg:h-[90vh] w-screen h-screen">
        <div className="h-[80%] space-y-5">
          <Text className="text-2xl dark:text-slate-200">
            နတ်မျက်စိ လက်ထောက်ဗေဒင်
          </Text>

          <Table className="h-full">
            <TableHead>
              <TableRow>
                <TableHeaderCell>No .</TableHeaderCell>
                <TableHeaderCell>Questions</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((item, index) => (
                <TableRow key={index} className="animate-pulse">
                  <TableCell className="h-14 bg-white/30"></TableCell>
                  <TableCell className="h-14 bg-white/30"></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </section>
  );
};

export default Loading;
