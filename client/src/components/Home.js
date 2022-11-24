//import logo from '../logo.svg';
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import profile from '../images/myprofilepic.png'
import '../App.css'
import { FiDownload } from "react-icons/fi";
import resume from '../files/sample-resume.pdf';
import { saveAs } from "file-saver";

export function downloadCV() {
    return (
        // saveAs("https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", "resume.pdf")
        saveAs(resume, "Bishow resume.pdf")
    );
}

export default function Home()
{
    
    // let img = <img src={logo} className="App-logo" alt="logo" />

    const mypic = (
        <>
            {/* <div className="ProfileStyle">
                <img className="ImgStyle" src={profile} alt="logo" />
            </div>

            <b>
                <span>Bishow Thapa (Software Engineer)</span>
            </b>
            
            <code>
                Developer, Learner, Writer
            </code> */}

            

            <div className="rootWrapper">
                <div className="imgWrapper">
                    <img className="ImgStyle" src={profile} alt="logo" />
                </div>
                <div className="contentWrapper">
                    <h5 className="authorName">Hello <span className="wavingHand">👋</span></h5>
                    <p className="authorDescription">I'm Bishow Thapa (Software Engineer)💻 from Nepal.</p>
                    <button type="button" onClick={downloadCV} className="authorBtn" download="resume"><span className="btnTitle">CV</span><FiDownload/></button>
                    <div className="authorSocialMedia">
                        <p className="socialMediaTitle">Mostly active on:</p>
                        <a className="socialMedia" href="https://www.linkedin.com/in/bishowthapa/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="socialMediaIcon" color="#0072b1" />
                        </a>
                        <a className="socialMedia" href="https://twitter.com/BishowThapa12" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="socialMediaIcon" color="#00acee" />
                        </a>
                        <a className="socialMedia" href="https://github.com/Bishow-Thapa" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="socialMediaIcon" color="#000000" />
                        </a>
                    </div>
                </div>

                
            </div>
        </>
        );
    return mypic;
}