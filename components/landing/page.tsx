import React from "react";
import Script from "next/script";
import Head from "next/head";

export const Landing = () => {
  return (
    <>
      <Head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/MotionPathPlugin.min.js"></script>
        <script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"></script>
        <script src="https://unpkg.com/split-type"></script>
        <script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
      </Head>
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

      <div className="tag-manager-html-embed w-embed w-iframe">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          &lt;iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-WXWNZFB"
          height="0" width="0"
          style="display:none;visibility:hidden"&gt;&lt;/iframe&gt;
        </noscript>
        {/* End Google Tag Manager (noscript) */}
      </div>
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
      <nav mode="" className="navigation">
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
              <div className="nav__siena-logo-white w-embed">
                <img
                  alt=""
                  loading="lazy"
                  src="https://assets-global.website-files.com/6523d3eb03029a11dfdb9582/65241910b87b9be629cfef1e_verb.svg"
                  className="img-full contain"
                />
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
            <div mode="dark" className="mobile__menu-wrapper">
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
            <p style={{ textAlign: "center", marginTop: 20 }} id="para">
              Providing a platform to collabrate and share your ideas.
            </p>
          </div>

          <button
            style={{
              width: "16rem",
              height: "7rem",
              fontSize: "4rem",
              backgroundColor: "rgba(0, 0, 0, 0)",
              color: "black",
              border: "2px solid black",
              borderRadius: 10,
              marginTop: 100,

              marginLeft: 820,
            }}
          >
            Explore
          </button>
        </div>

        <section className="section__logos">
          <div className="container-large">
            <div className="logos__parent">
              <div className="client-logos__cms-wrapper w-dyn-list">
                <div role="list" className="client-logos__cms-list w-dyn-items">
                  <div
                    id="w-node-_22d88f0e-0c06-864c-e933-815891af7529-2de7c988"
                    role="listitem"
                    className="client-logos__cms-item w-dyn-item"
                  >
                    <div className="logos__item">
                      <img
                        alt=""
                        loading="lazy"
                        src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png"
                        className="img-full contain"
                        style={{ width: "70px" }}
                      />
                    </div>
                  </div>
                  <div
                    id="w-node-_22d88f0e-0c06-864c-e933-815891af7529-2de7c988"
                    role="listitem"
                    className="client-logos__cms-item w-dyn-item"
                  >
                    <div className="logos__item">
                      <img
                        alt=""
                        loading="lazy"
                        src="https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png"
                        className="img-full contain"
                        style={{ width: "70px" }}
                      />
                    </div>
                  </div>
                  <div
                    id="w-node-_22d88f0e-0c06-864c-e933-815891af7529-2de7c988"
                    role="listitem"
                    className="client-logos__cms-item w-dyn-item"
                  >
                    <div className="logos__item">
                      {/* <h5 style={{ color: "white" }}>CONVEX</h5> */}
                      <img
                        alt=""
                        loading="lazy"
                        src="https://seeklogo.com/images/N/next-js-icon-logo-EE302D5DBD-seeklogo.com.png"
                        className="img-full contain"
                        style={{ width: "90px" }}
                      />
                    </div>
                  </div>
                  <div
                    id="w-node-_22d88f0e-0c06-864c-e933-815891af7529-2de7c988"
                    role="listitem"
                    className="client-logos__cms-item w-dyn-item"
                  >
                    <div className="logos__item">
                      <img
                        alt=""
                        loading="lazy"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"
                        className="img-full contain"
                        style={{ width: "70px" }}
                      />
                    </div>
                  </div>
                  <div
                    id="w-node-_22d88f0e-0c06-864c-e933-815891af7529-2de7c988"
                    role="listitem"
                    className="client-logos__cms-item w-dyn-item"
                  >
                    <div className="logos__item">
                      <img
                        alt=""
                        loading="lazy"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png"
                        className="img-full contain"
                        style={{ width: "70px" }}
                      />
                    </div>
                  </div>
                  <div
                    id="w-node-_22d88f0e-0c06-864c-e933-815891af7529-2de7c988"
                    role="listitem"
                    className="client-logos__cms-item w-dyn-item"
                  >
                    <div className="logos__item">
                      <img
                        alt=""
                        loading="lazy"
                        src="https://workablehr.s3.amazonaws.com/uploads/account/open_graph_logo/455712/social?1687450125000"
                        className="img-full contain"
                        style={{ width: "70px" }}
                      />
                    </div>
                  </div>
                  <div
                    id="w-node-_22d88f0e-0c06-864c-e933-815891af7529-2de7c988"
                    role="listitem"
                    className="client-logos__cms-item w-dyn-item"
                  >
                    <div className="logos__item">
                      <img
                        alt=""
                        loading="lazy"
                        src="https://s-softteam.com/wp-content/uploads/2023/07/Tailwind-CSS.svg"
                        className="img-full contain"
                        style={{ width: "70px" }}
                      />
                    </div>
                  </div>
                  <div
                    id="w-node-_22d88f0e-0c06-864c-e933-815891af7529-2de7c988"
                    role="listitem"
                    className="client-logos__cms-item w-dyn-item"
                  >
                    <div className="logos__item">
                      <img
                        alt=""
                        loading="lazy"
                        src="https://static-00.iconduck.com/assets.00/mongodb-icon-icon-2048x1349-q7tkikwd.png"
                        className="img-full contain"
                        style={{ width: "70px" }}
                      />
                    </div>
                  </div>
                  <div
                    id="w-node-_22d88f0e-0c06-864c-e933-815891af7529-2de7c988"
                    role="listitem"
                    className="client-logos__cms-item w-dyn-item"
                  >
                    <div className="logos__item">
                      <img
                        alt=""
                        loading="lazy"
                        src="https://cdn.iconscout.com/icon/free/png-256/free-docker-3050921-2538289.png"
                        className="img-full contain"
                        style={{ width: "80px" }}
                      />
                    </div>
                  </div>
                  <div
                    id="w-node-_22d88f0e-0c06-864c-e933-815891af7529-2de7c988"
                    role="listitem"
                    className="client-logos__cms-item w-dyn-item"
                  >
                    <div className="logos__item">
                      <img
                        alt=""
                        loading="lazy"
                        src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
                        className="img-full contain"
                        style={{ width: "70px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bright-line" />
        </section>
        <section mode="dark" className="section__products">
          <div className="padding-section__medium">
            <div
              id="w-node-_17cba81f-873f-9727-e773-c84eb4726a49-2de7c988"
              className="container-small"
            >
              <div className="home-scroll_section">
                <div>
                  <div
                    className="integrations__text-wrap"
                    style={{ width: "100%", marginTop: "150px" }}
                  >
                    <div className="pill">
                      <div className="pill__circle" />
                      <div className="p-tiny">Collabrative Learning.</div>
                    </div>
                    <h2 className="h3 is--bgtext-white text-balanced">
                      Collabarte with other developers in real time, and learn
                      from each other's code.
                    </h2>
                    <div className="sb-xxl" />
                    <ul role="list" className="list">
                      <li className="list-item">
                        <p className="p-body">
                          Whiteboard for realtime collabration.
                        </p>
                      </li>
                      <li className="list-item">
                        <p className="p-body">
                          Easy insertion of Shapes and Graphs.
                        </p>
                      </li>
                      <li className="list-item last">
                        <p className="p-body">
                          Architectural diagram made easy!
                        </p>
                      </li>
                    </ul>
                    <div className="sb-xxl" />
                    <div className="product__button-wrap desktop">
                      <a href="/book-a-demo" className="button w-inline-block">
                        <div className="button__icon-text-wrapper">
                          <div className="btn-text">Explore</div>
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
                    </div>
                  </div>
                  <div
                    className="integrations__text-wrap"
                    style={{ width: "100%", marginTop: "200px" }}
                  >
                    <div className="pill">
                      <div className="pill__circle" />
                      <div className="p-tiny">Automated code completion.</div>
                    </div>
                    <h2 className="h3 is--bgtext-white text-balanced">
                      Automated code completion with appropriate suggestions for
                      the logic.
                    </h2>
                    <div className="sb-xxl" />
                    <ul role="list" className="list">
                      <li className="list-item">
                        <p className="p-body">
                          Learns and improves from the best interactions
                        </p>
                      </li>
                      <li className="list-item">
                        <p className="p-body">
                          Seamlessly handles multiple intents &amp; complex
                          tasks
                        </p>
                      </li>
                      <li className="list-item last">
                        <p className="p-body">
                          Understands context, while remembering the previous
                          code
                        </p>
                      </li>
                    </ul>
                    <div className="sb-xxl" />
                    <div className="product__button-wrap desktop">
                      <a href="/book-a-demo" className="button w-inline-block">
                        <div className="button__icon-text-wrapper">
                          <div className="btn-text">Explore</div>
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
                    </div>
                  </div>
                  <div
                    className="integrations__text-wrap"
                    style={{ width: "100%", marginTop: "200px" }}
                  >
                    <div className="pill">
                      <div className="pill__circle" />
                      <div className="p-tiny">Workflow | plots | Charts</div>
                    </div>
                    <h2 className="h3 is--bgtext-white text-balanced">
                      Access of assets for describing the workflow of your
                      project.
                    </h2>
                    <div className="sb-xxl" />
                    <ul role="list" className="list">
                      <li className="list-item">
                        <p className="p-body">
                          access the various assets with ease
                        </p>
                      </li>
                      <li className="list-item">
                        <p className="p-body">
                          have your desired background and theme
                        </p>
                      </li>
                      <li className="list-item last">
                        <p className="p-body">
                          AI on service to assist you constantly
                        </p>
                      </li>
                    </ul>
                    <div className="sb-xxl" />
                    <div className="product__button-wrap desktop">
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
                    </div>
                  </div>
                </div>
                <div
                  id="w-node-_2911a0c2-727c-3216-6d05-31c56ae31211-2de7c988"
                  className="home-scroll_visual"
                >
                  <div className="home-scroll_img-item is-active">
                    <img
                      src="https://conceptboard.com/wp-content/uploads/Blog_Macromanagement_June_header.png"
                      loading="lazy"
                      alt=""
                      style={{ borderRadius: "15px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              data-w-id="f6ae78d7-b140-984c-2103-aeb770b8eebf"
              className="attributes__parent"
              style={{ marginTop: "100px" }}
            >
              <div className="attributes-row__wrapper">
                <div className="attributes__col-wrapper top w-dyn-list">
                  <div role="list" className="attributes__col-list w-dyn-items">
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading">Helpful</div>
                      <div className="attribute__emoji w-condition-invisible">
                        <img
                          alt=""
                          loading="lazy"
                          src=""
                          className="attribute-img w-dyn-bind-empty"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading">Resolute</div>
                      <div className="attribute__emoji w-condition-invisible">
                        <img
                          alt=""
                          loading="lazy"
                          src=""
                          className="attribute-img w-dyn-bind-empty"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading">Happy</div>
                      <div className="attribute__emoji w-condition-invisible">
                        <img
                          alt=""
                          loading="lazy"
                          src=""
                          className="attribute-img w-dyn-bind-empty"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading w-condition-invisible">
                        Emoji Cook
                      </div>
                      <div className="attribute__emoji">
                        <img
                          alt=""
                          loading="lazy"
                          src="https://assets-global.website-files.com/6523d3eb03029a11dfdb9582/652694b648e0320a629225f6_emoji%20cook.svg"
                          className="attribute-img"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading">Playful</div>
                      <div className="attribute__emoji w-condition-invisible">
                        <img
                          alt=""
                          loading="lazy"
                          src=""
                          className="attribute-img w-dyn-bind-empty"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading">Optimistic</div>
                      <div className="attribute__emoji w-condition-invisible">
                        <img
                          alt=""
                          loading="lazy"
                          src=""
                          className="attribute-img w-dyn-bind-empty"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading w-condition-invisible">
                        Emoji Happy
                      </div>
                      <div className="attribute__emoji">
                        <img
                          alt=""
                          loading="lazy"
                          src="https://assets-global.website-files.com/6523d3eb03029a11dfdb9582/65269496a18d8c128d1bc379_emoji%20happy.svg"
                          className="attribute-img"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading">Smart</div>
                      <div className="attribute__emoji w-condition-invisible">
                        <img
                          alt=""
                          loading="lazy"
                          src=""
                          className="attribute-img w-dyn-bind-empty"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading">Expert</div>
                      <div className="attribute__emoji w-condition-invisible">
                        <img
                          alt=""
                          loading="lazy"
                          src=""
                          className="attribute-img w-dyn-bind-empty"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading w-condition-invisible">
                        Emoji Hairstylist
                      </div>
                      <div className="attribute__emoji">
                        <img
                          alt=""
                          loading="lazy"
                          src="https://assets-global.website-files.com/6523d3eb03029a11dfdb9582/6526948890d4771f9e20acdc_emoji%20hairstylist.svg"
                          className="attribute-img"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading">Adventurous</div>
                      <div className="attribute__emoji w-condition-invisible">
                        <img
                          alt=""
                          loading="lazy"
                          src=""
                          className="attribute-img w-dyn-bind-empty"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading">Educational</div>
                      <div className="attribute__emoji w-condition-invisible">
                        <img
                          alt=""
                          loading="lazy"
                          src=""
                          className="attribute-img w-dyn-bind-empty"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading w-condition-invisible">
                        Emoji Yogi
                      </div>
                      <div className="attribute__emoji">
                        <img
                          alt=""
                          loading="lazy"
                          src="https://assets-global.website-files.com/6523d3eb03029a11dfdb9582/6526947a3028387e5d43938f_emoji%20yogi.svg"
                          className="attribute-img"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading">Honest</div>
                      <div className="attribute__emoji w-condition-invisible">
                        <img
                          alt=""
                          loading="lazy"
                          src=""
                          className="attribute-img w-dyn-bind-empty"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading">Insightful</div>
                      <div className="attribute__emoji w-condition-invisible">
                        <img
                          alt=""
                          loading="lazy"
                          src=""
                          className="attribute-img w-dyn-bind-empty"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading w-condition-invisible">
                        Emoji Smart
                      </div>
                      <div className="attribute__emoji">
                        <img
                          alt=""
                          loading="lazy"
                          src="https://assets-global.website-files.com/6523d3eb03029a11dfdb9582/65269470a3e147a5a2c37928_emoji%20smart.svg"
                          className="attribute-img"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading">Mindful</div>
                      <div className="attribute__emoji w-condition-invisible">
                        <img
                          alt=""
                          loading="lazy"
                          src=""
                          className="attribute-img w-dyn-bind-empty"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading">Barista</div>
                      <div className="attribute__emoji w-condition-invisible">
                        <img
                          alt=""
                          loading="lazy"
                          src=""
                          className="attribute-img w-dyn-bind-empty"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading w-condition-invisible">
                        Emoji Woman
                      </div>
                      <div className="attribute__emoji">
                        <img
                          alt=""
                          loading="lazy"
                          src="https://assets-global.website-files.com/6523d3eb03029a11dfdb9582/652694658ea365a401be52ed_emoji%20woman.svg"
                          className="attribute-img"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading">Passionate</div>
                      <div className="attribute__emoji w-condition-invisible">
                        <img
                          alt=""
                          loading="lazy"
                          src=""
                          className="attribute-img w-dyn-bind-empty"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading">Chatty</div>
                      <div className="attribute__emoji w-condition-invisible">
                        <img
                          alt=""
                          loading="lazy"
                          src=""
                          className="attribute-img w-dyn-bind-empty"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading w-condition-invisible">
                        Emoji Surf
                      </div>
                      <div className="attribute__emoji">
                        <img
                          alt=""
                          loading="lazy"
                          src="https://assets-global.website-files.com/6523d3eb03029a11dfdb9582/6526953eeffe02376c46267a_emoji%20surf.svg"
                          className="attribute-img"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading">Knowledgeable</div>
                      <div className="attribute__emoji w-condition-invisible">
                        <img
                          alt=""
                          loading="lazy"
                          src=""
                          className="attribute-img w-dyn-bind-empty"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="attributes__col-wrapper top w-dyn-list">
                  <div role="list" className="attributes__col-list w-dyn-items">
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading">Helpful</div>
                      <div className="attribute__emoji w-condition-invisible">
                        <img
                          alt=""
                          loading="lazy"
                          src=""
                          className="attribute-img w-dyn-bind-empty"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading">Resolute</div>
                      <div className="attribute__emoji w-condition-invisible">
                        <img
                          alt=""
                          loading="lazy"
                          src=""
                          className="attribute-img w-dyn-bind-empty"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading">Happy</div>
                      <div className="attribute__emoji w-condition-invisible">
                        <img
                          alt=""
                          loading="lazy"
                          src=""
                          className="attribute-img w-dyn-bind-empty"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading w-condition-invisible">
                        Emoji Cook
                      </div>
                      <div className="attribute__emoji">
                        <img
                          alt=""
                          loading="lazy"
                          src="https://assets-global.website-files.com/6523d3eb03029a11dfdb9582/652694b648e0320a629225f6_emoji%20cook.svg"
                          className="attribute-img"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading">Playful</div>
                      <div className="attribute__emoji w-condition-invisible">
                        <img
                          alt=""
                          loading="lazy"
                          src=""
                          className="attribute-img w-dyn-bind-empty"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading">Optimistic</div>
                      <div className="attribute__emoji w-condition-invisible">
                        <img
                          alt=""
                          loading="lazy"
                          src=""
                          className="attribute-img w-dyn-bind-empty"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading w-condition-invisible">
                        Emoji Happy
                      </div>
                      <div className="attribute__emoji">
                        <img
                          alt=""
                          loading="lazy"
                          src="https://assets-global.website-files.com/6523d3eb03029a11dfdb9582/65269496a18d8c128d1bc379_emoji%20happy.svg"
                          className="attribute-img"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading">Smart</div>
                      <div className="attribute__emoji w-condition-invisible">
                        <img
                          alt=""
                          loading="lazy"
                          src=""
                          className="attribute-img w-dyn-bind-empty"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading">Expert</div>
                      <div className="attribute__emoji w-condition-invisible">
                        <img
                          alt=""
                          loading="lazy"
                          src=""
                          className="attribute-img w-dyn-bind-empty"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading w-condition-invisible">
                        Emoji Hairstylist
                      </div>
                      <div className="attribute__emoji">
                        <img
                          alt=""
                          loading="lazy"
                          src="https://assets-global.website-files.com/6523d3eb03029a11dfdb9582/6526948890d4771f9e20acdc_emoji%20hairstylist.svg"
                          className="attribute-img"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading">Adventurous</div>
                      <div className="attribute__emoji w-condition-invisible">
                        <img
                          alt=""
                          loading="lazy"
                          src=""
                          className="attribute-img w-dyn-bind-empty"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading">Educational</div>
                      <div className="attribute__emoji w-condition-invisible">
                        <img
                          alt=""
                          loading="lazy"
                          src=""
                          className="attribute-img w-dyn-bind-empty"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading w-condition-invisible">
                        Emoji Yogi
                      </div>
                      <div className="attribute__emoji">
                        <img
                          alt=""
                          loading="lazy"
                          src="https://assets-global.website-files.com/6523d3eb03029a11dfdb9582/6526947a3028387e5d43938f_emoji%20yogi.svg"
                          className="attribute-img"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading">Honest</div>
                      <div className="attribute__emoji w-condition-invisible">
                        <img
                          alt=""
                          loading="lazy"
                          src=""
                          className="attribute-img w-dyn-bind-empty"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading">Insightful</div>
                      <div className="attribute__emoji w-condition-invisible">
                        <img
                          alt=""
                          loading="lazy"
                          src=""
                          className="attribute-img w-dyn-bind-empty"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading w-condition-invisible">
                        Emoji Smart
                      </div>
                      <div className="attribute__emoji">
                        <img
                          alt=""
                          loading="lazy"
                          src="https://assets-global.website-files.com/6523d3eb03029a11dfdb9582/65269470a3e147a5a2c37928_emoji%20smart.svg"
                          className="attribute-img"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading">Mindful</div>
                      <div className="attribute__emoji w-condition-invisible">
                        <img
                          alt=""
                          loading="lazy"
                          src=""
                          className="attribute-img w-dyn-bind-empty"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading">Barista</div>
                      <div className="attribute__emoji w-condition-invisible">
                        <img
                          alt=""
                          loading="lazy"
                          src=""
                          className="attribute-img w-dyn-bind-empty"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading w-condition-invisible">
                        Emoji Woman
                      </div>
                      <div className="attribute__emoji">
                        <img
                          alt=""
                          loading="lazy"
                          src="https://assets-global.website-files.com/6523d3eb03029a11dfdb9582/652694658ea365a401be52ed_emoji%20woman.svg"
                          className="attribute-img"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading">Passionate</div>
                      <div className="attribute__emoji w-condition-invisible">
                        <img
                          alt=""
                          loading="lazy"
                          src=""
                          className="attribute-img w-dyn-bind-empty"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading">Chatty</div>
                      <div className="attribute__emoji w-condition-invisible">
                        <img
                          alt=""
                          loading="lazy"
                          src=""
                          className="attribute-img w-dyn-bind-empty"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading w-condition-invisible">
                        Emoji Surf
                      </div>
                      <div className="attribute__emoji">
                        <img
                          alt=""
                          loading="lazy"
                          src="https://assets-global.website-files.com/6523d3eb03029a11dfdb9582/6526953eeffe02376c46267a_emoji%20surf.svg"
                          className="attribute-img"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading">Knowledgeable</div>
                      <div className="attribute__emoji w-condition-invisible">
                        <img
                          alt=""
                          loading="lazy"
                          src=""
                          className="attribute-img w-dyn-bind-empty"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="attributes-row__wrapper">
                <div className="attributes__col-wrapper bottom w-dyn-list">
                  <div role="list" className="attributes__col-list w-dyn-items">
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading">Knowledgeable</div>
                      <div className="attribute__emoji w-condition-invisible">
                        <img
                          alt=""
                          loading="lazy"
                          src=""
                          className="attribute-img w-dyn-bind-empty"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading w-condition-invisible">
                        Emoji Surf
                      </div>
                      <div className="attribute__emoji">
                        <img
                          alt=""
                          loading="lazy"
                          src="https://assets-global.website-files.com/6523d3eb03029a11dfdb9582/6526953eeffe02376c46267a_emoji%20surf.svg"
                          className="attribute-img"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading">Chatty</div>
                      <div className="attribute__emoji w-condition-invisible">
                        <img
                          alt=""
                          loading="lazy"
                          src=""
                          className="attribute-img w-dyn-bind-empty"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading">Passionate</div>
                      <div className="attribute__emoji w-condition-invisible">
                        <img
                          alt=""
                          loading="lazy"
                          src=""
                          className="attribute-img w-dyn-bind-empty"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading w-condition-invisible">
                        Emoji Woman
                      </div>
                      <div className="attribute__emoji">
                        <img
                          alt=""
                          loading="lazy"
                          src="https://assets-global.website-files.com/6523d3eb03029a11dfdb9582/652694658ea365a401be52ed_emoji%20woman.svg"
                          className="attribute-img"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading">Barista</div>
                      <div className="attribute__emoji w-condition-invisible">
                        <img
                          alt=""
                          loading="lazy"
                          src=""
                          className="attribute-img w-dyn-bind-empty"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading">Mindful</div>
                      <div className="attribute__emoji w-condition-invisible">
                        <img
                          alt=""
                          loading="lazy"
                          src=""
                          className="attribute-img w-dyn-bind-empty"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading w-condition-invisible">
                        Emoji Smart
                      </div>
                      <div className="attribute__emoji">
                        <img
                          alt=""
                          loading="lazy"
                          src="https://assets-global.website-files.com/6523d3eb03029a11dfdb9582/65269470a3e147a5a2c37928_emoji%20smart.svg"
                          className="attribute-img"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading">Insightful</div>
                      <div className="attribute__emoji w-condition-invisible">
                        <img
                          alt=""
                          loading="lazy"
                          src=""
                          className="attribute-img w-dyn-bind-empty"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading">Honest</div>
                      <div className="attribute__emoji w-condition-invisible">
                        <img
                          alt=""
                          loading="lazy"
                          src=""
                          className="attribute-img w-dyn-bind-empty"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading w-condition-invisible">
                        Emoji Yogi
                      </div>
                      <div className="attribute__emoji">
                        <img
                          alt=""
                          loading="lazy"
                          src="https://assets-global.website-files.com/6523d3eb03029a11dfdb9582/6526947a3028387e5d43938f_emoji%20yogi.svg"
                          className="attribute-img"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading">Educational</div>
                      <div className="attribute__emoji w-condition-invisible">
                        <img
                          alt=""
                          loading="lazy"
                          src=""
                          className="attribute-img w-dyn-bind-empty"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading">Adventurous</div>
                      <div className="attribute__emoji w-condition-invisible">
                        <img
                          alt=""
                          loading="lazy"
                          src=""
                          className="attribute-img w-dyn-bind-empty"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading w-condition-invisible">
                        Emoji Hairstylist
                      </div>
                      <div className="attribute__emoji">
                        <img
                          alt=""
                          loading="lazy"
                          src="https://assets-global.website-files.com/6523d3eb03029a11dfdb9582/6526948890d4771f9e20acdc_emoji%20hairstylist.svg"
                          className="attribute-img"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading">Expert</div>
                      <div className="attribute__emoji w-condition-invisible">
                        <img
                          alt=""
                          loading="lazy"
                          src=""
                          className="attribute-img w-dyn-bind-empty"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading">Smart</div>
                      <div className="attribute__emoji w-condition-invisible">
                        <img
                          alt=""
                          loading="lazy"
                          src=""
                          className="attribute-img w-dyn-bind-empty"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading w-condition-invisible">
                        Emoji Happy
                      </div>
                      <div className="attribute__emoji">
                        <img
                          alt=""
                          loading="lazy"
                          src="https://assets-global.website-files.com/6523d3eb03029a11dfdb9582/65269496a18d8c128d1bc379_emoji%20happy.svg"
                          className="attribute-img"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading">Optimistic</div>
                      <div className="attribute__emoji w-condition-invisible">
                        <img
                          alt=""
                          loading="lazy"
                          src=""
                          className="attribute-img w-dyn-bind-empty"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading">Playful</div>
                      <div className="attribute__emoji w-condition-invisible">
                        <img
                          alt=""
                          loading="lazy"
                          src=""
                          className="attribute-img w-dyn-bind-empty"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading w-condition-invisible">
                        Emoji Cook
                      </div>
                      <div className="attribute__emoji">
                        <img
                          alt=""
                          loading="lazy"
                          src="https://assets-global.website-files.com/6523d3eb03029a11dfdb9582/652694b648e0320a629225f6_emoji%20cook.svg"
                          className="attribute-img"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading">Happy</div>
                      <div className="attribute__emoji w-condition-invisible">
                        <img
                          alt=""
                          loading="lazy"
                          src=""
                          className="attribute-img w-dyn-bind-empty"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading">Resolute</div>
                      <div className="attribute__emoji w-condition-invisible">
                        <img
                          alt=""
                          loading="lazy"
                          src=""
                          className="attribute-img w-dyn-bind-empty"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading">Helpful</div>
                      <div className="attribute__emoji w-condition-invisible">
                        <img
                          alt=""
                          loading="lazy"
                          src=""
                          className="attribute-img w-dyn-bind-empty"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="attributes__col-wrapper bottom w-dyn-list">
                  <div role="list" className="attributes__col-list w-dyn-items">
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading">Knowledgeable</div>
                      <div className="attribute__emoji w-condition-invisible">
                        <img
                          alt=""
                          loading="lazy"
                          src=""
                          className="attribute-img w-dyn-bind-empty"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading w-condition-invisible">
                        Emoji Surf
                      </div>
                      <div className="attribute__emoji">
                        <img
                          alt=""
                          loading="lazy"
                          src="https://assets-global.website-files.com/6523d3eb03029a11dfdb9582/6526953eeffe02376c46267a_emoji%20surf.svg"
                          className="attribute-img"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading">Chatty</div>
                      <div className="attribute__emoji w-condition-invisible">
                        <img
                          alt=""
                          loading="lazy"
                          src=""
                          className="attribute-img w-dyn-bind-empty"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading">Passionate</div>
                      <div className="attribute__emoji w-condition-invisible">
                        <img
                          alt=""
                          loading="lazy"
                          src=""
                          className="attribute-img w-dyn-bind-empty"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading w-condition-invisible">
                        Emoji Woman
                      </div>
                      <div className="attribute__emoji">
                        <img
                          alt=""
                          loading="lazy"
                          src="https://assets-global.website-files.com/6523d3eb03029a11dfdb9582/652694658ea365a401be52ed_emoji%20woman.svg"
                          className="attribute-img"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading">Barista</div>
                      <div className="attribute__emoji w-condition-invisible">
                        <img
                          alt=""
                          loading="lazy"
                          src=""
                          className="attribute-img w-dyn-bind-empty"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading">Mindful</div>
                      <div className="attribute__emoji w-condition-invisible">
                        <img
                          alt=""
                          loading="lazy"
                          src=""
                          className="attribute-img w-dyn-bind-empty"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading w-condition-invisible">
                        Emoji Smart
                      </div>
                      <div className="attribute__emoji">
                        <img
                          alt=""
                          loading="lazy"
                          src="https://assets-global.website-files.com/6523d3eb03029a11dfdb9582/65269470a3e147a5a2c37928_emoji%20smart.svg"
                          className="attribute-img"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading">Insightful</div>
                      <div className="attribute__emoji w-condition-invisible">
                        <img
                          alt=""
                          loading="lazy"
                          src=""
                          className="attribute-img w-dyn-bind-empty"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading">Honest</div>
                      <div className="attribute__emoji w-condition-invisible">
                        <img
                          alt=""
                          loading="lazy"
                          src=""
                          className="attribute-img w-dyn-bind-empty"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading w-condition-invisible">
                        Emoji Yogi
                      </div>
                      <div className="attribute__emoji">
                        <img
                          alt=""
                          loading="lazy"
                          src="https://assets-global.website-files.com/6523d3eb03029a11dfdb9582/6526947a3028387e5d43938f_emoji%20yogi.svg"
                          className="attribute-img"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading">Educational</div>
                      <div className="attribute__emoji w-condition-invisible">
                        <img
                          alt=""
                          loading="lazy"
                          src=""
                          className="attribute-img w-dyn-bind-empty"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading">Adventurous</div>
                      <div className="attribute__emoji w-condition-invisible">
                        <img
                          alt=""
                          loading="lazy"
                          src=""
                          className="attribute-img w-dyn-bind-empty"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading w-condition-invisible">
                        Emoji Hairstylist
                      </div>
                      <div className="attribute__emoji">
                        <img
                          alt=""
                          loading="lazy"
                          src="https://assets-global.website-files.com/6523d3eb03029a11dfdb9582/6526948890d4771f9e20acdc_emoji%20hairstylist.svg"
                          className="attribute-img"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading">Expert</div>
                      <div className="attribute__emoji w-condition-invisible">
                        <img
                          alt=""
                          loading="lazy"
                          src=""
                          className="attribute-img w-dyn-bind-empty"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading">Smart</div>
                      <div className="attribute__emoji w-condition-invisible">
                        <img
                          alt=""
                          loading="lazy"
                          src=""
                          className="attribute-img w-dyn-bind-empty"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading w-condition-invisible">
                        Emoji Happy
                      </div>
                      <div className="attribute__emoji">
                        <img
                          alt=""
                          loading="lazy"
                          src="https://assets-global.website-files.com/6523d3eb03029a11dfdb9582/65269496a18d8c128d1bc379_emoji%20happy.svg"
                          className="attribute-img"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading">Optimistic</div>
                      <div className="attribute__emoji w-condition-invisible">
                        <img
                          alt=""
                          loading="lazy"
                          src=""
                          className="attribute-img w-dyn-bind-empty"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading">Playful</div>
                      <div className="attribute__emoji w-condition-invisible">
                        <img
                          alt=""
                          loading="lazy"
                          src=""
                          className="attribute-img w-dyn-bind-empty"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading w-condition-invisible">
                        Emoji Cook
                      </div>
                      <div className="attribute__emoji">
                        <img
                          alt=""
                          loading="lazy"
                          src="https://assets-global.website-files.com/6523d3eb03029a11dfdb9582/652694b648e0320a629225f6_emoji%20cook.svg"
                          className="attribute-img"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading">Happy</div>
                      <div className="attribute__emoji w-condition-invisible">
                        <img
                          alt=""
                          loading="lazy"
                          src=""
                          className="attribute-img w-dyn-bind-empty"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading">Resolute</div>
                      <div className="attribute__emoji w-condition-invisible">
                        <img
                          alt=""
                          loading="lazy"
                          src=""
                          className="attribute-img w-dyn-bind-empty"
                        />
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="attributes__col-item w-dyn-item"
                    >
                      <div className="p-leading">Helpful</div>
                      <div className="attribute__emoji w-condition-invisible">
                        <img
                          alt=""
                          loading="lazy"
                          src=""
                          className="attribute-img w-dyn-bind-empty"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section__product">
          <div className="padding-section__medium">
            <div className="container-small">
              <div className="product-one__parent">
                <div className="product__text-wrap">
                  <div className="pill">
                    <div className="pill__circle" />
                    <div className="p-tiny">Collabrative Learning</div>
                  </div>
                  <h2 className="h2 is--bgtext-white">
                    The closest thing to your star customer service agent
                  </h2>
                  <div className="sb-xxl" />
                  <ul role="list" className="list">
                    <li className="list-item">
                      <p className="p-body">
                        Human-like empathy in every interaction
                      </p>
                    </li>
                    <li className="list-item">
                      <p className="p-body">
                        Resolves issues instead of deflecting them
                      </p>
                    </li>
                    <li className="list-item last">
                      <p className="p-body">
                        Effortless Omnichannel Management
                      </p>
                    </li>
                  </ul>
                  <div className="sb-xxl" />
                </div>

                <div className="sb-xxl" />
                <div className="product__button-wrap tablet-below">
                  <a href="/book-a-demo" className="button w-inline-block">
                    <div className="button__icon-text-wrapper">
                      <div>Book a demo</div>
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
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section mode="dark" className="section_metrics">
          <div className="padding-section__medium">
            <div className="container-medium">
              <div className="metrics__parent">
                <div className="metrics__child">
                  <div className="metric-nums-container">
                    <div className="metric-num w-embed">
                      <svg
                        className="metric-svg"
                        width={301}
                        height={437}
                        viewBox="0 0 301 437"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_24070_422)">
                          <g filter="url(#filter0_b_24070_422)">
                            <path
                              d="M150.707 435.842C63.7029 435.842 1.4707 382.673 1.4707 308.356C1.4707 263.646 29.2637 222.561 70.9532 202.622C38.9308 185.705 17.1798 151.266 17.1798 117.431C17.1798 50.9691 72.7658 3.8418 150.707 3.8418C227.44 3.8418 283.63 50.9691 283.63 117.431C283.63 151.87 261.879 186.309 229.253 202.622C270.942 221.352 298.735 261.833 298.735 308.356C298.735 382.673 237.107 435.842 150.707 435.842ZM150.707 166.975C180.917 166.975 202.064 148.849 201.46 122.868C202.064 96.8879 180.917 78.7621 150.707 78.7621C120.497 78.7621 98.7462 96.8879 99.3504 122.868C98.7462 148.849 120.497 166.975 150.707 166.975ZM150.707 356.692C187.563 356.692 214.148 333.733 214.148 300.502C214.148 267.875 187.563 244.312 150.707 244.312C113.247 244.312 86.6623 267.875 86.6623 300.502C86.6623 333.733 113.247 356.692 150.707 356.692Z"
                              fill="url(#paint0_linear_24070_422)"
                              fillOpacity="0.08"
                            />
                            <path
                              d="M200.96 122.857L200.959 122.868L200.96 122.88C201.258 135.721 196.186 146.605 187.311 154.286C178.43 161.973 165.714 166.475 150.707 166.475C135.699 166.475 122.831 161.973 113.798 154.283C104.771 146.6 99.5518 135.716 99.8503 122.88L99.8506 122.868L99.8503 122.857C99.5518 110.02 104.771 99.1368 113.798 91.4533C122.831 83.7641 135.699 79.2621 150.707 79.2621C165.714 79.2621 178.43 83.7638 187.311 91.4506C196.186 99.1319 201.258 110.015 200.96 122.857ZM0.970703 308.356C0.970703 383.02 63.5035 436.342 150.707 436.342C237.311 436.342 299.235 383.016 299.235 308.356C299.235 261.981 271.739 221.589 230.407 202.598C262.676 186.019 284.13 151.741 284.13 117.431C284.13 50.6198 227.637 3.3418 150.707 3.3418C72.569 3.3418 16.6798 50.6198 16.6798 117.431C16.6798 151.159 38.1547 185.443 69.8506 202.6C28.4967 222.769 0.970703 263.754 0.970703 308.356ZM213.648 300.502C213.648 316.975 207.062 330.885 195.918 340.683C184.77 350.485 169.032 356.192 150.707 356.192C132.078 356.192 116.189 350.484 104.966 340.682C93.7477 330.885 87.1623 316.975 87.1623 300.502C87.1623 268.21 113.461 244.812 150.707 244.812C187.346 244.812 213.648 268.207 213.648 300.502Z"
                              stroke="url(#paint1_linear_24070_422)"
                              strokeOpacity="0.7"
                            />
                          </g>
                          <mask
                            id="mask0_24070_422"
                            style={{ maskType: "alpha" }}
                            maskUnits="userSpaceOnUse"
                            x={3}
                            y={1}
                            width={297}
                            height={434}
                          >
                            <path
                              d="M72.8272 201.363L73.273 201.149L72.8361 200.919C72.4745 200.728 72.1143 200.534 71.7554 200.339C40.8063 183.464 19.8758 149.355 19.8758 116.429C19.8758 50.9789 74.6111 3.33317 151.464 3.33317C227.124 3.33317 282.456 50.9789 282.456 116.429C282.456 149.932 261.542 184.03 230.619 200.336C230.247 200.532 229.874 200.726 229.5 200.917L229.036 201.152L229.511 201.365C229.894 201.538 230.278 201.712 230.66 201.889C271.083 220.577 297.37 260.725 297.37 306.131C297.37 378.741 236.667 432.35 151.464 432.35C65.6644 432.35 4.96207 378.741 4.96207 306.131C4.96207 261.893 31.2666 221.738 71.7221 201.898C72.0893 201.718 72.4577 201.539 72.8272 201.363ZM3.4707 306.131C3.4707 379.756 65.0464 433.842 151.464 433.842C237.29 433.842 298.861 379.753 298.861 306.131C298.861 260.561 272.719 220.215 232.416 201.065C263.205 184.29 283.948 150.107 283.948 116.429C283.948 49.956 227.734 1.8418 151.464 1.8418C74.002 1.8418 18.3844 49.956 18.3844 116.429C18.3844 149.572 39.1844 183.774 70.0151 201.08C29.6757 221.333 3.4707 261.673 3.4707 306.131Z"
                              fill="white"
                              stroke="black"
                              strokeWidth="0.5"
                            />
                          </mask>
                          <g mask="url(#mask0_24070_422)">
                            <path
                              d="M183.487 41.3769C193.49 66.3545 221.848 78.4935 246.825 68.4902C271.803 58.4869 283.942 30.1293 273.939 5.1517C263.935 -19.8259 235.578 -31.9649 210.6 -21.9616C185.623 -11.9583 173.484 16.3993 183.487 41.3769Z"
                              fill="url(#paint2_linear_24070_422)"
                            />
                          </g>
                        </g>
                        <defs>
                          <filter
                            id="filter0_b_24070_422"
                            x="-9.5293"
                            y="-7.1582"
                            width="319.264"
                            height={454}
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                          >
                            <feFlood
                              floodOpacity={0}
                              result="BackgroundImageFix"
                            />
                            <feGaussianBlur
                              in="BackgroundImageFix"
                              stdDeviation={5}
                            />
                            <feComposite
                              in2="SourceAlpha"
                              operator="in"
                              result="effect1_backgroundBlur_24070_422"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_backgroundBlur_24070_422"
                              result="shape"
                            />
                          </filter>
                          <linearGradient
                            id="paint0_linear_24070_422"
                            x1="497.334"
                            y1="-28.6707"
                            x2="497.334"
                            y2="363.597"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FE7DC2" />
                            <stop
                              offset={1}
                              stopColor="#FE7DC2"
                              stopOpacity={0}
                            />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_24070_422"
                            x1="-452.371"
                            y1="402.158"
                            x2="1355.67"
                            y2="206.49"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0.109375" stopColor="#DBFF1D" />
                            <stop offset="0.266584" stopColor="#FE7DC2" />
                            <stop offset="0.484375" stopColor="#FE7DC2" />
                            <stop offset="0.822917" stopColor="#FFA50E" />
                          </linearGradient>
                          <linearGradient
                            id="paint2_linear_24070_422"
                            x1="255.826"
                            y1="-40.0742"
                            x2="292.051"
                            y2="50.3776"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop
                              offset="0.14375"
                              stopColor="#F8DEEC"
                              stopOpacity={0}
                            />
                            <stop
                              offset="0.388542"
                              stopColor="#F8DEEC"
                              stopOpacity="0.6"
                            />
                            <stop
                              offset="0.513542"
                              stopColor="#F8DEEC"
                              stopOpacity="0.95"
                            />
                            <stop
                              offset="0.638542"
                              stopColor="#F8DEEC"
                              stopOpacity="0.61"
                            />
                            <stop
                              offset="0.878125"
                              stopColor="#F8DEEC"
                              stopOpacity={0}
                            />
                          </linearGradient>
                          <clipPath id="clip0_24070_422">
                            <rect
                              width={300}
                              height={436}
                              fill="white"
                              transform="translate(0.470703 0.841797)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="metric-num w-embed">
                      <svg
                        className="metric-svg"
                        width={331}
                        height={436}
                        viewBox="0 0 331 436"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#filter0_b_24070_472)">
                          <path
                            d="M165.021 434.361C61.8207 434.361 1.2207 347.361 1.2207 218.361C1.2207 88.7613 61.8207 2.36133 165.021 2.36133C268.821 2.36133 329.421 88.7613 329.421 218.361C329.421 347.361 268.821 434.361 165.021 434.361ZM165.021 347.961C210.621 347.961 238.221 307.161 238.221 218.361C238.221 129.561 210.621 88.7613 165.021 88.7613C120.021 88.7613 92.4207 129.561 92.4207 218.361C92.4207 307.161 120.021 347.961 165.021 347.961Z"
                            fill="url(#paint0_linear_24070_472)"
                            fillOpacity="0.08"
                          />
                          <path
                            d="M0.720703 218.361C0.720703 282.932 15.8865 337.048 44.0189 375.034C72.1632 413.036 113.262 434.861 165.021 434.861C217.078 434.861 258.327 413.037 286.547 375.034C314.755 337.048 329.921 282.932 329.921 218.361C329.921 153.491 314.755 99.3748 286.547 61.4629C258.326 23.5346 217.077 1.86133 165.021 1.86133C113.264 1.86133 72.1641 23.5354 44.0192 61.4634C15.8863 99.3751 0.720703 153.491 0.720703 218.361ZM237.721 218.361C237.721 262.724 230.824 295.019 218.29 316.207C205.778 337.359 187.639 347.461 165.021 347.461C142.705 347.461 124.716 337.361 112.277 316.208C99.8174 295.02 92.9207 262.724 92.9207 218.361C92.9207 173.999 99.8174 141.703 112.277 120.515C124.716 99.3612 142.705 89.2613 165.021 89.2613C187.639 89.2613 205.778 99.3636 218.29 120.516C230.824 141.704 237.721 173.999 237.721 218.361Z"
                            stroke="url(#paint1_linear_24070_472)"
                            strokeOpacity="0.7"
                          />
                        </g>
                        <mask
                          id="mask0_24070_472"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x={0}
                          y={0}
                          width={331}
                          height={435}
                        >
                          <path
                            d="M164.921 433.361C61.7206 433.361 1.12061 346.361 1.12061 217.361C1.12061 87.7613 61.7206 1.36133 164.921 1.36133C268.721 1.36133 329.321 87.7613 329.321 217.361C329.321 346.361 268.721 433.361 164.921 433.361Z"
                            stroke="black"
                            strokeWidth="1.5"
                          />
                        </mask>
                        <g mask="url(#mask0_24070_472)">
                          <path
                            d="M206.115 42.8475C210.172 69.6036 235.15 88.0052 261.907 83.9484C288.663 79.8917 307.064 54.9129 303.007 28.1568C298.951 1.4006 273.972 -17.0009 247.216 -12.9442C220.46 -8.88746 202.058 16.0913 206.115 42.8475Z"
                            fill="url(#paint2_linear_24070_472)"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_b_24070_472"
                            x="-9.7793"
                            y="-8.63867"
                            width="350.2"
                            height={454}
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                          >
                            <feFlood
                              floodOpacity={0}
                              result="BackgroundImageFix"
                            />
                            <feGaussianBlur
                              in="BackgroundImageFix"
                              stdDeviation={5}
                            />
                            <feComposite
                              in2="SourceAlpha"
                              operator="in"
                              result="effect1_backgroundBlur_24070_472"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_backgroundBlur_24070_472"
                              result="shape"
                            />
                          </filter>
                          <linearGradient
                            id="paint0_linear_24070_472"
                            x1="164.817"
                            y1="-28.1253"
                            x2="164.817"
                            y2="361.418"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FE7DC2" />
                            <stop
                              offset={1}
                              stopColor="#FE7DC2"
                              stopOpacity={0}
                            />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_24070_472"
                            x1="612.65"
                            y1="367.5"
                            x2="-557.194"
                            y2="281.116"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0.109375" stopColor="#DBFF1D" />
                            <stop offset="0.328125" stopColor="#FE7DC2" />
                            <stop offset="0.484375" stopColor="#FE7DC2" />
                            <stop offset="0.822917" stopColor="#FFA50E" />
                          </linearGradient>
                          <linearGradient
                            id="paint2_linear_24070_472"
                            x1="295.662"
                            y1="-20.2896"
                            x2="310.353"
                            y2="76.6031"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop
                              offset="0.14375"
                              stopColor="#F8DEEC"
                              stopOpacity={0}
                            />
                            <stop
                              offset="0.388542"
                              stopColor="#F8DEEC"
                              stopOpacity="0.6"
                            />
                            <stop
                              offset="0.513542"
                              stopColor="#F8DEEC"
                              stopOpacity="0.95"
                            />
                            <stop
                              offset="0.638542"
                              stopColor="#F8DEEC"
                              stopOpacity="0.61"
                            />
                            <stop
                              offset="0.878125"
                              stopColor="#F8DEEC"
                              stopOpacity={0}
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div className="metric-num w-embed">
                      <svg
                        className="metric-svg"
                        width={385}
                        height={434}
                        viewBox="0 0 385 434"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#filter0_b_24070_476)">
                          <path
                            d="M181.478 92.8721C181.478 146.238 143.102 185.813 90.9356 185.813C39.3686 185.813 0.993164 146.238 0.993164 92.8721C0.993164 40.1059 39.3686 1.13086 90.9356 1.13086C143.102 1.13086 181.478 40.1059 181.478 92.8721ZM297.803 7.12701H364.96L86.1387 426.858H18.9816L297.803 7.12701ZM126.913 92.8721C126.913 69.4871 113.121 52.6979 90.9356 52.6979C68.7498 52.6979 55.5583 69.4871 55.5583 92.8721C55.5583 116.257 68.7498 133.046 90.9356 133.046C113.121 133.046 126.913 116.257 126.913 92.8721ZM383.548 339.914C383.548 393.28 344.573 432.854 293.006 432.854C241.439 432.854 202.464 393.28 202.464 339.914C202.464 287.148 241.439 248.173 293.006 248.173C344.573 248.173 383.548 287.148 383.548 339.914ZM328.384 339.914C328.384 316.529 315.192 300.339 293.006 300.339C270.82 300.339 257.029 316.529 257.029 339.914C257.029 363.299 270.82 380.688 293.006 380.688C315.192 380.688 328.384 363.299 328.384 339.914Z"
                            fill="url(#paint0_linear_24070_476)"
                            fillOpacity="0.08"
                          />
                          <path
                            d="M297.803 6.62701H297.535L297.387 6.85035L18.5652 426.582L18.0492 427.358H18.9816H86.1387H86.4068L86.5551 427.135L365.377 7.40368L365.893 6.62701H364.96H297.803ZM90.9356 186.313C143.391 186.313 181.978 146.501 181.978 92.8721C181.978 39.8363 143.385 0.630859 90.9356 0.630859C39.0838 0.630859 0.493164 39.8385 0.493164 92.8721C0.493164 146.499 39.0774 186.313 90.9356 186.313ZM90.9356 53.1978C101.893 53.1978 110.747 57.3395 116.867 64.3446C122.994 71.3566 126.413 81.2754 126.413 92.8721C126.413 104.469 122.994 114.388 116.867 121.4C110.747 128.405 101.893 132.546 90.9356 132.546C79.979 132.546 71.2775 128.406 65.3077 121.404C59.3305 114.394 56.0583 104.474 56.0583 92.8721C56.0583 81.27 59.3305 71.3504 65.3077 64.34C71.2775 57.3385 79.979 53.1978 90.9356 53.1978ZM293.006 433.354C344.86 433.354 384.048 393.545 384.048 339.914C384.048 286.876 344.854 247.673 293.006 247.673C241.159 247.673 201.964 286.876 201.964 339.914C201.964 393.545 241.152 433.354 293.006 433.354ZM293.006 300.839C303.969 300.839 312.67 304.834 318.638 311.686C324.612 318.545 327.884 328.312 327.884 339.914C327.884 351.516 324.611 361.588 318.631 368.75C312.658 375.902 303.957 380.188 293.006 380.188C282.054 380.188 273.201 375.901 267.078 368.745C260.949 361.582 257.529 351.511 257.529 339.914C257.529 328.318 260.948 318.551 267.071 311.69C273.189 304.835 282.043 300.839 293.006 300.839Z"
                            stroke="url(#paint1_linear_24070_476)"
                            strokeOpacity="0.7"
                          />
                        </g>
                        <mask
                          id="mask0_24070_476"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x={83}
                          y={6}
                          width={284}
                          height={422}
                        >
                          <path
                            d="M365.993 6.87695L83.6738 427.108"
                            stroke="black"
                            strokeWidth="1.5"
                          />
                        </mask>
                        <g mask="url(#mask0_24070_476)">
                          <path
                            d="M376.635 54.3815C369.424 28.3161 342.447 13.0321 316.382 20.2437C290.316 27.4553 275.032 54.4316 282.244 80.4971C289.456 106.562 316.432 121.846 342.497 114.635C368.563 107.423 383.847 80.4469 376.635 54.3815Z"
                            fill="url(#paint2_linear_24070_476)"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_b_24070_476"
                            x="-10.0068"
                            y="-9.86914"
                            width="404.555"
                            height="453.724"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                          >
                            <feFlood
                              floodOpacity={0}
                              result="BackgroundImageFix"
                            />
                            <feGaussianBlur
                              in="BackgroundImageFix"
                              stdDeviation={5}
                            />
                            <feComposite
                              in2="SourceAlpha"
                              operator="in"
                              result="effect1_backgroundBlur_24070_476"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_backgroundBlur_24070_476"
                              result="shape"
                            />
                          </filter>
                          <linearGradient
                            id="paint0_linear_24070_476"
                            x1="-194.133"
                            y1="-29.3363"
                            x2="-194.133"
                            y2="359.958"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FE7DC2" />
                            <stop
                              offset={1}
                              stopColor="#FE7DC2"
                              stopOpacity={0}
                            />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_24070_476"
                            x1="-85.3999"
                            y1="151.862"
                            x2="1488.94"
                            y2="583.004"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0.109375" stopColor="#DBFF1D" />
                            <stop offset="0.328125" stopColor="#FE7DC2" />
                            <stop offset="0.484375" stopColor="#FE7DC2" />
                            <stop offset="0.822917" stopColor="#FFA50E" />
                          </linearGradient>
                          <linearGradient
                            id="paint2_linear_24070_476"
                            x1="295.302"
                            y1="127.693"
                            x2="269.186"
                            y2="33.3015"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop
                              offset="0.14375"
                              stopColor="#F8DEEC"
                              stopOpacity={0}
                            />
                            <stop
                              offset="0.388542"
                              stopColor="#F8DEEC"
                              stopOpacity="0.6"
                            />
                            <stop
                              offset="0.513542"
                              stopColor="#F8DEEC"
                              stopOpacity="0.95"
                            />
                            <stop
                              offset="0.638542"
                              stopColor="#F8DEEC"
                              stopOpacity="0.61"
                            />
                            <stop
                              offset="0.878125"
                              stopColor="#F8DEEC"
                              stopOpacity={0}
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div className="metrics__overlay biggest-number" />
                  </div>
                  <div className="metrics__p-wrapper">
                    <p className="h3 text-center text-balanced smaller-mobile">
                      TOGETHERLY is 80% faster and realtime than the other
                      collabrative platform due to the use of CONVEX and latest
                      Next.Js 14
                    </p>
                  </div>
                </div>
                <div className="sb-xxxxxl" />
                <div className="metrics__bottom-wrap">
                  <div
                    id="w-node-_1baf9ecf-3c08-f23a-0cac-f42c7b04f059-2de7c988"
                    className="metrics-wrap"
                  >
                    <div className="w-embed">
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            "\n                                        .huge-text {\n                                            background: -webkit-linear-gradient(150deg, #DBFF1D 0%, #FE7DC2 100%);\n                                            -webkit-background-clip: text;\n                                            -webkit-text-stroke: 1.5px transparent;\n                                            color: black;\n                                        }\n                                    ",
                        }}
                      />
                    </div>
                    <div className="huge-text">98%</div>
                    <div className="metrics__text-wrapper">
                      <div className="h4 text-center">Faster response time</div>
                    </div>
                    <div className="metrics__overlay" />
                  </div>
                  <div
                    id="w-node-_73027789-91d7-a4a8-2a51-6fda52effd90-2de7c988"
                    className="metrics-wrap"
                  >
                    <div className="huge-text">90%</div>
                    <div className="metrics__text-wrapper">
                      <div className="h4 text-center">
                        Faster resolution time
                      </div>
                    </div>
                    <div className="metrics__overlay" />
                  </div>
                  <div
                    id="w-node-_9e3b45de-326e-567e-4e12-44f60d75602c-2de7c988"
                    className="metrics-wrap"
                  >
                    <div className="huge-text">100%</div>
                    <div className="metrics__text-wrapper">
                      <div className="h4 text-center">
                        Developer satisfaction
                      </div>
                    </div>
                    <div className="metrics__overlay" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section__automation-features">
          <div className="padding-section__medium">
            <div className="container-small">
              <div className="w-embed">
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      '\n                            .automations__list-wrap {\n                                color: #313149;\n                                position: relative;\n                                z-index: 0;\n                                border-radius: 16px;\n                                background: rgba(255, 255, 255, 0.36);\n                            }\n\n                            .automations__list-wrap:before {\n                                content: "";\n                                position: absolute;\n                                z-index: -1;\n                                inset: 0;\n                                padding: 1px;\n                                border-radius: 16px;\n                                background: linear-gradient(to right, #E5E5E5, #ffffff);\n                                -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);\n                                mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);\n                                -webkit-mask-composite: xor;\n                                mask-composite: exclude;\n                            }\n                        ',
                  }}
                />
              </div>
              <div className="automations__parent">
                <div className="automations__text-left">
                  <div className="pill">
                    <div className="pill__circle" />
                    <div className="p-tiny">A new standard in CX.</div>
                  </div>
                  <h2 className="h3">The world's most autonomous agent</h2>
                  <div className="sb-xxl" />
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
                </div>
                <div className="sb-xxxl tablet-below" />
                <div className="automations__list-wrap">
                  <div className="automations__col-wrapper w-dyn-list">
                    <div
                      role="list"
                      className="automations__col-list w-dyn-items"
                    >
                      <div
                        role="listitem"
                        className="accordion_item w-dyn-item"
                      >
                        <a
                          role="button"
                          data-w-id="1b58860d-3534-35f2-fe16-44183e4e5f6a"
                          href="#"
                          className="accordion_trigger w-inline-block"
                        >
                          <div className="accodian__h">
                            <div>LLM Infrastructure</div>
                          </div>
                          <div className="accordian__pill w-condition-invisible">
                            <div className="p-tiny">New</div>
                          </div>
                          <div className="accordion__close-btn">
                            <img
                              loading="eager"
                              src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/65291775b3935fbb3567728a_chevron%20down.svg"
                              alt=""
                              className="img-full"
                            />
                          </div>
                        </a>
                        <div
                          role="region"
                          style={{ height: "0PX" }}
                          className="accordion_content"
                        >
                          <div className="accordion_content-spacer">
                            <p className="p-body is--bgtext-darker">
                              Powered by OpenAI and other foundational models,
                              Siena learns and adapts, delivering nuanced,
                              accurate support with human-like understanding.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        role="listitem"
                        className="accordion_item w-dyn-item"
                      >
                        <a
                          role="button"
                          data-w-id="1b58860d-3534-35f2-fe16-44183e4e5f6a"
                          href="#"
                          className="accordion_trigger w-inline-block"
                        >
                          <div className="accodian__h">
                            <div>Data &amp; Security First</div>
                          </div>
                          <div className="accordian__pill w-condition-invisible">
                            <div className="p-tiny">New</div>
                          </div>
                          <div className="accordion__close-btn">
                            <img
                              loading="eager"
                              src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/65291775b3935fbb3567728a_chevron%20down.svg"
                              alt=""
                              className="img-full"
                            />
                          </div>
                        </a>
                        <div
                          role="region"
                          style={{ height: "0PX" }}
                          className="accordion_content"
                        >
                          <div className="accordion_content-spacer">
                            <p className="p-body is--bgtext-darker">
                              At Siena, your data privacy is paramount. We do
                              not train our models using your data.{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        role="listitem"
                        className="accordion_item w-dyn-item"
                      >
                        <a
                          role="button"
                          data-w-id="1b58860d-3534-35f2-fe16-44183e4e5f6a"
                          href="#"
                          className="accordion_trigger w-inline-block"
                        >
                          <div className="accodian__h">
                            <div>Cognitive Reasoning</div>
                          </div>
                          <div className="accordian__pill w-condition-invisible">
                            <div className="p-tiny">New</div>
                          </div>
                          <div className="accordion__close-btn">
                            <img
                              loading="eager"
                              src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/65291775b3935fbb3567728a_chevron%20down.svg"
                              alt=""
                              className="img-full"
                            />
                          </div>
                        </a>
                        <div
                          role="region"
                          style={{ height: "0PX" }}
                          className="accordion_content"
                        >
                          <div className="accordion_content-spacer">
                            <p className="p-body is--bgtext-darker">
                              Built for resolution, Siena handles the
                              complexities of customer service using reasoning.
                              Our Cognitive Reasoning-Based Engine evaluates a
                              large number of data points and makes real-time
                              decisions like a human.{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        role="listitem"
                        className="accordion_item w-dyn-item"
                      >
                        <a
                          role="button"
                          data-w-id="1b58860d-3534-35f2-fe16-44183e4e5f6a"
                          href="#"
                          className="accordion_trigger w-inline-block"
                        >
                          <div className="accodian__h">
                            <div>Siena Copilot</div>
                          </div>
                          <div className="accordian__pill">
                            <div className="p-tiny">New</div>
                          </div>
                          <div className="accordion__close-btn">
                            <img
                              loading="eager"
                              src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/65291775b3935fbb3567728a_chevron%20down.svg"
                              alt=""
                              className="img-full"
                            />
                          </div>
                        </a>
                        <div
                          role="region"
                          style={{ height: "0PX" }}
                          className="accordion_content"
                        >
                          <div className="accordion_content-spacer">
                            <p className="p-body is--bgtext-darker">
                              Agents' AI sidekick that crafts responses 10x
                              faster, impeccably phrased, and globally
                              understood in over 100 languages. From sharpening
                              syntax to tailoring tone, Siena Copilot transforms
                              agents into customer success heroes, all while
                              keeping ticket fatigue at bay.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        role="listitem"
                        className="accordion_item w-dyn-item"
                      >
                        <a
                          role="button"
                          data-w-id="1b58860d-3534-35f2-fe16-44183e4e5f6a"
                          href="#"
                          className="accordion_trigger w-inline-block"
                        >
                          <div className="accodian__h">
                            <div>Generative Answers</div>
                          </div>
                          <div className="accordian__pill">
                            <div className="p-tiny">New</div>
                          </div>
                          <div className="accordion__close-btn">
                            <img
                              loading="eager"
                              src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/65291775b3935fbb3567728a_chevron%20down.svg"
                              alt=""
                              className="img-full"
                            />
                          </div>
                        </a>
                        <div
                          role="region"
                          style={{ height: "0PX" }}
                          className="accordion_content"
                        >
                          <div className="accordion_content-spacer">
                            <p className="p-body is--bgtext-darker">
                              Unlock instant, accurate responses – Siena taps
                              into your wealth of data sources such as Google
                              Docs, PDFs, help centers or product catalogues to
                              deliver the right information, right when your
                              customers need it.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        role="listitem"
                        className="accordion_item w-dyn-item"
                      >
                        <a
                          role="button"
                          data-w-id="1b58860d-3534-35f2-fe16-44183e4e5f6a"
                          href="#"
                          className="accordion_trigger w-inline-block"
                        >
                          <div className="accodian__h">
                            <div>AI Flows</div>
                          </div>
                          <div className="accordian__pill w-condition-invisible">
                            <div className="p-tiny">New</div>
                          </div>
                          <div className="accordion__close-btn">
                            <img
                              loading="eager"
                              src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/65291775b3935fbb3567728a_chevron%20down.svg"
                              alt=""
                              className="img-full"
                            />
                          </div>
                        </a>
                        <div
                          role="region"
                          style={{ height: "0PX" }}
                          className="accordion_content"
                        >
                          <div className="accordion_content-spacer">
                            <p className="p-body is--bgtext-darker">
                              Set specific goals such as order tracking or
                              modifying subscriptions, and Siena handles the
                              rest. This includes pulling data from systems like
                              Shopify or Recharge, interacting with customers
                              for clarity, and updating the system.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        role="listitem"
                        className="accordion_item w-dyn-item"
                      >
                        <a
                          role="button"
                          data-w-id="1b58860d-3534-35f2-fe16-44183e4e5f6a"
                          href="#"
                          className="accordion_trigger w-inline-block"
                        >
                          <div className="accodian__h">
                            <div>AI Library</div>
                          </div>
                          <div className="accordian__pill">
                            <div className="p-tiny">New</div>
                          </div>
                          <div className="accordion__close-btn">
                            <img
                              loading="eager"
                              src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/65291775b3935fbb3567728a_chevron%20down.svg"
                              alt=""
                              className="img-full"
                            />
                          </div>
                        </a>
                        <div
                          role="region"
                          style={{ height: "0PX" }}
                          className="accordion_content"
                        >
                          <div className="accordion_content-spacer">
                            <p className="p-body is--bgtext-darker">
                              Our AI model identifies and recommends easy to
                              automate customers most frequently asked
                              questions. One-click review, approve and go live,
                              without missing automation opportunities.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        role="listitem"
                        className="accordion_item w-dyn-item"
                      >
                        <a
                          role="button"
                          data-w-id="1b58860d-3534-35f2-fe16-44183e4e5f6a"
                          href="#"
                          className="accordion_trigger w-inline-block"
                        >
                          <div className="accodian__h">
                            <div>Smart Routing</div>
                          </div>
                          <div className="accordian__pill w-condition-invisible">
                            <div className="p-tiny">New</div>
                          </div>
                          <div className="accordion__close-btn">
                            <img
                              loading="eager"
                              src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/65291775b3935fbb3567728a_chevron%20down.svg"
                              alt=""
                              className="img-full"
                            />
                          </div>
                        </a>
                        <div
                          role="region"
                          style={{ height: "0PX" }}
                          className="accordion_content"
                        >
                          <div className="accordion_content-spacer">
                            <p className="p-body is--bgtext-darker">
                              Siena identifies knowledge gaps and smartly routes
                              tickets to human agents for that personal touch.
                              With AutoQA capabilities, it ensures a smooth
                              transition for agents to tackle complex issues,
                              melding tech efficiency with human insight
                              seamlessly.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        role="listitem"
                        className="accordion_item w-dyn-item"
                      >
                        <a
                          role="button"
                          data-w-id="1b58860d-3534-35f2-fe16-44183e4e5f6a"
                          href="#"
                          className="accordion_trigger w-inline-block"
                        >
                          <div className="accodian__h">
                            <div>Multilingual AI</div>
                          </div>
                          <div className="accordian__pill w-condition-invisible">
                            <div className="p-tiny">New</div>
                          </div>
                          <div className="accordion__close-btn">
                            <img
                              loading="eager"
                              src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/65291775b3935fbb3567728a_chevron%20down.svg"
                              alt=""
                              className="img-full"
                            />
                          </div>
                        </a>
                        <div
                          role="region"
                          style={{ height: "0PX" }}
                          className="accordion_content"
                        >
                          <div className="accordion_content-spacer">
                            <p className="p-body is--bgtext-darker">
                              Fluent from the get-go, Siena communicates
                              seamlessly across 100+ languages, offering clear,
                              natural interactions with zero training required.
                              Connect with your global customer base in their
                              language, right out of the box.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="blur__bg bottom-left" />
          <div className="blur__bg top-right" />
        </section>

        {/* <section className="section__how-it-works">
          <div className="padding-section__medium no-top">
            <div className="container-medium">
              <h2
                scrub-each-word=""
                text-split=""
                className="h3 text-center text-balanced"
              >
                Integrate Siena with your help desk in 1-click and start using
                your autonomous customer service with minimal setup. Get your AI
                superhuman up and running 90% faster and more efficient than the
                average automation tools.
              </h2>
            </div>
          </div>
        </section> */}

        <section data-section="testi-blur" className="section__testimonials">
          <div className="padding-section__medium">
            <div className="container-small">
              <div className="testimonials__parent">
                <div className="pill">
                  <div className="pill__circle" />
                  <div className="p-tiny">About Us.</div>
                </div>
                <h2 className="h3 text-center">Who we are ?</h2>
                <div className="sb-xxxxxl desktop" />
                <div className="sb-xxxl tablet-below" />
                <div
                  fs-cmstabs-element="tabs-2"
                  data-current="Tab 1"
                  data-easing="ease"
                  data-duration-in={300}
                  data-duration-out={100}
                  className="testimonials-tabs__col-wrapper w-tabs"
                >
                  <div className="testimonials-tabs__col-list w-tab-menu">
                    <a
                      data-w-tab="Tab 1"
                      className="testimonials-tabs__col-item w-inline-block w-tab-link w--current"
                    />
                  </div>
                  <div className="w-tab-content">
                    <div
                      data-w-tab="Tab 1"
                      className="w-tab-pane w--tab-active"
                    >
                      <div className="testimonials__item">
                        <div className="testimonial__content">
                          <div className="testimonial__rich-text w-richtext">
                            <h3>- DEVELOPERS</h3>
                            <p>
                              We Are A Group Of Two Undergrad Student Of KIIT,
                              Bhubaneswar, Odisha, INDIA.
                              <br /> Still Learning And Have A Great Interest In
                              Developing And Integrating Different Types Of
                              Technologies. Worked With Various Tech Stacks And
                              Participated In Numerous Events, Hackathons And
                              Competetions And The Count Will Never Stop.
                            </p>
                            <br />
                            <h4>Connect with Us:</h4>
                            <div>
                              <p
                                style={{
                                  display: "inline-block",
                                  marginRight: "20px",
                                  marginTop: "20px",
                                }}
                              >
                                Abhishek Mallick
                              </p>
                              <a href="https://www.linkedin.com/in/abhishek-mallick09/">
                                <img
                                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png"
                                  alt=""
                                  width={"50px"}
                                  style={{
                                    display: "inline-block",
                                    marginTop: "-10px",
                                  }}
                                />
                              </a>
                            </div>
                            <div>
                              <p
                                style={{
                                  display: "inline-block",
                                  marginRight: "20px",
                                  marginTop: "20px",
                                }}
                              >
                                Deepraj Bera
                              </p>
                              <a href="https://www.linkedin.com/in/deepraj-bera-b64996231/">
                                <img
                                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png"
                                  alt=""
                                  width={"50px"}
                                  style={{
                                    display: "inline-block",
                                    marginTop: "-10px",
                                    marginLeft: "52px",
                                  }}
                                />
                              </a>
                            </div>
                          </div>
                          <div className="sb-l" />
                          <div className="testimonial__quotes-wrap">
                            <div className="testimonial__quote">
                              <img
                                src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/65294cf9a6e7dac178ee3737_quote.svg"
                                loading="lazy"
                                alt=""
                                className="img-full"
                              />
                            </div>
                            <div className="testimonial__quote">
                              <img
                                src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/65294cf9a6e7dac178ee3737_quote.svg"
                                loading="lazy"
                                alt=""
                                className="img-full"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="testimonial__img-width">
                          <div className="testimonial__img-height">
                            <img
                              alt=""
                              loading="lazy"
                              src="https://i.ibb.co/y0B0YMz/Whats-App-Image-2024-02-12-at-02-27-35-babe5ed5.jpg"
                              className="img-full absolute testimonial-img"
                              style={{ borderRadius: "15px" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testimonials__col-wrapper w-dyn-list">
                  <div
                    fs-cmstabs-element="list-2"
                    role="list"
                    className="testimonials__col-list w-dyn-items"
                  >
                    <div
                      role="listitem"
                      className="testimonials__col-item w-dyn-item"
                    >
                      <div
                        fs-cmstabs-element="tab-link"
                        className="testimonial__nested-link"
                      >
                        <div className="testimonials__logo">
                          <img
                            alt=""
                            loading="lazy"
                            src="https://assets-global.website-files.com/6523d3eb03029a11dfdb9582/6529450de05b84280ab4c5ba_Everydaydose.svg"
                            className="img-full contain"
                          />
                        </div>
                        <div className="testimonial__progress-line" />
                      </div>
                      <div className="testimonials__item">
                        <div className="testimonial__content">
                          <div className="testimonial__rich-text w-richtext">
                            <h3>
                              Siena’s unique responses are what people love
                              most.{" "}
                            </h3>
                            <p>
                              We’ve had customers say her answers inspired them
                              to purchase, because they just felt so comfortable
                              with her. They feel that safety with Siena, which
                              helps them purchase.
                            </p>
                          </div>
                          <div className="sb-l" />
                          <div className="testimonial__name-social">
                            <div className="p-body bold">Beatriz Lopes</div>
                            <div className="testimonial__separator" />
                            <div className="p-body is--bgtext-dark">
                              @everydaydose
                            </div>
                          </div>
                          <div className="sb-xxl" />
                          <a
                            href="#"
                            className="button secondary w-inline-block w-condition-invisible"
                          >
                            <div className="button__icon-text-wrapper">
                              <div className="btn-text">Read story</div>
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
                          </a>
                          <div className="testimonial__quotes-wrap">
                            <div className="testimonial__quote">
                              <img
                                src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/65294cf9a6e7dac178ee3737_quote.svg"
                                loading="lazy"
                                alt=""
                                className="img-full"
                              />
                            </div>
                            <div className="testimonial__quote">
                              <img
                                src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/65294cf9a6e7dac178ee3737_quote.svg"
                                loading="lazy"
                                alt=""
                                className="img-full"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="sb-xxl mobile w-condition-invisible" />
                        <div className="testimonial__img-width">
                          <div className="testimonial__img-height">
                            <img
                              alt=""
                              loading="lazy"
                              src="https://assets-global.website-files.com/6523d3eb03029a11dfdb9582/6538ec49657f8e62e3b2508c_bianka.jpg"
                              className="img-full absolute testimonial-img"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="testimonials__col-item w-dyn-item"
                    >
                      <div
                        fs-cmstabs-element="tab-link"
                        className="testimonial__nested-link"
                      >
                        <div className="testimonials__logo">
                          <img
                            alt=""
                            loading="lazy"
                            src="https://assets-global.website-files.com/6523d3eb03029a11dfdb9582/6529432229681836be7e956a_crossnet%20logo%20dark.png"
                            className="img-full contain"
                          />
                        </div>
                        <div className="testimonial__progress-line" />
                      </div>
                      <div className="testimonials__item">
                        <div className="testimonial__content">
                          <div className="testimonial__rich-text w-richtext">
                            <h3>
                              Siena is incredibly intuitive<em>.</em>
                            </h3>
                            <p>
                              We’re saving $30,000 to $40,000 or more on
                              customer support each year, plus the countless
                              hours from our management team overseeing
                              responses.{" "}
                            </p>
                          </div>
                          <div className="sb-l" />
                          <div className="testimonial__name-social">
                            <div className="p-body bold">Chris Meade</div>
                            <div className="testimonial__separator" />
                            <div className="p-body is--bgtext-dark">
                              @chrismeadej
                            </div>
                          </div>
                          <div className="sb-xxl" />
                          <a
                            href="#"
                            className="button secondary w-inline-block w-condition-invisible"
                          >
                            <div className="button__icon-text-wrapper">
                              <div className="btn-text">Read story</div>
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
                          </a>
                          <div className="testimonial__quotes-wrap">
                            <div className="testimonial__quote">
                              <img
                                src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/65294cf9a6e7dac178ee3737_quote.svg"
                                loading="lazy"
                                alt=""
                                className="img-full"
                              />
                            </div>
                            <div className="testimonial__quote">
                              <img
                                src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/65294cf9a6e7dac178ee3737_quote.svg"
                                loading="lazy"
                                alt=""
                                className="img-full"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="sb-xxl mobile w-condition-invisible" />
                        <div className="testimonial__img-width">
                          <div className="testimonial__img-height">
                            <img
                              alt=""
                              loading="lazy"
                              src="https://assets-global.website-files.com/6523d3eb03029a11dfdb9582/6538ec24657f8e62e3b22079_Chris%20Meade.jpg"
                              sizes="100vw"
                              srcSet="https://assets-global.website-files.com/6523d3eb03029a11dfdb9582/6538ec24657f8e62e3b22079_Chris%20Meade-p-500.jpg 500w, https://assets-global.website-files.com/6523d3eb03029a11dfdb9582/6538ec24657f8e62e3b22079_Chris%20Meade.jpg 520w"
                              className="img-full absolute testimonial-img"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="testimonials__col-item w-dyn-item"
                    >
                      <div
                        fs-cmstabs-element="tab-link"
                        className="testimonial__nested-link"
                      >
                        <div className="testimonials__logo">
                          <img
                            alt=""
                            loading="lazy"
                            src="https://assets-global.website-files.com/6523d3eb03029a11dfdb9582/655244eba172c0f79838b95c_simple%20modern%20logo%20black.svg"
                            className="img-full contain"
                          />
                        </div>
                        <div className="testimonial__progress-line" />
                      </div>
                      <div className="testimonials__item">
                        <div className="testimonial__content">
                          <div className="testimonial__rich-text w-richtext">
                            <h3>
                              We just finished our busiest season of the year.
                            </h3>
                            <p>
                              I feel like since we had Siena, it really truly
                              saved us so much time and headache. Without Siena,
                              we would've been drowning in the amount of
                              incoming tickets.
                            </p>
                          </div>
                          <div className="sb-l" />
                          <div className="testimonial__name-social">
                            <div className="p-body bold">Katie Mitchell</div>
                            <div className="testimonial__separator" />
                            <div className="p-body is--bgtext-dark">
                              @shopsimplemodern
                            </div>
                          </div>
                          <div className="sb-xxl" />
                          <a
                            href="#"
                            className="button secondary w-inline-block w-condition-invisible"
                          >
                            <div className="button__icon-text-wrapper">
                              <div className="btn-text">Read story</div>
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
                          </a>
                          <div className="testimonial__quotes-wrap">
                            <div className="testimonial__quote">
                              <img
                                src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/65294cf9a6e7dac178ee3737_quote.svg"
                                loading="lazy"
                                alt=""
                                className="img-full"
                              />
                            </div>
                            <div className="testimonial__quote">
                              <img
                                src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/65294cf9a6e7dac178ee3737_quote.svg"
                                loading="lazy"
                                alt=""
                                className="img-full"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="sb-xxl mobile w-condition-invisible" />
                        <div className="testimonial__img-width">
                          <div className="testimonial__img-height">
                            <img
                              alt=""
                              loading="lazy"
                              src="https://assets-global.website-files.com/6523d3eb03029a11dfdb9582/655224af30456c5c8bc6ebf4_katie-mitchell.jpeg"
                              sizes="100vw"
                              srcSet="https://assets-global.website-files.com/6523d3eb03029a11dfdb9582/655224af30456c5c8bc6ebf4_katie-mitchell-p-500.jpeg 500w, https://assets-global.website-files.com/6523d3eb03029a11dfdb9582/655224af30456c5c8bc6ebf4_katie-mitchell-p-800.jpeg 800w, https://assets-global.website-files.com/6523d3eb03029a11dfdb9582/655224af30456c5c8bc6ebf4_katie-mitchell-p-1080.jpeg 1080w, https://assets-global.website-files.com/6523d3eb03029a11dfdb9582/655224af30456c5c8bc6ebf4_katie-mitchell.jpeg 1600w"
                              className="img-full absolute testimonial-img"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="testimonials__col-item w-dyn-item"
                    >
                      <div
                        fs-cmstabs-element="tab-link"
                        className="testimonial__nested-link"
                      >
                        <div className="testimonials__logo">
                          <img
                            alt=""
                            loading="lazy"
                            src="https://assets-global.website-files.com/6523d3eb03029a11dfdb9582/654396cddb221c63753e8488_doe%20logo%20black.svg"
                            className="img-full contain"
                          />
                        </div>
                        <div className="testimonial__progress-line" />
                      </div>
                      <div className="testimonials__item">
                        <div className="testimonial__content">
                          <div className="testimonial__rich-text w-richtext">
                            <h3>
                              Best tool for merchants to automate customer
                              support.
                            </h3>
                            <p>
                              They’re turning customer support into a revenue
                              generating channel and can service Social Media
                              comments and email among others.
                            </p>
                          </div>
                          <div className="sb-l" />
                          <div className="testimonial__name-social">
                            <div className="p-body bold">Jason Wong</div>
                            <div className="testimonial__separator" />
                            <div className="p-body is--bgtext-dark">
                              @eggrolI
                            </div>
                          </div>
                          <div className="sb-xxl" />
                          <a
                            href="#"
                            className="button secondary w-inline-block w-condition-invisible"
                          >
                            <div className="button__icon-text-wrapper">
                              <div className="btn-text">Read story</div>
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
                          </a>
                          <div className="testimonial__quotes-wrap">
                            <div className="testimonial__quote">
                              <img
                                src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/65294cf9a6e7dac178ee3737_quote.svg"
                                loading="lazy"
                                alt=""
                                className="img-full"
                              />
                            </div>
                            <div className="testimonial__quote">
                              <img
                                src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/65294cf9a6e7dac178ee3737_quote.svg"
                                loading="lazy"
                                alt=""
                                className="img-full"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="sb-xxl mobile w-condition-invisible" />
                        <div className="testimonial__img-width">
                          <div className="testimonial__img-height">
                            <img
                              alt=""
                              loading="lazy"
                              src="https://assets-global.website-files.com/6523d3eb03029a11dfdb9582/653fb59fac4d2c2b28910119_jason.jpeg"
                              className="img-full absolute testimonial-img"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="testimonials__col-item w-dyn-item"
                    >
                      <div
                        fs-cmstabs-element="tab-link"
                        className="testimonial__nested-link"
                      >
                        <div className="testimonials__logo">
                          <img
                            alt=""
                            loading="lazy"
                            src="https://assets-global.website-files.com/6523d3eb03029a11dfdb9582/65439736b487eddd55dd7e4d_verb%20logo%20black.svg"
                            className="img-full contain"
                          />
                        </div>
                        <div className="testimonial__progress-line" />
                      </div>
                      <div className="testimonials__item">
                        <div className="testimonial__content">
                          <div className="testimonial__rich-text w-richtext">
                            <h3>
                              Siena truly lives up to what the team said she’s
                              capable of.
                            </h3>
                            <p>
                              Plus, the user interface and rollout experience
                              were outstanding all around. Siena is easy to
                              understand and work with, and we were able to
                              implement her smoothly from day one.
                              <br />
                            </p>
                          </div>
                          <div className="sb-l" />
                          <div className="testimonial__name-social">
                            <div className="p-body bold">Bennett Byerley</div>
                            <div className="testimonial__separator" />
                            <div className="p-body is--bgtext-dark">
                              @verbenergy
                            </div>
                          </div>
                          <div className="sb-xxl" />
                          <a
                            href="#"
                            className="button secondary w-inline-block w-condition-invisible"
                          >
                            <div className="button__icon-text-wrapper">
                              <div className="btn-text">Read story</div>
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
                          </a>
                          <div className="testimonial__quotes-wrap">
                            <div className="testimonial__quote">
                              <img
                                src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/65294cf9a6e7dac178ee3737_quote.svg"
                                loading="lazy"
                                alt=""
                                className="img-full"
                              />
                            </div>
                            <div className="testimonial__quote">
                              <img
                                src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/65294cf9a6e7dac178ee3737_quote.svg"
                                loading="lazy"
                                alt=""
                                className="img-full"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="sb-xxl mobile w-condition-invisible" />
                        <div className="testimonial__img-width">
                          <div className="testimonial__img-height">
                            <img
                              alt=""
                              loading="lazy"
                              src="https://assets-global.website-files.com/6523d3eb03029a11dfdb9582/654397a6b904ea81a389199c_Bennett%20Byerley.jpeg"
                              className="img-full absolute testimonial-img"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="testimonials__col-item w-dyn-item"
                    >
                      <div
                        fs-cmstabs-element="tab-link"
                        className="testimonial__nested-link"
                      >
                        <div className="testimonials__logo">
                          <img
                            alt=""
                            loading="lazy"
                            src="https://assets-global.website-files.com/6523d3eb03029a11dfdb9582/653f87cd27dbf5b8e739feb7_swoveralls.svg"
                            className="img-full contain"
                          />
                        </div>
                        <div className="testimonial__progress-line" />
                      </div>
                      <div className="testimonials__item">
                        <div className="testimonial__content">
                          <div className="testimonial__rich-text w-richtext">
                            <h3>
                              Can't see any reason why a brand would not use
                              Siena's magic.
                            </h3>
                            <p>
                              Siena's incredible technology allows us to become
                              more passive on hands-on CX, in turn empowering
                              our team to focus on other opportunities continue
                              brand growth.
                            </p>
                          </div>
                          <div className="sb-l" />
                          <div className="testimonial__name-social">
                            <div className="p-body bold">Kyle Bergman</div>
                            <div className="testimonial__separator" />
                            <div className="p-body is--bgtext-dark">
                              @swoveralls_
                            </div>
                          </div>
                          <div className="sb-xxl" />
                          <a
                            href="#"
                            className="button secondary w-inline-block w-condition-invisible"
                          >
                            <div className="button__icon-text-wrapper">
                              <div className="btn-text">Read story</div>
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
                          </a>
                          <div className="testimonial__quotes-wrap">
                            <div className="testimonial__quote">
                              <img
                                src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/65294cf9a6e7dac178ee3737_quote.svg"
                                loading="lazy"
                                alt=""
                                className="img-full"
                              />
                            </div>
                            <div className="testimonial__quote">
                              <img
                                src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/65294cf9a6e7dac178ee3737_quote.svg"
                                loading="lazy"
                                alt=""
                                className="img-full"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="sb-xxl mobile w-condition-invisible" />
                        <div className="testimonial__img-width">
                          <div className="testimonial__img-height">
                            <img
                              alt=""
                              loading="lazy"
                              src="https://assets-global.website-files.com/6523d3eb03029a11dfdb9582/653f87f14c7a3a6df982dc5f_Kyle%20Bergman.jpeg"
                              className="img-full absolute testimonial-img"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      role="listitem"
                      className="testimonials__col-item w-dyn-item"
                    >
                      <div
                        fs-cmstabs-element="tab-link"
                        className="testimonial__nested-link"
                      >
                        <div className="testimonials__logo">
                          <img
                            alt=""
                            loading="lazy"
                            src="https://assets-global.website-files.com/6523d3eb03029a11dfdb9582/6543afd270eea704e2f1fdf5_kitsch%20logo%20black.svg"
                            className="img-full contain"
                          />
                        </div>
                        <div className="testimonial__progress-line" />
                      </div>
                      <div className="testimonials__item">
                        <div className="testimonial__content">
                          <div className="testimonial__rich-text w-richtext">
                            <h3>
                              Obviously, there are so many companies that offer
                              some kind of customer support,
                            </h3>
                            <p>
                              but when we did the preliminary screening with
                              Siena, we quickly thought, ‘Yeah, this is the one
                              we’re going to go with.'
                            </p>
                          </div>
                          <div className="sb-l" />
                          <div className="testimonial__name-social">
                            <div className="p-body bold">Devyn Engasser</div>
                            <div className="testimonial__separator" />
                            <div className="p-body is--bgtext-dark">
                              @kitsch
                            </div>
                          </div>
                          <div className="sb-xxl" />
                          <a
                            href="/customer-stories/kitsch"
                            className="button secondary w-inline-block"
                          >
                            <div className="button__icon-text-wrapper">
                              <div className="btn-text">Read story</div>
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
                          </a>
                          <div className="testimonial__quotes-wrap">
                            <div className="testimonial__quote">
                              <img
                                src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/65294cf9a6e7dac178ee3737_quote.svg"
                                loading="lazy"
                                alt=""
                                className="img-full"
                              />
                            </div>
                            <div className="testimonial__quote">
                              <img
                                src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/65294cf9a6e7dac178ee3737_quote.svg"
                                loading="lazy"
                                alt=""
                                className="img-full"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="sb-xxl mobile" />
                        <div className="testimonial__img-width">
                          <div className="testimonial__img-height">
                            <img
                              alt=""
                              loading="lazy"
                              src="https://assets-global.website-files.com/6523d3eb03029a11dfdb9582/6554c813e62ae5f3651c59e0_image%20620.png"
                              sizes="100vw"
                              srcSet="https://assets-global.website-files.com/6523d3eb03029a11dfdb9582/6554c813e62ae5f3651c59e0_image%20620-p-500.png 500w, https://assets-global.website-files.com/6523d3eb03029a11dfdb9582/6554c813e62ae5f3651c59e0_image%20620-p-800.png 800w, https://assets-global.website-files.com/6523d3eb03029a11dfdb9582/6554c813e62ae5f3651c59e0_image%20620.png 1024w"
                              className="img-full absolute testimonial-img"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="blur__bg left-center" />
          <div className="blur__bg bottom-right" />
        </section>
        <div className="integration-icons">
          <div data-integration-icon="z" className="integration-icon">
            <img
              src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/653249a835e8b66bfaa359b5_z-min.jpg"
              loading="lazy"
              alt=""
            />
          </div>
          <div data-integration-icon="ordergroove" className="integration-icon">
            <img
              src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/653249a835e8b66bfaa359c3_ordergroove-min.jpg"
              loading="lazy"
              alt=""
            />
          </div>
          <div data-integration-icon="smiley" className="integration-icon">
            <img
              src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/653249a835e8b66bfaa359c1_smiley-min.jpg"
              loading="lazy"
              alt=""
            />
          </div>
          <div data-integration-icon="gorgias" className="integration-icon">
            <img
              src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/653249a835e8b66bfaa359bd_gorgias-min.jpg"
              loading="lazy"
              alt=""
            />
          </div>
          <div data-integration-icon="shopify" className="integration-icon">
            <img
              src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/653249a835e8b66bfaa359b7_shopify-min.jpg"
              loading="lazy"
              alt=""
            />
          </div>
          <div data-integration-icon="r" className="integration-icon">
            <img
              src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/653249a835e8b66bfaa359bf_r-min.jpg"
              loading="lazy"
              alt=""
            />
          </div>
          <div data-integration-icon="skio" className="integration-icon">
            <img
              src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/653249a835e8b66bfaa359bb_skio-min.jpg"
              loading="lazy"
              alt=""
            />
          </div>
          <div data-integration-icon="heart" className="integration-icon">
            <img
              src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/653249a835e8b66bfaa359b9_heart-min.jpg"
              loading="lazy"
              alt=""
            />
          </div>
        </div>
      </main>

      <footer mode="dark" className="footer">
        <div className="padding-section__medium footer">
          <div className="container-small">
            <div className="footer__child">
              <div
                id="w-node-_7d49baa2-86a6-43e0-45de-7ca00a75ca6f-0a75ca6b"
                className="footer__left"
              >
                <a
                  href="/"
                  aria-current="page"
                  className="footer__logo w-inline-block w--current"
                >
                  <h3 style={{ marginLeft: "180px" }}>TOGETHERLY</h3>
                </a>
                <div className="sb-xxl desktop" />
                <div className="footer__socials-wrap desktop">
                  <a
                    href="https://www.linkedin.com/company/siena-ai/"
                    target="_blank"
                    className="social-icon w-inline-block"
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
                    className="social-icon w-inline-block"
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
              <div className="footer__column">
                <div className="footer__links-wrap">
                  <div className="overline footer-text">services</div>
                  <a href="/dashboard" className="footer__link p-small">
                    Dashboard
                  </a>
                  <a href="/screen" className="footer__link p-small">
                    Screen
                  </a>
                </div>
                <div className="sb-xxl" />
                <div className="footer__links-wrap">
                  <div className="overline footer-text">Resources</div>
                  <a href="/customers" className="footer__link p-small">
                    Customers
                  </a>
                  <a href="/blog" className="footer__link p-small">
                    Blog
                  </a>
                  <a href="/community" className="footer__link p-small">
                    Community
                  </a>
                </div>
              </div>
              <div className="footer__column">
                <div className="footer__links-wrap">
                  <div className="overline footer-text">Project</div>
                  <a href="/about-us" className="footer__link p-small">
                    About us
                  </a>
                  <a
                    href="/contact"
                    target="_blank"
                    className="footer__link p-small"
                  >
                    Contact
                  </a>
                  <a href="/signup" className="footer__link p-small">
                    SignUp
                  </a>
                </div>
                <div className="sb-xxl" />
                <div className="footer__links-wrap">
                  <div className="overline footer-text">Legal</div>
                  <a href="/terms-of-service" className="footer__link p-small">
                    Terms of service
                  </a>
                  <a href="/privacy-policy" className="footer__link p-small">
                    Privacy policy
                  </a>
                </div>
              </div>
              <div className="footer__socials-wrap tablet-below">
                <a
                  href="https://www.linkedin.com/company/siena-ai/"
                  target="_blank"
                  className="social-icon w-inline-block"
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
                  className="social-icon w-inline-block"
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
            <div className="bright-line footer" />
            <div className="footer__bottom-wrap">
              <div className="p-small">
                Made with ♥️ togetherly ©{" "}
                <span className="copyright-year">2024</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
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
