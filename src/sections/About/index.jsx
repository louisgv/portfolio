import React, { PureComponent } from "react";

import styled from 'styled-components';

import {
	Header,
	Container,
	Popup,
	Responsive
} from 'semantic-ui-react';

export default class About extends PureComponent {
	render() {
		return (
			<Container id={this.props.id}>

				ABOUT

			</Container>
		);
	}
}
