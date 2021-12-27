import React, {useState} from "react"
import Slider from "react-slick";
import "./style.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'animate.css';

export default function CustomSlider() {
	const [sliderIndex, setSliderIndex] = useState(0)

	const dataSlider = [
		{
			imagePath: 'https://picsum.photos/400',
			title: 'WE ARE VISUAL'
		},
		{
			imagePath: 'https://picsum.photos/400',
			title: 'WE ARE VISUAL'
		},
		{
			imagePath: 'https://picsum.photos/400',
			title: 'WE ARE VISUAL'
		},
		{
			imagePath: 'https://picsum.photos/400',
			title: 'WE ARE VISUAL'
		},
		{
			imagePath: 'https://picsum.photos/400',
			title: 'WE ARE VISUAL'
		}
	]

	const [settings, setSettings] = useState({
		// className: 'center',
		infinite: true,
		centerPadding: '60px',
		slidesToShow: 1,
		adaptiveHeight: true,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 4000,
		fade: true,


		afterChange: index => {
			setSliderIndex(index)
		}
	})
	return (
		<div className="slider-container" id="slider">
			<Slider {...settings} className='P-slick-slider '>
				{dataSlider.map((item, index) => {
					return <div key={index}>
						<div className={`P-cover-images text-on-slider ${sliderIndex === index ?  'animation-down' : ''}`}
							 style={{backgroundImage: `url('${item.imagePath}')`}}>
							<div><h1>{item.title}</h1></div>
						</div>
					</div>
				})}
			</Slider>


		</div>
	)
}
