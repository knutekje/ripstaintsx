import { url } from '../../../App';
import { useQuery } from '@tanstack/react-query';
import { ReportDTO, YearMonthProp } from '../../../Types/Types';
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Flex, Spinner } from '@chakra-ui/react';
import { FC } from 'react';


export const ByDepartment : FC<YearMonthProp> = (props): JSX.Element => 
{
  const { data: departments, isLoading } = useQuery<ReportDTO[]>({
    queryKey: ["departments"],
    queryFn: async () => {
      try {
        const res = await fetch(url + `/stats/department?year=${props.year}&month=${props.month}`);
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || "Something went wrong");
        }
        return data || [];
      } catch (error) {
        console.log(error);
      }
    },
  });

  ChartJS.register(ArcElement, Tooltip, Legend);

  const data = {
    labels: 
     departments?.map(item => item.itemName)
    ,
    datasets: [{
      label: 'My First Dataset',
      data: departments?.map(item => item.sumValue),
      backgroundColor: [
        "#00FFFF",
        '#7FFF00',
        '#FF00FF'
      ],
      hoverOffset: 4
    }]
  };

  
  return (
    <>
      {!isLoading ? <Spinner size="lg"/>:
    <Flex
      border={"1px"}	
      borderColor={"gray.600"}	
      p={2}		
      borderRadius={"lg"}
      width={"50%"}>
      
      <Pie data={data} />

        </Flex>
      }
      </>
  )
  }