import { FoodItem } from "@/components/food-item";
import { LineGraph } from "@/components/line-graph";

const sampleData = [
  { name: 'Jan', value: 30 },
  { name: 'Feb', value: 20 },
  { name: 'Mar', value: 50 },
  { name: 'Apr', value: 40 },
  { name: 'May', value: 60 },
  { name: 'Jun', value: 70 },
  { name: 'Jul', value: 80 },
  { name: 'Aug', value: 90 },
  { name: 'Sep', value: 100 },
  { name: 'Oct', value: 110 },
  { name: 'Nov', value: 120 },
  { name: 'Dec', value: 130 },
];
export default function Home() {
  return (
    <>
      <FoodItem imageUrl={'images/mockup/column-1.jpg'} note="11.06.Morning" />
      <LineGraph height={400} data={sampleData} />
    </>);
}
