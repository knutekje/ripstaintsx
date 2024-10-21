import { url } from '../../../App';
import { useQuery } from '@tanstack/react-query';
import { ReportDTO } from '../../../Types/Types';
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Flex } from '@chakra-ui/react';


export const ByDepartment = () => 
{
  const { data: departments, isLoading } = useQuery<ReportDTO[]>({
    queryKey: ["departments"],
    queryFn: async () => {
      try {
        const res = await fetch(url + "/stats/department");
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
        'rgb(255, 99, 132)',
        'rgb(255, 0, 21)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };

  
  return (
    <Flex
      border={"1px"}	
      borderColor={"gray.600"}	
      p={2}		
      borderRadius={"lg"}
      width={"50%"}>
      
      <Pie data={data} />

    </Flex>
  )
  }