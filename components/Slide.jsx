import React, { Component } from "react";
import Slider from "react-slick";
import Arrow from 'components/Arrow';
const HUGE_NUMBER = Number.MAX_VALUE;

export default class Slide extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.renderList = this.renderList.bind(this);
  }

  next() {
    this.slider.slickNext();
  }

  previous() {
    this.slider.slickPrev();
  }

  renderList() { 
    return ( 
        [1,2,3].map((index) => (
            <div className="slick-item" key={index}>                
                {index}
            </div>
        ))
    );
  }

  render() {
    const defaultBreakpointsSettings = {
        slidesToShow: 2,
        slidesToScroll: 1,
    }

    const settings = {
        infinite: true,
        slidesToScroll: 1,
        centerMode: true,
        slidesToShow: 3,
        focusOnSelect: true,
        arrows: true,
        responsive: [
            {
                breakpoint: HUGE_NUMBER,
                settings: defaultBreakpointsSettings
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ],
        prevArrow: <Arrow side="left"  leftClickHandle={this.previous}/>,
        nextArrow: <Arrow side="right" rightClickHandle={this.next}/>
    }
    return (
        <Slider ref={c => (this.slider = c)} {...settings}>
            {this.renderList()}
        </Slider>
    );
  }
}