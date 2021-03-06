

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

		return (
			<div>
				{!isExpanded && <p>{initialText}</p>}
				{!isExpanded && (
					<Fragment>
						<span onClick={this.loadMore} className={styles.spanText}>
							Read More
            </span>
					</Fragment>
				)}
				{isExpanded && <p>{moreText}</p>}
				{isExpanded && (
					<Fragment>
						<span onClick={this.loadLess} className={styles.spanText}>
							Read Less
            </span>
					</Fragment>
				)}
			</div>
		);
	}
}

export default ReadMoreLess;