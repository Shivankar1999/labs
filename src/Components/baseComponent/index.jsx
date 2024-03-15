import { Box, Typography } from '@mui/material'
import { PieChart } from '@mui/x-charts/PieChart';
import React from 'react'

const BaseComponent = ({info}) => {
  return (
    <Box sx={{borderRadius:"15.58px",width:"460px",height:"auto",backgroundColor:"#FFFF",px:2,py:2}}>
        <Typography variant='Heading5' >{info?.title}</Typography>
        <Typography variant='peraG'>{info?.pera}</Typography>
        <Box sx={{width:"100%",height:"auto",display:"flex",justifyContent:"center",alignItems:"center",mt:2}}>
        {info.title == "Sub-Category" ? (

          <div className='ml-auto'>
          <PieChart
      series={[
    {
      data: info?.details.map((detail, index) => ({
        id: index,
        value: detail.boldCount.replace('%', ''),
     
        color:detail.color // Remove '%' symbol from boldCount
      })),
    },
  ]}
      width={400}
      height={400}
      sx={{ml:8,cursor:"pointer"}}
    />
          </div>

        ): ( <img src ={info?.srcRef}  style={{width:"100%",height:"100%",objectFit:"cover"}}/>)}
           
        </Box>

        <Box sx={{ display: "flex", flexWrap: "wrap",alignItems:"center",mt:2 }}>
  {info?.details &&
    info?.details.map((data, index) => (
      <Box key={index} sx={{ display: "flex", padding: 1 ,width:"50%",justifyContent:"flex-start",alignItems:"flex-start"}}>
        <Box
          sx={{
            width: "22px",
            height: "22px",
            mr: 1,
            backgroundColor: data.color, // Fix here: Removed unnecessary curly braces
          }}
        ></Box>
        <Typography sx={{ mr: .5 ,fontSize:"small"}}>{data.heading}</Typography>
        <Typography sx={{ mr: .5 ,fontWeight:"bold"}}>{data.boldCount}</Typography>
      </Box>
    ))}
</Box>

    </Box>
  )
}

export default BaseComponent