import { ResponsivePie } from "@nivo/pie";
import { tokens } from "../theme";
import {  Box , useTheme } from "@mui/material";
import { mockPieData as data } from "../data/mockData";

const PieChart = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return <Box
    height = "100%"
    fontSize= "20px"
        >
          <ResponsivePie
      data={data}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
      }}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      padAngle={1}
      cornerRadius={2}
      activeOuterRadiusOffset={8}
      borderWidth={2}
      arcLinkLabelsSkipAngle={7}
      arcLinkLabelsTextOffset={8}
      arcLinkLabelsTextColor="#000000"
      arcLinkLabelsDiagonalLength={15}
      arcLinkLabelsStraightLength={28}
      arcLinkLabelsThickness={2}
      arcLabel="value"
      arcLabelsRadiusOffset={0.6}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor="black"
      arcLabelsTextSize="20px"
      defs={[
          {
              id: 'dots',
              type: 'patternDots',
              color: 'rgba(255, 255, 255, 0.3)',
              size: 10,
              padding: 1,
              stagger: true
          },
          {
              id: 'lines',
              type: 'patternLines',
              color: 'rgba(255, 255, 255, 0.3)',
              rotation: -45,
              lineWidth: 6,
              spacing: 10,
              fontSize: "10px"
          }
      ]}
      
      legends={[
          {
              anchor: 'bottom',
              direction: 'row',
              justify: false,
              translateX: 0,
              translateY: 56,
              itemsSpacing: 0,
              itemWidth: 100,
              itemHeight: 18,
              itemDirection: 'left-to-right',
              itemOpacity: 1,
              symbolSize: 30,
              symbolShape: 'circle'
          }
      ]}
    />  
    </Box>
};

export default PieChart;