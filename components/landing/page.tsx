// pages/index.js or pages/index.tsx
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import "./css/templatemo-topic-listing.css";
import "./css/bootstrap.min.css";
import "./css/bootstrap-icons.css";
import Script from "next/script";
import buisnessimage from "./images/businesswoman-using-tablet-analysis.jpg";
import faq_image from "./images/faq_graphic.jpg";

const Landing = () => {
        return (
          <>
            <main>
              <nav className="navbar navbar-expand-lg">
                <div className="container">
                  <a className="navbar-brand" href="index.html">
                    <i className="bi-back" />
                    <span>Topic</span>
                  </a>
                  <div className="d-lg-none ms-auto me-4">
                    <a
                      href="#top"
                      className="navbar-icon bi-person smoothscroll"
                    />
                  </div>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon" />
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-lg-5 me-lg-auto">
                      <li className="nav-item">
                        <a className="nav-link click-scroll" href="#section_1">
                          Home
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link click-scroll" href="#section_2">
                          Browse Topics
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link click-scroll" href="#section_3">
                          How it works
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link click-scroll" href="#section_4">
                          FAQs
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link click-scroll" href="#section_5">
                          Contact
                        </a>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          href="#"
                          id="navbarLightDropdownMenuLink"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Pages
                        </a>
                        <ul
                          className="dropdown-menu dropdown-menu-light"
                          aria-labelledby="navbarLightDropdownMenuLink"
                        >
                          <li>
                            <a
                              className="dropdown-item"
                              href="topics-listing.html"
                            >
                              Topics Listing
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="contact.html">
                              Contact Form
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <div className="d-none d-lg-block">
                      <a
                        href="#top"
                        className="navbar-icon bi-person smoothscroll"
                      />
                    </div>
                  </div>
                </div>
              </nav>
              <section
                className="hero-section d-flex justify-content-center align-items-center"
                id="section_1"
              >
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 col-12 mx-auto">
                      <h1 className="text-white text-center">
                        Discover. Learn. Enjoy
                      </h1>
                      <h6 className="text-center">
                        platform for creatives around the world
                      </h6>
                      <form
                        method="get"
                        className="custom-form mt-4 pt-2 mb-lg-0 mb-5"
                        role="search"
                      >
                        <div className="input-group input-group-lg">
                          <span
                            className="input-group-text bi-search"
                            id="basic-addon1"
                          ></span>
                          <input
                            name="keyword"
                            type="search"
                            className="form-control"
                            id="keyword"
                            placeholder="Design, Code, Marketing, Finance ..."
                            aria-label="Search"
                          />
                          <button type="submit" className="form-control">
                            Search
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </section>
              <section className="featured-section">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-4 col-12 mb-4 mb-lg-0">
                      <div className="custom-block bg-white shadow-lg">
                        <a href="topics-detail.html">
                          <div className="d-flex">
                            <div>
                              <h5 className="mb-2">Web Design</h5>
                              <p className="mb-0">
                                When you search for free CSS templates, you will
                                notice that TemplateMo is one of the best
                                websites.
                              </p>
                            </div>
                            <span className="badge bg-design rounded-pill ms-auto">
                              14
                            </span>
                          </div>
                          {/* <Image
                            src="http://localhost:3000/_next/image?url=%2Flogo.png&w=256&q=75"
                            className="custom-block-image img-fluid"
                            alt=""
                            width={200}
                            height={200}
                          /> */}
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="custom-block custom-block-overlay">
                        <div className="d-flex flex-column h-100">
                          <Image
                            src={buisnessimage}
                            className="custom-block-image img-fluid"
                            alt=""
                            width={200}
                            height={200}
                          />
                          <div className="custom-block-overlay-text d-flex">
                            <div>
                              <h5 className="text-white mb-2">Finance</h5>
                              <p className="text-white">
                                Topic Listing Template includes homepage,
                                listing page, detail page, and contact page. You
                                can feel free to edit and adapt for your CMS
                                requirements.
                              </p>
                              <a
                                href="topics-detail.html"
                                className="btn custom-btn mt-2 mt-lg-3"
                              >
                                Learn More
                              </a>
                            </div>
                            <span className="badge bg-finance rounded-pill ms-auto">
                              25
                            </span>
                          </div>
                          <div className="social-share d-flex">
                            <p className="text-white me-4">Share:</p>
                            <ul className="social-icon">
                              <li className="social-icon-item">
                                <a
                                  href="#"
                                  className="social-icon-link bi-twitter"
                                />
                              </li>
                              <li className="social-icon-item">
                                <a
                                  href="#"
                                  className="social-icon-link bi-facebook"
                                />
                              </li>
                              Designms-auto"&gt;
                            </ul>
                          </div>
                          <div className="section-overlay" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section
                className="explore-section section-padding"
                id="section_2"
              >
                <div className="container">
                  Design
                  <div className="col-12 text-center">
                    <h2 className="mb-4">Browse Topics</h2>
                  </div>
                </div>
                <div className="container-fluid">
                  <div className="row">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="design-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#design-tab-pane"
                          type="button"
                          role="tab"
                          aria-controls="design-tab-pane"
                          aria-selected="true"
                        >
                          Design
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="marketing-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#marketing-tab-pane"
                          type="button"
                          role="tab"
                          aria-controls="marketing-tab-pane"
                          aria-selected="false"
                        >
                          Marketing
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="finance-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#finance-tab-pane"
                          type="button"
                          role="tab"
                          aria-controls="finance-tab-pane"
                          aria-selected="false"
                        >
                          Finance
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="music-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#music-tab-pane"
                          type="button"
                          role="tab"
                          aria-controls="music-tab-pane"
                          aria-selected="false"
                        >
                          Music
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="education-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#education-tab-pane"
                          type="button"
                          role="tab"
                          aria-controls="education-tab-pane"
                          aria-selected="false"
                        >
                          Education
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <div className="tab-content" id="myTabContent">
                        <div
                          className="tab-pane fade show active"
                          id="design-tab-pane"
                          role="tabpanel"
                          aria-labelledby="design-tab"
                          tabIndex={0}
                        >
                          <div className="row">
                            <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
                              <div className="custom-block bg-white shadow-lg">
                                <a href="topics-detail.html">
                                  <div className="d-flex">
                                    <div>
                                      <h5 className="mb-2">Web Design</h5>
                                      <p className="mb-0">
                                        Topic Listing Template based on
                                        Bootstrap 5
                                      </p>
                                    </div>
                                    <span className="badge bg-design rounded-pill ms-auto">
                                      14
                                    </span>
                                  </div>
                                  <Image
                                    src="/images/topics/undraw_Remote_design_team_re_urdx.png"
                                    className="custom-block-image img-fluid"
                                    alt=""
                                    width={200}
                                    height={200}
                                  />
                                </a>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
                              <div className="custom-block bg-white shadow-lg">
                                <a href="topics-detail.html">
                                  <div className="d-flex">
                                    <div>
                                      <h5 className="mb-2">Graphic</h5>
                                      <p className="mb-0">
                                        Lorem Ipsum dolor sit amet consectetur
                                      </p>
                                    </div>
                                    <span className="badge bg-design rounded-pill ms-auto">
                                      75
                                    </span>
                                  </div>
                                  <Image
                                    src="/components/landing/images/topics/undraw_Redesign_feedback_re_jvm0.png"
                                    className="custom-block-image img-fluid"
                                    alt=""
                                    width={200}
                                    height={200}
                                  />
                                </a>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                              <div className="custom-block bg-white shadow-lg">
                                <a href="topics-detail.html">
                                  <div className="d-flex">
                                    <div>
                                      <h5 className="mb-2">Logo Design</h5>
                                      <p className="mb-0">
                                        Lorem Ipsum dolor sit amet consectetur
                                      </p>
                                    </div>
                                    <span className="badge bg-design rounded-pill ms-auto">
                                      100
                                    </span>
                                  </div>
                                  {/* <Image
                                    src="images/topics/colleagues-working-cozy-office-medium-shot.png"
                                    className="custom-block-image img-fluid"
                                    alt=""
                                    width={200}
                                    height={200}
                                  /> */}
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="marketing-tab-pane"
                          role="tabpanel"
                          aria-labelledby="marketing-tab"
                          tabIndex={0}
                        >
                          <div className="row">
                            <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-3">
                              <div className="custom-block bg-white shadow-lg">
                                <a href="topics-detail.html">
                                  <div className="d-flex">
                                    <div>
                                      <h5 className="mb-2">Advertising</h5>
                                      <p className="mb-0">
                                        Lorem Ipsum dolor sit amet consectetur
                                      </p>
                                    </div>
                                    <span className="badge bg-advertising rounded-pill ms-auto">
                                      30
                                    </span>
                                  </div>
                                  <Image
                                    src="/images/topics/undraw_online_ad_re_ol62.png"
                                    className="custom-block-image img-fluid"
                                    alt=""
                                    width={200}
                                    height={200}
                                  />
                                </a>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-3">
                              <div className="custom-block bg-white shadow-lg">
                                <a href="topics-detail.html">
                                  <div className="d-flex">
                                    <div>
                                      <h5 className="mb-2">Video Content</h5>
                                      <p className="mb-0">
                                        Lorem Ipsum dolor sit amet consectetur
                                      </p>
                                    </div>
                                    <span className="badge bg-advertising rounded-pill ms-auto">
                                      65
                                    </span>
                                  </div>
                                  {/* <Image
                                    src="images/topics/undraw_Group_video_re_btu7.png"
                                    className="custom-block-image img-fluid"
                                    alt=""
                                    width={200}
                                    height={200}
                                  /> */}
                                </a>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                              <div className="custom-block bg-white shadow-lg">
                                <a href="topics-detail.html">
                                  <div className="d-flex">
                                    <div>
                                      <h5 className="mb-2">Viral Tweet</h5>
                                      <p className="mb-0">
                                        Lorem Ipsum dolor sit amet consectetur
                                      </p>
                                    </div>
                                    <span className="badge bg-advertising rounded-pill ms-auto">
                                      50
                                    </span>
                                  </div>
                                  <img
                                    src="images/topics/undraw_viral_tweet_gndb.png"
                                    className="custom-block-image img-fluid"
                                    alt=""
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="finance-tab-pane"
                          role="tabpanel"
                          aria-labelledby="finance-tab"
                          tabIndex={0}
                        >
                          {" "}
                          <div className="row">
                            <div className="col-lg-6 col-md-6 col-12 mb-4 mb-lg-0">
                              <div className="custom-block bg-white shadow-lg">
                                <a href="topics-detail.html">
                                  <div className="d-flex">
                                    <div>
                                      <h5 className="mb-2">Investment</h5>
                                      <p className="mb-0">
                                        Lorem Ipsum dolor sit amet consectetur
                                      </p>
                                    </div>
                                    <span className="badge bg-finance rounded-pill ms-auto">
                                      30
                                    </span>
                                  </div>
                                  <img
                                    src="images/topics/undraw_Finance_re_gnv2.png"
                                    className="custom-block-image img-fluid"
                                    alt=""
                                  />
                                </a>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12">
                              <div className="custom-block custom-block-overlay">
                                <div className="d-flex flex-column h-100">
                                  <img
                                    src="images/businesswoman-using-tablet-analysis-graph-company-finance-strategy-statistics-success-concept-planning-future-office-room.jpg"
                                    className="custom-block-image img-fluid"
                                    alt=""
                                  />
                                  <div className="custom-block-overlay-text d-flex">
                                    <div>
                                      <h5 className="text-white mb-2">
                                        Finance
                                      </h5>
                                      <p className="text-white">
                                        Lorem ipsum dolor, sit amet consectetur
                                        adipisicing elit. Sint animi
                                        necessitatibus aperiam repudiandae nam
                                        omnis
                                      </p>
                                      <a
                                        href="topics-detail.html"
                                        className="btn custom-btn mt-2 mt-lg-3"
                                      >
                                        Learn More
                                      </a>
                                    </div>
                                    <span className="badge bg-finance rounded-pill ms-auto">
                                      25
                                    </span>
                                  </div>
                                  <div className="social-share d-flex">
                                    <p className="text-white me-4">Share:</p>
                                    <ul className="social-icon">
                                      <li className="social-icon-item">
                                        <a
                                          href="#"
                                          className="social-icon-link bi-twitter"
                                        />
                                      </li>
                                      <li className="social-icon-item">
                                        <a
                                          href="#"
                                          className="social-icon-link bi-facebook"
                                        />
                                      </li>
                                      <li className="social-icon-item">
                                        <a
                                          href="#"
                                          className="social-icon-link bi-pinterest"
                                        />
                                      </li>
                                    </ul>
                                    <a
                                      href="#"
                                      className="custom-icon bi-bookmark ms-auto"
                                    />
                                  </div>
                                  <div className="section-overlay" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="music-tab-pane"
                          role="tabpanel"
                          aria-labelledby="music-tab"
                          tabIndex={0}
                        >
                          <div className="row">
                            <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-3">
                              <div className="custom-block bg-white shadow-lg">
                                <a href="topics-detail.html">
                                  <div className="d-flex">
                                    <div>
                                      <h5 className="mb-2">Composing Song</h5>
                                      <p className="mb-0">
                                        Lorem Ipsum dolor sit amet consectetur
                                      </p>
                                    </div>
                                    <span className="badge bg-music rounded-pill ms-auto">
                                      45
                                    </span>
                                  </div>
                                  <img
                                    src="images/topics/undraw_Compose_music_re_wpiw.png"
                                    className="custom-block-image img-fluid"
                                    alt=""
                                  />
                                </a>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-3">
                              <div className="custom-block bg-white shadow-lg">
                                <a href="topics-detail.html">
                                  <div className="d-flex">
                                    <div>
                                      <h5 className="mb-2">Online Music</h5>
                                      <p className="mb-0">
                                        Lorem Ipsum dolor sit amet consectetur
                                      </p>
                                    </div>
                                    <span className="badge bg-music rounded-pill ms-auto">
                                      45
                                    </span>
                                  </div>
                                  <img
                                    src="images/topics/undraw_happy_music_g6wc.png"
                                    className="custom-block-image img-fluid"
                                    alt=""
                                  />
                                </a>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                              <div className="custom-block bg-white shadow-lg">
                                <a href="topics-detail.html">
                                  <div className="d-flex">
                                    <div>
                                      <h5 className="mb-2">Podcast</h5>
                                      <p className="mb-0">
                                        Lorem Ipsum dolor sit amet consectetur
                                      </p>
                                    </div>
                                    <span className="badge bg-music rounded-pill ms-auto">
                                      20
                                    </span>
                                  </div>
                                  <img
                                    src="images/topics/undraw_Podcast_audience_re_4i5q.png"
                                    className="custom-block-image img-fluid"
                                    alt=""
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="education-tab-pane"
                          role="tabpanel"
                          aria-labelledby="education-tab"
                          tabIndex={0}
                        >
                          <div className="row">
                            <div className="col-lg-6 col-md-6 col-12 mb-4 mb-lg-3">
                              <div className="custom-block bg-white shadow-lg">
                                <a href="topics-detail.html">
                                  <div className="d-flex">
                                    <div>
                                      <h5 className="mb-2">Graduation</h5>
                                      <p className="mb-0">
                                        Lorem Ipsum dolor sit amet consectetur
                                      </p>
                                    </div>
                                    <span className="badge bg-education rounded-pill ms-auto">
                                      80
                                    </span>
                                  </div>
                                  <img
                                    src="images/topics/undraw_Graduation_re_gthn.png"
                                    className="custom-block-image img-fluid"
                                    alt=""
                                  />
                                </a>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12">
                              <div className="custom-block bg-white shadow-lg">
                                <a href="topics-detail.html">
                                  <div className="d-flex">
                                    <div>
                                      <h5 className="mb-2">Educator</h5>
                                      <p className="mb-0">
                                        Lorem Ipsum dolor sit amet consectetur
                                      </p>
                                    </div>
                                    <span className="badge bg-education rounded-pill ms-auto">
                                      75
                                    </span>
                                  </div>
                                  <img
                                    src="images/topics/undraw_Educator_re_ju47.png"
                                    className="custom-block-image img-fluid"
                                    alt=""
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section
                className="timeline-section section-padding"
                id="section_3"
              >
                <div className="section-overlay" />
                <div className="container">
                  <div className="row">
                    <div className="col-12 text-center">
                      <h2 className="text-white mb-4">How does it work?</h2>
                    </div>
                    <div className="col-lg-10 col-12 mx-auto">
                      <div className="timeline-container">
                        <ul
                          className="vertical-scrollable-timeline"
                          id="vertical-scrollable-timeline"
                        >
                          <div className="list-progress">
                            <div className="inner" />
                          </div>
                          <li>
                            <h4 className="text-white mb-3">
                              Search your favourite topic
                            </h4>
                            <p className="text-white">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Reiciendis, cumque magnam? Sequi, cupiditate
                              quibusdam alias illum sed esse ad dignissimos
                              libero sunt, quisquam numquam aliquam? Voluptas,
                              accusamus omnis?
                            </p>
                            <div className="icon-holder">
                              <i className="bi-search" />
                            </div>
                          </li>
                          <li>
                            <h4 className="text-white mb-3">
                              Bookmark &amp; Keep it for yourself
                            </h4>
                            <p className="text-white">
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Sint animi necessitatibus
                              aperiam repudiandae nam omnis est vel quo, nihil
                              repellat quia velit error modi earum similique
                              odit labore. Doloremque, repudiandae?
                            </p>
                            <div className="icon-holder">
                              <i className="bi-bookmark" />
                            </div>
                          </li>
                          <li>
                            <h4 className="text-white mb-3">
                              Read &amp; Enjoy
                            </h4>
                            <p className="text-white">
                              Lorem, ipsum dolor sit amet consectetur
                              adipisicing elit. Animi vero quisquam, rem
                              assumenda similique voluptas distinctio, iste est
                              hic eveniet debitis ut ducimus beatae id? Quam
                              culpa deleniti officiis autem?
                            </p>
                            <div className="icon-holder">
                              <i className="bi-book" />
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-12 text-center mt-5">
                      <p className="text-white">
                        Want to learn more?
                        <a
                          href="#"
                          className="btn custom-btn custom-border-btn ms-3"
                        >
                          Check out Youtube
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              <section className="faq-section section-padding" id="section_4">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 col-12">
                      <h2 className="mb-4">Frequently Asked Questions</h2>
                    </div>
                    <div className="clearfix" />
                    <div className="col-lg-5 col-12">
                      <Image
                        src={faq_image}
                        className="img-fluid"
                        alt="FAQs"
                      />
                    </div>
                    <div className="col-lg-6 col-12 m-auto">
                      <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingOne">
                            <button
                              className="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              What is Topic Listing?
                            </button>
                          </h2>
                          <div
                            id="collapseOne"
                            className="accordion-collapse collapse show"
                            aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              Topic Listing is free Bootstrap 5 CSS template.{" "}
                              <strong>
                                You are not allowed to redistribute this
                                template
                              </strong>{" "}
                              on any other template collection website without
                              our permission. Please contact TemplateMo for more
                              detail. Thank you.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingTwo">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseTwo"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                            >
                              How to find a topic?
                            </button>
                          </h2>
                          <div
                            id="collapseTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              You can search on Google with{" "}
                              <strong>keywords</strong> such as templatemo
                              portfolio, templatemo one-page layouts,
                              photography, digital marketing, etc.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingThree">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseThree"
                              aria-expanded="false"
                              aria-controls="collapseThree"
                            >
                              Does it need to paid?
                            </button>
                          </h2>
                          <div
                            id="collapseThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingThree"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              You can modify any of this with custom CSS or
                              overriding our default variables. It's also worth
                              noting that just about any HTML can go within the{" "}
                              <code>.accordion-body</code>, though the
                              transition does limit overflow.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section
                className="contact-section section-padding section-bg"
                id="section_5"
              >
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12 col-12 text-center">
                      <h2 className="mb-5">Get in touch</h2>
                    </div>
                    <div className="col-lg-5 col-12 mb-4 mb-lg-0">
                      <iframe
                        className="google-map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2595.065641062665!2d-122.4230416990949!3d37.80335401520422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858127459fabad%3A0x808ba520e5e9edb7!2sFrancisco%20Park!5e1!3m2!1sen!2sth!4v1684340239744!5m2!1sen!2sth"
                        width="100%"
                        height={250}
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 mb-3 mb-lg- mb-md-0 ms-auto">
                      <h4 className="mb-3">Head office</h4>
                      <p>
                        Bay St &amp;, Larkin St, San Francisco, CA 94109, United
                        States
                      </p>
                      <hr />
                      <p className="d-flex align-items-center mb-1">
                        <span className="me-2">Phone</span>
                        <a
                          href="tel: 305-240-9671"
                          className="site-footer-link"
                        >
                          305-240-9671
                        </a>
                      </p>
                      <p className="d-flex align-items-center">
                        <span className="me-2">Email</span>
                        <a
                          href="mailto:info@company.com"
                          className="site-footer-link"
                        >
                          info@company.com
                        </a>
                      </p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 mx-auto">
                      <h4 className="mb-3">Dubai office</h4>
                      <p>Burj Park, Downtown Dubai, United Arab Emirates</p>
                      <hr />
                      <p className="d-flex align-items-center mb-1">
                        <span className="me-2">Phone</span>
                        <a
                          href="tel: 110-220-3400"
                          className="site-footer-link"
                        >
                          110-220-3400
                        </a>
                      </p>
                      <p className="d-flex align-items-center">
                        <span className="me-2">Email</span>
                        <a
                          href="mailto:info@company.com"
                          className="site-footer-link"
                        >
                          info@company.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </main>
            <footer className="site-footer section-padding">
              <div className="container">
                <div className="row">
                  <div className="col-lg-3 col-12 mb-4 pb-2">
                    <a className="navbar-brand mb-2" href="index.html">
                      <i className="bi-back" />
                      <span>Topic</span>
                    </a>
                  </div>
                  <div className="col-lg-3 col-md-4 col-6">
                    <h6 className="site-footer-title mb-3">Resources</h6>
                    <ul className="site-footer-links">
                      <li className="site-footer-link-item">
                        <a href="#" className="site-footer-link">
                          Home
                        </a>
                      </li>
                      <li className="site-footer-link-item">
                        <a href="#" className="site-footer-link">
                          How it works
                        </a>
                      </li>
                      <li className="site-footer-link-item">
                        <a href="#" className="site-footer-link">
                          FAQs
                        </a>
                      </li>
                      <li className="site-footer-link-item">
                        <a href="#" className="site-footer-link">
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-3 col-md-4 col-6 mb-4 mb-lg-0">
                    <h6 className="site-footer-title mb-3">Information</h6>
                    <p className="text-white d-flex mb-1">
                      <a href="tel: 305-240-9671" className="site-footer-link">
                        305-240-9671
                      </a>
                    </p>
                    <p className="text-white d-flex">
                      <a
                        href="mailto:info@company.com"
                        className="site-footer-link"
                      >
                        info@company.com
                      </a>
                    </p>
                  </div>
                  <div className="col-lg-3 col-md-4 col-12 mt-4 mt-lg-0 ms-auto">
                    <div className="dropdown">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        English
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <button className="dropdown-item" type="button">
                            Thai
                          </button>
                        </li>
                        <li>
                          <button className="dropdown-item" type="button">
                            Myanmar
                          </button>
                        </li>
                        <li>
                          <button className="dropdown-item" type="button">
                            Arabic
                          </button>
                        </li>
                      </ul>
                    </div>
                    <p className="copyright-text mt-lg-5 mt-4">
                      Copyright © 2048 Topic Listing Center. All rights
                      reserved.
                      <br />
                      <br />
                      Design:{" "}
                      <a
                        rel="nofollow"
                        href="https://templatemo.com"
                        target="_blank"
                      >
                        TemplateMo
                      </a>{" "}
                      Distribution{" "}
                      <a href="https://themewagon.com">ThemeWagon</a>
                    </p>
                  </div>
                </div>
              </div>
            </footer>

            <Script src="./js/jquery.min.js" />
            <Script src="./js/bootstrap.bundle.min.js" />
            <Script src="./js/jquery.sticky.js" />
            <Script src="./js/click-scroll.js" />
            <Script src="./js/custom.js" />
           

            
          </>
        );
};

export default Landing;
