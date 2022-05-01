import React from 'react';
import uk from '../../../images/flags/United_Kingdom.jpg';
import usa from '../../../images/flags/United_States.jpg';
import australia from '../../../images/flags/australia.jpg';
import uae from '../../../images/flags/uae.jpg';
import india from '../../../images/flags/India.jpg';
import italy from '../../../images/flags/Italy.jpg';

import Hub from '../Hub/Hub';

const hubs = [
    {_id: 1, name: 'London, UK', description: 'Our UK based hub at the centre of London', img: uk},
    {_id: 2, name: 'Los Angeles, USA',  description: 'Our USA based hub at the centre of Los Angeles', img: usa},
    {_id: 3, name: 'Sydney, Australia',  description: 'Our Australia based hub at the centre of Sydney', img: australia},
    {_id: 4, name: 'Dubai, UAE',  description: 'Our UAE based hub at the centre of Dubai', img: uae},
    {_id: 5, name: 'Mumbai, India',  description: 'Our India based hub at the centre of Mumbai',  img: india},
    {_id: 6, name: 'Milan, Italy',  description: 'Our Italy based hub at the centre of Milan', img: italy}
]

const Hubs = () => {
    return (
        <div id='hubs' className='container'>
            <h2 className='mt-5 mb-3 text-center text-info'>Our Other Hubs:</h2>
            <div className='row'>
                {
                    hubs.map(hub => <Hub key={hub._id} hub={hub}>

                    </Hub>)
                }
            </div>
        </div>
    );
};

export default Hubs;