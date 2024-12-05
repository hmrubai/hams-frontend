import React from 'react';
import RSC from '../../../assets/RSC.png';
const Accord = () => {
    return (
        <div className='h-100  mx-auto my-3 relative'>
                    <div class="card col-md-2 col-sm-1 card-color absolute">
                      <img class="card-img-top" src={RSC} alt="Card image cap" className='p-2' />
                      <div class="card-body">
                      </div>
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">100% Accord</li>
                        <li class="list-group-item">Decarbonization Improved</li>
                        <li class="list-group-item">Human Wellbeing First</li>
                        <li class="list-group-item">Respect the nature</li>
                      </ul>
                    </div>
                  </div>
    );
};

export default Accord;