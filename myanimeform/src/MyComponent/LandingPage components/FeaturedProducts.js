import React from 'react';

/**This is Heading Component which contains Main section this WebPage
 * @returns {jsx} : This return Featured Products of this web page,
 * This exports the default class
 */

class FeaturedProducts extends React.Component {
    render() {
        // Featured Products
        return (
            <>
                <section class="featured">
                    <div class="container">
                        <h2 class="section-title">Featured products</h2>
                        <div class="split">
                            {this.props.Featured.map((change) =>
                                <a href="/" class="featured__item">
                                    <img src={change.img} alt="" class="featured__img" />
                                    <p class="featured__details">
                                        <span class="price">{this.props.price}</span>{change.title}
                                    </p>
                                </a>
                            )}

                        </div>
                    </div>
                </section>

            </>
        )

    }
}

export default FeaturedProducts;