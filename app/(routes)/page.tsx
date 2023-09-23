import Getlinked_Tech from "../layouts/homeView/getlinked_tech/getlinked_tech";
import Introduction from "../layouts/homeView/introduction/introduction";
import Rules_Guidelines from "../layouts/homeView/rules_guidelines/rules_guidelines";
import Judging_Criteria from "../layouts/homeView/judging_criteria/judging_criteria";
import Frequently_Asked from "../layouts/homeView/frequently_asked/frequently_asked";
import Timeline from "../layouts/homeView/timeline/timeline";
import Prizes_Rewards from "../layouts/homeView/prizes_rewards/prizes_rewards";
import Partners_Sponsors from "../layouts/homeView/partners_sponsors/partners_sponsors";
import PrivacyPolicy_Terms from "../layouts/homeView/privacyPolicy_terms/privacyPolicy_terms";
import Footer from "../layouts/homeView/footer/footer";

export default function Home() {
  return (
    <>
      <main className="scroll-smooth">
        <Getlinked_Tech />
        <Introduction />
        <Rules_Guidelines />
        <Judging_Criteria />
        <Frequently_Asked />
        <Timeline />
        <Prizes_Rewards />
        <Partners_Sponsors />
        <PrivacyPolicy_Terms />
        <Footer />
      </main>
    </>
  )
}
