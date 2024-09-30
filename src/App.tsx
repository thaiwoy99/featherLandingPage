import Nav from "./Components/Nav"
import Intro from "./Components/Intro"
import MyDesign from "./Components/MyDesign"
import OurFeatures from "./Components/OurFeatures"
import GettingStarted from "./Components/GettingStarted"
import OurServices from "./Components/OurServices"
import Feedbacks from "./Components/Feedbacks"
import OurApps from "./Components/ourApps"
import FooterCont from "./Components/FooterCont"



function App(){
  return(
    <div className="">
      
      <Nav/>
      <Intro/>
      <MyDesign/>
      <OurFeatures/>
      
      <GettingStarted/>
      <OurServices/>
      <Feedbacks/>
      <OurApps/>
      <FooterCont/>

      
    </div>
  )

}
export default App