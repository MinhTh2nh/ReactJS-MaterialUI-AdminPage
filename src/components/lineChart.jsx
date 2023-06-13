import { ResponsiveLine } from '@nivo/line'
import { tokens } from "../theme";
import {  Box , useTheme } from "@mui/material";
import { mockLineData as data } from "../data/mockData";

const LineChart = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return <Box
    height = "100%"
    sx={{
      }}
        >
          <ResponsiveLine
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
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: 'point' }}
      yScale={{
          type: 'linear',
          min: 'auto',
          max: 'auto',
          stacked: true,
          reverse: false
      }}
      yFormat=" >-.2f"
      curve="basis"
      axisTop={{
          orient: 'top',
          tickSize: 9,
          tickPadding: 5,
          tickRotation: 0,
          legend: '',
          legendOffset: 36
      }}
      axisRight={null}
      axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'transportation',
          legendOffset: 36,
          legendPosition: 'middle'
      }}
      axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Amount',
          legendOffset: -40,
          legendPosition: 'middle'
      }}
      enableGridX={false}
      enableGridY={false}
      colors={{ scheme: 'category10' }}
      lineWidth={3}
      enablePoints={false}
      pointSize={9}
      pointColor={{ from: 'color', modifiers: [] }}
      pointBorderWidth={4}
      pointBorderColor="#000000"
      pointLabelYOffset={-12}
      areaOpacity={0.3}
      useMesh={true}
      legends={[
          {
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: 'left-to-right',
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              padding : 10,
              symbolSize: 20,
              symbolShape: 'circle',
              symbolBorderColor: 'rgba(0, 0, 0, .5)',
              effects: [
                  {
                      on: 'hover',
                      style: {
                          itemBackground: 'rgba(0, 0, 0, .03)',
                          itemOpacity: 1
                      }
                  }
              ]
          }
      ]}
    />  
    </Box>
};

export default LineChart;