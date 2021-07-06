/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";
import ericThielPic from "../public/images/ericthiel.jpg"

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <div id={styles.hero}>
        <div id={styles.heroInsideContainer}>
          <h1>Arroyo Del Valle</h1>
          <p>
            Project Creek Watch, started in the Fall of 1994, is a long term
            scientific study of the Arroyo Del Valle "Creek" located in the city
            of Pleasanton, California. This project is sponsored & coordinated
            by the Amador Valley High School Science Department which is part of
            the Pleasanton Unified School District. It was awarded the
            prestigious California Golden Bell Award for excellence in education
            in 1999.
          </p>
        </div>
      </div>
      <div id={styles.mainText}>
        <div id="about">
          <p className="not-hidden">
            <Image src={ericThielPic} id="ericthiel" alt="Image of Eric Thiel"/>
            
            The original website for Project Creek Watch was created by the late
            Eric Thiel, co-founder of the project. He was a valued member of the
            Amador Valley High School Science department from 1992-2017. <br />{" "}
            <br />
            The Arroyo Del Valle is a tributary branching from the Lake del
            Valle watershed. It winds its way through the town of Pleasanton.
            Pleasanton's Main Street passes over it and the historic Pleasanton
            Hotel sits along side the creek bank. What is now a creek{" "}
            <span className="mobile-hidden">
              {" "}
              used to be a significant tributary supporting a healthy steelhead
              population. Winter storms would create significant runoff and fill
              the Arroyo with enough water to allow fish to migrate inland to
              numerous spawning sites. As the city{" "}
              <span className="computer-hidden">
                {" "}
                of Pleasanton continued to grow and housing sprang up along the
                banks of the Arroyo, erosion became a major concern. Concrete
                pilings and rip rock was deposited at vulnerable bends in the
                Arroyo to curb erosion. Formation of local reservoirs needed to
                recharge the valleys underground aquifer, and water diversion
                for industry and recreational use led to a significant reduction
                of water flow and a channel that would end up being dry
                throughout most of the summer. Due to Kaiser Industries quarry
                operations, located by the Shadow Cliffs reservoir, there is
                currently water flow throughout the entire year. Their mining
                operations involves pumping water from the quarry site into the
                Del Valle channel creating what the Arroyo has become today.
                Duing our research there have been three occasions where
                diversion of water into the channel was stopped to accomodate
                maintenance operations. This led to the creek completely drying
                up below the Main Street Bridge and killing thousands of fish,
                amphibians, and countless numbers of aquatic insects. We have
                made efforts to insure that the company continues a supply of
                water so as to maintain the ecosystem that they have created.
                California Fish and Game have assisted us with this effort. For
                more about what we have observed, visit the Arroyo Field Guide,
                Arroyo Data Collection, or Arroyo Study Sites. The steelhead may
                be gone but the Arroyo still creates a wonderfull wetland
                habitat. Stoic trees, blue herons, belted kingfishers, large
                mouth black bass, blugill, racoons, and other interesting
                wildlife are still common in the Arroyo Del Valle. Many
                residents and local industry arent aware of what the Arroyo once
                was and what is has the potential to become. It is for this
                reason that the Amador Valley High School Science Department has
                begun the Arroyo Del Valle Creek Watch Project. Our mission is
                to use the creek as an outdoor laboratory. While learning basic
                concepts in both life and physical sciences students will
                hopefully develop an appreciation for one of Pleasanton's
                remaining natural resources and perhaps help to establish a more
                stable ecosystem.
              </span>
            </span>
          </p>
        </div>
        <div className="expandb">
          <i className="mdi mdi-arrow-down-drop-circle"></i>
        </div>

        {/* <Image src="images/banner2.jpg" alt="" id="banner" /> */}
        <div id="visit">
          <h2>Visiting the Creek</h2>
          <p>
            Visiting the creek site requires a short walk from Amador. We
            typically will get there and back in a single className period.
            While at the study site, Amador students assess water quality by
            collecting chemical measurements, capturing indicator species, and
            making qualitative observations regarding the abundance and
            distribution of flora and fauna. Grant money provided by the Amador
            Parent Teacher Student Association, Pleasanton Partners In Education
            and the Tri Valley Community Fund have enabled us to purchase the
            necessary tools to collect, store, and
            <span className="mobile-hidden">
              display what we have found. Significant changes have been observed
              over the years and fortunately most have been positive. Recently
              the city has followed our lead and began introducing native plant
              species accompanied by wire to protect the plants from deer and
              irrigation to sustain the young plants during the summer. We
              envision that one day the Arroyo Del Valle "creek" will be a place
              where members of the Pleasanton community will enjoy bringing
              their children to observe and appreciate an abundance of wildlife.
              We hope this web site will encourage you to visit the study area
              and become an active participant in the revitalization and
              beautification of this wonderful Pleasanton ecosystem. While
              there, if you see any Endangered Species or acquire information
              that may assist us in our research please e-mail
              ethiel@pleasanton.k12.ca.us.
            </span>
          </p>
        </div>
        <div className="expandb" id="expandb-mobile">
          <i className="mdi mdi-arrow-down-drop-circle"></i>
        </div>

        <div className="mtgrid">
          <div id="use">
            <h2>Using This Website</h2>
            Use the links in the navigation bar shown above to learn more about
            the Arroyo Del Valle, the Data that Amador students collect while at
            the study site, view images of some of the many organisms that can
            be found there, view images or take a virtual tour of the main study
            areas, enjoy some of the more beautiful images captured on camera,
            or marvel at some of the many research endeavors initiated by my
            students. The navigation bar is present on every page in the web
            site and should enable you to move in and around the site with ease.
          </div>
          <div id="im2">{/* <Image src="images/11.JPG" alt="" /> */}</div>
          <div id="goal">
            <h2>The Goal</h2>
            The goal of the project is to provide field experience opportunities
            for Amador science students while at the same time support efforts
            in transforming the "creek" channel into an environment that is
            respected, enjoyed, and maintained by the Pleasanton Community. The
            web site will hopefully act as inspiration to other organizations to
            initiate similar habitat reclamation projects and promote a
            heightened level of concern about the "Land Sea" connection. We all
            need to work together to reclaim all that has been overlooked or
            forgotten and stop the flow of toxics into our oceans. We must
            recognize that habitat protection and stable biologically diverse
            ecosystems must be a priority.
          </div>
          <div id="im1">{/* <Image src="images/4.jpg" alt="" /> */}</div>
        </div>
        <div id="filebar">
          <i className="mdi mdi-file-download-outline"></i>
          <ul>
            <li>
              <a href="pics/creekmap(1).jpg" target="_blank">
                Map
              </a>
            </li>
            <li>
              <a href="pics/satellite.jpg" target="_blank">
                Satellite View
              </a>
            </li>
          </ul>

          <span>Display Files</span>
        </div>
      </div>
    </>
  );
}
