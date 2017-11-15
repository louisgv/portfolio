import React, { PureComponent } from "react";

import styled from 'styled-components';

import {
	Header,
	Container,
	Responsive
} from 'semantic-ui-react';

import SocialMedia from 'components/SocialMedia';

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 99vh;
`

const HackerBanner =({anchorClass})=> (
	<a target="_blank" rel="noopener noreferrer" className={anchorClass} href="http://catb.org/jargon/html/H/hacker.html">
		<Header
			as='h2'
			content={'#hacker'}
			inverted
			style={{ fontSize: '1.7em', fontWeight: 'normal' }}
		/>
	</a>
)

const MobileHackerBanner =()=> (
	<Responsive
		as={HackerBanner}
		anchorClass="rainbow mobile"
		{...Responsive.onlyMobile}
	/>
)

const DesktopHackerBanner =()=> (
	<Responsive
		as={HackerBanner}
		anchorClass="rainbow"
		minWidth={Responsive.onlyTablet.minWidth}
	/>
)

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

				<SocialMedia />
			</StyledContainer>
		);
	}
}
