// src/components/Header.tsx

import React from 'react'
import './style.css'
import ExternalButton from '../components/ExternalButton'

interface HeroData {
	title: string
	subTitle: string
	buttonText: string
	buttonHref: string
	imgPath: string
	imgAlt: string
}

interface HeroProps {
	data: HeroData
}

const Hero: React.FC<HeroProps> = ({
	data: { title, subTitle, buttonText, buttonHref, imgPath, imgAlt }
}) => {
	return (
		<div className="hero-container">
			<div className="hero-container2" style={{ maxWidth: '1200px' }}>
				<div className="hero-left" style={{ margin: '0px 10px' }}>
					<h2 className="title-font" style={{ lineHeight: '50px', marginTop: '30px' }}>
						{title}
					</h2>
					<p className="text-font" style={{ margin: '20px 0px' }}>
						{subTitle}
					</p>
					<div style={{ margin: '20px 0px' }}>
						<ExternalButton data={{ label: buttonText, href: buttonHref, internal: true }} />
					</div>
				</div>
				<div style={{ margin: '0px 10px' }}>
					<img
						src={imgPath}
						alt={imgAlt}
						width="450px"
						style={{ position: 'relative', bottom: '-33px' }}
					/>
				</div>
			</div>
		</div>
	)
}

export default Hero
