import React from 'react'
import { BurgerComponentEnum } from '../Resources'
import BreadUpper from './BurgerComponents/BreadUpper/BreadUpper';
import BreadLower from './BurgerComponents/BreadLower/BreadLower';
import Cheese from './BurgerComponents/Cheese/Cheese';
import Lettuce from './BurgerComponents/Lettuce/Lettuce';
import Tomatoes from './BurgerComponents/Tomatoes/Tomatoes';

function CreateBurger(props) {


    const BurgerStack = props.burgerStack.map((item, index) => {
        switch (item) {
            case BurgerComponentEnum.CHEESE:
                return <Cheese />;
            case BurgerComponentEnum.LETTUCE:
                return <Lettuce />
            case BurgerComponentEnum.TOMATOES:
                return <Tomatoes />;
            default:
                return null
        }
    })




    return (
        <div style={{ padding: '9%' }}>
            <BreadUpper />
            {BurgerStack}
            <BreadLower />
        </div>
    )
}

export default CreateBurger