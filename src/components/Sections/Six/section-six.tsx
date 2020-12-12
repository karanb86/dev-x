import React from "react";
import './section-six.scss';
import four from "../../../assets/images/four.jpeg";

function SectionSix (props: any) {
    return (
        <div className="section-six">
            <div className="data flex justify-around items-center">
                <div className="left">
                    <h2 className="text-green">Web Weaver</h2>
                    <p className="text-justify">One advanced diverted domestic sex repeated bringing you old. Possible procured her trifling laughter thoughts property she met way. Companions shy had solicitude favourable own. Which could saw guest man now heard but. Lasted my coming uneasy marked so should. Gravity letters it amongst herself dearest an windows by. Wooded ladies she basket season age her uneasy saw. Discourse unwilling am no described dejection incommode no listening of. Before nature his parish boy. </p>
                </div>

                <img src={four} className="green-box-shadow" alt=""/>
            </div>
        </div>
    )
}
export default SectionSix;
