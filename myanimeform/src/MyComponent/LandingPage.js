/**
 * Importing all the required modules here i.e Link , useState
 */

import React from 'react'
import FeaturedProducts from './LandingPage components/FeaturedProducts';
import Heading from './LandingPage components/Heading';
import OurProducts from './LandingPage components/OurProducts';

/**
 * @author:Ankith Rakesh
 * @description: This class is generally used for Landing Page .
 * @returns:JSX
 */



class LandingPage extends React.Component {
    //creating props
    constructor(props) {
        super(props);
        this.state = {
            //props for our products
            container: [
                { img: 'img/shoe-1.png', title: 'A really nice sneaker', style: 'product shoe-red spacing' }, { img: 'img/shoe-2.png', title: 'A really nice casual', style: 'product shoe-white shoe-left spacing' }, { img: 'img/shoe-3.png', title: 'A really limited edition', style: 'product shoe-blue spacing' }],
            //props for featured products
            Featured: [{ img: 'img/shoe-4.png', title: 'Sneakers' }, { img: 'img/shoe-5.png', title: 'Casual' }, { img: 'img/shoe-6.png', title: 'Limited Edition' }]
        }
    }
    render() {
        return (
            <>
                <Heading />
                <FeaturedProducts price="$99" Featured={this.state.Featured} />
                <OurProducts matter=" Lorem ipsum dolor sit amet consectetur adipisicing elit." buttonMatter="Buy Now" products={this.state.container} />


            </>

        )
    }
}
export default LandingPage