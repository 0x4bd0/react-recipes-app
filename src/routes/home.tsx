import HomePageImage from "../images/homeImage";
import '../styles/home.css'

export interface HomeProps {
    
}
 
const Home: React.FC<HomeProps> = () => {
    return ( 
        <div className="home">
             <div  className="leftDiv">
                  <div className="homePageImage">
                  <HomePageImage></HomePageImage>
                  </div>
             </div>
             <div className="rightDiv">
                  <h1>Foody</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
             </div>
        </div>
      
     );
}
 
export default Home;