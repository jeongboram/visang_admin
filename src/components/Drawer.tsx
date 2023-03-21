import * as React from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { mainListItems, secondaryListItems } from '@components/listItems';
import Toolbar from '@mui/material/Toolbar';

interface TitleProps {
	children?: React.ReactNode;
}

export default function NavDrawer(props: TitleProps) {
	const [open, setOpen] = React.useState(true);
	const toggleDrawer = () => {
		setOpen(!open);
	};

	return (
		<>
			<Toolbar
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'flex-end',
					px: [1],
				}}
			>
				<IconButton onClick={toggleDrawer}>
					<ChevronLeftIcon />
				</IconButton>
			</Toolbar>
			<Divider />
			<List component="nav">
				{mainListItems}
				<Divider sx={{ my: 1 }} />
				{secondaryListItems}
			</List>
		</>
	);
}
