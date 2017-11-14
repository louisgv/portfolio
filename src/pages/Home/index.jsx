import React, { PureComponent } from "react";

import styled from 'styled-components';

import {
	Header,
	Segment
} from 'semantic-ui-react';

// Global sections:
import Navigation from "sections/Navigation";
import Footer from "sections/Footer";

import {
	LongPage
} from 'utils/Layout';

const Container = styled(LongPage)`
  justify-content: space-between;
  align-items: center;
	background: #1b1c1d;
`

export default class Home extends PureComponent {
	render() {
		return (
			<Container>
				<Navigation/>
				<Segment
					inverted
					textAlign='center'
					vertical
				>
				<Header
					as='h1'
					content='Louis Vichy'
					inverted
					style={{ fontSize: '4em', fontWeight: 'normal'}}
				/>
				<Header
					as='h2'
					content='Hacker'
					inverted
					style={{ fontSize: '1.7em', fontWeight: 'normal' }}
				/>
				</Segment>
				<Footer />
			</Container>
		);
	}
}
