import React, { PureComponent } from "react";

import styled from 'styled-components';

import Navigation from "sections/Navigation";
import Footer from "sections/Footer";

import About from 'sections/About';
import Work from 'sections/Work';

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
			<Container id="Top">
				<Navigation/>
				<About id="About"/>
				<Work id="Work"/>
				<Footer />
			</Container>
		);
	}
}
