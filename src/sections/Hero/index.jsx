import React, { PureComponent } from "react";

import styled, {keyframes} from 'styled-components';
import mediaQuery from 'styled-media-query';

import {
	Header,
	Divider,
	Grid,
	Image
} from 'semantic-ui-react';

import SocialMedia from 'components/SocialMedia';

import {
	DesktopHackerBanner,
	MobileHackerBanner
} from './HackerBanner';

import {FlexColumnCenterDiv} from 'utils/Layout';

import { SOCIALS as socials } from 'resume';

const StyledContainer = styled(FlexColumnCenterDiv)`
	height: 99vh;

	${mediaQuery.lessThan('small')`
  	padding-top: 36vh;
  `}
`

const pulsingDown = keyframes`
	0, 100% {
		transform: translateY(0);
		opacity: 1;
	}

	90% {
		transform: translateY(9px);
		opacity: 0;
	}
`;

const BottomLink = styled.a`
	position: absolute;
	bottom: 3.6vh;
`

const PulsingIcon = styled(Image)`
	animation: ${pulsingDown} 1.8s ease-in-out infinite;
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

				 <Grid stretched padded doubling columns={socials.length}>
					{ socials.map(SocialMedia) }
				 </Grid>

				 <BottomLink href="#About">
					 <PulsingIcon src='/icon-white.png' size='mini' />
				 </BottomLink>

			</StyledContainer>
		);
	}
}
