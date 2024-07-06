import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function TabGroup() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center'}}>
      <Tabs value={value} onChange={handleChange} centered     
      
      indicatorColor='white' sx={{bgcolor: 'rgba(26, 115, 232, 0.11)', display: 'inline', borderRadius: '40px'}} >
        <Tab label="Refer"  sx={{color: "black"}} />
        <Tab label="Benefits"  sx={{color: "black"}}/>
        <Tab label="FAQs" sx={{color: "black"}} />
        <Tab label="Support" sx={{color: "black"}} />
      </Tabs>
    </Box>
  );
}