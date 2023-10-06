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
      <Card className="h-[80vh]">
        <Text className="text-2xl dark:text-slate-200">
          နတ်မျက်စိ လက်ထောက်ဗေဒင်
        </Text>

        <Table>
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
      </Card>
    </section>
  );
};

export default Loading;
