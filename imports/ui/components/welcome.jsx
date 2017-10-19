import React, { Component } from 'react';
import ScrollMagic from 'scrollmagic';

export default class Welcome extends Component {
	constructor(){
		super();
		this.state = {
			initSM: false,
		};
		this.circles = [];
	}

	drawCircles() {
		const container = document.querySelector('.welcome');
		const maxWidth = container.offsetHeight;
		const svg = document.querySelector('svg');
		const protoCircle = document.querySelector('circle');
		// set svg attributes
		svg.setAttribute('viewBox', `0 0 ${maxWidth} ${maxWidth}`);
		svg.setAttribute('width', `${maxWidth}`);
		svg.setAttribute('height', `${maxWidth}`);
		// create circles and append to DOM
		for (let clone, radius, i = parseInt(maxWidth/30); i >= 0; i--) {
			radius = (maxWidth / 2) - (maxWidth / 30 * i);
			if (radius < 0)
				continue;
			else {
				clone = protoCircle.cloneNode(false);
				clone.setAttribute('r', `${radius}`);
				clone.setAttribute('id', `circle-${i}`);
				svg.appendChild(clone);
			} 
		}

		this.circles = document.querySelectorAll('circle');
	}

	initSM() {
		const scrollEndEle = document.querySelector('#scrollEnd');
		const scrollEndRect = scrollEndEle.getBoundingClientRect();
		const smScene = new ScrollMagic.Scene({
			duration: scrollEndRect.bottom,
			loglevel: 3,
		})

		for (var i = this.circles.length - 1; i >= 0; i--) {
			if (this.circles[i].id) {
				smScene.setClassToggle(`#${this.circles[i].id}`, 'smMove');
				smScene.addTo(this.smController);
			}
		}

		this.setState({initSM: true});
	}

	componentWillMount() {
		this.smController = new ScrollMagic.Controller();
	}

	componentDidMount() {
		if (this.circles.length == 0) this.drawCircles();
		if (this.state.initSM == false) this.initSM();
	}

	render () {
		return (
			<article>
				<div className="scene welcome">
					<div className="headerwrap">
						<h1>In:Concert</h1>
					</div>

					<svg viewBox="0 0 0 0" preserveAspectRatio="xMinYMin meet" xmlns="http://www.w3.org/2000/svg">
						<circle cx="50%" cy="50%" r="0" stroke="#bbb" strokeWidth="3" fill="none"/>
					</svg>

					<i className="fa fa-long-arrow fa-3x fa-rotate-180" aria-hidden="true"></i>
				</div>
				<div className="scene" id="scrollStart"></div>
				<div className="scene" id="scrollEnd"></div>
			</article>
		)
	}
}
