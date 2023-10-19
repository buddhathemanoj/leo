import react from "react";
import './Brand.css';
import { PlayCircleOutlined } from '@ant-design/icons';

import { Select, Space } from 'antd';
const handleChange = (value) => {
    console.log(`selected ${value}`);
};
export const Brand = () => {
    return (
        <div style={{padding:'0 5%'}}>


              <div  className="display">
            <div>
                <h1 className="bold">
                    Built for ambitious,<br />
                    forward thinking investors
                </h1>
                <p className="pppp">Get unbelievable returns on your money by investing with India’s <br />
                    largest self-operated backpacker hostel chain</p>
                <div style={{ justifyContent: "flex-start" }}><button className="bbb"><PlayCircleOutlined style={{ fontSize: '25px' }} />WATCH VIDEO</button></div>

            </div>
            <div className="borderr">
                <div className="mathi">
                    <input className="inputt" type="text" placeholder="Name" />
                    <input className="inputt" type="text" placeholder="phone" />
                </div><br /><br />
                <div className="div">
                    <input className="inputtt" type="text" placeholder="Email id" /><br /><br/>
                    <Select
                        className="inputttt"
                        defaultValue="lucy"
                        style={{
                            width: 370,
                            height:55,
                        }}
                        onChange={handleChange}
                        options={[
                            {
                                value: '25000',
                                label: 'Jack',
                            },
                            {
                                value: 'lucy',
                                label: 'Lucy',
                            },
                            {
                                value: 'Yiminghe',
                                label: 'yiminghe',
                            },
                            {
                                value: 'disabled',
                                label: 'Disabled',

                            },
                        ]}
                    /><br/><br/>
                    <button className="ingvestbtn">INVEST NOW</button>
                </div>






            </div>
        </div>
        </div>
      
    )
}