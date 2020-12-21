import React, { useState } from 'react';
const Contact_FP = () => {
    const [data,setdata] = useState({
        fullname:'',
        phone:'',
        email:'',
        msg:'',
    });

    const InputEvent =(event)=>{
        const{name,value} = event.target;
        setdata((preval)=>{
            return{
                ...preval,
                [name]:value,
            };
        });
    };
    const formSubmit=(e)=>{
        e.preventDefault();//to prevent refresh
            alert(`My name is ${data.fullname}. My contact number is ${data.phone}. My email is ${data.email}.`);
    };
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
                <div className="container conatct_div">
                    <div className="row">
                        <div className="col-md-6 col-10 mx-auto">
                            <form onSubmit={formSubmit}>
                            <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Name</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Full Name" name="fullname" onChange={InputEvent} value={data.fullname} />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name="email" nChange={InputEvent} value={data.email} />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Contact Number</label>
                                    <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Phone Number" name="phone" nChange={InputEvent} value={data.phone} />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Your Message</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="message" nChange={InputEvent} value={data.msg}></textarea>
                                </div>
                                <div class="col-12">
    <button class="btn btn-primary" type="submit">Submit form</button>
  </div>
                            </form>
                        </div>

                    </div>


                </div>

            </div>

        </>
    );
};

export default Contact_FP;