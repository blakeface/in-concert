import React, { Component } from 'react';
import ScrollMagic from 'scrollmagic';
import addIndicators from 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
import { TweenMax } from 'gsap';

export default class Welcome extends Component {
	constructor(){
		super();
		this.state = {
			scrollMagicReady: false,
		};
		this.smController = new ScrollMagic.Controller();
		this.circles = [];
	}

	drawCircles() {
		const container = document.querySelector('.scene');
		const maxRadius = container.offsetHeight;
		const svg = document.querySelector('svg');
		const protoCircle = document.querySelector('circle');

		// set svg attributes
		svg.setAttribute('viewBox', `0 0 ${maxRadius} ${maxRadius}`);
		svg.setAttribute('width', `${maxRadius}`);
		svg.setAttribute('height', `${maxRadius}`);

		// create circles and append to DOM
		for (let clone, radius, i = parseInt(maxRadius/30); i > 0; i--) {
			radius = (maxRadius / 2) - (maxRadius / 30 * i);
			console.log(radius)
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

	initScrollMagic() {
		const scrollEndEle = document.querySelector('#scrollEnd');
		const scrollEndRect = scrollEndEle.getBoundingClientRect();

		for (var i = this.circles.length -1; i >= 0; i--) {
			if (this.circles[i].id) {
				// const smScene = new ScrollMagic.Scene({
				// 	triggerElement: '#scrollStart',
				// 	duration: 500,
				// 	loglevel: 3,
				// })
				// .setPin(`#${this.circles[i].id}`)
				// .addIndicators()
				// .addTo(this.smController);
			}
		}

		this.setState({scrollMagicReady: true});
	}

	componentDidMount() {
		if (this.circles.length == 0) this.drawCircles();
		if (this.state.scrollMagicReady == false) this.initScrollMagic();
	}

	render () {
		return (
			<article id="sceneContainer">
				<div className="welcome">
					<div className="headerwrap">
						<h1>In:Concert</h1>
					</div>
				</div>

				<div className="scene" id="scrollStart">
					<svg viewBox="0 0 0 0" preserveAspectRatio="xMinYMin meet" xmlns="http://www.w3.org/2000/svg">
						<circle cx="50%" cy="50%" r="0" stroke="#bbb" strokeWidth="3" fill="none"/>
					</svg>
					<i className="fa fa-long-arrow fa-3x fa-rotate-180" aria-hidden="true"></i>
				</div>

				<div className="scene" id="scrollEnd"></div>
			</article>
		)
	}
}
