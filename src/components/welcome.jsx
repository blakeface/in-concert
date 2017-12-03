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
		this.maxRadius = window.innerHeight;
		this.circles = [];
	}

	componentDidMount() {
		// if (this.state.scrollMagicReady == false) this.initScrollMagic();
	}

	drawCircles() {
		for (let radius, i = parseInt(this.maxRadius / 30); i > 0; i--) {
			radius = parseInt((this.maxRadius / 2) - (this.maxRadius / 30 * i));
			if (radius <= 0)
				continue;
			else {
				this.circles[i] = React.createElement('circle', {
					key:`circle-${i}`, id:`circle-${i}`, cx:'50%', cy:'50%', r:`${radius}`, stroke:'#bbb', strokeWidth:'3', fill:'none',
				})
			} 
		}

		return this.circles;
	}

	initScrollMagic() {
		for (var i = this.circles.length -1; i > 0; i--) {
			const tween = new TimelineMax()
			.add(
				TweenMax.to(this.cirlces[i], 1.2, {css:{bezier:flightpath.entry}, ease:Power1.easeInOut})
			)

			const smScene = new ScrollMagic.Scene({
				triggerElement: '#scrollStart',
				duration: 500,
				loglevel: 3,
			})
			.setPin(`#circle-${i}`)
			.addIndicators()
			.addTo(this.smController);
		}

		this.setState({scrollMagicReady: true});
	}

	setSVGRect(isViewBox) {
		if (isViewBox) return `0 0 ${this.maxRadius} ${this.maxRadius}`;
		else return `${this.maxRadius}`;
	}

	render () {
		return (
			<article id="sceneContainer">
				<div className="welcome">
					<div className="headerwrap">
						<h1>In:Concert</h1>
					</div>
					<i className="fa fa-long-arrow fa-3x fa-rotate-180" aria-hidden="true"></i>
				</div>

				<div id="scrollStart"></div>
				
				<svg className="vinyl" 
						viewBox={this.setSVGRect(true)}
						width={this.setSVGRect(false)}
						height={this.setSVGRect(false)}
						preserveAspectRatio="xMinYMin meet" xmlns="http://www.w3.org/2000/svg" >
					{ this.circles.length == 0 ? this.drawCircles() : null }
				</svg>

				<div id="scrollEnd"></div>
			</article>
		)
	}
}
