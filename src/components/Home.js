//import logo from '../logo.svg';
import profile from '../images/myprofilepic.png'
import '../App.css'

export default function Home()
{
    // let img = <img src={logo} className="App-logo" alt="logo" />
    const mypic = (
        <>
            <div className="ProfileStyle">
                <img className="ImgStyle" src={profile} alt="logo" />
            </div>
            <b>
                <span>Bishow Thapa (Software Engineer)</span>
            </b>
            <br/>
            <code>
                Developer, Learner, Writer
            </code>
        </>
        );
    return mypic;
}