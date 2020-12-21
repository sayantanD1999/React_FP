import React from 'react';
import Card from './Card_(FP)';
import sdata from './Sdata_(FP)';
const Service_FP = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Our Services</h1>

            </div>
            <div className="container-fluid mb-5">
                <div className="row">

                    <div className="col-10 mx-auto">


                        <div className="row gy-4">
                            {
                                sdata.map((val,index)=>{
                                    return(
                                        <Card
                                        imgsrc = {val.imgsrc}
                                        title = {val.title}                                        
                                        
                                        />
                                    )
                                })
                            }
                        </div>

                    </div>

                </div>

            </div>

        </>
    );
};

export default Service_FP;