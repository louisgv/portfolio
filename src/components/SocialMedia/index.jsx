import React from "react";

import {
	Button,
	Icon,
	Grid
} from 'semantic-ui-react';

export default ({name, color, net, url}) => (
	<Grid.Column>
		<Button content={name} labelPosition='left' icon={net} color={color} inverted size={'massive'}/>
	</Grid.Column>

)
