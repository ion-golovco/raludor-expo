import React from 'react';
import { useTranslation } from "react-i18next";
import Header from '../Components/Header';

import {Accessory} from '../assets/assets.js'
import Contact from '../Components/Contact';
import PopularItems from '../Components/PopularItems';


let accessories = Accessory;

export default function Accessor() {
const {t} = useTranslation()
return(<div>
    <Header />
    <h1 style={{"margin-top":"1em"}}id="MainText">{t('accessory')}</h1>
    <PopularItems items={accessories}/>
    <Contact />
</div> )
    
};
