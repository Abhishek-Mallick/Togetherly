// pages/index.js or pages/index.tsx
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from "next/head";

const Landing = () => {

    // Function to handle sign-in

    return (
      <>
        <style
          dangerouslySetInnerHTML={{
            __html: "\n  ::-webkit-scrollbar{\n    display:None;\n  }\n  ",
          }}
        />

        <meta charSet="utf-8" />
        <title>Togetherly</title>
        <meta
          content="Siena AI | Empathic AI customer service that's almost human"
          property="og:title"
        />
        <meta
          content="The autonomous customer service platform designed for commerce. Combine the best of human empathy and intelligent automation to transform the way your customer service teams operate and engage with shoppers."
          property="og:description"
        />
        <meta
          content="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/6553217f2f8d133540d9da2d_thumbnail.webp"
          property="og:image"
        />
        <meta
          content="Siena AI | Empathic AI customer service that's almost human"
          property="twitter:title"
        />
        <meta
          content="The autonomous customer service platform designed for commerce. Combine the best of human empathy and intelligent automation to transform the way your customer service teams operate and engage with shoppers."
          property="twitter:description"
        />
        <meta
          content="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/6553217f2f8d133540d9da2d_thumbnail.webp"
          property="twitter:image"
        />
        <meta property="og:type" content="website" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link
          href="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/css/sienaai.webflow.7c02108cd.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://cdn3d.iconscout.com/3d/premium/thumb/t-letter-9907137-8082736.png?f=webp"
          rel="shortcut icon"
          type="image/x-icon"
        />
        <link
          href="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/653bb899ea40732f1d804072_webclip.png"
          rel="apple-touch-icon"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n        ::selection {\n            background: #D9FF0F;\n            color: #000000;\n            text-shadow: none;\n            -webkit-text-fill-color: #000;\n        }\n\n        body {\n            overflow-x: hidden;\n        }\n\n        /* Form */\n\n        form .form__field {\n            outline: none;\n        }\n\n        /*Body no scroll on Menu and Modal open - (the class o.hidden will be toggled from the global script)*/\n\n        .o-hidden {\n            overflow: hidden !important;\n        }\n\n        .mobile__menu-wrapper.is--open {\n            /*this is the class of the links wrapper. It must be 100vh*/\n            overflow-y: auto !important;\n            overflow-x: hidden !important;\n        }\n\n        /*Prevent flashesh on load*/\n\n        [text-split] {\n            opacity: 0;\n        }\n\n        html.w-editor [text-split] {\n            opacity: 1;\n        }\n\n        @media screen and (min-width: 991px) {\n            [no-flash] {\n                opacity: 0;\n            }\n        }\n\n        @media screen and (min-width: 991px) {\n            html.w-editor [no-flash] {\n                opacity: 1;\n            }\n        }\n\n        .word {\n            overflow: hidden;\n            padding-bottom: 0.1em;\n            margin-bottom: -0.1em;\n            transform-origin: bottom;\n        }\n\n        /*Swiper JS*/\n\n        .slider-main_button.swiper-next.is-disabled {\n            opacity: 0.3;\n            pointer-events: none;\n        }\n\n        .slider-main_button.swiper-prev.is-disabled {\n            opacity: 0.3;\n            pointer-events: none;\n        }\n\n        /* Accordion */\n\n        .accordion_trigger .p-body,\n        .accordion__close-btn {\n            pointer-events: none;\n        }\n    ",
          }}
        />
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n        /* Sections with blur */\n\n        .section__home-hero,\n        .section__automation-features,\n        .section__testimonials {\n            position: relative;\n        }\n\n        .section__home-hero canvas,\n        .section__automation-features canvas,\n        .section__testimonials canvas {\n            position: absolute;\n            top: 0;\n            left: 0;\n            z-index: 0;\n        }\n\n        .section__home-hero canvas {\n            opacity: 0;\n            visibility: hidden;\n            transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;\n        }\n\n        .section__home-hero canvas.visible {\n            opacity: 1;\n            visibility: visible;\n        }\n\n        @media only screen and (max-width: 991px) {\n            .section__home-hero canvas.visible,\n            .section__automation-features canvas,\n            .section__testimonials canvas {\n                opacity: 0.8;\n                visibility: visible;\n            }\n        }\n\n        .section__home-hero .blur,\n        .section__automation-features .blur,\n        .section__testimonials .blur {\n            font-size: 62.5% !important;\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            -webkit-backdrop-filter: blur(clamp(3.5em, calc(3.5em + ((1vw - 0.48em) * 4.5139)), 10em));\n            backdrop-filter: blur(clamp(3.5em, calc(3.5em + ((1vw - 0.48em) * 4.5139)), 10em));\n        }\n\n        /* Reply Message */\n\n        .product__chat-item:nth-child(1),\n        .product__chat-item:nth-child(2),\n        .product__chat-item:nth-child(3) {\n            opacity: 0;\n            visibility: hidden;\n            transform: translateY(25%);\n        }\n\n        /* Personas Tabs */\n\n        .persona__tab-link a {\n            pointer-events: none;\n        }\n\n        /* Metrics */\n\n        .metric-nums-container {\n            font-size: 62.5% !important;\n            column-gap: clamp(1.6em, calc(1.6em + ((1vw - 0.48em) * 1.1111)), 3.2em);\n        }\n\n        .metric-num .metric-svg {\n            width: 100%;\n            height: 100%;\n            overflow: visible;\n            transform: perspective(1000px)\n        }\n\n        .metric-num .metric-svg g[mask] path {\n            opacity: 0;\n            visibility: hidden;\n        }\n\n        /* Use Case */\n\n        .use-case-one__img-one {\n            aspect-ratio: 160/227;\n        }\n\n        .use-case__visual-shoes {\n            aspect-ratio: 275/299;\n        }\n\n        .use-case__visual-tea {\n            aspect-ratio: 346/378;\n        }\n\n        /* Tracking */\n\n        .svg-tracking {\n            width: 100%;\n            height: 100%;\n        }\n\n        .svg-tracking .lines path {\n            opacity: 0;\n            visibility: hidden;\n            stroke-dasharray: 0 31;\n            stroke-dashoffset: -16;\n        }\n\n        .tracking-icon-wrapper {\n            pointer-events: none;\n        }\n\n        .tracking-icon-wrapper img {\n            width: 100%;\n            height: auto;\n        }\n\n        /* Chat Bubbles */\n\n        [data-case-chat] {\n            opacity: 0;\n            visibility: hidden;\n        }\n\n        /* Integrates */\n\n        .integration-svg g:not(.integration-logo) {\n            opacity: 0;\n            visibility: hidden;\n        }\n\n        .integration-icon {\n            --size: clamp(3.2em, calc(3.2em + ((1vw - 0.48em) * 2.2222)), 6.4em);\n            font-size: 62.5% !important;\n            border-radius: 50px;\n            width: var(--size);\n            height: var(--size);\n            box-shadow: 0.7598px 3.03922px 19.7549px 0px rgba(60, 60, 60, 0.18);\n            overflow: hidden;\n            position: absolute;\n            opacity: 0;\n            visibility: hidden;\n        }\n\n        .integration-icon img {\n            width: 100%;\n            height: auto;\n            opacity: 0;\n            visibility: hidden;\n            border-radius: 50px;\n        }\n\n        .circles-integration g:not(.integration-logo) {\n            visibility: hidden;\n            opacity: 0;\n        }\n\n        /* Persona tabs */\n\n        .product-three__visual-wrap:hover {\n            cursor: none;\n        }\n\n        /* Testimonials tabs */\n\n        .testimonials-tabs__col-item.w-inline-block.w-tab-link .testimonials__logo {\n            opacity: 0.2;\n        }\n\n        .testimonials-tabs__col-item.w-inline-block.w-tab-link .testimonials__logo:hover {\n            opacity: 0.4;\n        }\n\n        .testimonials-tabs__col-item.w-inline-block.w-tab-link.w--current .testimonials__logo {\n            opacity: 1;\n        }\n\n        .testimonials-tabs__col-item.w-inline-block.w-tab-link.w--current .testimonial__progress-line {\n            background: linear-gradient(90deg, rgba(254, 125, 194, 0.00) 0%, #FE7DC2 50%, rgba(254, 125, 194, 0.00) 100%);\n        }\n\n        /* Use cases Form */\n\n        .use-cases__checkbox-field.w-radio:has(.w-form-formradioinput.w-form-formradioinput--inputType-custom.use-cases__checkbox.w-radio-input.w--redirected-checked) {\n            color: white;\n        }\n    ",
          }}
        />

       
        <div className="global">
          <div className="html w-embed">
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '\n                [mode="dark"] {\n                    --color--background: var(--dark--background);\n                    --color--text: var(--dark--text-light);\n                    --color--button-bg: var(--dark--button-bg);\n                    --color--button-text: var(--dark--button-text);\n                    --color--pill: var(--dark--pill);\n                    --color--pill-outline: var(--dark--pill-outline);\n                    --color--button-secondary-outline: var(--dark--button-secondary-outline);\n                    --color--button-secondary-text: var(--dark--button-secondary-text);\n                    --color--logo: var(--dark--logo);\n                    --color--nav-hover: var(--dark--nav-hover);\n                    --color--ham-menu: var(--dark--ham-menu);\n                    --color--nav-lines: var(--dark--nav-lines);\n                    --color--button-ghost-text: var(--dark--button-ghost-text);\n                    --color--button-ghost-bg: var(--dark--button-ghost-bg);\n                    --color--button-ghost-hover: var(--dark--button-ghost-hover);\n                    --color--button-ghost-outline: var(--dark--button-ghost-outline);\n                    --color--nav-text: var(--dark--nav-text);\n                }\n\n                /* desktop */\n\n                @media screen and (max-width: 1440px) and (min-width: 991px) {\n                    body {\n                        --container--small: var(--container--small-tablet);\n                        --container--medium: var(--container--small-tablet);\n                        --container--large: var(--container--small-tablet);\n                    }\n                }\n\n                /* tablet */\n\n                @media screen and (max-width: 991px) {\n                    body {\n                        --container--small: var(--container--small-tablet);\n                        --container--medium: var(--container--small-tablet);\n                        --container--large: var(--container--small-tablet);\n                    }\n                }\n\n                /* mobile */\n\n                @media screen and (max-width: 767px) {\n                    body {\n                        --container--small: var(--container--small-mobile);\n                        --container--medium: var(--container--small-mobile);\n                        --container--large: var(--container--small-mobile);\n                    }\n                }\n\n                [style-use-case="wide"] {\n                    grid-column-start: span 2;\n                    grid-column-end: span 2;\n                    grid-row-start: span 1;\n                    grid-row-end: span 1;\n                }\n\n                body {\n                    font-size: 1.1049723756906078vw;\n                }\n\n                /* Max Font Size */\n\n                @media screen and (min-width:1728px) {\n                    body {\n                        font-size: 1.1933701657458564rem;\n                    }\n                }\n\n                /* Min Font Size */\n\n                @media screen and (max-width:991px) {\n                    body {\n                        font-size: 0.6843922651933703rem;\n                    }\n                }\n\n                /*Make sure h1 is 5em on 1440px*/\n\n                @media only screen and (min-width: 1439px) and (max-width: 1440px) {\n                    h1,\n                    .h1 {\n                        font-size: 4.7rem;\n                    }\n                }\n\n                /* Helpers */\n\n                body {\n                    overscroll-behavior: none;\n                    overflow-x: hidden;\n                }\n\n                .main-wrapper {\n                    overflow: clip;\n                }\n\n                /*Pointer events none*/\n\n                .non-clickable {\n                    pointer-events: none;\n                }\n\n                .br-smallest,\n                .br-small,\n                .br-medium,\n                .br-large,\n                .br-xlarge,\n                .br-xxlarge,\n                .slider-main_button {\n                    /* Border radius fix - Safari (add here all the necessary classes) */\n                    -webkit-transform: translateZ(0);\n                }\n\n                .text-balanced,\n                .testimonial__rich-text p,\n                .testimonial__rich-text h3 {\n                    text-wrap: balance;\n                }\n\n                a {\n                    word-wrap: break-word;\n                }\n\n                .clamp-3lines {\n                    display: -webkit-box;\n                    overflow: hidden;\n                    -webkit-line-clamp: 3;\n                    -webkit-box-orient: vertical;\n                }\n\n                .clamp-2lines {\n                    display: -webkit-box;\n                    overflow: hidden;\n                    -webkit-line-clamp: 2;\n                    -webkit-box-orient: vertical;\n                }\n\n                /* Testimonials Marquee */\n\n                .marquee-track {\n                    will-change: transform;\n                    animation: marquee-horizontal 30s linear infinite;\n                    /* manipulate the speed of the marquee by changing "40s" line above*/\n                }\n\n                .marquee-track-left {\n                    will-change: transform;\n                    animation: marquee-horizontal-left 30s linear infinite;\n                    /* manipulate the speed of the marquee by changing "40s" line above*/\n                }\n\n                @keyframes marquee-horizontal {\n                    from {\n                        transform: translateX(0);\n                    }\n                    to {\n                        transform: translateX(-50%);\n                    }\n                }\n\n                @keyframes marquee-horizontal-left {\n                    from {\n                        transform: translateX(-50%);\n                    }\n                    to {\n                        transform: translateX(0);\n                    }\n                }\n\n                @media only screen and (min-width: 992px) {\n                    .marquee-track:hover,\n                    .marquee-track-left:hover {\n                        animation-play-state: paused;\n                    }\n                }\n\n                .testimonials__col-item.active .testimonial__progress-line-moving {\n                    opacity: 1;\n                }\n            ',
              }}
            />
          </div>
          <div id="cookie-banner" className="cookie-message">
            <div className="cookie-info-wrapper">
              <div className="p-small">
                This website uses cookies.{" "}
                <a href="/privacy-policy" className="p-small link">
                  See how.
                </a>
                <a href="#" className="privacy-link" />
              </div>
              <div id="consent-cookies" className="close-cookie__wrapper" />
            </div>
          </div>
          <div className="mouse non-clickable">
            <div
              data-w-id="9d003d51-08fc-8d78-132f-6f234f4d0cec"
              className="pointer"
            >
              <img
                src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/65256d9eaf9773d82c6a17a2_cursor.svg"
                loading="lazy"
                alt=""
                className="pointer-img"
              />
              <div className="pointer-pill">
                <div className="p-small bold">Mabel</div>
              </div>
              <div className="mouse__blur" />
              <img
                src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/653fa16ddd6b6558cb9567d2_Cursor%20for%20bubbles.svg"
                loading="lazy"
                alt=""
                className="cursor-img"
              />
            </div>
          </div>
          <div className="c-loader">
            <div
              data-w-id="a02a3d84-c19c-80ca-825b-eb7f1ff13278"
              className="c-bar blurred-one"
            />
            <div className="c-bar blurred-two" />
            <div className="c-bar blurred-three" />
          </div>
        </div>
        <nav className="navigation">
          <div className="container-small">
            <div className="nav__parent">
              <a
                href="/"
                aria-current="page"
                className="nav__logo w-inline-block w--current"
              >
                <div className="nav__siena-logo-black w-embed">
                  <h6>Togetherly</h6>
                </div>
              </a>
              <div className="nav__links-wrapper">
                <div
                  data-hover="true"
                  data-delay={0}
                  className="nav__link w-dropdown"
                >
                  <div className="nav__link-toggle w-dropdown-toggle">
                    <div className="nav__text">services</div>
                  </div>
                  <nav className="nav__dropdown-list partners w-dropdown-list">
                    <a
                      href="/partner-with-siena"
                      className="nav__dropdown-link no-wrap w-inline-block"
                    >
                      <div className="nav__icon">
                        <img
                          src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/653a5f99b89b51259a80cef1_partners%20icon.svg"
                          loading="lazy"
                          alt=""
                          className="img-full"
                        />
                      </div>
                      <div>Partner with Siena</div>
                    </a>
                    <a
                      href="/refer-a-friend"
                      className="nav__dropdown-link no-wrap w-inline-block"
                    >
                      <div className="nav__icon">
                        <img
                          src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/653a5f997bb9bb116f66bc7f_refer%20a%20friend.svg"
                          loading="lazy"
                          alt=""
                          className="img-full"
                        />
                      </div>
                      <div>Refer a friend</div>
                    </a>
                  </nav>
                </div>
                <div
                  data-hover="true"
                  data-delay={0}
                  className="nav__link w-dropdown"
                >
                  <div className="nav__link-toggle w-dropdown-toggle">
                    <div className="nav__text">About</div>
                  </div>
                </div>
                <div
                  data-hover="false"
                  data-delay={0}
                  className="nav__link w-dropdown"
                >
                  <div className="nav__link-toggle w-dropdown-toggle">
                    <div className="nav__text">Contact</div>
                  </div>
                </div>
              </div>
              <a
                href="/sign-up"
                className="button small hidden-tablet-below w-inline-block"
              >
                <div>Sign up</div>
                <div className="blur__btn non-clickable" />
              </a>
              <div
                data-w-id="e37539c2-cf3f-6abe-4f28-79554cf98dac"
                className="hamburger__menu"
              >
                <div className="ham-menu__line-one" />
                <div className="ham-menu__line-two" />
                <div className="ham-menu__line-three" />
              </div>
              <div className="mobile__menu-wrapper">
                <div className="mobile__links-wrapper">
                  <div className="accordion_item">
                    <div className="accordion_trigger mobile-links">
                      <div className="accodian__h mobile-links">
                        <div className="p-body all-caps">partners</div>
                      </div>
                      <div className="accordion__close-btn">
                        <img
                          loading="eager"
                          src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/653b7390b83808875bb41f9c_chevron%20down%20white.svg"
                          alt=""
                          className="img-full"
                        />
                      </div>
                    </div>
                    <div className="accordion_content">
                      <div className="accordion_content-spacer">
                        <a
                          href="/partner-with-siena"
                          className="nav__dropdown-link no-wrap w-inline-block"
                        >
                          <div className="nav__icon">
                            <img
                              src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/653a5f99b89b51259a80cef1_partners%20icon.svg"
                              loading="lazy"
                              alt=""
                              className="img-full"
                            />
                          </div>
                          <div>Partner with Siena</div>
                        </a>
                        <a
                          href="/refer-a-friend"
                          className="nav__dropdown-link no-wrap w-inline-block"
                        >
                          <div className="nav__icon">
                            <img
                              src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/653a5f997bb9bb116f66bc7f_refer%20a%20friend.svg"
                              loading="lazy"
                              alt=""
                              className="img-full"
                            />
                          </div>
                          <div>Refer a friend</div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="accordion_item">
                    <div className="accordion_trigger mobile-links">
                      <div className="accodian__h mobile-links">
                        <div className="p-body all-caps">resources</div>
                      </div>
                      <div className="accordion__close-btn">
                        <img
                          loading="eager"
                          src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/653b7390b83808875bb41f9c_chevron%20down%20white.svg"
                          alt=""
                          className="img-full"
                        />
                      </div>
                    </div>
                    <div className="accordion_content">
                      <div className="accordion_content-spacer">
                        <a
                          href="/customers"
                          className="nav__dropdown-link no-wrap w-inline-block"
                        >
                          <div className="nav__icon">
                            <img
                              src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/653a5f931889f4f91eae2b66_customers%20icon.svg"
                              loading="lazy"
                              alt=""
                              className="img-full"
                            />
                          </div>
                          <div>Customers</div>
                        </a>
                        <a
                          href="/blog"
                          className="nav__dropdown-link no-wrap w-inline-block"
                        >
                          <div className="nav__icon">
                            <img
                              src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/653a282fa77b26ccc7be0d58_blog%20icon.svg"
                              loading="lazy"
                              alt=""
                              className="img-full"
                            />
                          </div>
                          <div>Blog</div>
                        </a>
                        <a
                          href="/community"
                          className="nav__dropdown-link w-inline-block"
                        >
                          <div className="nav__icon">
                            <img
                              src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/653a5f951d892754d24fb4ac_careers.svg"
                              loading="lazy"
                              alt=""
                              className="img-full"
                            />
                          </div>
                          <div>Community</div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="accordion_item">
                    <div className="accordion_trigger mobile-links">
                      <div className="accodian__h mobile-links">
                        <div className="p-body all-caps">company</div>
                      </div>
                      <div className="accordion__close-btn">
                        <img
                          loading="eager"
                          src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/653b7390b83808875bb41f9c_chevron%20down%20white.svg"
                          alt=""
                          className="img-full"
                        />
                      </div>
                    </div>
                    <div className="accordion_content">
                      <div className="accordion_content-spacer">
                        <a
                          href="/about-us"
                          className="nav__dropdown-link w-inline-block"
                        >
                          <div className="nav__icon">
                            <img
                              src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/653a5f939299913eb7564fbf_about%20us.svg"
                              loading="lazy"
                              alt=""
                              className="img-full"
                            />
                          </div>
                          <div>About us</div>
                        </a>
                        <a
                          href="https://jobs.ashbyhq.com/siena"
                          target="_blank"
                          className="nav__dropdown-link w-inline-block"
                        >
                          <div className="nav__icon">
                            <img
                              src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/653a5f951d892754d24fb4ac_careers.svg"
                              loading="lazy"
                              alt=""
                              className="img-full"
                            />
                          </div>
                          <div>Carees</div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="sb-xl" />
                  <div className="sb-xl" />
                  <div className="mobile-menu__btns-wrap">
                    <a href="/book-a-demo" className="button w-inline-block">
                      <div className="button__icon-text-wrapper">
                        <div className="btn-text">Book a demo</div>
                        <div className="button__icon-wrapper">
                          <div className="btn__line w-embed">
                            <svg
                              width={14}
                              height={2}
                              viewBox="0 0 14 2"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 1H13"
                                stroke="currentColor"
                                strokeLinecap="round"
                              />
                            </svg>
                          </div>
                          <div className="btn__chevron svg-filled w-embed">
                            <svg
                              width={7}
                              height={12}
                              viewBox="0 0 7 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M6.38477 5.42773C6.63086 5.70117 6.63086 6.11133 6.38477 6.35742L1.13477 11.6074C0.861328 11.8809 0.451172 11.8809 0.205078 11.6074C-0.0683594 11.3613 -0.0683594 10.9512 0.205078 10.7051L4.99023 5.91992L0.205078 1.10742C-0.0683594 0.861328 -0.0683594 0.451172 0.205078 0.205078C0.451172 -0.0683594 0.861328 -0.0683594 1.10742 0.205078L6.38477 5.42773Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="blur__btn non-clickable" />
                    </a>
                    <div className="menu__socials-wrap">
                      <a
                        href="https://www.linkedin.com/company/siena-ai/"
                        target="_blank"
                        className="social-icon nav w-inline-block"
                      >
                        <div className="social-icon__embed w-embed">
                          <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 18 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4.15625 18.4658H0.523438V6.78613H4.15625V18.4658ZM2.32031 5.22363C1.1875 5.22363 0.25 4.24707 0.25 3.0752C0.25 2.33301 0.640625 1.62988 1.26562 1.27832C1.92969 0.887695 2.75 0.887695 3.375 1.27832C4.03906 1.62988 4.42969 2.33301 4.42969 3.0752C4.42969 4.24707 3.49219 5.22363 2.32031 5.22363ZM17.7109 18.4658H14.1172V12.8018C14.1172 11.4346 14.0781 9.71582 12.2031 9.71582C10.3281 9.71582 10.0547 11.1611 10.0547 12.6846V18.4658H6.42188V6.78613H9.89844V8.3877H9.9375C10.4453 7.48926 11.6172 6.5127 13.375 6.5127C17.0469 6.5127 17.75 8.93457 17.75 12.0596V18.4658H17.7109Z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                      </a>
                      <a
                        href="https://twitter.com/siena_ai"
                        target="_blank"
                        className="social-icon nav w-inline-block"
                      >
                        <div className="social-icon__embed w-embed">
                          <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 19 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.1953 0.84082H16.9297L10.9141 7.75488L18.0234 17.0908H12.4766L8.10156 11.4268L3.14062 17.0908H0.367188L6.8125 9.74707L0.015625 0.84082H5.71875L9.625 6.03613L14.1953 0.84082ZM13.2188 15.4502H14.7422L4.89844 2.40332H3.25781L13.2188 15.4502Z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <main className="main-wrapper">
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n  .hero_section {\n  --dot-bg: white;\n  --dot-color: black;\n  --dot-size: 2px;\n  --dot-space: 22px;\n\tbackground:\n\t\tlinear-gradient(90deg, var(--dot-bg) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space),\n\t\tlinear-gradient(var(--dot-bg) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space),\n\t\tvar(--dot-color);\n}\n  ",
            }}
          />
          <div
            style={{
              height: 1000,
              width: "100%",
              // position: "relative",
              // display: "flex",
              justifyContent: "center",
            }}
            className="hero_section"
          >
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1 style={{ textAlign: "center" }} id="heading">
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    "\n  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&family=Poppins:wght@200&family=Spline+Sans+Mono:ital,wght@1,700&display=swap');\n  #heading{\n    font-family: 'Poppins', sans-serif;\n\n     font-size: 100px;\n    font-weight: 900;\n    color: white;\n    -webkit-text-stroke-color:#000 ;\n    -webkit-text-stroke-width: 2px;\n  }\n  ",
                }}
              />
              Welcome to
            </h1>
            <h1 style={{ textAlign: "center" }} id="heading_1">
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    "\n  #heading_1{\n     font-size: 10rem;\n    font-weight: 900;\n    color: white;\n    -webkit-text-stroke-color:#000 ;\n    -webkit-text-stroke-width: 2px;\n  }\n  ",
                }}
              />
              TOGETHERLY
            </h1>
            <div
              style={{
                width: "100%",
              }}
            >
              <br />
              <br />

              <style
                dangerouslySetInnerHTML={{
                  __html:
                    "\n  #para{\n@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&family=Poppins:wght@200&family=Spline+Sans+Mono:ital,wght@1,700&display=swap');\nfont-family: 'Poppins', sans-serif;\n     font-size: 2rem;\n  \n  }\n  ",
                }}
              />
            </div>

            <a
              href="/"
              style={{
                width: "36rem",
                height: "7rem",
                fontSize: "4rem",
                backgroundColor: "rgba(0, 0, 0, 0)",
                color: "black",
                border: "2px solid black",
                borderRadius: 10,
                marginTop: 120,
                padding: "20px",
                marginLeft: 620,
              }}
            >
              Continue to Dashboard
            </a>
          </div>
        </main>
        <div className="d-none w-embed w-script"></div>
        <div className="d-none w-embed w-script"></div>
        <div className="d-none w-embed w-script"></div>
        <div className="d-none">
          <div className="w-embed w-script"></div>
          <div className="w-embed w-script"></div>
          <div className="w-embed w-script"></div>
          <div className="w-embed w-script"></div>
          <div className="w-embed w-script"></div>
          <div className="w-embed w-script"></div>
          <div className="w-embed w-script"></div>
          <div className="w-embed w-script"></div>
          <div className="w-embed w-script"></div>
        </div>
      </>
    );
};

export default Landing;
