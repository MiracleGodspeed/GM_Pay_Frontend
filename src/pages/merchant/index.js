import React, { useState } from 'react';
import {
    Button,
    DatePicker,
    Form,
    Input,
} from 'antd';
import Endpoint from '../../util/endpoint';



const MerchantForm = () => {
    const [surname, setSurname] = useState("");
    const [firstname, setFirstname] = useState("");
    const [businessName, setBusinessName] = useState("");
    const [businessId, setBusinessId] = useState("");
    const [establishmentDate, setEstablishmentDate] = useState("");
    const [transactionVolume, setTransactionVolume] = useState("");
    const [saving, setSaving] = useState(false);

    const saveDetails = () => {
        setSaving(true);
        const payload = {
            "businessName": businessName,
            "businessID": businessId,
            "contactFirstName": firstname,
            "contactSurname": surname,
            "dateofEstablishment": establishmentDate,
            "averageTransactionVolume": parseFloat(transactionVolume)
        }
        console.log(payload)
        Endpoint.createMerchant(payload)
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
                alert("oops! something went wrong")
                console.log(err)
            setSaving(false)
        })
    }
    const handleDate = (date, dateString) => {
        console.log(dateString)
        setEstablishmentDate(dateString)
    }
    return (
        <div style={{padding:"100px"}}>
           
            <Form
            
                labelCol={{
                    span: 14,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                // disabled={componentDisabled}
                style={{
                    maxWidth: 600,
                }}
                onFinish={() => saveDetails()}
            >
                <h1>GM Pay Merchant Form</h1>
                <Form.Item label="Surname">
                    <Input onChange={(e) => setSurname(e.target.value)} />
                </Form.Item>
                <Form.Item label="Firstname">
                    <Input onChange={(e) => setFirstname(e.target.value)} />
                </Form.Item>
                <Form.Item label="Business Name">
                    <Input onChange={(e) => setBusinessName(e.target.value)} />
                </Form.Item>
                <Form.Item label="Business ID">
                    <Input onChange={(e) => setBusinessId(e.target.value)} />
                </Form.Item>
               
                <Form.Item label="Date of establishment">
                    <DatePicker format={"YYYY-MM-DD"} onChange={handleDate} />
                </Form.Item>
                <Form.Item type="number" label="Average Transaction Volume (NGN)">
                    <Input onChange={(e) => setTransactionVolume(e.target.value)} />
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
export default MerchantForm;