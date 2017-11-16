import React, {PureComponent} from "react";

import styled from 'styled-components';

import {FooterContainer} from 'utils/Layout';

const StyledFooter = styled(FooterContainer)`
  line-height: 24px;
	width: 100vw;
  color: white;
  font-size: 1em;
  text-align: center;
	padding: 1.8em;
`;

export default class Footer extends PureComponent {
	render() {
		return (
			<StyledFooter id="Copyright">
				<p>
					This site was developed with
					<a href='https://reactjs.org/' target='_blank'>{` React.js`}</a>,
					<a href='https://react.semantic-ui.com' target='_blank'>{` Semantic-ui`}</a>, and
					<a href='https://github.com/negomi/react-burger-menu' target='_blank'>
						{` react-burger-menu `}
					</a>
					by <br/>
					<a href='https://github.com/louisgv' target='_blank'>{` Louis Vichy`}</a> and is licensed under
					the <br/>
					<a className="rainbow mobile" style={{color: 'white'}} href='https://en.wikipedia.org/wiki/MIT_License' target='_blank'>{`MIT License`}</a>

				</p>
			</StyledFooter>
		);
	}
}
