import React from 'react'
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

const Calendar = () => {

  const [value, setValue] = React.useState(dayjs('2022-04-17'));
  return (
    <div >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar value={value} onChange={(newValue) => setValue(newValue)}/>
            </LocalizationProvider>
    </div>
  )
}

export default Calendar