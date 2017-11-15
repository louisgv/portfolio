import React, { PureComponent } from "react";

import styled from 'styled-components';

import Navigation from "sections/Navigation";
import Footer from "sections/Footer";

import Hero from 'sections/Hero';
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
			<Container id="outer-container">
				<Navigation/>
				<div id="page-wrap">
					<Hero id="Home"/>
					<About id="About"/>
				</div>
				<Footer />
			</Container>
		);
	}
}
