import { useState } from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import { TableCell as MuiTableCell } from '@mui/material';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import FilterNoneIcon from '@mui/icons-material/FilterNone';
import { styled } from '@mui/system';
import SelectOption from '../SelectOption/SelectOption';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function createData(name) {
	return {
		name,
		data: [
			{
				id: v4(),
				date: '01.01.0001',
				taskId: 'Шифр задачи',
				projId: '48/21',
				task: 'Прозвонить Копьева',
				status: <SelectOption />,
				responsible: 'Иванов В.А.',
				reassign: 'Свердлова А.И.',
				priority: 2,
				comment: 'Комментарий',
				plannedTime: '00:15:00',
				actualTime: '00:00:14',
				start: '01/01/0001 00:00:00',
				complete: '01/24/2023 10:23:17',
			},
			{
				id: v4(),
				date: '01.01.0001',
				taskId: 'Шифр задачи',
				projId: '48/21',
				task: 'Прозвонить Копьева',
				status: <SelectOption />,
				responsible: 'Иванов В.А.',
				reassign: 'Свердлова А.И.',
				priority: 2,
				comment: 'Комментарий',
				plannedTime: '00:15:00',
				actualTime: '00:00:14',
				start: '01/01/0001 00:00:00',
				complete: '01/24/2023 10:23:17',
			},
			{
				id: v4(),
				date: '01.01.0001',
				taskId: 'Шифр задачи',
				projId: '48/21',
				task: 'Прозвонить Копьева',
				status: <SelectOption />,
				responsible: 'Иванов В.А.',
				reassign: 'Свердлова А.И.',
				priority: 2,
				comment: 'Комментарий',
				plannedTime: '00:15:00',
				actualTime: '00:00:14',
				start: '01/01/0001 00:00:00',
				complete: '01/24/2023 10:23:17',
			},
			{
				id: v4(),
				date: '01.01.0001',
				taskId: 'Шифр задачи',
				projId: '48/21',
				task: 'Прозвонить Копьева',
				status: <SelectOption />,
				responsible: 'Иванов В.А.',
				reassign: 'Свердлова А.И.',
				priority: 2,
				comment: 'Комментарий',
				plannedTime: '00:15:00',
				actualTime: '00:00:14',
				start: '01/01/0001 00:00:00',
				complete: '01/24/2023 10:23:17',
			},
			{
				id: v4(),
				date: '01.01.0001',
				taskId: 'Шифр задачи',
				projId: '48/21',
				task: 'Прозвонить Копьева',
				status: <SelectOption />,
				responsible: 'Иванов В.А.',
				reassign: 'Свердлова А.И.',
				priority: 2,
				comment: 'Комментарий',
				plannedTime: '00:15:00',
				actualTime: '00:00:14',
				start: '01/01/0001 00:00:00',
				complete: '01/24/2023 10:23:17',
			},
			
		],
	};
}

const TableCell = styled(MuiTableCell)({
	width: '7.7%',
});

