import React from "react";

import {
	Button,
	Icon,
	Grid
} from 'semantic-ui-react';

export default ({name, color, net, url}, i) => (
	<Grid.Column stretched key={i}>
		<Button animated='fade' color={color} inverted size={'massive'} circular>
			<Button.Content visible>
				<Icon name={net} />
			</Button.Content>
			<Button.Content hidden style={{fontSize: "0.81em"}}>
				{name}
			</Button.Content>
		</Button>
	</Grid.Column>

)
