import React, { PureComponent } from "react";

import styled from 'styled-components';

import {
	Header,
	Container,
	Popup,
	Responsive
} from 'semantic-ui-react';

// Global sections:
import Navigation from "sections/Navigation";
import Footer from "sections/Footer";

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
			<Container
				id="page-wrap"
				textAlign='center'
			>
			<Header
				as='h1'
				content='Louis Vichy'
				inverted
				style={{ fontSize: '4.5em', fontWeight: 'normal'}}
			/>

			<DesktopHackerBanner/>
			<MobileHackerBanner/>

			</Container>
		);
	}
}
