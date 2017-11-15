import React, { PureComponent } from "react";

import styled from 'styled-components';

import Navigation from "sections/Navigation";
import Footer from "sections/Footer";

import About from 'sections/About';

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
			<Container id="Home">
				<Navigation/>
				<div id="page-wrap">
					<About id="About"/>
				</div>
				<Footer />
			</Container>
		);
	}
}
