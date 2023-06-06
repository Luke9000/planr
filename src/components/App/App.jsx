import TaskPlanner from '../TaskPlanner/TaskPlanner';
import Header from '../Header/Header';
import { Box } from '@mui/material';

function App() {
	return (
		<Box sx={{maxWidth: '1540px', width: '100%', margin: 'auto'}}>
			<Header />
			<TaskPlanner />
		</Box>
	);
}

export default App;
