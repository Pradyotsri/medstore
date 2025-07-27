import React from 'react'

export const Hero = () => {
  return (
    <>
     <section className="hero">
        <div className="container">
          <div className="hero-content">
            <p className="hero-subtitle">25% off all products.</p>
            <h2 className="h1 hero-title">
              Quality <span className="span">medicines </span>
              &amp; improved  <span className="span">healthcare.</span>
            </h2>
            <p className="hero-text">
              Have your medicines delivered right to the comfort of your home.
            </p>
            <a href="/shop" className="btn btn-primary">
              <span className="span">Shop Now</span>
              <ion-icon name="chevron-forward" aria-hidden="true" />
            </a>
          </div>
          <figure className="hero-banner">
            <img
              src="./images/hero-banner.jpg"
              width={603}
              height={634}
              loading="lazy"
              alt="Medicines"
              className="w-100"
            />
          </figure>
        </div>
      </section>
    </>
  )
}
