import { useState } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function SelectOption() {
	const [value, setValue] = useState('В работе');

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	const changeColor = () => {
		if (value === 'На паузе') return '#FFCCDD'
		if (value === 'В работе') return '#CEFDED'
		return '#FFF'
	};

	const sx = {
		border: '0.5px solid #000000',
		borderRadius: '8px',
		padding: '5px',
		boxShadow: 'none',
		backgroundColor: changeColor(),		
		'.MuiOutlinedInput-notchedOutline': { border: 0 }
	}

	return (
		<Select
			value={value}
			variant='standard'
			disableUnderline
			onChange={handleChange}
			sx={sx}>
			<MenuItem value={'Выполнено'}>Выполнено</MenuItem>
			<MenuItem value={'На паузе'}>На паузе</MenuItem>
			<MenuItem value={'В работе'}>В работе</MenuItem>
		</Select>
	);
}
