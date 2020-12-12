import React from "react";
import './section-three.scss';
import one from '../../../assets/images/one.jpeg'

function SectionThree (props: any) {
    return (
        <div className="section-three">
            <h1 className="text-white text-center">ABES Engineering College, recently organized</h1>
            <h2 className="text-green text-center">4 events under Hour of Code</h2>

            <div className="data flex justify-around items-center">
                <img src={one} className="green-box-shadow" alt=""/>

                <div className="right">
                    <h2 className="text-green">Quizom</h2>
                    <p className="text-white text-justify">One advanced diverted domestic sex repeated bringing you old. Possible procured her trifling laughter thoughts property she met way. Companions shy had solicitude favourable own. Which could saw guest man now heard but. Lasted my coming uneasy marked so should. Gravity letters it amongst herself dearest an windows by. Wooded ladies she basket season age her uneasy saw. Discourse unwilling am no described dejection incommode no listening of. Before nature his parish boy. </p>
                </div>
            </div>
        </div>
    )
}
export default SectionThree;
