import React from 'react'
import OffCanvas from '../components/OffCanvas'

interface Sections {
	href: string
	label: string
}

interface HeaderData {
	logoPath: string
	alt: string
	sections: Sections[]
}

interface HeaderProps {
	data: HeaderData
}

const Header: React.FC<HeaderProps> = ({ data: { logoPath, alt, sections } }) => {
	return (
		<header className="header-container py-2 text-white">
			<nav
				className="header-nav container mx-auto flex flex-wrap items-center"
				style={{ maxWidth: '1100px' }}
			>
				<div className="ml-5">
					<h1>
						<a href="#">
							<img src={logoPath} width="60px" alt={alt} />
						</a>
					</h1>
				</div>
				<div className="header-sections">
					<ul className="flex flex-wrap items-center justify-center space-x-10">
						{sections.map((section, index) => {
							return (
								<li key={'section-' + index}>
									<a
										href={section.href}
										className="title-font white-text hover:text-gray-300"
										style={{ fontSize: '20px' }}
									>
										{section.label}
									</a>
								</li>
							)
						})}
					</ul>
				</div>

				<OffCanvas buttonLabel="">
					<ul className="flex flex-col flex-wrap items-center justify-center text-center">
						{sections.map((section, index) => {
							return (
								<li key={'section-' + index} className="my-2">
									<a
										href={section.href}
										className="title-font white-text hover:text-gray-300"
										style={{ fontSize: '18px' }}
									>
										{section.label}
									</a>
									<br />
								</li>
							)
						})}
					</ul>
				</OffCanvas>
			</nav>
		</header>
	)
}

export default Header
