import React, { PureComponent } from "react";

import styled from 'styled-components';

import {
	Header,
	Responsive,
Divider,
	Grid
} from 'semantic-ui-react';

import SocialMedia from 'components/SocialMedia';

import {
	DesktopHackerBanner,
	MobileHackerBanner
} from './HackerBanner';

import {FlexColumnCenterDiv} from 'utils/Layout';

import { SOCIAL } from 'resume';

const StyledContainer = styled(FlexColumnCenterDiv)`
	height: 99vh;
`

export default class Hero extends PureComponent {
	render() {
		return (
			<StyledContainer id={this.props.id}>
				<Header
					as='h1'
					content='Louis Vichy'
					inverted
					style={{ fontSize: '4.5em', fontWeight: 'normal'}}
				/>

				<DesktopHackerBanner/>
				<MobileHackerBanner/>

				<Divider horizontal inverted section/>

				 <Grid stretched padded doubling columns={SOCIAL.length}>
					{ SOCIAL.map(SocialMedia) }
				 </Grid>

			</StyledContainer>
		);
	}
}
