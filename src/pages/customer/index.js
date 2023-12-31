import React, { useState } from 'react';
import {
    Button,
    DatePicker,
    Form,
    Input,
} from 'antd';
import Endpoint from '../../util/endpoint';



const CustomerForm = () => {
    const [surname, setSurname] = useState("");
    const [firstname, setFirstname] = useState("");
    const [customerNumber, setCustomerNumber] = useState("");
    const [nin, setNin] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [saving, setSaving] = useState(false);

    const saveDetails = () => {
        setSaving(true);
        const payload = {
            "nationalIDNumber": nin,
            "firstName": firstname,
            "surname": surname,
            "dateofBirth": birthDate,
            "customerNumber": customerNumber
        }
        console.log(payload)
        Endpoint.createCustomer(payload)
            .then((res) => {
                console.log(res?.data)
            setSaving(false)
            if(res?.data?.isSuccess){
                alert(res?.data?.message)
                window.location.href = "/"
            }
            else{
                if(!res?.data?.isSuccess){
                    alert(res?.data?.message)
                }
            }
            })
            .catch((err) => {
                console.log(err)
                alert("oops! something went wrong")
                setSaving(false)
            })
    }
    const handleDate = (date, dateString) => {
        console.log(dateString)
        setBirthDate(dateString)
    }
    return (
        <div style={{ padding: "100px" }}>

            <Form

                labelCol={{
                    span: 14,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                style={{
                    maxWidth: 600,
                }}
                onFinish={() => saveDetails()}
            >
                <h1>GM Pay Customer Form</h1>
                <Form.Item label="Surname">
                    <Input required onChange={(e) => setSurname(e.target.value)} />
                </Form.Item>
                <Form.Item label="Firstname">
                    <Input required onChange={(e) => setFirstname(e.target.value)} />
                </Form.Item>
                <Form.Item label="National Identity Number(NIN)">
                    <Input required onChange={(e) => setNin(e.target.value)} />
                </Form.Item>
                <Form.Item label="Customer Number/ID">
                    <Input onChange={(e) => setCustomerNumber(e.target.value)} />
                </Form.Item>

                <Form.Item label="Date of Birth">
                    <DatePicker required format={"YYYY-MM-DD"} onChange={handleDate} />
                </Form.Item>

                <Form.Item label=" ">
                    <Button
                        type="primary"
                        htmlType="submit"
                        loading={saving}
                    >Save</Button>
                </Form.Item>

            </Form>
        </div>
    );
};
export default CustomerForm;