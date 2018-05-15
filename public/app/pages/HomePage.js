import React from "react";

import Modals from "../components/Modals/";
import Navigation from "../components/Navigation";
import IntroSection from "../components/IntroSection";
import DirectionsSection from "../components/DirectionsSection";
import FaqSection from "../components/FaqSection";
import ActivityChart from "../components/ActivityChart";
import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";

export default class HomePage extends React.Component {
	render() {
		return <div className="home-page">
			<Modals />
			<Navigation />
			<IntroSection />
			<DirectionsSection />
			<FaqSection />
			<ActivityChart />
			<CtaSection />
			<Footer />
		</div>
	};
}