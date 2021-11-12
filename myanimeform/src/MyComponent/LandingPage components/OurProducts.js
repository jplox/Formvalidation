import React from 'react';

/**This is Heading Component which contains Our Products part of this WebPage
 * @returns {jsx} : This return Our Products of this web page,
 * This exports the default class
 */

class OurProducts extends React.Component {
  render() {
    // OurProducts
    return (
      <>
        <main>
          <section class="our-products">
            <div class="container">
              <h2 class="section-title">Our products</h2>
              {this.props.products.map((change) =>
                <article class={change.style}>
                  <img src={change.img} alt="" class="product__image" />
                  <h3 class="product__title">{change.title}</h3>
                  <p class="product__description">
                    {this.props.matter}
                  </p>
                  <a href="/login" class="btn">{this.props.buttonMatter}</a>
                </article>
              )}


            </div>
          </section>
        </main>
      </>
    )
  }
}

export default OurProducts;