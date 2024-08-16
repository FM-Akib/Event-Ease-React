import Footer from "../Components/Shared/Footer";
import BookNowSection from "../Components/Ui/BookNowSection";
import Hero from "../Components/Ui/Hero";
import InvitationSection from "../Components/Ui/InvitationSection";


const Landing = () => {
    return (
    <div className=" min-h-screen">
     
 

       <div className="pt-6">
       <Hero/> 
       </div>
     

      <BookNowSection/>
      <InvitationSection/>
      
    

      <Footer/>
    </div>
    );
};

export default Landing;