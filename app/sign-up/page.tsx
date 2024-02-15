// pages/index.js or pages/index.tsx
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from "next/head";

const Landing = () => {

    // Function to handle sign-in

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
          href="https://assets-global.website-files.com/6523d3eb03029a11dfdb95ac/653bb89476245bba96c838a2_favicon.png"
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
