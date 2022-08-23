/* eslint-disable react/prop-types */
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CardMedia } from '@mui/material';

export function SimpleAccordion({ src, title, description }) {
	return (
		<Accordion>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
				aria-controls='panel1a-content'
				id='panel1a-header'
			>
				<CardMedia
					component='img'
					image={src}
					sx={{ width: '40px', height: '40px' }}
				/>
				<Typography sx={{ color: '#003DA5', fontWeight: '700' }}>
					{title}
				</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Typography>{description}</Typography>
			</AccordionDetails>
		</Accordion>
	);
}
