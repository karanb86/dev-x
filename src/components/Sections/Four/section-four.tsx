import React from "react";
import two from "../../../assets/images/two.jpeg";
import './section-four.scss'
function SectionFour (props: any) {
    return (
        <div className="section-four">
            <div className="data flex justify-around items-center">
                <div className="left">
                    <h2 className="text-green">Web Weaver</h2>
                    <p className="text-justify">One advanced diverted domestic sex repeated bringing you old. Possible procured her trifling laughter thoughts property she met way. Companions shy had solicitude favourable own. Which could saw guest man now heard but. Lasted my coming uneasy marked so should. Gravity letters it amongst herself dearest an windows by. Wooded ladies she basket season age her uneasy saw. Discourse unwilling am no described dejection incommode no listening of. Before nature his parish boy. </p>
                </div>

                <img src={two} className="green-box-shadow" alt=""/>
            </div>
        </div>
    )
}
export default SectionFour;
