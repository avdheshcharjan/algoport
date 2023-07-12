import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../src/App.css";
import prof1 from "../src/img/av1.webp"
import { faArrowTrendUp, faInstitution, faLink, faPeopleGroup, faShare, faWallet } from "@fortawesome/free-solid-svg-icons";
import { faCopy } from "@fortawesome/free-regular-svg-icons";



export default function Home() {
    return (
        <>
            <div className="divf fDirC mainbg">
                <section className="divf sect1">
                    <div className="divf fDirC card1 prof1">
                        <div className=" jusB">
                            <img className="img1" src={prof1} />
                            <button className="copL"><FontAwesomeIcon icon={faShare} /></button>
                        </div>
                        <div className=" fDirC prof11 tL">
                            <p className="fS lgC" >JOINED IN MAY 2023</p>
                            <p className="fM"><b>avu</b></p>
                            <p className="fS lgC">avdhesh.algo</p>
                            <div className="divf jusB">
                                <p><FontAwesomeIcon icon={faWallet} /> 7LA4BX...I36QJA</p>
                                <button className="copL copL2"><FontAwesomeIcon icon={faCopy} /></button>
                            </div>
                            <p className="fS" ><FontAwesomeIcon icon={faLink} /> https://www.twitter.com/CuriousCharjan</p>
                        </div>
                    </div>

                    <div className="divf fDirC prof2">
                        <div className="divf fDirC card1 jusL wFull">
                            <p className="tL fSM lgC">Assets</p>
                            <p className="tL fM">$220</p>
                        </div>
                        <div className="divf fDirC card1 jusL wFull">
                            <p className="tL fSM lgC">DAO Memberships</p>
                            <div className="divf fDirC wFull">
                                <p className="fM"><FontAwesomeIcon icon={faPeopleGroup} /></p>
                                <p>Looks like you haven't joined any DAO yet.</p>
                                <p className="fS">Explore DAOs and join the ones that align with your interests and values.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="divf sect1 sect2 ">
                    <div className="card1 c1 tL divf fDirC cG">
                        <p className="fSM" >DEGEN SCORE</p>
                        <p className="fL">229.9</p>
                    </div>
                    <div className="card1 c1 tL divf fDirC cB">
                        <p className="fSM" ><FontAwesomeIcon icon={faInstitution} /></p>
                        <div className="divf wFull">
                            <p className=""><span className="fL">413</span><span className="fS">Followers</span></p>
                            <button className="copL"><FontAwesomeIcon icon={faArrowTrendUp} /> </button>
                        </div>
                    </div>
                    <div className="card1 c1 tL divf fDirC">
                        <div className="divf wFull">
                            <p className="fSM">Wallet Age</p>
                            <button className="copL"><FontAwesomeIcon icon={faArrowTrendUp} /> </button>
                        </div>
                        <p className="wFull"><span className="fL">1.2</span><span className="fS">Years  </span></p>
                    </div>
                </section>
            </div>
        </>
    )
}