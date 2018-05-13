import React from "react";
import RootModal from "./modals/RootModal";
import Navigation from "./Navigation";
import IntroSection from "./IntroSection";
import DirectionsSection from "./DirectionsSection.react.js";
import FaqSection from "./FaqSection.react.js";
import ActivityChartSection from "./ActivityChartSection.react.js";
import CtaSection from "./CtaSection.react.js";
import Footer from "./Footer.react.js";

export default class HomePage extends React.Component {
	render() {
		return <div className="home-page">
			<RootModal />
			<Navigation />
			<IntroSection />
			<DirectionsSection />
			<FaqSection />
			<ActivityChartSection />
			<CtaSection />
			<Footer />
		</div>
	};
}