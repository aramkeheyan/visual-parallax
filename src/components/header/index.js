import React, {useEffect, useRef, useState} from "react"
import "./style.scss"
import {v4 as uuidv4} from 'uuid';

export default function Header() {
	const [headerList, setHeaderList] = useState(["Home", "About Us", "Team", "Portfolio", "Contact"])
	const [navBackground, setNavBackground] = useState("header")
	const navRef = useRef("")
	navRef.current = navBackground

	useEffect(() => {
		document.addEventListener("scroll", onScroll)
		return () => document.removeEventListener("scroll", onScroll)
	}, [])

	function onScroll() {
		if (window.scrollY > 50) {
			setNavBackground("header active")

		} else {
			setNavBackground("header")
		}
	}


	return (
		<header className={`${navRef.current} `}>
			<div className="G-flex G-container G-justify-between G-align-center text">
				<div className="">VISUAL</div>
				<div className="">
					<ul className="G-flex menu">
						{headerList.map(item =>
							<li key={uuidv4()}>{item}</li>
						)}
					</ul>
				</div>
			</div>
		</header>
	)
}