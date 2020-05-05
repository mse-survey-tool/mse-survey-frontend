import React from 'react';
import useStyles from "../../styles";
import clsx from "clsx";
import VotingImage from "../assets/undraw_voting_nvu7.svg";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";


function ResultsPage20200504() {

	const classes = useStyles();

	return (
		<React.Fragment>
			<div className={clsx(classes.flexBoxRow, classes.logoBox, classes.logoBox200)}>
				<img src={VotingImage} alt="Voting Image" className={classes.logoBoxLogo}/>
			</div>

			<div className={classes.titleTextBox2}>
				<Typography variant="h4">
					Semestersprecher-Wahl
				</Typography>
			</div>
			<div className={classes.titleTextBox1}>
				<Typography variant="h5">
					6. Fachsemester, 04.05.2020
				</Typography>
			</div>
			<Container maxWidth="xs">
				results
			</Container>
		</React.Fragment>
	);

}

export default ResultsPage20200504;
