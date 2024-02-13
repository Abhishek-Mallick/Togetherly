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
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n        @media (min-width:992px) {\n            html.w-mod-js:not(.w-mod-ix) [data-w-id="73f239dc-9093-5ef8-deb2-ba160614a01c"] {\n                -webkit-transform: translate3d(0, 24px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                -moz-transform: translate3d(0, 24px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                -ms-transform: translate3d(0, 24px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                transform: translate3d(0, 24px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                opacity: 0;\n            }\n            html.w-mod-js:not(.w-mod-ix) [data-w-id="e0439827-699c-8220-f6c2-142623a0cd8e"] {\n                -webkit-transform: translate3d(0, 24px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                -moz-transform: translate3d(0, 24px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                -ms-transform: translate3d(0, 24px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                transform: translate3d(0, 24px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                opacity: 0;\n            }\n            html.w-mod-js:not(.w-mod-ix) [data-w-id="d7fffaed-4220-86e5-5f2f-70e7132efbb3"] {\n                -webkit-transform: translate3d(0, 24px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                -moz-transform: translate3d(0, 24px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                -ms-transform: translate3d(0, 24px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                transform: translate3d(0, 24px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                opacity: 0;\n            }\n            html.w-mod-js:not(.w-mod-ix) [data-w-id="92eb76c2-68dc-2850-29b7-0352481c65b4"] {\n                -webkit-transform: translate3d(0, 24px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                -moz-transform: translate3d(0, 24px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                -ms-transform: translate3d(0, 24px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                transform: translate3d(0, 24px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                opacity: 0;\n            }\n            html.w-mod-js:not(.w-mod-ix) [data-w-id="3b65d54f-72fa-8c59-4f31-7fd558c31017"] {\n                -webkit-transform: translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                -moz-transform: translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                -ms-transform: translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                transform: translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                opacity: 1;\n            }\n            html.w-mod-js:not(.w-mod-ix) [data-w-id="cc30326a-169e-1230-199e-eebb8d01f224"] {\n                -webkit-transform: translate3d(0, 16px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                -moz-transform: translate3d(0, 16px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                -ms-transform: translate3d(0, 16px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                transform: translate3d(0, 16px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                opacity: 0;\n            }\n            html.w-mod-js:not(.w-mod-ix) [data-w-id="fa0f3f13-4ba4-9baf-ea7d-acf0d3274fd8"] {\n                -webkit-transform: translate3d(-16px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                -moz-transform: translate3d(-16px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                -ms-transform: translate3d(-16px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                transform: translate3d(-16px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                opacity: 0;\n            }\n            html.w-mod-js:not(.w-mod-ix) [data-w-id="64026c0a-fd9e-aec2-80ec-70574ae3a9d3"] {\n                opacity: 0;\n                -webkit-transform: translate3d(-16px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                -moz-transform: translate3d(-16px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                -ms-transform: translate3d(-16px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                transform: translate3d(-16px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n            }\n            html.w-mod-js:not(.w-mod-ix) [data-w-id="fa0f3f13-4ba4-9baf-ea7d-acf0d3274fd6"] {\n                opacity: 0;\n            }\n            html.w-mod-js:not(.w-mod-ix) [data-w-id="fa0f3f13-4ba4-9baf-ea7d-acf0d3274fd7"] {\n                width: 0px;\n                height: 0px;\n            }\n            html.w-mod-js:not(.w-mod-ix) [data-w-id="64026c0a-fd9e-aec2-80ec-70574ae3a9d1"] {\n                opacity: 0;\n            }\n            html.w-mod-js:not(.w-mod-ix) [data-w-id="64026c0a-fd9e-aec2-80ec-70574ae3a9d2"] {\n                width: 0px;\n                height: 0px;\n            }\n            html.w-mod-js:not(.w-mod-ix) [data-w-id="d401901b-2db5-4cf1-69fa-f63f5837024e"] {\n                opacity: 0;\n            }\n            html.w-mod-js:not(.w-mod-ix) [data-w-id="339a3c2d-2de3-524a-132e-8b3d7f5e3dec"] {\n                opacity: 0;\n            }\n            html.w-mod-js:not(.w-mod-ix) [data-w-id="e2c08f94-9c8d-d6d5-0d91-c0b8f943766f"] {\n                -webkit-transform: translate3d(0, 24px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                -moz-transform: translate3d(0, 24px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                -ms-transform: translate3d(0, 24px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                transform: translate3d(0, 24px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                opacity: 0;\n            }\n            html.w-mod-js:not(.w-mod-ix) [data-w-id="c07a5c55-6d23-121f-dc54-bd50e5e06185"] {\n                -webkit-transform: translate3d(0, 24px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                -moz-transform: translate3d(0, 24px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                -ms-transform: translate3d(0, 24px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                transform: translate3d(0, 24px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                opacity: 0;\n            }\n            html.w-mod-js:not(.w-mod-ix) [data-w-id="969f55a8-ad31-ea88-899c-f6821d14cb6a"] {\n                -webkit-transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(7deg) skew(0, 0);\n                -moz-transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(7deg) skew(0, 0);\n                -ms-transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(7deg) skew(0, 0);\n                transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(7deg) skew(0, 0);\n                opacity: 0;\n            }\n            html.w-mod-js:not(.w-mod-ix) [data-w-id="29069347-451a-c306-63b1-e35e51c4a661"] {\n                -webkit-transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(7deg) skew(0, 0);\n                -moz-transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(7deg) skew(0, 0);\n                -ms-transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(7deg) skew(0, 0);\n                transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(7deg) skew(0, 0);\n                opacity: 0;\n            }\n            html.w-mod-js:not(.w-mod-ix) [data-w-id="49aa8633-1c9b-6249-f5cf-3e9e532b498e"] {\n                -webkit-transform: translate3d(40px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                -moz-transform: translate3d(40px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                -ms-transform: translate3d(40px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                transform: translate3d(40px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                opacity: 0;\n            }\n            html.w-mod-js:not(.w-mod-ix) [data-w-id="49aa8633-1c9b-6249-f5cf-3e9e532b499a"] {\n                -webkit-transform: translate3d(40px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                -moz-transform: translate3d(40px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                -ms-transform: translate3d(40px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                transform: translate3d(40px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                opacity: 0;\n            }\n            html.w-mod-js:not(.w-mod-ix) [data-w-id="49aa8633-1c9b-6249-f5cf-3e9e532b49be"] {\n                -webkit-transform: translate3d(40px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                -moz-transform: translate3d(40px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                -ms-transform: translate3d(40px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                transform: translate3d(40px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                opacity: 0;\n            }\n            html.w-mod-js:not(.w-mod-ix) [data-w-id="3fae8087-ada6-1a17-82b4-4557b8ebf362"] {\n                -webkit-transform: translate3d(0, 24px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                -moz-transform: translate3d(0, 24px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                -ms-transform: translate3d(0, 24px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                transform: translate3d(0, 24px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                opacity: 0;\n            }\n        }\n\n        @media (max-width:991px) and (min-width:768px) {\n            html.w-mod-js:not(.w-mod-ix) [data-w-id="29069347-451a-c306-63b1-e35e51c4a64f"] {\n                -webkit-transform: translate3d(0, 24px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                -moz-transform: translate3d(0, 24px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                -ms-transform: translate3d(0, 24px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                transform: translate3d(0, 24px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                opacity: 0;\n            }\n            html.w-mod-js:not(.w-mod-ix) [data-w-id="29069347-451a-c306-63b1-e35e51c4a65b"] {\n                -webkit-transform: translate3d(0, 24px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                -moz-transform: translate3d(0, 24px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                -ms-transform: translate3d(0, 24px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                transform: translate3d(0, 24px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                opacity: 0;\n            }\n            html.w-mod-js:not(.w-mod-ix) [data-w-id="969f55a8-ad31-ea88-899c-f6821d14cb6a"] {\n                -webkit-transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(7deg) skew(0, 0);\n                -moz-transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(7deg) skew(0, 0);\n                -ms-transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(7deg) skew(0, 0);\n                transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(7deg) skew(0, 0);\n                opacity: 0;\n            }\n            html.w-mod-js:not(.w-mod-ix) [data-w-id="29069347-451a-c306-63b1-e35e51c4a661"] {\n                -webkit-transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(7deg) skew(0, 0);\n                -moz-transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(7deg) skew(0, 0);\n                -ms-transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(7deg) skew(0, 0);\n                transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(7deg) skew(0, 0);\n                opacity: 0;\n            }\n            html.w-mod-js:not(.w-mod-ix) [data-w-id="29069347-451a-c306-63b1-e35e51c4a655"] {\n                -webkit-transform: translate3d(40px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                -moz-transform: translate3d(40px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                -ms-transform: translate3d(40px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                transform: translate3d(40px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                opacity: 0;\n            }\n            html.w-mod-js:not(.w-mod-ix) [data-w-id="29069347-451a-c306-63b1-e35e51c4a663"] {\n                -webkit-transform: translate3d(40px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                -moz-transform: translate3d(40px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                -ms-transform: translate3d(40px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                transform: translate3d(40px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                opacity: 0;\n            }\n            html.w-mod-js:not(.w-mod-ix) [data-w-id="29069347-451a-c306-63b1-e35e51c4a669"] {\n                -webkit-transform: translate3d(40px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                -moz-transform: translate3d(40px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                -ms-transform: translate3d(40px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                transform: translate3d(40px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                opacity: 0;\n            }\n        }\n\n        @media (max-width:767px) and (min-width:480px) {\n            html.w-mod-js:not(.w-mod-ix) [data-w-id="29069347-451a-c306-63b1-e35e51c4a64f"] {\n                -webkit-transform: translate3d(0, 24px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                -moz-transform: translate3d(0, 24px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                -ms-transform: translate3d(0, 24px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                transform: translate3d(0, 24px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                opacity: 0;\n            }\n            html.w-mod-js:not(.w-mod-ix) [data-w-id="29069347-451a-c306-63b1-e35e51c4a65b"] {\n                -webkit-transform: translate3d(0, 24px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                -moz-transform: translate3d(0, 24px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                -ms-transform: translate3d(0, 24px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                transform: translate3d(0, 24px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                opacity: 0;\n            }\n            html.w-mod-js:not(.w-mod-ix) [data-w-id="969f55a8-ad31-ea88-899c-f6821d14cb6a"] {\n                -webkit-transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(7deg) skew(0, 0);\n                -moz-transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(7deg) skew(0, 0);\n                -ms-transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(7deg) skew(0, 0);\n                transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(7deg) skew(0, 0);\n                opacity: 0;\n            }\n            html.w-mod-js:not(.w-mod-ix) [data-w-id="29069347-451a-c306-63b1-e35e51c4a661"] {\n                -webkit-transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(7deg) skew(0, 0);\n                -moz-transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(7deg) skew(0, 0);\n                -ms-transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(7deg) skew(0, 0);\n                transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(7deg) skew(0, 0);\n                opacity: 0;\n            }\n            html.w-mod-js:not(.w-mod-ix) [data-w-id="29069347-451a-c306-63b1-e35e51c4a655"] {\n                -webkit-transform: translate3d(40px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                -moz-transform: translate3d(40px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                -ms-transform: translate3d(40px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                transform: translate3d(40px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                opacity: 0;\n            }\n            html.w-mod-js:not(.w-mod-ix) [data-w-id="29069347-451a-c306-63b1-e35e51c4a663"] {\n                -webkit-transform: translate3d(40px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                -moz-transform: translate3d(40px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                -ms-transform: translate3d(40px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                transform: translate3d(40px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                opacity: 0;\n            }\n            html.w-mod-js:not(.w-mod-ix) [data-w-id="29069347-451a-c306-63b1-e35e51c4a669"] {\n                -webkit-transform: translate3d(40px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                -moz-transform: translate3d(40px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                -ms-transform: translate3d(40px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                transform: translate3d(40px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                opacity: 0;\n            }\n        }\n\n        @media (max-width:479px) {\n            html.w-mod-js:not(.w-mod-ix) [data-w-id="29069347-451a-c306-63b1-e35e51c4a64f"] {\n                -webkit-transform: translate3d(0, 24px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                -moz-transform: translate3d(0, 24px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                -ms-transform: translate3d(0, 24px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                transform: translate3d(0, 24px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                opacity: 0;\n            }\n            html.w-mod-js:not(.w-mod-ix) [data-w-id="29069347-451a-c306-63b1-e35e51c4a65b"] {\n                -webkit-transform: translate3d(0, 24px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                -moz-transform: translate3d(0, 24px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                -ms-transform: translate3d(0, 24px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                transform: translate3d(0, 24px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                opacity: 0;\n            }\n            html.w-mod-js:not(.w-mod-ix) [data-w-id="969f55a8-ad31-ea88-899c-f6821d14cb6a"] {\n                -webkit-transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(7deg) skew(0, 0);\n                -moz-transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(7deg) skew(0, 0);\n                -ms-transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(7deg) skew(0, 0);\n                transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(7deg) skew(0, 0);\n                opacity: 0;\n            }\n            html.w-mod-js:not(.w-mod-ix) [data-w-id="29069347-451a-c306-63b1-e35e51c4a661"] {\n                -webkit-transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(7deg) skew(0, 0);\n                -moz-transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(7deg) skew(0, 0);\n                -ms-transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(7deg) skew(0, 0);\n                transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(7deg) skew(0, 0);\n                opacity: 0;\n            }\n            html.w-mod-js:not(.w-mod-ix) [data-w-id="29069347-451a-c306-63b1-e35e51c4a655"] {\n                -webkit-transform: translate3d(40px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                -moz-transform: translate3d(40px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                -ms-transform: translate3d(40px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                transform: translate3d(40px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                opacity: 0;\n            }\n            html.w-mod-js:not(.w-mod-ix) [data-w-id="29069347-451a-c306-63b1-e35e51c4a663"] {\n                -webkit-transform: translate3d(40px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                -moz-transform: translate3d(40px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                -ms-transform: translate3d(40px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                transform: translate3d(40px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                opacity: 0;\n            }\n            html.w-mod-js:not(.w-mod-ix) [data-w-id="29069347-451a-c306-63b1-e35e51c4a669"] {\n                -webkit-transform: translate3d(40px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                -moz-transform: translate3d(40px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                -ms-transform: translate3d(40px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                transform: translate3d(40px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);\n                opacity: 0;\n            }\n        }\n    ',
        }}
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
                {/* <svg
                  width={104}
                  height={30}
                  viewBox="0 0 104 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4211 29.0809C8.50541 29.0809 6.65034 28.8323 4.8559 28.3352C3.07359 27.8381 1.45495 27.1106 0 26.1528V21.2969C1.33371 22.3153 2.87353 23.1034 4.61947 23.6612C6.37754 24.2189 8.14167 24.4978 9.91186 24.4978C11.2456 24.4978 12.2519 24.2977 12.9309 23.8976C13.6099 23.4975 13.9494 22.9458 13.9494 22.2426C13.9494 21.7333 13.7735 21.2908 13.4219 20.9149C13.0824 20.527 12.4156 20.2056 11.4214 19.951L6.67459 18.8234C4.34667 18.2536 2.66741 17.4594 1.63682 16.441C0.618355 15.4225 0.109121 14.1494 0.109121 12.6217C0.109121 11.3123 0.515296 10.1604 1.32764 9.1662C2.15212 8.17198 3.3282 7.40207 4.8559 6.85646C6.39573 6.29873 8.19623 6.01987 10.2574 6.01987C12.1246 6.01987 13.822 6.23811 15.3497 6.67459C16.8774 7.09895 18.193 7.66881 19.2963 8.38416V13.0764C18.1808 12.3125 16.9017 11.7063 15.4589 11.2577C14.016 10.797 12.4823 10.5666 10.8576 10.5666C9.41475 10.5666 8.33566 10.7485 7.62031 11.1122C6.90496 11.4638 6.54729 11.9609 6.54729 12.6035C6.54729 13.137 6.78978 13.5614 7.27476 13.8766C7.77187 14.1918 8.59028 14.4768 9.72999 14.7314L13.9857 15.6589C16.1197 16.0954 17.7383 16.8168 18.8416 17.8232C19.945 18.8295 20.4966 20.242 20.4966 22.0607C20.4966 23.455 20.0965 24.6857 19.2963 25.7527C18.5082 26.8075 17.3564 27.6259 15.8408 28.2079C14.3252 28.7899 12.5187 29.0809 10.4211 29.0809Z"
                    fill="currentColor"
                  />
                  <path
                    d="M25.8727 5.9653C25.1695 5.9653 24.539 5.838 23.9813 5.58338C23.4235 5.31664 22.987 4.9529 22.6718 4.49217C22.3566 4.03143 22.1989 3.51613 22.1989 2.94628C22.1989 2.38855 22.3566 1.88538 22.6718 1.43677C22.9992 0.988155 23.4417 0.636542 23.9994 0.381925C24.5572 0.127308 25.1816 0 25.8727 0C26.5517 0 27.164 0.127308 27.7096 0.381925C28.2552 0.636542 28.6795 0.988155 28.9826 1.43677C29.2979 1.88538 29.4555 2.38855 29.4555 2.94628C29.4555 3.51613 29.2979 4.03143 28.9826 4.49217C28.6795 4.9529 28.2552 5.31664 27.7096 5.58338C27.164 5.838 26.5517 5.9653 25.8727 5.9653ZM22.6718 7.65669H29.0008V28.4261H22.6718V7.65669Z"
                    fill="currentColor"
                  />
                  <path
                    d="M54.728 18.6598H37.5596C37.9112 20.3451 38.8084 21.6545 40.2513 22.5881C41.6941 23.5096 43.5916 23.9703 45.9438 23.9703C47.4957 23.9703 48.9446 23.74 50.2904 23.2792C51.6484 22.8185 52.8851 22.188 54.0006 21.3878V26.2983C52.8487 27.147 51.4301 27.826 49.7448 28.3352C48.0716 28.8323 46.3257 29.0809 44.507 29.0809C41.8517 29.0809 39.5238 28.5898 37.5232 27.6077C35.5227 26.6256 33.9768 25.2495 32.8856 23.4793C31.8065 21.7091 31.2669 19.6782 31.2669 17.3867C31.2669 15.2527 31.758 13.3249 32.7401 11.6032C33.7343 9.88155 35.1589 8.5236 37.014 7.52938C38.8812 6.52304 41.0697 6.01987 43.5795 6.01987C45.968 6.01987 47.9928 6.43816 49.6539 7.27476C51.3271 8.09923 52.588 9.28745 53.4368 10.8394C54.2976 12.3792 54.728 14.2222 54.728 16.3682V18.6598ZM43.725 10.9303C42.0639 10.9303 40.712 11.3304 39.6693 12.1307C38.6266 12.9188 37.9597 13.9797 37.6687 15.3134H49.3811C49.2477 13.9069 48.69 12.8278 47.7079 12.0761C46.7379 11.3123 45.4103 10.9303 43.725 10.9303Z"
                    fill="currentColor"
                  />
                  <path
                    d="M71.7255 6.01987C73.6048 6.01987 75.1992 6.41998 76.5087 7.2202C77.8181 8.0083 78.8123 9.17226 79.4913 10.7121C80.1824 12.2398 80.528 14.1009 80.528 16.2955V28.4261H74.1989V17.6959C74.1989 15.5741 73.7746 13.9918 72.9258 12.9491C72.0771 11.8942 70.7919 11.3668 69.0702 11.3668C67.8456 11.3668 66.8029 11.6214 65.9421 12.1307C65.0934 12.6399 64.4507 13.3613 64.0143 14.2949C63.5899 15.2285 63.3777 16.3137 63.3777 17.5504V28.4261H57.0669V6.91102H63.3413V11.8033C64.1052 9.85124 65.1782 8.40235 66.5604 7.45663C67.9426 6.49879 69.6643 6.01987 71.7255 6.01987Z"
                    fill="currentColor"
                  />
                  <path
                    d="M92.5786 6.01987C94.9672 6.01987 97.0162 6.4321 98.7258 7.25657C100.435 8.08105 101.739 9.29351 102.636 10.894C103.545 12.4944 104 14.4404 104 16.732V28.4261H97.8164V25.5162C97.0768 26.7166 96.0705 27.6259 94.7974 28.2443C93.5365 28.8505 92.0633 29.1536 90.378 29.1536C88.8018 29.1536 87.4196 28.8444 86.2314 28.2261C85.0432 27.6077 84.1217 26.7651 83.467 25.6981C82.8244 24.619 82.5031 23.4126 82.5031 22.0789C82.5031 20.7331 82.8365 19.5327 83.5033 18.4779C84.1823 17.4109 85.1402 16.5804 86.3769 15.9863C87.6257 15.3801 89.0685 15.0769 90.7054 15.0769C93.8699 15.0769 96.2342 16.1075 97.7983 18.1687V17.2957C97.774 15.962 97.4588 14.8405 96.8525 13.9312C96.2463 13.0218 95.4158 12.3428 94.3609 11.8942C93.3182 11.4335 92.1118 11.2031 90.7417 11.2031C87.9652 11.2031 85.5888 12.1549 83.6125 14.0585V8.82065C86.1586 6.95346 89.1474 6.01987 92.5786 6.01987ZM92.8878 25.1161C93.8335 25.1161 94.6762 24.9706 95.4158 24.6796C96.1675 24.3886 96.7555 23.9825 97.1799 23.4611C97.6043 22.9397 97.8164 22.3578 97.8164 21.7152C97.8164 21.0968 97.6164 20.5451 97.2163 20.0602C96.8162 19.563 96.2463 19.1751 95.5067 18.8962C94.7792 18.6173 93.9366 18.4779 92.9787 18.4779C92.0451 18.4779 91.2388 18.6173 90.5599 18.8962C89.8809 19.1751 89.3595 19.563 88.9958 20.0602C88.6442 20.5573 88.4684 21.1271 88.4684 21.7697C88.4684 22.4245 88.6442 23.0064 88.9958 23.5157C89.3474 24.0249 89.8566 24.4189 90.5235 24.6978C91.1903 24.9767 91.9785 25.1161 92.8878 25.1161Z"
                    fill="currentColor"
                  />
                </svg> */}
              </div>
              <div className="nav__siena-logo-white w-embed">
                <img
                  alt=""
                  loading="lazy"
                  src="https://assets-global.website-files.com/6523d3eb03029a11dfdb9582/65241910b87b9be629cfef1e_verb.svg"
                  className="img-full contain"
                />
                {/* <svg
                  width={104}
                  height={30}
                  viewBox="0 0 104 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4211 29.0809C8.50541 29.0809 6.65034 28.8323 4.8559 28.3352C3.07359 27.8381 1.45495 27.1106 0 26.1528V21.2969C1.33371 22.3153 2.87353 23.1034 4.61947 23.6612C6.37754 24.2189 8.14167 24.4978 9.91186 24.4978C11.2456 24.4978 12.2519 24.2977 12.9309 23.8976C13.6099 23.4975 13.9494 22.9458 13.9494 22.2426C13.9494 21.7333 13.7735 21.2908 13.4219 20.9149C13.0824 20.527 12.4156 20.2056 11.4214 19.951L6.67459 18.8234C4.34667 18.2536 2.66741 17.4594 1.63682 16.441C0.618355 15.4225 0.109121 14.1494 0.109121 12.6217C0.109121 11.3123 0.515296 10.1604 1.32764 9.1662C2.15212 8.17198 3.3282 7.40207 4.8559 6.85646C6.39573 6.29873 8.19623 6.01987 10.2574 6.01987C12.1246 6.01987 13.822 6.23811 15.3497 6.67459C16.8774 7.09895 18.193 7.66881 19.2963 8.38416V13.0764C18.1808 12.3125 16.9017 11.7063 15.4589 11.2577C14.016 10.797 12.4823 10.5666 10.8576 10.5666C9.41475 10.5666 8.33566 10.7485 7.62031 11.1122C6.90496 11.4638 6.54729 11.9609 6.54729 12.6035C6.54729 13.137 6.78978 13.5614 7.27476 13.8766C7.77187 14.1918 8.59028 14.4768 9.72999 14.7314L13.9857 15.6589C16.1197 16.0954 17.7383 16.8168 18.8416 17.8232C19.945 18.8295 20.4966 20.242 20.4966 22.0607C20.4966 23.455 20.0965 24.6857 19.2963 25.7527C18.5082 26.8075 17.3564 27.6259 15.8408 28.2079C14.3252 28.7899 12.5187 29.0809 10.4211 29.0809Z"
                    fill="currentColor"
                  />
                  <path
                    d="M25.8727 5.9653C25.1695 5.9653 24.539 5.838 23.9813 5.58338C23.4235 5.31664 22.987 4.9529 22.6718 4.49217C22.3566 4.03143 22.1989 3.51613 22.1989 2.94628C22.1989 2.38855 22.3566 1.88538 22.6718 1.43677C22.9992 0.988155 23.4417 0.636542 23.9994 0.381925C24.5572 0.127308 25.1816 0 25.8727 0C26.5517 0 27.164 0.127308 27.7096 0.381925C28.2552 0.636542 28.6795 0.988155 28.9826 1.43677C29.2979 1.88538 29.4555 2.38855 29.4555 2.94628C29.4555 3.51613 29.2979 4.03143 28.9826 4.49217C28.6795 4.9529 28.2552 5.31664 27.7096 5.58338C27.164 5.838 26.5517 5.9653 25.8727 5.9653ZM22.6718 7.65669H29.0008V28.4261H22.6718V7.65669Z"
                    fill="currentColor"
                  />
                  <path
                    d="M54.728 18.6598H37.5596C37.9112 20.3451 38.8084 21.6545 40.2513 22.5881C41.6941 23.5096 43.5916 23.9703 45.9438 23.9703C47.4957 23.9703 48.9446 23.74 50.2904 23.2792C51.6484 22.8185 52.8851 22.188 54.0006 21.3878V26.2983C52.8487 27.147 51.4301 27.826 49.7448 28.3352C48.0716 28.8323 46.3257 29.0809 44.507 29.0809C41.8517 29.0809 39.5238 28.5898 37.5232 27.6077C35.5227 26.6256 33.9768 25.2495 32.8856 23.4793C31.8065 21.7091 31.2669 19.6782 31.2669 17.3867C31.2669 15.2527 31.758 13.3249 32.7401 11.6032C33.7343 9.88155 35.1589 8.5236 37.014 7.52938C38.8812 6.52304 41.0697 6.01987 43.5795 6.01987C45.968 6.01987 47.9928 6.43816 49.6539 7.27476C51.3271 8.09923 52.588 9.28745 53.4368 10.8394C54.2976 12.3792 54.728 14.2222 54.728 16.3682V18.6598ZM43.725 10.9303C42.0639 10.9303 40.712 11.3304 39.6693 12.1307C38.6266 12.9188 37.9597 13.9797 37.6687 15.3134H49.3811C49.2477 13.9069 48.69 12.8278 47.7079 12.0761C46.7379 11.3123 45.4103 10.9303 43.725 10.9303Z"
                    fill="currentColor"
                  />
                  <path
                    d="M71.7255 6.01987C73.6048 6.01987 75.1992 6.41998 76.5087 7.2202C77.8181 8.0083 78.8123 9.17226 79.4913 10.7121C80.1824 12.2398 80.528 14.1009 80.528 16.2955V28.4261H74.1989V17.6959C74.1989 15.5741 73.7746 13.9918 72.9258 12.9491C72.0771 11.8942 70.7919 11.3668 69.0702 11.3668C67.8456 11.3668 66.8029 11.6214 65.9421 12.1307C65.0934 12.6399 64.4507 13.3613 64.0143 14.2949C63.5899 15.2285 63.3777 16.3137 63.3777 17.5504V28.4261H57.0669V6.91102H63.3413V11.8033C64.1052 9.85124 65.1782 8.40235 66.5604 7.45663C67.9426 6.49879 69.6643 6.01987 71.7255 6.01987Z"
                    fill="currentColor"
                  />
                  <path
                    d="M92.5786 6.01987C94.9672 6.01987 97.0162 6.4321 98.7258 7.25657C100.435 8.08105 101.739 9.29351 102.636 10.894C103.545 12.4944 104 14.4404 104 16.732V28.4261H97.8164V25.5162C97.0768 26.7166 96.0705 27.6259 94.7974 28.2443C93.5365 28.8505 92.0633 29.1536 90.378 29.1536C88.8018 29.1536 87.4196 28.8444 86.2314 28.2261C85.0432 27.6077 84.1217 26.7651 83.467 25.6981C82.8244 24.619 82.5031 23.4126 82.5031 22.0789C82.5031 20.7331 82.8365 19.5327 83.5033 18.4779C84.1823 17.4109 85.1402 16.5804 86.3769 15.9863C87.6257 15.3801 89.0685 15.0769 90.7054 15.0769C93.8699 15.0769 96.2342 16.1075 97.7983 18.1687V17.2957C97.774 15.962 97.4588 14.8405 96.8525 13.9312C96.2463 13.0218 95.4158 12.3428 94.3609 11.8942C93.3182 11.4335 92.1118 11.2031 90.7417 11.2031C87.9652 11.2031 85.5888 12.1549 83.6125 14.0585V8.82065C86.1586 6.95346 89.1474 6.01987 92.5786 6.01987ZM92.8878 25.1161C93.8335 25.1161 94.6762 24.9706 95.4158 24.6796C96.1675 24.3886 96.7555 23.9825 97.1799 23.4611C97.6043 22.9397 97.8164 22.3578 97.8164 21.7152C97.8164 21.0968 97.6164 20.5451 97.2163 20.0602C96.8162 19.563 96.2463 19.1751 95.5067 18.8962C94.7792 18.6173 93.9366 18.4779 92.9787 18.4779C92.0451 18.4779 91.2388 18.6173 90.5599 18.8962C89.8809 19.1751 89.3595 19.563 88.9958 20.0602C88.6442 20.5573 88.4684 21.1271 88.4684 21.7697C88.4684 22.4245 88.6442 23.0064 88.9958 23.5157C89.3474 24.0249 89.8566 24.4189 90.5235 24.6978C91.1903 24.9767 91.9785 25.1161 92.8878 25.1161Z"
                    fill="currentColor"
                  />
                </svg> */}
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
                      <div className="p-tiny">Your new best teammate.</div>
                    </div>
                    <h2 className="h3 is--bgtext-white text-balanced">
                      Reasons and takes action with human accuracy
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
                          Understands context, while remembering birthdays
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
                  <div
                    className="integrations__text-wrap"
                    style={{ width: "100%", marginTop: "200px" }}
                  >
                    <div className="pill">
                      <div className="pill__circle" />
                      <div className="p-tiny">Your CSAT secret weapon.</div>
                    </div>
                    <h2 className="h3 is--bgtext-white text-balanced">
                      Unify your brand voice across all channels
                    </h2>
                    <div className="sb-xxl" />
                    <ul role="list" className="list">
                      <li className="list-item">
                        <p className="p-body">
                          Craft channel-specific AI&nbsp;Personas with ease
                        </p>
                      </li>
                      <li className="list-item">
                        <p className="p-body">
                          Personalize at scale with brand precision
                        </p>
                      </li>
                      <li className="list-item last">
                        <p className="p-body">
                          Amplify a consistent brand voice everywhere
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
              style={{marginTop:"100px"}}
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
                <div className="product-one__visual card-bg product-one__visual--mobile">
                  <div className="product-one__top">
                    <div className="emoji-item">
                      <img
                        src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/65251308d8f820c8bf87763e_emoji%20with%20glasses.svg"
                        loading="lazy"
                        alt=""
                        className="emoji-img"
                      />
                    </div>
                    <div className="product-one__top-text">
                      <div className="p-body bold">Sami</div>
                      <div className="text-icon__wrap">
                        <div className="p-small is--bgtext-gray">
                          Social Media Gal
                          <span className="fa-icon" />
                        </div>
                        <div className="icon margin-left">
                          <img
                            src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/6544e2144e499de1d6ccda53_chat%20icon.svg"
                            loading="lazy"
                            alt=""
                            className="img-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-one__middle product-one__middle--mobile">
                    <div>
                      <div className="product__chat-item">
                        <div className="avatar-item right-margin o-hidden is--bg-darker">
                          <img
                            src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/65451a065a5f6eae7e2f3aad_chat%20person-8.png"
                            loading="lazy"
                            alt=""
                            className="img-full"
                          />
                        </div>
                        <div className="chat translucent right">
                          <p className="p-body is--bgtext-white">
                            I want a replacement for my bag and a refund on the
                            boots.
                          </p>
                        </div>
                      </div>
                      <div className="product__chat-item">
                        <div className="chat siena left translucent">
                          <p className="p-body is--bgtext-white">
                            Hey Nora 👋 I got you! Do you want the same color
                            for the bag? I can also exchange the boots. What do
                            you think? 😊
                          </p>
                        </div>
                        <div className="emoji-item left-margin">
                          <img
                            src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/65251308d8f820c8bf87763e_emoji%20with%20glasses.svg"
                            loading="lazy"
                            alt=""
                            className="emoji-img"
                          />
                        </div>
                      </div>
                      <div className="product__chat-item">
                        <div className="avatar-item right-margin o-hidden is--bg-darker">
                          <img
                            src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/65451a065a5f6eae7e2f3aad_chat%20person-8.png"
                            loading="lazy"
                            alt=""
                            className="img-full"
                          />
                        </div>
                        <div className="chat translucent right">
                          <p className="p-body is--bgtext-white">
                            I'll have just the bag replaced as it arrived
                            scratched. I will return the boots for a refund.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-one__bottom product-one__bottom--mobile">
                    <div className="p-small is--bgtext-gray">
                      Type a reply...
                    </div>
                    <div className="product-one__bottom-icon w-embed">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={22}
                        height={19}
                        viewBox="0 0 22 19"
                        fill="none"
                      >
                        <path
                          d="M2.91372 0.593595L20.1793 8.0936C21.4293 8.64047 21.4293 10.3983 20.1793 10.9452L2.91372 18.4452C1.58559 19.0311 0.218403 17.5467 0.921528 16.2577L3.6559 11.2186C3.81215 10.9061 4.12465 10.6717 4.51528 10.6327L11.3903 9.77328C11.5075 9.77328 11.6247 9.65609 11.6247 9.49984C11.6247 9.38266 11.5075 9.26547 11.3903 9.26547L4.51528 8.4061C4.12465 8.32797 3.81215 8.13266 3.6559 7.82016L0.921528 2.7811C0.218403 1.49203 1.58559 0.00765751 2.91372 0.593595Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="blur__cards non-clickable" />
                  <div className="highlight-line__horizontal" />
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
        <section mode="dark" className="section__product">
          <div className="padding-section__medium">
            <div className="container-small">
              <div className="product-two__parent">
                <div className="product__text-wrap">
                  <div className="pill">
                    <div className="pill__circle" />
                    <div className="p-tiny">Your best teammate.</div>
                  </div>
                  <h2 className="h2 is--bgtext-white">
                    An AI that's actually embedded in your team
                  </h2>
                  <div className="sb-xxl" />
                  <ul role="list" className="list">
                    <li className="list-item">
                      <p className="p-body">
                        Understands context, while remembering birthdays
                      </p>
                    </li>
                    <li className="list-item">
                      <p className="p-body">
                        Flawlessly juggles multiple intents &amp; complex tasks
                      </p>
                    </li>
                    <li className="list-item last">
                      <p className="p-body">
                        Smart routing decisions that empower teams
                      </p>
                    </li>
                  </ul>
                  <div className="sb-xxl" />
                </div>
                <div
                  data-w-id="29069347-451a-c306-63b1-e35e51c4a615"
                  className="product-two__visual-wrap"
                >
                  <div className="product-two__left">
                    <div className="product-two__left-item">
                      <div className="avatar-item right-margin mobile-small">
                        <div className="o-hidden br-xxxlarge">
                          <img
                            src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/65451a06ef2cc4c17b55fcea_chat%20person-4.png"
                            loading="lazy"
                            alt=""
                            className="img-full"
                          />
                        </div>
                        <div className="product-two__social-icon">
                          <img
                            src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/65252ec5f7578914479b7d35_instagram.svg"
                            loading="lazy"
                            alt=""
                            className="img-full"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="product-two__left-item active">
                      <div className="avatar-item right-margin mobile-small">
                        <div className="o-hidden br-xxxlarge">
                          <img
                            src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/65451a063890bb268047ed53_chat%20person-7.png"
                            loading="lazy"
                            alt=""
                            className="img-full"
                          />
                        </div>
                        <div className="product-two__social-icon">
                          <img
                            src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/65252ec597aa991cb15af165_whatsapp.svg"
                            loading="lazy"
                            alt=""
                            className="img-full"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="product-two__left-item">
                      <div className="avatar-item right-margin mobile-small">
                        <div className="o-hidden br-xxxlarge">
                          <img
                            src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/6538ed32c1ed6a13a9f20ed9_robert%20avatar.png"
                            loading="lazy"
                            alt=""
                            className="img-full"
                          />
                        </div>
                        <div className="product-two__social-icon">
                          <img
                            src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/65252ec562398601d3b97c64_gmail.svg"
                            loading="lazy"
                            alt=""
                            className="img-full"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="product-two__left-item">
                      <div className="avatar-item right-margin mobile-small">
                        <div className="o-hidden br-xxxlarge">
                          <img
                            src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/65451a0666a3dc0678f4193e_chat%20person-3.png"
                            loading="lazy"
                            alt=""
                            className="img-full"
                          />
                        </div>
                        <div className="product-two__social-icon">
                          <img
                            src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/65252ec5d8f820c8bfa9234b_messager.svg"
                            loading="lazy"
                            alt=""
                            className="img-full"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="product-two__left-item">
                      <div className="avatar-item right-margin mobile-small">
                        <div className="o-hidden br-xxxlarge">
                          <img
                            src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/65451a06e1541d814f4777d2_chat%20person.png"
                            loading="lazy"
                            alt=""
                            className="img-full"
                          />
                        </div>
                        <div className="product-two__social-icon">
                          <img
                            src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/65252ec5f7578914479b7d35_instagram.svg"
                            loading="lazy"
                            alt=""
                            className="img-full"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="product-two__left-item">
                      <div className="avatar-item right-margin mobile-small">
                        <div className="o-hidden br-xxxlarge">
                          <img
                            src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/6538ec9b35f7ff77d16e19b0_elizabeth.png"
                            loading="lazy"
                            alt=""
                            className="img-full"
                          />
                        </div>
                        <div className="product-two__social-icon">
                          <img
                            src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/65252ec597aa991cb15af165_whatsapp.svg"
                            loading="lazy"
                            alt=""
                            className="img-full"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="product-two__left-item">
                      <div className="avatar-item right-margin mobile-small">
                        <div className="o-hidden br-xxxlarge">
                          <img
                            src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/65451a06e168d5da13f10ce8_chat%20person-1.png"
                            loading="lazy"
                            alt=""
                            className="img-full"
                          />
                        </div>
                        <div className="product-two__social-icon">
                          <img
                            src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/65252ec562398601d3b97c64_gmail.svg"
                            loading="lazy"
                            alt=""
                            className="img-full"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="product-two__left-item last">
                      <div className="avatar-item right-margin mobile-small">
                        <div className="o-hidden br-xxxlarge">
                          <img
                            src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/65451a06bfac94375c58568d_chat%20person-5.png"
                            loading="lazy"
                            alt=""
                            className="img-full"
                          />
                        </div>
                        <div className="product-two__social-icon">
                          <img
                            src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/65252ec5d8f820c8bfa9234b_messager.svg"
                            loading="lazy"
                            alt=""
                            className="img-full"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="product-two__left-item">
                      <div className="avatar-item right-margin mobile-small">
                        <div className="o-hidden br-xxxlarge">
                          <img
                            src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/65451a065a5f6eae7e2f3aad_chat%20person-8.png"
                            loading="lazy"
                            alt=""
                            className="img-full"
                          />
                        </div>
                        <div className="product-two__social-icon">
                          <img
                            src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/65252ec5f7578914479b7d35_instagram.svg"
                            loading="lazy"
                            alt=""
                            className="img-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-two__line" />
                  <div className="product-two__right">
                    <div
                      data-w-id="29069347-451a-c306-63b1-e35e51c4a64f"
                      className="product-two__chat-item"
                    >
                      <div className="chat siena left smaller">
                        <p className="p-body is--bgtext-white">
                          Hey. 👋 Happy to help you with the return process. I
                          can also exchange it with a bigger size. 😍
                        </p>
                      </div>
                      <div className="emoji-item left-margin">
                        <img
                          src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/653fb947a7e15cd4a75c85ca_emoji%208.png"
                          loading="lazy"
                          alt=""
                          className="emoji-img"
                        />
                      </div>
                    </div>
                    <div
                      data-w-id="29069347-451a-c306-63b1-e35e51c4a655"
                      className="product-two__attempt"
                    >
                      <div className="product-two__attempt-icon">
                        <img
                          src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/6525385c269a78eed556117c_shopify.png"
                          loading="lazy"
                          alt=""
                          className="img-full"
                        />
                      </div>
                      <div className="p-small">Send replacement</div>
                    </div>
                    <div className="sb-xxxxxl" />
                    <div
                      data-w-id="29069347-451a-c306-63b1-e35e51c4a65b"
                      className="product-two__chat-item"
                    >
                      <div className="avatar-item right-margin o-hidden is--bg-darker">
                        <img
                          src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/65451a063890bb268047ed53_chat%20person-7.png"
                          loading="lazy"
                          alt=""
                          className="img-full"
                        />
                      </div>
                      <div className="chat translucent right smaller">
                        <p className="p-body is--bgtext-white">
                          Perfect! I will get an M size.
                        </p>
                      </div>
                      <div
                        data-w-id="29069347-451a-c306-63b1-e35e51c4a661"
                        className="product-two__emoji"
                      >
                        <img
                          src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/653fc007e51a4c9ba2eaf237_party%20emoji.png"
                          loading="lazy"
                          alt=""
                          className="img-full"
                        />
                      </div>
                    </div>
                    <div
                      data-w-id="29069347-451a-c306-63b1-e35e51c4a663"
                      className="product-two__attempt"
                    >
                      <div className="p-small">Routed to team</div>
                      <div className="product-two__attempt-icon">
                        <img
                          src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/6525385c8f0cb2e1aeb56644_routed%20to%20team.svg"
                          loading="lazy"
                          alt=""
                          className="img-full"
                        />
                      </div>
                    </div>
                    <div className="sb-m" />
                    <div
                      data-w-id="29069347-451a-c306-63b1-e35e51c4a669"
                      className="product-two__attempt"
                    >
                      <div className="p-small">Ticket closed</div>
                      <div className="product-two__attempt-icon">
                        <img
                          src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/6525385cfb080a7f700055b6_ticket%20closed.svg"
                          loading="lazy"
                          alt=""
                          className="img-full"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="blur__cards non-clickable" />
                  <div className="highlight-line__horizontal product-two" />
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
        <section mode="dark" className="section__product">
          <div className="padding-section__medium">
            <div className="container-small">
              <div className="product-three__parent">
                <div className="product__text-wrap">
                  <div className="pill">
                    <div className="pill__circle" />
                    <div className="p-tiny">Your CSAT secret weapon.</div>
                  </div>
                  <h2 className="h2 text-balanced is--bgtext-white">
                    Breathes life into your brand using AI Personas
                  </h2>
                  <div className="sb-xxl" />
                  <ul role="list" className="list">
                    <li className="list-item">
                      <p className="p-body">
                        Craft channel-specific personas with ease
                      </p>
                    </li>
                    <li className="list-item">
                      <p className="p-body">
                        A true brand chameleon, fitting every personality
                      </p>
                    </li>
                    <li className="list-item last">
                      <p className="p-body">
                        Infuse empathy and human-touch into every interaction
                      </p>
                    </li>
                  </ul>
                  <div className="sb-xxl" />
                </div>
                <div className="product-three__visual-wrap">
                  <div
                    fs-cmstabs-element="tabs-3"
                    data-current="Tab 1"
                    data-easing="ease"
                    data-duration-in={300}
                    data-duration-out={100}
                    className="personas__tabs w-tabs"
                  >
                    <div
                      data-w-id="339a3c2d-2de3-524a-132e-8b3d7f5e3dd0"
                      className="personas__tab-menu w-tab-menu"
                    >
                      <a
                        data-w-tab="Tab 1"
                        className="persona__tab-link w-inline-block w-tab-link w--current"
                      >
                        <div>Tab 1</div>
                        <div className="highlight-line__horizontal product-three" />
                      </a>
                      <a
                        data-w-tab="Tab 2"
                        className="persona__tab-link w-inline-block w-tab-link"
                      >
                        <div className="persona-text">Tab 2</div>
                        <div className="circle-progress__wrap">
                          <div className="circle-progress__corner">
                            <div className="circle-progress__line four" />
                            <div className="corner-overlay four" />
                          </div>
                          <div className="circle-progress__corner top-right">
                            <div className="circle-progress__line one" />
                            <div className="corner-overlay one" />
                          </div>
                          <div className="circle-progress__corner bottom-right">
                            <div className="circle-progress__line two" />
                            <div className="corner-overlay two" />
                          </div>
                          <div className="circle-progress__corner bottom-left">
                            <div className="circle-progress__line three" />
                            <div className="corner-overlay three" />
                          </div>
                        </div>
                      </a>
                      <a
                        data-w-tab="Tab 3"
                        className="persona__tab-link w-inline-block w-tab-link"
                      >
                        <div>Tab 3</div>
                      </a>
                    </div>
                    <div className="personas__tab-content w-tab-content">
                      <div
                        data-w-tab="Tab 1"
                        className="personas__tab-pane w-tab-pane w--tab-active"
                      />
                      <div
                        data-w-tab="Tab 2"
                        className="personas__tab-pane w-tab-pane"
                      />
                      <div
                        data-w-tab="Tab 3"
                        className="personas__tab-pane w-tab-pane"
                      />
                    </div>
                  </div>
                  <div
                    data-w-id="339a3c2d-2de3-524a-132e-8b3d7f5e3dec"
                    className="tab__bg-element"
                  >
                    <div className="persona__img" />
                    <div className="text-invisible">Tabs11</div>
                  </div>
                  <div className="persona-tabs__lines">
                    <img
                      src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652690e5dc5ceebc369711ad_persona%20line.svg"
                      loading="lazy"
                      alt=""
                      className="img-full"
                    />
                  </div>
                  <div className="cms-tabs w-dyn-list">
                    <div
                      fs-cmstabs-element="list-3"
                      role="list"
                      className="w-dyn-items"
                    >
                      <div role="listitem" className="w-dyn-item">
                        <div className="persona__nest-item">
                          <a
                            fs-cmstabs-element="tab-link"
                            href="#"
                            className="persona__tab-link-nested w-inline-block"
                          >
                            <div className="persona__img">
                              <img
                                alt=""
                                loading="lazy"
                                src="https://assets-global.website-files.com/6523d3eb03029a11dfdb9582/652554dc7d2bb7e3e8712609_mabel.svg"
                                className="img-full"
                              />
                            </div>
                            <div className="persona-text">Mabel</div>
                            <div className="circle-progress__wrap">
                              <div className="circle-progress__corner">
                                <div className="circle-progress__line four" />
                                <div className="corner-overlay four" />
                              </div>
                              <div className="circle-progress__corner top-right">
                                <div className="circle-progress__line one" />
                                <div className="corner-overlay one" />
                              </div>
                              <div className="circle-progress__corner bottom-right">
                                <div className="circle-progress__line two" />
                                <div className="corner-overlay two" />
                              </div>
                              <div className="circle-progress__corner bottom-left">
                                <div className="circle-progress__line three" />
                                <div className="corner-overlay three" />
                              </div>
                            </div>
                          </a>
                          <div className="w-richtext">
                            <p>
                              Hi Sammy 👋 Making our Mushroom Latte is easier
                              than you might think though! 😉 Just scoop the
                              powder into a cup or dose mug, add water to cover
                              the powder and mix, then add your preferred milk -
                              vegan alternatives like Oatly work great. Stir it
                              all together, then savor your newfound elevated
                              feeling.
                            </p>
                            <p>☕️</p>
                            <p>‍</p>
                            <p>Best,</p>
                            <p>Mable at Everyday Dose</p>
                          </div>
                          <div
                            fs-cmsfilter-field="persona-name"
                            className="persona-name__hidden"
                          >
                            Mabel
                          </div>
                        </div>
                      </div>
                      <div role="listitem" className="w-dyn-item">
                        <div className="persona__nest-item">
                          <a
                            fs-cmstabs-element="tab-link"
                            href="#"
                            className="persona__tab-link-nested w-inline-block"
                          >
                            <div className="persona__img">
                              <img
                                alt=""
                                loading="lazy"
                                src="https://assets-global.website-files.com/6523d3eb03029a11dfdb9582/652554e9588958764566e2c2_yogi.svg"
                                className="img-full"
                              />
                            </div>
                            <div className="persona-text">Yogi</div>
                            <div className="circle-progress__wrap">
                              <div className="circle-progress__corner">
                                <div className="circle-progress__line four" />
                                <div className="corner-overlay four" />
                              </div>
                              <div className="circle-progress__corner top-right">
                                <div className="circle-progress__line one" />
                                <div className="corner-overlay one" />
                              </div>
                              <div className="circle-progress__corner bottom-right">
                                <div className="circle-progress__line two" />
                                <div className="corner-overlay two" />
                              </div>
                              <div className="circle-progress__corner bottom-left">
                                <div className="circle-progress__line three" />
                                <div className="corner-overlay three" />
                              </div>
                            </div>
                          </a>
                          <div className="w-richtext">
                            <p>Hi Lisa,</p>
                            <p>
                              For hot yoga, I’d recommend pairing your practice
                              with a full yoga mat towel, which is designed to
                              absorb sweat and prevent any pooling of sweat on
                              the mat, making your practice more
                              comfortable.🧘♀️🔥 ♂️
                            </p>
                            <p>‍</p>
                            <p>Namaste,</p>
                            <p>Yogi, Customer Care at YF</p>
                          </div>
                          <div
                            fs-cmsfilter-field="persona-name"
                            className="persona-name__hidden"
                          >
                            Yogi
                          </div>
                        </div>
                      </div>
                      <div role="listitem" className="w-dyn-item">
                        <div className="persona__nest-item">
                          <a
                            fs-cmstabs-element="tab-link"
                            href="#"
                            className="persona__tab-link-nested w-inline-block"
                          >
                            <div className="persona__img">
                              <img
                                alt=""
                                loading="lazy"
                                src="https://assets-global.website-files.com/6523d3eb03029a11dfdb9582/652555207bc6077c6b4118fc_jessie.svg"
                                className="img-full"
                              />
                            </div>
                            <div className="persona-text">Jessie</div>
                            <div className="circle-progress__wrap">
                              <div className="circle-progress__corner">
                                <div className="circle-progress__line four" />
                                <div className="corner-overlay four" />
                              </div>
                              <div className="circle-progress__corner top-right">
                                <div className="circle-progress__line one" />
                                <div className="corner-overlay one" />
                              </div>
                              <div className="circle-progress__corner bottom-right">
                                <div className="circle-progress__line two" />
                                <div className="corner-overlay two" />
                              </div>
                              <div className="circle-progress__corner bottom-left">
                                <div className="circle-progress__line three" />
                                <div className="corner-overlay three" />
                              </div>
                            </div>
                          </a>
                          <div className="w-richtext">
                            <p>
                              Hey Kyle, We love the idea of making your
                              Swoverall even more unique to you. We offer custom
                              embroidery or screen printing for bulk orders on a
                              case-by-case basis. Let's create something special
                              together! 🎉👕🎨
                            </p>
                            <p>‍</p>
                            <p>Cheers,</p>
                            <p>Jessie at Waves</p>
                          </div>
                          <div
                            fs-cmsfilter-field="persona-name"
                            className="persona-name__hidden"
                          >
                            Jessie
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
            <div className="sb-xxxxxl" />
            <div
              data-w-id="97f6a388-74f7-0bcf-eb2a-780d1fd0e419"
              className="attributes__parent"
            >
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
                      <div className="h4 text-center">Customer happiness</div>
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
        <section mode="dark" className="section__integrations">
          <div className="padding-section__medium">
            <div className="container-small">
              <div className="integrations__parent">
                <div className="integrations__text-wrap">
                  <div className="pill">
                    <div className="pill__circle" />
                    <div className="p-tiny">
                      Commerce integrations for Developers.
                    </div>
                  </div>
                  <h2 className="h3 is--bgtext-white text-balanced">
                    Integrate with your existing platforms
                  </h2>
                  <div className="sb-xxl desktop-tablet" />
                  <div className="sb-l mobile" />
                  <p className="p-body text-balanced">
                    TOGETHERLY will be providing APIs for easy integration of
                    our products with your own platforms.
                  </p>
                  <div className="sb-xxl desktop" />
                  <div className="sb-xxxl tablet-below" />
                  <div className="product__button-wrap desktop">
                    <a href="/book-a-demo" className="button w-inline-block">
                      <div className="button__icon-text-wrapper">
                        <div className="btn-text">Explore more</div>
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
                <div className="integrations__embed">
                  <div className="integrations__embed-child w-embed">
                    {/* <svg
                      className="integration-svg"
                      fill="none"
                      viewBox="0 0 624 624"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity=".7" strokeWidth="2.149">
                        <path
                          d="m622 312c0 171.21-138.79 310-310 310s-310-138.79-310-310 138.79-310 310-310 310 138.79 310 310z"
                          stroke="url(#b)"
                        />
                        <path
                          className="circle-big"
                          d="m622 312c0 171.21-138.79 310-310 310s-310-138.79-310-310 138.79-310 310-310 310 138.79 310 310z"
                          stroke="url(#a)"
                        />
                      </g>
                      <g opacity=".7" strokeWidth="2.149">
                        <path
                          className="circle-medium"
                          d="m544.66 312c0 128.49-104.16 232.66-232.66 232.66s-232.65-104.16-232.65-232.66 104.16-232.65 232.65-232.65 232.66 104.16 232.66 232.65z"
                          stroke="url(#b)"
                        />
                        <path
                          d="m544.66 312c0 128.49-104.16 232.66-232.66 232.66s-232.65-104.16-232.65-232.66 104.16-232.65 232.65-232.65 232.66 104.16 232.66 232.65z"
                          stroke="url(#a)"
                        />
                      </g>
                      <g opacity=".7" strokeWidth="2.149">
                        <path
                          className="circle-small"
                          d="m477.21 312c0 91.243-73.967 165.21-165.21 165.21s-165.21-73.967-165.21-165.21 73.967-165.21 165.21-165.21 165.21 73.966 165.21 165.21z"
                          stroke="url(#b)"
                        />
                        <path
                          d="m477.21 312c0 91.243-73.967 165.21-165.21 165.21s-165.21-73.967-165.21-165.21 73.967-165.21 165.21-165.21 165.21 73.966 165.21 165.21z"
                          stroke="url(#a)"
                        />
                      </g>
                      <g opacity=".7" strokeWidth="2.149">
                        <path
                          d="m415.33 312c0 57.07-46.264 103.33-103.33 103.33s-103.33-46.263-103.33-103.33c0-57.069 46.264-103.33 103.33-103.33s103.33 46.264 103.33 103.33z"
                          stroke="url(#b)"
                        />
                        <path
                          d="m415.33 312c0 57.07-46.264 103.33-103.33 103.33s-103.33-46.263-103.33-103.33c0-57.069 46.264-103.33 103.33-103.33s103.33 46.264 103.33 103.33z"
                          stroke="url(#a)"
                        />
                      </g>
                      <g opacity=".7" strokeWidth="2.149">
                        <path
                          d="m360.26 312c0 26.655-21.609 48.264-48.264 48.264s-48.263-21.609-48.263-48.264 21.608-48.263 48.263-48.263 48.264 21.608 48.264 48.263z"
                          stroke="url(#b)"
                        />
                        <path
                          d="m360.26 312c0 26.655-21.609 48.264-48.264 48.264s-48.263-21.609-48.263-48.264 21.608-48.263 48.263-48.263 48.264 21.608 48.264 48.263z"
                          stroke="url(#a)"
                        />
                      </g>
                      <g className="integration-logo">
                        <path
                          d="m287.09 321.07c-1.148 0-2.259-0.156-3.334-0.467-1.068-0.311-2.037-0.766-2.909-1.365v-3.037c0.799 0.637 1.721 1.13 2.767 1.479 1.054 0.348 2.11 0.523 3.171 0.523 0.799 0 1.402-0.125 1.808-0.376 0.407-0.25 0.611-0.595 0.611-1.035 0-0.318-0.106-0.595-0.316-0.83-0.204-0.243-0.603-0.444-1.199-0.603l-2.844-0.705c-1.394-0.357-2.4-0.854-3.018-1.491-0.61-0.637-0.915-1.433-0.915-2.388 0-0.82 0.244-1.54 0.73-2.162 0.494-0.622 1.199-1.103 2.114-1.445 0.922-0.348 2.001-0.523 3.236-0.523 1.118 0 2.135 0.137 3.051 0.41 0.915 0.265 1.703 0.622 2.364 1.069v2.935c-0.668-0.478-1.435-0.857-2.299-1.138-0.864-0.288-1.783-0.432-2.757-0.432-0.864 0-1.51 0.114-1.939 0.341-0.429 0.22-0.643 0.531-0.643 0.933 0 0.334 0.145 0.599 0.436 0.796 0.298 0.198 0.788 0.376 1.471 0.535l2.549 0.58c1.279 0.273 2.248 0.725 2.909 1.354s0.992 1.513 0.992 2.651c0 0.872-0.24 1.641-0.719 2.309-0.472 0.66-1.162 1.172-2.07 1.536s-1.99 0.546-3.247 0.546z"
                          fill="#fff"
                        />
                        <path
                          d="m296.35 306.62c-0.422 0-0.799-0.08-1.134-0.239-0.334-0.167-0.595-0.394-0.784-0.682-0.189-0.289-0.283-0.611-0.283-0.967 0-0.349 0.094-0.664 0.283-0.945 0.196-0.28 0.461-0.5 0.795-0.659 0.335-0.16 0.709-0.239 1.123-0.239 0.406 0 0.773 0.079 1.1 0.239 0.327 0.159 0.581 0.379 0.763 0.659 0.189 0.281 0.283 0.596 0.283 0.945 0 0.356-0.094 0.678-0.283 0.967-0.182 0.288-0.436 0.515-0.763 0.682-0.327 0.159-0.694 0.239-1.1 0.239zm-1.918 1.058h3.792v12.991h-3.792v-12.991z"
                          fill="#fff"
                        />
                        <path
                          d="m313.63 314.56h-10.285c0.211 1.054 0.748 1.873 1.612 2.457 0.865 0.577 2.002 0.865 3.411 0.865 0.929 0 1.797-0.144 2.604-0.432 0.813-0.288 1.554-0.683 2.222-1.183v3.071c-0.69 0.531-1.54 0.956-2.549 1.274-1.003 0.311-2.048 0.467-3.138 0.467-1.591 0-2.985-0.308-4.184-0.922-1.198-0.614-2.124-1.475-2.778-2.582-0.647-1.107-0.97-2.378-0.97-3.811 0-1.335 0.294-2.541 0.883-3.617 0.595-1.077 1.449-1.927 2.56-2.549 1.119-0.629 2.43-0.944 3.933-0.944 1.431 0 2.644 0.262 3.639 0.785 1.003 0.516 1.758 1.259 2.267 2.23 0.515 0.963 0.773 2.116 0.773 3.458v1.433zm-6.592-4.834c-0.995 0-1.805 0.25-2.429 0.75-0.625 0.493-1.024 1.157-1.199 1.991h7.017c-0.08-0.88-0.414-1.555-1.002-2.025-0.582-0.478-1.377-0.716-2.387-0.716z"
                          fill="#fff"
                        />
                        <path
                          d="m323.82 306.65c1.126 0 2.081 0.25 2.865 0.751 0.785 0.493 1.38 1.221 1.787 2.184 0.414 0.956 0.621 2.12 0.621 3.492v7.588h-3.791v-6.712c0-1.327-0.255-2.316-0.763-2.969-0.508-0.659-1.278-0.989-2.31-0.989-0.733 0-1.358 0.159-1.874 0.477-0.508 0.319-0.893 0.77-1.155 1.354-0.254 0.584-0.381 1.263-0.381 2.036v6.803h-3.781v-13.457h3.759v3.06c0.458-1.221 1.101-2.128 1.929-2.719 0.828-0.599 1.859-0.899 3.094-0.899z"
                          fill="#fff"
                        />
                        <path
                          d="m336.31 306.65c1.43 0 2.658 0.258 3.682 0.774 1.024 0.515 1.805 1.274 2.343 2.275 0.544 1.001 0.817 2.218 0.817 3.651v7.315h-3.705v-1.82c-0.443 0.751-1.046 1.32-1.808 1.706-0.756 0.379-1.638 0.569-2.648 0.569-0.944 0-1.772-0.193-2.484-0.58s-1.264-0.914-1.656-1.581c-0.385-0.675-0.577-1.43-0.577-2.264 0-0.842 0.199-1.593 0.599-2.252 0.407-0.668 0.98-1.187 1.721-1.559 0.748-0.379 1.613-0.569 2.593-0.569 1.896 0 3.313 0.645 4.25 1.934v-0.546c-0.015-0.834-0.204-1.536-0.567-2.104-0.363-0.569-0.861-0.994-1.493-1.274-0.624-0.289-1.347-0.433-2.168-0.433-1.663 0-3.087 0.596-4.271 1.786v-3.276c1.525-1.168 3.316-1.752 5.372-1.752zm0.185 11.945c0.566 0 1.071-0.091 1.514-0.273 0.451-0.182 0.803-0.436 1.057-0.763 0.254-0.326 0.381-0.69 0.381-1.092 0-0.386-0.119-0.731-0.359-1.035-0.24-0.311-0.581-0.553-1.024-0.728-0.436-0.174-0.941-0.261-1.515-0.261-0.559 0-1.042 0.087-1.449 0.261-0.407 0.175-0.719 0.417-0.937 0.728-0.21 0.311-0.316 0.668-0.316 1.07 0 0.409 0.106 0.773 0.316 1.092 0.211 0.318 0.516 0.565 0.915 0.739 0.4 0.174 0.872 0.262 1.417 0.262z"
                          fill="#fff"
                        />
                      </g>
                      <defs>
                        <radialGradient
                          id="b"
                          cx={0}
                          cy={0}
                          r={1}
                          gradientTransform="translate(235.02 293.57) rotate(-21.898) scale(242.13 263.89)"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#DBFF1D" offset=".10938" />
                          <stop stopColor="#DBFF1D" offset=".32812" />
                          <stop stopColor="#DBFF1D" offset=".48438" />
                          <stop stopColor="#FE7DC2" offset=".82292" />
                        </radialGradient>
                        <radialGradient
                          id="a"
                          cx={0}
                          cy={0}
                          r={1}
                          gradientTransform="translate(312.54 312) rotate(90) scale(310.54 393.11)"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopOpacity={0} offset={0} />
                          <stop stopOpacity=".62" offset=".52083" />
                          <stop stopOpacity=".87" offset={1} />
                        </radialGradient>
                      </defs>
                    </svg> */}

                    <img
                      src="https://cdni.iconscout.com/illustration/premium/thumb/api-integration-6853668-5629019.png?f=webp"
                      alt=""
                    />
                  </div>
                  <div
                    data-w-id="1dc7dfeb-f35d-7e29-0ad4-634fb304a498"
                    className="animation-container"
                  >
                    <div className="outer-wrapper">
                      <img
                        src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/653a62b832389852cbdbbcf0_outer%20circle.svg"
                        loading="lazy"
                        alt=""
                        className="outercircle"
                      />
                      <img
                        src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/653249a835e8b66bfaa359bd_gorgias-min.jpg"
                        loading="lazy"
                        alt=""
                        className="companylogo-outer gorgias"
                      />
                      <img
                        src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/653249a835e8b66bfaa359bb_skio-min.jpg"
                        loading="lazy"
                        alt=""
                        className="companylogo-outer skio"
                      />
                      <img
                        src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/653249a835e8b66bfaa359c1_smiley-min.jpg"
                        loading="lazy"
                        alt=""
                        className="companylogo-outer smiley"
                      />
                      <img
                        src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/653249a835e8b66bfaa359c3_ordergroove-min.jpg"
                        loading="lazy"
                        alt=""
                        className="companylogo-outer ordergroove"
                      />
                      <img
                        src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/653249a835e8b66bfaa359bf_r-min.jpg"
                        loading="lazy"
                        alt=""
                        className="companylogo-outer r"
                      />
                      <img
                        src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/653249a835e8b66bfaa359b9_heart-min.jpg"
                        loading="lazy"
                        alt=""
                        className="companylogo-outer heart"
                      />
                    </div>
                    <div className="main-logo-wrapper">
                      <div className="main-logo-background">
                        <div className="main-logo-embed w-embed">
                          <svg
                            width={64}
                            height={20}
                            viewBox="0 0 64 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.09093 18.9652C5.94329 18.9652 4.83196 18.8097 3.75696 18.4988C2.68921 18.1878 1.71953 17.7328 0.8479 17.1337V14.0964C1.64689 14.7334 2.56936 15.2264 3.61532 15.5752C4.66853 15.9241 5.72538 16.0985 6.78586 16.0985C7.58485 16.0985 8.18773 15.9734 8.59449 15.7231C9.00125 15.4728 9.20463 15.1278 9.20463 14.6879C9.20463 14.3694 9.0993 14.0926 8.88866 13.8575C8.68528 13.6148 8.28579 13.4138 7.69017 13.2546L4.84649 12.5493C3.45189 12.1928 2.44588 11.6961 1.82848 11.059C1.21834 10.422 0.913272 9.62571 0.913272 8.67015C0.913272 7.85109 1.1566 7.13063 1.64326 6.50876C2.13718 5.88688 2.84175 5.40531 3.75696 5.06404C4.67943 4.71518 5.75807 4.54076 6.99287 4.54076C8.11146 4.54076 9.12836 4.67727 10.0436 4.95028C10.9588 5.21572 11.7469 5.57216 12.4079 6.0196V8.95454C11.7396 8.47676 10.9733 8.09757 10.1089 7.81697C9.24458 7.52878 8.32574 7.38469 7.35242 7.38469C6.48805 7.38469 5.8416 7.49845 5.41305 7.72596C4.9845 7.94589 4.77022 8.25683 4.77022 8.65877C4.77022 8.99246 4.91549 9.25789 5.20604 9.45507C5.50384 9.65225 5.99413 9.83047 6.67691 9.98973L9.22642 10.5699C10.5048 10.8429 11.4745 11.2941 12.1355 11.9236C12.7965 12.5531 13.1269 13.4366 13.1269 14.5742C13.1269 15.4463 12.8873 16.216 12.4079 16.8834C11.9357 17.5432 11.2457 18.0551 10.3377 18.4191C9.4298 18.7832 8.34753 18.9652 7.09093 18.9652Z"
                              fill="currentColor"
                            />
                            <path
                              d="M16.3476 4.50663C15.9263 4.50663 15.5486 4.427 15.2145 4.26774C14.8804 4.1009 14.6189 3.87338 14.43 3.5852C14.2412 3.29701 14.1468 2.9747 14.1468 2.61826C14.1468 2.2694 14.2412 1.95467 14.43 1.67407C14.6261 1.39347 14.8913 1.17354 15.2254 1.01428C15.5595 0.855021 15.9336 0.775391 16.3476 0.775391C16.7544 0.775391 17.1212 0.855021 17.448 1.01428C17.7749 1.17354 18.0291 1.39347 18.2107 1.67407C18.3996 1.95467 18.494 2.2694 18.494 2.61826C18.494 2.9747 18.3996 3.29701 18.2107 3.5852C18.0291 3.87338 17.7749 4.1009 17.448 4.26774C17.1212 4.427 16.7544 4.50663 16.3476 4.50663ZM14.43 5.56457H18.2216V18.5557H14.43V5.56457Z"
                              fill="currentColor"
                            />
                            <path
                              d="M33.6342 12.4469H23.349C23.5596 13.501 24.0971 14.3201 24.9615 14.904C25.8258 15.4804 26.9626 15.7686 28.3717 15.7686C29.3014 15.7686 30.1694 15.6245 30.9757 15.3363C31.7892 15.0481 32.5301 14.6538 33.1983 14.1532V17.2247C32.5083 17.7556 31.6585 18.1803 30.6488 18.4988C29.6465 18.8097 28.6005 18.9652 27.511 18.9652C25.9203 18.9652 24.5257 18.658 23.3272 18.0437C22.1287 17.4295 21.2026 16.5687 20.5489 15.4615C19.9024 14.3542 19.5792 13.0839 19.5792 11.6506C19.5792 10.3158 19.8733 9.11001 20.4617 8.03311C21.0573 6.9562 21.9108 6.10682 23.0221 5.48494C24.1407 4.85549 25.4518 4.54076 26.9553 4.54076C28.3862 4.54076 29.5993 4.8024 30.5944 5.32568C31.5967 5.84138 32.3521 6.5846 32.8606 7.55533C33.3763 8.51847 33.6342 9.67121 33.6342 11.0135V12.4469ZM27.0425 7.6122C26.0474 7.6122 25.2375 7.86247 24.6128 8.363C23.9881 8.85595 23.5887 9.51953 23.4143 10.3538H30.4309C30.351 9.47403 30.0169 8.79907 29.4286 8.32887C28.8475 7.85109 28.0521 7.6122 27.0425 7.6122Z"
                              fill="currentColor"
                            />
                            <path
                              d="M43.8169 4.54076C44.9428 4.54076 45.898 4.79102 46.6824 5.29156C47.4669 5.7845 48.0625 6.51255 48.4693 7.4757C48.8833 8.43126 49.0903 9.59537 49.0903 10.968V18.5557H45.2987V11.844C45.2987 10.5168 45.0445 9.52712 44.536 8.87491C44.0276 8.21512 43.2577 7.88522 42.2262 7.88522C41.4926 7.88522 40.8679 8.04448 40.3522 8.363C39.8438 8.68152 39.4588 9.13276 39.1973 9.71671C38.9431 10.3007 38.816 10.9794 38.816 11.753V18.5557H35.0353V5.09817H38.7942V8.15824C39.2518 6.93724 39.8946 6.03098 40.7227 5.43944C41.5507 4.84032 42.5821 4.54076 43.8169 4.54076Z"
                              fill="currentColor"
                            />
                            <path
                              d="M56.3095 4.54076C57.7405 4.54076 58.968 4.79861 59.9922 5.31431C61.0163 5.83001 61.7972 6.58839 62.3347 7.58945C62.8794 8.59052 63.1518 9.80772 63.1518 11.2411V18.5557H59.4474V16.7355C59.0043 17.4863 58.4015 18.0551 57.6388 18.4419C56.8834 18.8211 56.0008 19.0107 54.9912 19.0107C54.0469 19.0107 53.2189 18.8173 52.5071 18.4305C51.7952 18.0437 51.2432 17.5167 50.851 16.8493C50.466 16.1743 50.2735 15.4197 50.2735 14.5855C50.2735 13.7437 50.4733 12.9929 50.8728 12.3331C51.2795 11.6658 51.8533 11.1463 52.5942 10.7747C53.3424 10.3955 54.2067 10.2059 55.1873 10.2059C57.0831 10.2059 58.4995 10.8505 59.4365 12.1397V11.5937C59.422 10.7595 59.2331 10.058 58.87 9.4892C58.5068 8.92041 58.0092 8.49572 57.3773 8.21512C56.7526 7.92693 56.0299 7.78284 55.2091 7.78284C53.5458 7.78284 52.1221 8.37817 50.9381 9.56883V6.29262C52.4635 5.12471 54.254 4.54076 56.3095 4.54076ZM56.4948 16.4853C57.0613 16.4853 57.5661 16.3943 58.0092 16.2123C58.4596 16.0302 58.8118 15.7762 59.0661 15.4501C59.3203 15.124 59.4474 14.76 59.4474 14.358C59.4474 13.9712 59.3276 13.6262 59.0879 13.3228C58.8482 13.0119 58.5068 12.7692 58.0637 12.5948C57.6279 12.4203 57.1231 12.3331 56.5492 12.3331C55.9899 12.3331 55.5069 12.4203 55.1002 12.5948C54.6934 12.7692 54.3811 13.0119 54.1632 13.3228C53.9525 13.6338 53.8472 13.9902 53.8472 14.3921C53.8472 14.8017 53.9525 15.1657 54.1632 15.4842C54.3738 15.8027 54.6789 16.0492 55.0784 16.2236C55.4779 16.3981 55.95 16.4853 56.4948 16.4853Z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="mid-wrapper">
                      <img
                        src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/653a62b8bec116dfe96bcafb_middle%20circle.svg"
                        loading="lazy"
                        alt=""
                        className="midcircle"
                      />
                    </div>
                    <div className="inner-wrapper">
                      <img
                        src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/653a62b8bec116dfe96bcafb_middle%20circle.svg"
                        loading="lazy"
                        alt=""
                        className="innercircle"
                      />
                      <img
                        src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/653249a835e8b66bfaa359b7_shopify-min.jpg"
                        loading="lazy"
                        alt=""
                        className="companylogo-inner shopify"
                      />
                      <img
                        src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/653249a835e8b66bfaa359b5_z-min.jpg"
                        loading="lazy"
                        alt=""
                        className="companylogo-inner zendesk"
                      />
                    </div>
                  </div>
                </div>
                <div className="sb-xxl tablet-below" />
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
        <section data-section="testi-blur" className="section__testimonials">
          <div className="padding-section__medium">
            <div className="container-small">
              <div className="testimonials__parent">
                <div className="pill">
                  <div className="pill__circle" />
                  <div className="p-tiny">About Us.</div>
                </div>
                <h2 className="h3 text-center">People are talking</h2>
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
                            <h3>What’s a Rich Text element?</h3>
                            <p>
                              The rich text element allows you to create and
                              format headings, paragraphs, blockquotes, images,
                              and video all in one place instead of having to
                              add and format them individually. Just
                              double-click and easily create content.
                            </p>
                            <h4>Static and dynamic content editing</h4>
                            <p>
                              A rich text element can be used with static or
                              dynamic content. For static content, just drop it
                              into any page and begin editing. For dynamic
                              content, add a rich text field to any collection
                              and then connect a rich text element to that field
                              in the settings panel. Voila!
                            </p>
                            <h4>
                              How to customize formatting for each rich text
                            </h4>
                            <p>
                              Headings, paragraphs, blockquotes, figures,
                              images, and figure captions can all be styled
                              after a class is added to the rich text element
                              using the "When inside of" nested selector system.
                            </p>
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
          <div className="padding-section__medium no-top">
            <div className="container-medium">
              <div className="testimonials-bottom__parent">
                <div className="pill">
                  <div className="pill__circle" />
                  <div className="p-tiny">Making conversations that count.</div>
                </div>
                <h2 className="h3 text-center text-balanced">
                  What millions of customers interacting with Siena say
                </h2>
                <div className="sb-xxxxxl desktop" />
                <div className="sb-xxxl tablet-below" />
                <div className="marquee-wrapper">
                  <div className="marquee-track-left">
                    <div className="end-users__col-wrapper w-dyn-list">
                      <div
                        role="list"
                        className="end-users__col-list w-dyn-items"
                      >
                        <div
                          role="listitem"
                          className="end-users__col-item chat right w-dyn-item"
                        >
                          <div className="end-users__top-info">
                            <div className="end-users__img-wrap">
                              <div className="p-small">AC</div>
                              <div className="end-users__badge">
                                <img
                                  src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef45e212bf1bb1627f9f_badge.svg"
                                  loading="eager"
                                  alt=""
                                  className="img-full"
                                />
                              </div>
                            </div>
                            <div className="end-users__right-info">
                              <div className="p-body bold">Anabel C.</div>
                              <div className="end-users__stars-wrap">
                                <div className="end-users__star">
                                  <img
                                    src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef9c321d770f22536054_star.svg"
                                    loading="eager"
                                    alt=""
                                    className="img-full"
                                  />
                                </div>
                                <div className="end-users__star">
                                  <img
                                    src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef9c321d770f22536054_star.svg"
                                    loading="eager"
                                    alt=""
                                    className="img-full"
                                  />
                                </div>
                                <div className="end-users__star">
                                  <img
                                    src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef9c321d770f22536054_star.svg"
                                    loading="eager"
                                    alt=""
                                    className="img-full"
                                  />
                                </div>
                                <div className="end-users__star">
                                  <img
                                    src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef9c321d770f22536054_star.svg"
                                    loading="eager"
                                    alt=""
                                    className="img-full"
                                  />
                                </div>
                                <div className="end-users__star">
                                  <img
                                    src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef9c321d770f22536054_star.svg"
                                    loading="eager"
                                    alt=""
                                    className="img-full"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="end-users__rich-text clamp-2lines w-richtext">
                            <p>
                              I love the team here, Siena was so professional
                              and fast. My favorite company!
                            </p>
                            <p />
                          </div>
                        </div>
                        <div
                          role="listitem"
                          className="end-users__col-item chat right w-dyn-item"
                        >
                          <div className="end-users__top-info">
                            <div className="end-users__img-wrap">
                              <div className="p-small">KW</div>
                              <div className="end-users__badge">
                                <img
                                  src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef45e212bf1bb1627f9f_badge.svg"
                                  loading="eager"
                                  alt=""
                                  className="img-full"
                                />
                              </div>
                            </div>
                            <div className="end-users__right-info">
                              <div className="p-body bold">Keith W.</div>
                              <div className="end-users__stars-wrap">
                                <div className="end-users__star">
                                  <img
                                    src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef9c321d770f22536054_star.svg"
                                    loading="eager"
                                    alt=""
                                    className="img-full"
                                  />
                                </div>
                                <div className="end-users__star">
                                  <img
                                    src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef9c321d770f22536054_star.svg"
                                    loading="eager"
                                    alt=""
                                    className="img-full"
                                  />
                                </div>
                                <div className="end-users__star">
                                  <img
                                    src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef9c321d770f22536054_star.svg"
                                    loading="eager"
                                    alt=""
                                    className="img-full"
                                  />
                                </div>
                                <div className="end-users__star">
                                  <img
                                    src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef9c321d770f22536054_star.svg"
                                    loading="eager"
                                    alt=""
                                    className="img-full"
                                  />
                                </div>
                                <div className="end-users__star w-condition-invisible">
                                  <img
                                    src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef9c321d770f22536054_star.svg"
                                    loading="eager"
                                    alt=""
                                    className="img-full"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="end-users__rich-text clamp-2lines w-richtext">
                            <p>
                              Returns are not fun but this one was pretty
                              smooth!
                            </p>
                            <p />
                          </div>
                        </div>
                        <div
                          role="listitem"
                          className="end-users__col-item chat right w-dyn-item"
                        >
                          <div className="end-users__top-info">
                            <div className="end-users__img-wrap">
                              <div className="p-small">RB</div>
                              <div className="end-users__badge">
                                <img
                                  src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef45e212bf1bb1627f9f_badge.svg"
                                  loading="eager"
                                  alt=""
                                  className="img-full"
                                />
                              </div>
                            </div>
                            <div className="end-users__right-info">
                              <div className="p-body bold">Richard B.</div>
                              <div className="end-users__stars-wrap">
                                <div className="end-users__star">
                                  <img
                                    src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef9c321d770f22536054_star.svg"
                                    loading="eager"
                                    alt=""
                                    className="img-full"
                                  />
                                </div>
                                <div className="end-users__star">
                                  <img
                                    src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef9c321d770f22536054_star.svg"
                                    loading="eager"
                                    alt=""
                                    className="img-full"
                                  />
                                </div>
                                <div className="end-users__star">
                                  <img
                                    src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef9c321d770f22536054_star.svg"
                                    loading="eager"
                                    alt=""
                                    className="img-full"
                                  />
                                </div>
                                <div className="end-users__star w-condition-invisible">
                                  <img
                                    src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef9c321d770f22536054_star.svg"
                                    loading="eager"
                                    alt=""
                                    className="img-full"
                                  />
                                </div>
                                <div className="end-users__star w-condition-invisible">
                                  <img
                                    src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef9c321d770f22536054_star.svg"
                                    loading="eager"
                                    alt=""
                                    className="img-full"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="end-users__rich-text clamp-2lines w-richtext">
                            <p>
                              Extremely prompt response. Very friendly and
                              helpful.
                            </p>
                            <p />
                          </div>
                        </div>
                        <div
                          role="listitem"
                          className="end-users__col-item chat right w-dyn-item"
                        >
                          <div className="end-users__top-info">
                            <div className="end-users__img-wrap">
                              <div className="p-small">CM</div>
                              <div className="end-users__badge">
                                <img
                                  src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef45e212bf1bb1627f9f_badge.svg"
                                  loading="eager"
                                  alt=""
                                  className="img-full"
                                />
                              </div>
                            </div>
                            <div className="end-users__right-info">
                              <div className="p-body bold">Courtney M.</div>
                              <div className="end-users__stars-wrap">
                                <div className="end-users__star">
                                  <img
                                    src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef9c321d770f22536054_star.svg"
                                    loading="eager"
                                    alt=""
                                    className="img-full"
                                  />
                                </div>
                                <div className="end-users__star">
                                  <img
                                    src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef9c321d770f22536054_star.svg"
                                    loading="eager"
                                    alt=""
                                    className="img-full"
                                  />
                                </div>
                                <div className="end-users__star">
                                  <img
                                    src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef9c321d770f22536054_star.svg"
                                    loading="eager"
                                    alt=""
                                    className="img-full"
                                  />
                                </div>
                                <div className="end-users__star">
                                  <img
                                    src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef9c321d770f22536054_star.svg"
                                    loading="eager"
                                    alt=""
                                    className="img-full"
                                  />
                                </div>
                                <div className="end-users__star">
                                  <img
                                    src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef9c321d770f22536054_star.svg"
                                    loading="eager"
                                    alt=""
                                    className="img-full"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="end-users__rich-text clamp-2lines w-richtext">
                            <p>
                              Listened to my concern and handled appropriately.
                              🥳
                            </p>
                            <p />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="end-users__col-wrapper w-dyn-list">
                      <div
                        role="list"
                        className="end-users__col-list w-dyn-items"
                      >
                        <div
                          role="listitem"
                          className="end-users__col-item chat right w-dyn-item"
                        >
                          <div className="end-users__top-info">
                            <div className="end-users__img-wrap">
                              <div className="end-users__badge">
                                <img
                                  src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef45e212bf1bb1627f9f_badge.svg"
                                  loading="eager"
                                  alt=""
                                  className="img-full"
                                />
                              </div>
                              <div className="p-small">AC</div>
                            </div>
                            <div className="end-users__right-info">
                              <div className="p-body bold">Anabel C.</div>
                              <div className="end-users__stars-wrap">
                                <div className="end-users__star">
                                  <img
                                    src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef9c321d770f22536054_star.svg"
                                    loading="eager"
                                    alt=""
                                    className="img-full"
                                  />
                                </div>
                                <div className="end-users__star">
                                  <img
                                    src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef9c321d770f22536054_star.svg"
                                    loading="eager"
                                    alt=""
                                    className="img-full"
                                  />
                                </div>
                                <div className="end-users__star">
                                  <img
                                    src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef9c321d770f22536054_star.svg"
                                    loading="eager"
                                    alt=""
                                    className="img-full"
                                  />
                                </div>
                                <div className="end-users__star">
                                  <img
                                    src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef9c321d770f22536054_star.svg"
                                    loading="eager"
                                    alt=""
                                    className="img-full"
                                  />
                                </div>
                                <div className="end-users__star">
                                  <img
                                    src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef9c321d770f22536054_star.svg"
                                    loading="eager"
                                    alt=""
                                    className="img-full"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="end-users__rich-text clamp-2lines w-richtext">
                            <p>
                              I love the team here, Siena was so professional
                              and fast. My favorite company!
                            </p>
                            <p />
                          </div>
                        </div>
                        <div
                          role="listitem"
                          className="end-users__col-item chat right w-dyn-item"
                        >
                          <div className="end-users__top-info">
                            <div className="end-users__img-wrap">
                              <div className="end-users__badge">
                                <img
                                  src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef45e212bf1bb1627f9f_badge.svg"
                                  loading="eager"
                                  alt=""
                                  className="img-full"
                                />
                              </div>
                              <div className="p-small">KW</div>
                            </div>
                            <div className="end-users__right-info">
                              <div className="p-body bold">Keith W.</div>
                              <div className="end-users__stars-wrap">
                                <div className="end-users__star">
                                  <img
                                    src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef9c321d770f22536054_star.svg"
                                    loading="eager"
                                    alt=""
                                    className="img-full"
                                  />
                                </div>
                                <div className="end-users__star">
                                  <img
                                    src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef9c321d770f22536054_star.svg"
                                    loading="eager"
                                    alt=""
                                    className="img-full"
                                  />
                                </div>
                                <div className="end-users__star">
                                  <img
                                    src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef9c321d770f22536054_star.svg"
                                    loading="eager"
                                    alt=""
                                    className="img-full"
                                  />
                                </div>
                                <div className="end-users__star">
                                  <img
                                    src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef9c321d770f22536054_star.svg"
                                    loading="eager"
                                    alt=""
                                    className="img-full"
                                  />
                                </div>
                                <div className="end-users__star w-condition-invisible">
                                  <img
                                    src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef9c321d770f22536054_star.svg"
                                    loading="eager"
                                    alt=""
                                    className="img-full"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="end-users__rich-text clamp-2lines w-richtext">
                            <p>
                              Returns are not fun but this one was pretty
                              smooth!
                            </p>
                            <p />
                          </div>
                        </div>
                        <div
                          role="listitem"
                          className="end-users__col-item chat right w-dyn-item"
                        >
                          <div className="end-users__top-info">
                            <div className="end-users__img-wrap">
                              <div className="end-users__badge">
                                <img
                                  src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef45e212bf1bb1627f9f_badge.svg"
                                  loading="eager"
                                  alt=""
                                  className="img-full"
                                />
                              </div>
                              <div className="p-small">RB</div>
                            </div>
                            <div className="end-users__right-info">
                              <div className="p-body bold">Richard B.</div>
                              <div className="end-users__stars-wrap">
                                <div className="end-users__star">
                                  <img
                                    src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef9c321d770f22536054_star.svg"
                                    loading="eager"
                                    alt=""
                                    className="img-full"
                                  />
                                </div>
                                <div className="end-users__star">
                                  <img
                                    src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef9c321d770f22536054_star.svg"
                                    loading="eager"
                                    alt=""
                                    className="img-full"
                                  />
                                </div>
                                <div className="end-users__star">
                                  <img
                                    src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef9c321d770f22536054_star.svg"
                                    loading="eager"
                                    alt=""
                                    className="img-full"
                                  />
                                </div>
                                <div className="end-users__star w-condition-invisible">
                                  <img
                                    src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef9c321d770f22536054_star.svg"
                                    loading="eager"
                                    alt=""
                                    className="img-full"
                                  />
                                </div>
                                <div className="end-users__star w-condition-invisible">
                                  <img
                                    src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef9c321d770f22536054_star.svg"
                                    loading="eager"
                                    alt=""
                                    className="img-full"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="end-users__rich-text clamp-2lines w-richtext">
                            <p>
                              Extremely prompt response. Very friendly and
                              helpful.
                            </p>
                            <p />
                          </div>
                        </div>
                        <div
                          role="listitem"
                          className="end-users__col-item chat right w-dyn-item"
                        >
                          <div className="end-users__top-info">
                            <div className="end-users__img-wrap">
                              <div className="end-users__badge">
                                <img
                                  src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef45e212bf1bb1627f9f_badge.svg"
                                  loading="eager"
                                  alt=""
                                  className="img-full"
                                />
                              </div>
                              <div className="p-small">CM</div>
                            </div>
                            <div className="end-users__right-info">
                              <div className="p-body bold">Courtney M.</div>
                              <div className="end-users__stars-wrap">
                                <div className="end-users__star">
                                  <img
                                    src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef9c321d770f22536054_star.svg"
                                    loading="eager"
                                    alt=""
                                    className="img-full"
                                  />
                                </div>
                                <div className="end-users__star">
                                  <img
                                    src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef9c321d770f22536054_star.svg"
                                    loading="eager"
                                    alt=""
                                    className="img-full"
                                  />
                                </div>
                                <div className="end-users__star">
                                  <img
                                    src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef9c321d770f22536054_star.svg"
                                    loading="eager"
                                    alt=""
                                    className="img-full"
                                  />
                                </div>
                                <div className="end-users__star">
                                  <img
                                    src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef9c321d770f22536054_star.svg"
                                    loading="eager"
                                    alt=""
                                    className="img-full"
                                  />
                                </div>
                                <div className="end-users__star">
                                  <img
                                    src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef9c321d770f22536054_star.svg"
                                    loading="eager"
                                    alt=""
                                    className="img-full"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="end-users__rich-text clamp-2lines w-richtext">
                            <p>
                              Listened to my concern and handled appropriately.
                              🥳
                            </p>
                            <p />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="marquee-wrapper">
                  <div className="marquee-track">
                    <div className="end-users__col-wrapper bottom w-dyn-list">
                      <div
                        role="list"
                        className="end-users__col-list w-dyn-items"
                      >
                        <div
                          role="listitem"
                          className="end-users__col-item chat left w-dyn-item"
                        >
                          <div className="end-users__top-info">
                            <div className="end-users__img-wrap">
                              <div className="end-users__badge">
                                <img
                                  src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef45e212bf1bb1627f9f_badge.svg"
                                  loading="eager"
                                  alt=""
                                  className="img-full"
                                />
                              </div>
                              <div className="p-small">MS</div>
                            </div>
                            <div className="end-users__right-info">
                              <div className="p-body bold">Michael S.</div>
                              <div className="end-users__stars-wrap">
                                <div className="end-users__star">
                                  <img
                                    src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef9c321d770f22536054_star.svg"
                                    loading="eager"
                                    alt=""
                                    className="img-full"
                                  />
                                </div>
                                <div className="end-users__star">
                                  <img
                                    src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef9c321d770f22536054_star.svg"
                                    loading="eager"
                                    alt=""
                                    className="img-full"
                                  />
                                </div>
                                <div className="end-users__star">
                                  <img
                                    src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef9c321d770f22536054_star.svg"
                                    loading="eager"
                                    alt=""
                                    className="img-full"
                                  />
                                </div>
                                <div className="end-users__star">
                                  <img
                                    src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef9c321d770f22536054_star.svg"
                                    loading="eager"
                                    alt=""
                                    className="img-full"
                                  />
                                </div>
                                <div className="end-users__star">
                                  <img
                                    src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef9c321d770f22536054_star.svg"
                                    loading="eager"
                                    alt=""
                                    className="img-full"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="end-users__rich-text clamp-2lines w-richtext">
                            <p>
                              Siena responded fast, and resolved my issue
                              perfectly! 🤩
                            </p>
                            <p />
                          </div>
                        </div>
                        <div
                          role="listitem"
                          className="end-users__col-item chat left w-dyn-item"
                        >
                          <div className="end-users__top-info">
                            <div className="end-users__img-wrap">
                              <div className="end-users__badge">
                                <img
                                  src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef45e212bf1bb1627f9f_badge.svg"
                                  loading="eager"
                                  alt=""
                                  className="img-full"
                                />
                              </div>
                              <div className="p-small">AG</div>
                            </div>
                            <div className="end-users__right-info">
                              <div className="p-body bold">Ashley G.</div>
                              <div className="end-users__stars-wrap">
                                <div className="end-users__star">
                                  <img
                                    src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef9c321d770f22536054_star.svg"
                                    loading="eager"
                                    alt=""
                                    className="img-full"
                                  />
                                </div>
                                <div className="end-users__star">
                                  <img
                                    src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef9c321d770f22536054_star.svg"
                                    loading="eager"
                                    alt=""
                                    className="img-full"
                                  />
                                </div>
                                <div className="end-users__star">
                                  <img
                                    src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef9c321d770f22536054_star.svg"
                                    loading="eager"
                                    alt=""
                                    className="img-full"
                                  />
                                </div>
                                <div className="end-users__star">
                                  <img
                                    src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef9c321d770f22536054_star.svg"
                                    loading="eager"
                                    alt=""
                                    className="img-full"
                                  />
                                </div>
                                <div className="end-users__star w-condition-invisible">
                                  <img
                                    src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef9c321d770f22536054_star.svg"
                                    loading="eager"
                                    alt=""
                                    className="img-full"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="end-users__rich-text clamp-2lines w-richtext">
                            <p>
                              Can’t believe how easy it was to get my
                              replacement. Thanks again.
                            </p>
                            <p />
                          </div>
                        </div>
                        <div
                          role="listitem"
                          className="end-users__col-item chat left w-dyn-item"
                        >
                          <div className="end-users__top-info">
                            <div className="end-users__img-wrap">
                              <div className="end-users__badge">
                                <img
                                  src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef45e212bf1bb1627f9f_badge.svg"
                                  loading="eager"
                                  alt=""
                                  className="img-full"
                                />
                              </div>
                              <div className="p-small">NT</div>
                            </div>
                            <div className="end-users__right-info">
                              <div className="p-body bold">Nicole T.</div>
                              <div className="end-users__stars-wrap">
                                <div className="end-users__star">
                                  <img
                                    src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef9c321d770f22536054_star.svg"
                                    loading="eager"
                                    alt=""
                                    className="img-full"
                                  />
                                </div>
                                <div className="end-users__star">
                                  <img
                                    src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef9c321d770f22536054_star.svg"
                                    loading="eager"
                                    alt=""
                                    className="img-full"
                                  />
                                </div>
                                <div className="end-users__star">
                                  <img
                                    src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef9c321d770f22536054_star.svg"
                                    loading="eager"
                                    alt=""
                                    className="img-full"
                                  />
                                </div>
                                <div className="end-users__star">
                                  <img
                                    src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef9c321d770f22536054_star.svg"
                                    loading="eager"
                                    alt=""
                                    className="img-full"
                                  />
                                </div>
                                <div className="end-users__star">
                                  <img
                                    src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef9c321d770f22536054_star.svg"
                                    loading="eager"
                                    alt=""
                                    className="img-full"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="end-users__rich-text clamp-2lines w-richtext">
                            <p>
                              Kitsch is personable with their customers. I'm
                              VERY&nbsp;surprised!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="end-users__col-wrapper bottom w-dyn-list">
                      <div
                        role="list"
                        className="end-users__col-list w-dyn-items"
                      >
                        <div
                          role="listitem"
                          className="end-users__col-item chat left w-dyn-item"
                        >
                          <div className="end-users__top-info">
                            <div className="end-users__img-wrap">
                              <div className="end-users__badge">
                                <img
                                  src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef45e212bf1bb1627f9f_badge.svg"
                                  loading="eager"
                                  alt=""
                                  className="img-full"
                                />
                              </div>
                              <div className="p-small">MS</div>
                            </div>
                            <div className="end-users__right-info">
                              <div className="p-body bold">Michael S.</div>
                              <div className="end-users__stars-wrap">
                                <div className="end-users__star">
                                  <img
                                    src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef9c321d770f22536054_star.svg"
                                    loading="eager"
                                    alt=""
                                    className="img-full"
                                  />
                                </div>
                                <div className="end-users__star">
                                  <img
                                    src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef9c321d770f22536054_star.svg"
                                    loading="eager"
                                    alt=""
                                    className="img-full"
                                  />
                                </div>
                                <div className="end-users__star">
                                  <img
                                    src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef9c321d770f22536054_star.svg"
                                    loading="eager"
                                    alt=""
                                    className="img-full"
                                  />
                                </div>
                                <div className="end-users__star">
                                  <img
                                    src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef9c321d770f22536054_star.svg"
                                    loading="eager"
                                    alt=""
                                    className="img-full"
                                  />
                                </div>
                                <div className="end-users__star">
                                  <img
                                    src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef9c321d770f22536054_star.svg"
                                    loading="eager"
                                    alt=""
                                    className="img-full"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="end-users__rich-text clamp-2lines w-richtext">
                            <p>
                              Siena responded fast, and resolved my issue
                              perfectly! 🤩
                            </p>
                            <p />
                          </div>
                        </div>
                        <div
                          role="listitem"
                          className="end-users__col-item chat left w-dyn-item"
                        >
                          <div className="end-users__top-info">
                            <div className="end-users__img-wrap">
                              <div className="end-users__badge">
                                <img
                                  src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef45e212bf1bb1627f9f_badge.svg"
                                  loading="eager"
                                  alt=""
                                  className="img-full"
                                />
                              </div>
                              <div className="p-small">AG</div>
                            </div>
                            <div className="end-users__right-info">
                              <div className="p-body bold">Ashley G.</div>
                              <div className="end-users__stars-wrap">
                                <div className="end-users__star">
                                  <img
                                    src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef9c321d770f22536054_star.svg"
                                    loading="eager"
                                    alt=""
                                    className="img-full"
                                  />
                                </div>
                                <div className="end-users__star">
                                  <img
                                    src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef9c321d770f22536054_star.svg"
                                    loading="eager"
                                    alt=""
                                    className="img-full"
                                  />
                                </div>
                                <div className="end-users__star">
                                  <img
                                    src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef9c321d770f22536054_star.svg"
                                    loading="eager"
                                    alt=""
                                    className="img-full"
                                  />
                                </div>
                                <div className="end-users__star">
                                  <img
                                    src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef9c321d770f22536054_star.svg"
                                    loading="eager"
                                    alt=""
                                    className="img-full"
                                  />
                                </div>
                                <div className="end-users__star w-condition-invisible">
                                  <img
                                    src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef9c321d770f22536054_star.svg"
                                    loading="eager"
                                    alt=""
                                    className="img-full"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="end-users__rich-text clamp-2lines w-richtext">
                            <p>
                              Can’t believe how easy it was to get my
                              replacement. Thanks again.
                            </p>
                            <p />
                          </div>
                        </div>
                        <div
                          role="listitem"
                          className="end-users__col-item chat left w-dyn-item"
                        >
                          <div className="end-users__top-info">
                            <div className="end-users__img-wrap">
                              <div className="end-users__badge">
                                <img
                                  src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef45e212bf1bb1627f9f_badge.svg"
                                  loading="eager"
                                  alt=""
                                  className="img-full"
                                />
                              </div>
                              <div className="p-small">NT</div>
                            </div>
                            <div className="end-users__right-info">
                              <div className="p-body bold">Nicole T.</div>
                              <div className="end-users__stars-wrap">
                                <div className="end-users__star">
                                  <img
                                    src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef9c321d770f22536054_star.svg"
                                    loading="eager"
                                    alt=""
                                    className="img-full"
                                  />
                                </div>
                                <div className="end-users__star">
                                  <img
                                    src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef9c321d770f22536054_star.svg"
                                    loading="eager"
                                    alt=""
                                    className="img-full"
                                  />
                                </div>
                                <div className="end-users__star">
                                  <img
                                    src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef9c321d770f22536054_star.svg"
                                    loading="eager"
                                    alt=""
                                    className="img-full"
                                  />
                                </div>
                                <div className="end-users__star">
                                  <img
                                    src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef9c321d770f22536054_star.svg"
                                    loading="eager"
                                    alt=""
                                    className="img-full"
                                  />
                                </div>
                                <div className="end-users__star">
                                  <img
                                    src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cef9c321d770f22536054_star.svg"
                                    loading="eager"
                                    alt=""
                                    className="img-full"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="end-users__rich-text clamp-2lines w-richtext">
                            <p>
                              Kitsch is personable with their customers. I'm
                              VERY&nbsp;surprised!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sb-xxl" />
                <div className="csat-score">
                  <div className="csat-score__icon">
                    <img
                      src="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/652cf33bb62af154c49d0f76_csat%20score%20icon.svg"
                      loading="lazy"
                      alt=""
                      className="img-full"
                    />
                  </div>
                  <p className="p-body text-center">
                    <span className="p-body bold">4.81 Average CSAT</span> score
                    based on 50,000 customer satisfaction surveys
                  </p>
                </div>
              </div>
            </div>
          </div>
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
                  <a
                    href="/partner-with-siena"
                    className="footer__link p-small"
                  >
                    Partner with Siena
                  </a>
                  <a href="/refer-a-friend" className="footer__link p-small">
                    Refer a friend
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
                  <div className="overline footer-text">Company</div>
                  <a href="/about-us" className="footer__link p-small">
                    About us
                  </a>
                  <a
                    href="https://jobs.ashbyhq.com/siena"
                    target="_blank"
                    className="footer__link p-small"
                  >
                    Careers
                  </a>
                  <a href="/book-a-demo" className="footer__link p-small">
                    Book a demo
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
}
