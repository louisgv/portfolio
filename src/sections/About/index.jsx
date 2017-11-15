import React, { PureComponent } from "react";

import styled from 'styled-components';

import {
	Header,
} from 'semantic-ui-react';

import {
	FlexColumnCenterDiv
} from 'utils/Layout';

const StyledContainer = styled(FlexColumnCenterDiv)`
	height: 180vh;
`

export default class About extends PureComponent {
	render() {
		return (
			<StyledContainer id={this.props.id}>

				ABOUT

			</StyledContainer>
		);
	}
}
