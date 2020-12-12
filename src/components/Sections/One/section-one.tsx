import React from 'react';
import './section-one.scss';
import landing from '../../../assets/images/landing.gif'

function SectionOne (props: any) {
    return(
      <div className="section-one flex justify-around items-center">
          <div className="left">
              <h1 className="text-white">
                  <span className="text-green">Learn</span> today, <br/>
                  build a <span className="text-green">better tomorrow.</span>
              </h1>

              <p className="text-white">
                  Anyone, anywhere can organise an Hour of Code event. <br/>
                  One-hour tutorials in over <span className="bg-green">45 languages.</span> No experience <br/>
                  needed. You don't need to register to participate! The <br/>
                  Hour of Code activities are available year-around.
              </p>

              <input type="button" className="text-white bg-green" value="Try Now"/>
          </div>

          <img src={landing} alt=""/>
      </div>
    );
}
export default SectionOne;
