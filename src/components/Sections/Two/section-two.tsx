import React from 'react';
import './section-two.scss';
import globe from '../../../assets/images/globe.png'

function SectionTwo (props: any) {
    return(
        <div className="section-two flex justify-around items-center">
            <img src={globe} alt=""/>
            <div className="right">
                <h1 className="">
                    Hour of Code is a <br/>
                    <span className="text-green">Global Movement.</span>
                </h1>

                <p className="">
                    A global movement in <span className="bg-green">180 countries.</span> 68,237 events <br/>
                    registered in 2020, <span className="text-green">789 in India.</span> This grassroots <br/>
                    campaign is supported by over <span className="bg-green">400 partners and <br/> 200,000 educators worldwide.</span>
                    <br/>
                    <br/>
                    The Hour of Code is driven by the Hour of Code and <br/>
                    Computer Science Education Week <span className="bg-green">Advisory and Review <br/> Committees </span>
                    as well as an unprecedented coalition of <br/>
                    partners that have come together to support the Hour <br/>
                    of Code - including <span className="text-green">Microsoft, Apple, Amazon, Boys <br/>
                   and Girls Clubs of America and the College Board
                   </span>
                </p>
            </div>
        </div>
    );
}
export default SectionTwo;
