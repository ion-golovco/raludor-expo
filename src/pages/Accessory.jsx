import React from 'react';
import { useTranslation } from "react-i18next";
import Header from '../Components/Header';

export default function Accessory() {
const {t} = useTranslation()
return(<div>
    <Header />
    {t()}
</div> )
    
};
