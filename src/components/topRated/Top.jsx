import { react } from 'react';
import './top.css';
import JohnWick from './img/johnWick.jpg';
import { LiaStarSolid } from "react-icons/lia";



export default function Top() {
    return (
        <>
            <div className='top-rated'>
                <div className='sec-name'>top rated</div>
            <div className="mainBody">
                <div className="card">
                    <img src={JohnWick} alt="blech" className="cardImg" />
                    <h6>John Wick 4</h6>
                    <div className="rate">
                        <LiaStarSolid
                         fill='rgb(255, 215, 0'
                        className='star'
                        size={30}
                        />
                        <div>9.2</div>
                    </div>
                </div>
                <div className="card">
                    <img src={JohnWick} alt="blech" className="cardImg" />
                    <h6>John Wick 4</h6>
                    <div className="rate">
                        <LiaStarSolid 
                        fill='rgb(255, 215, 0'
                        className='star'
                        size={30}
                        />
                        <div>9.2</div>
                    </div>
                </div>
                <div className="card">
                    <img src={JohnWick} alt="blech" className="cardImg" />
                    <h6>John Wick 4</h6>
                    <div className="rate">
                        <LiaStarSolid 
                        fill='rgb(255, 215, 0' 
                        className='star'
                        size={30}
                        />
                        <div>9.2</div>
                    </div>
                </div>
                <div className="card">
                    <img src={JohnWick} alt="blech" className="cardImg" />
                    <h6>John Wick 4</h6>
                    <div className="rate">
                        <LiaStarSolid 
                        fill='rgb(255, 215, 0'
                        className='star'
                        size={30}/>
                        <div>9.2</div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}