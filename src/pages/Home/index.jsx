import React, { PureComponent } from "react";

import styled from 'styled-components';

import {
	Header,
	Container as PageContainer
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
			<Container id="outer-container">
				<Navigation/>
				<PageContainer
					id="page-wrap"
					textAlign='center'
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
				</PageContainer>
				<Footer />
			</Container>
		);
	}
}
