import React from 'react';

/**This is Heading Component which contains Main Heading part this WebPage
 * @returns {jsx} : This return Heading of this web page,
 * This exports the default class
 */

class Heading extends React.Component {
    render() {
        // Heading 
        return (
            <>
                <header class="hero">
                    <div class="container spacing">
                        <h1 class="primary-title">Amazing shoes at an amazing price</h1>
                        <p>
                            Become a member of our community we provied great shoes. All kinds of people are welcome here by Rakesh and Ankith
                        </p>
                        <a href="/login" class="btn">Login to see what we have </a>
                    </div>
                </header>
            </>
        )
    }
}

export default Heading;