function Row({ row, setActual, open }) {
	const handleClick = () => {
		if (open) {
			setActual('');
		} else {
			setActual(row.name);
		}
	};

	return (
		<>
			<TableRow
				sx={{ '& > *': { borderBottom: 'none' }, backgroundColor: 'ede1e1' }}>
				<TableCell colSpan={2} sx={{ border: 'none' }}>
					{row.name}
				</TableCell>
				<TableCell colSpan={11} align='left' sx={{ border: 'none' }}>
					{' '}
					<IconButton
						aria-label='expand row'
						size='small'
						sx={{ marginLeft: '13px' }}
						onClick={handleClick}>
						{open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
					</IconButton>
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell sx={{ padding: 0, border: 'none' }} colSpan={13}>
					<Collapse in={open} timeout='auto' unmountOnExit>
						<Table aria-label='purchases' sx={{ border: 'none', maxWidth: '1388px' }}>
							<TableBody>
								{row.data.map((dataRow) => (
									<TableRow key={dataRow.id}>
										<TableCell align='center'>{dataRow.date}</TableCell>
										<TableCell align='left'>{dataRow.taskId}</TableCell>
										<TableCell align='left'>{dataRow.projId}</TableCell>
										<TableCell align='center'>{dataRow.task}</TableCell>
										<TableCell align='center'>{dataRow.status}</TableCell>
										<TableCell sx={{ minWidth: '80px' }} align='center'>
											{dataRow.responsible}
										</TableCell>
										<TableCell align='center'>{dataRow.reassign}</TableCell>
										<TableCell align='center'>{dataRow.priority}</TableCell>
										<TableCell align='center'>{dataRow.comment}</TableCell>
										<TableCell align='left'>{dataRow.plannedTime}</TableCell>
										<TableCell align='left'>{dataRow.actualTime}</TableCell>
										<TableCell align='left'>{dataRow.start}</TableCell>
										<TableCell align='left'>{dataRow.complete}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</Collapse>
				</TableCell>
			</TableRow>
		</>
	);
}

Row.propTypes = {
	row: PropTypes.shape({
		data: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.string.isRequired,
				date: PropTypes.string.isRequired,
				taskId: PropTypes.string.isRequired,
				projId: PropTypes.string.isRequired,
				task: PropTypes.string.isRequired,
				status: PropTypes.node.isRequired,
				responsible: PropTypes.string.isRequired,
				reassign: PropTypes.string.isRequired,
				priority: PropTypes.number.isRequired,
				comment: PropTypes.string.isRequired,
				plannedTime: PropTypes.string.isRequired,
				actualTime: PropTypes.string.isRequired,
				start: PropTypes.string.isRequired,
				complete: PropTypes.string.isRequired,
			})
		).isRequired,
	}).isRequired,
};

const rows = [
	createData('Выполненные\u00A0задачи'),
	createData('Задачи\u00A0на\u00A0сегодня'),
	createData('Предстоящие\u00A0задачи'),
];

export default function TaskPlanner() {
	const [actual, setActual] = useState('Задачи\u00A0на\u00A0сегодня');

	return (
		<Box sx={{ display: 'flex', margin: 'auto' }}>
			<Box
				sx={{
					height: '100vh',
					marginRight: '36px',
					borderRight: '1px solid #E1E1E1',
				}}>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						width: '56px',
						height: '52px',
						backgroundColor: '#E2E2EA',
						borderRadius: '8px',
						padding: 0,
						marginTop: '54px',
						marginRight: '12px',
					}}>
					<FilterNoneIcon />
				</Box>
			</Box>
			<Box sx={{ maxWidth: '1388px', marginTop: '41px' }}>
				<Typography
					variant='h5'
					component='h2'
					sx={{
						flexGrow: 1,
						color: '#11142D',
						marginLeft: '53px',
						marginBottom: '20px',
					}}>
					Задачи
				</Typography>
				<TableContainer component={Paper}>
					<Table sx={{ maxWidth: '1388px' }} aria-label='collapsible table'>
						<TableHead>
							<TableRow style={{ backgroundColor: '#E1F5FE' }}>
								<TableCell align='center'>Дата</TableCell>
								<TableCell align='left'>Шифр задачи</TableCell>
								<TableCell align='left'>Шифр проекта</TableCell>
								<TableCell align='center'>Задача</TableCell>
								<TableCell align='center'>Статус</TableCell>
								<TableCell align='center'>Ответственный</TableCell>
								<TableCell align='center'>Переназначить</TableCell>
								<TableCell align='center'>Приоритет</TableCell>
								<TableCell align='center'>Комментарий</TableCell>
								<TableCell align='left'>План время</TableCell>
								<TableCell align='left'>Факт время</TableCell>
								<TableCell align='left'>Начал</TableCell>
								<TableCell align='left'>Завершил</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{rows.map((row) => (
								<Row
									key={row.name}
									row={row}
									setActual={setActual}
									open={actual === row.name}
								/>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</Box>
		</Box>
	);
}
