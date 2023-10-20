import react from "react";
import './Brand.css';
import { PlayCircleOutlined } from '@ant-design/icons';

import { Select, Space } from 'antd';
import { useState, useEffect } from "react";
const handleChange = (value) => {
    console.log(`selected ${value}`);
};
export const Brand = () => {
    const [muthu, setmuthu] = useState(0)
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [fullname, setFullname] = useState('')
    const FULLNAME = firstname + " " + lastname
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const increaseValue = () => {
        return (
            setmuthu(muthu + 1)
        )
    }
    const handleNameChange = () => {
        console.log(firstname)
        console.log(lastname)
        console.log({ firstname } + { lastname })
        setFullname(FULLNAME)
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/')
            .then((response) => response.json())
            .then((responseData) => {
                setData(responseData);
                setLoading(false); 
                console.log(responseData);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false); 
            });
    }, []);

    return (
        <div style={{ padding: '0 5%' }}>


            <div className="display">
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
                        <input className="inputtt" type="text" placeholder="Email id" /><br /><br />
                        <Select
                            className="inputttt"
                            defaultValue="lucy"
                            style={{
                                width: 370,
                                height: 55,
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
                        /><br /><br />
                        <button className="ingvestbtn">INVEST NOW</button>
                    </div>
                </div>
            </div>
            <div>
                <p>current value{muthu}</p>
                <button onClick={increaseValue}>Click me</button>

            </div>
            <div>
                <input value={firstname} name="firstname" onChange={e => setFirstname(e.target.value)} />
                <input value={lastname} name="lastname" onChange={e => setLastname(e.target.value)} />
                <button onClick={handleNameChange}>My name is</button>
                <p>My name is{fullname}</p>
            </div>
            <div>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <div>
                       
                       
                        <ul>
                            {data.map((user) => (
                                <li key={user.id}>
                                    <ul>
                                        <li>Name: {user.name}</li>
                                        <li>Email: {user.email}</li>
                                        <li>Email: {user.address.street}</li>
                                        <li>Email: {user.username}</li>
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>

    )
}