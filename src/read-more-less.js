
import React, { PureComponent, Fragment } from 'react';
import styles from './styles.module.css'

import PropTypes from 'prop-types';

class ReadMoreLess extends PureComponent {
	state = {
		isExpanded: false,
	};

	static defaultProps = {
		initialText: '',
		moreText: '',
	};

	static propTypes = {
		initialText: PropTypes.string,
		moreText: PropTypes.string,
	};

	loadMore = () => {
		this.setState({ isExpanded: true });
	};

	loadLess = () => {
		this.setState({ isExpanded: false });
	};

	render() {
		const { initialText, moreText } = this.props;
		const { isExpanded } = this.state;
		console.log("props", this.props)
		console.log("state", this.state)

		return (
			<div>
				{!isExpanded && <p>{initialText}</p>}
				{!isExpanded && (
					<Fragment>
						<button onClick={this.loadMore} align="right">
							Read More
            </button>
					</Fragment>
				)}
				{isExpanded && <Text>{moreText}</Text>}
				{isExpanded && (
					<Fragment>
						<button onClick={this.loadLess} align="right">
							Read Less
            </button>
					</Fragment>
				)}
			</div>
		);
	}
}

export default ReadMoreLess;