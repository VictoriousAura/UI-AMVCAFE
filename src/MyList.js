import React from 'react';
import './myList.css';
import ResponsivePlayer from './ResponsivePlayer';

const MyList = ()=>{

    return (

        <div className="container">
        <div className="container tm-container-2">

            <div className="row">
                <div className="col-lg-12">
                    <h2 className="tm-welcome-text">Latest VP Level Meetings </h2>
                </div>
            </div>

            <div className="row tm-section-mb">
                <div className="col-lg-12">

                    <div className=" tm-timeline-item">
                        <div className="tm-timeline-item-inner">
                            {/* <img src={"./img/img-01.jpg"} alt="Image" className="rounded-circle tm-img-timeline"/> */}
                            
                            <div className="tm-timeline-description-wrap">
                                <div className="tm-bg-dark tm-timeline-description">
                                    <h3 className="tm-text-green tm-font-400">Nulla venenatis purus nec quam</h3>
                                    <p>You may tell your co-workers about TemplateMo free stuffs to download and use for any website project. Thank you for supporting us.</p>
                                    <p className="tm-text-green float-right mb-0">New Event . 12 July 2020</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="tm-timeline-connector-vertical"></div>
                    </div>


                    <div className="tm-timeline-item">
                        <div className="tm-timeline-item-inner">
                            {/* <img src="./img/img-02.jpg" alt="Image" className="rounded-circle tm-img-timeline"/> */}
                           
                            <div className="tm-timeline-description-wrap">
                                <div className="tm-bg-dark-light tm-timeline-description">
                                    <h3 className="tm-text-cyan tm-font-400">Vestibulum ante ipsum primis</h3>
                                    <p>In imperdiet nisl quis sapien pellentesque, non rhoncus elit sollicitudin. Donec pharetra egestas magna at eleifend. Sed non magna vitae enim tempus faucibus.</p>
                                    <p className="tm-text-cyan float-right mb-0">Another Story . 9 July 2020</p>
                                </div>
                            </div>
                        </div>
                        <div className="tm-timeline-connector-vertical"></div>
                    </div>

                    <div className="tm-timeline-item">
                        <div className="tm-timeline-item-inner">
                            {/* <img src="./img/img-03.jpg" alt="Image" className="rounded-circle tm-img-timeline"/> */}
                            
                            <div className="tm-timeline-description-wrap">
                                <div className="tm-bg-dark tm-timeline-description">
                                    <h3 className="tm-text-yellow tm-font-400">Pellentesque accumsan convallis</h3>
                                    <p>Suspendisse felis massa, maximus sed mauris at, elementum fermentum nisl. Aliquam quis elit vel ipsum ornare sollicitudin. Nulla et dolor eget nisi varius convallis.</p>
                                    <p className="tm-text-yellow float-right mb-0">Latest News . 30 June 2020</p>
                                </div>
                            </div>
                        </div>
                        <div className="tm-timeline-connector-vertical"></div>
                    </div>

                    <div className="tm-timeline-item">
                        <div className="tm-timeline-item-inner">
                            {/* <img src="./img/img-04.jpg" alt="Image" className="rounded-circle tm-img-timeline"/> */}
                           
                            <div className="tm-timeline-description-wrap">
                                <div className="tm-bg-dark-light tm-timeline-description">
                                    <h3 className="tm-text-orange tm-font-400">Lorem ipsum dolor sit amet</h3>
                                    <p>Phasellus at quam facilisis sem congue lacinia. Fusce risus velit, bibendum in magna eu, sollicitudin pellentesque dolor. Nulla facilisi. Fusce libero mauris, maximus et liqula at.</p>
                                    <p className="tm-text-orange float-right mb-0">New Project . 22 June 2020</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        
           
            <div className="row tm-section-mb tm-section-mt">
                
            </div>
            <hr/>
       
        <hr/>
       
        <footer className="row mt-5 mb-5">
            <div className="col-lg-12">
                <p className="text-center tm-text-gray tm-copyright-text mb-0">Copyright &copy;
                    <span className="tm-current-year">2020</span> AMEX 
                    
                
                </p>
            </div>
        </footer>
    </div>
</div>

    );
}

  export default MyList;