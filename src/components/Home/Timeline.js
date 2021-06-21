import React from "react";
import "./Timeline.css";

export default function Timeline() {
  return (
    <div className="Timeline">
      <div className="containerTimeline">
        <div className="main">
          <ul className="timeline">
            <li>
              <time className="tmtime" datetime="2017-07-27">
                <span>July 27, 2017</span>
              </time>
              <div className="icon icon-phone"></div>
              <div className="label">
                <p>
                  Manitoba Government Health Minister Hon. Kelvin Goertzen
                  announced future closures of EMS stations in Manitoba, with
                  Grandview being one of the seventeen planned closures.
                </p>
              </div>
            </li>
            <li>
              <time className="tmtime" datetime="2017-08-22">
                <span>August 22, 2017</span>
              </time>
              <div className="icon icon-phone"></div>
              <div className="label">
                <p>
                  {" "}
                  Grandview held a Town Hall meeting to protest closure of
                  Grandview EMS Station. Over 500 attended the meeting to
                  express their disagreement with the plan to their MLA Brad
                  Michaleski.
                </p>
              </div>
            </li>
            <li>
              <time className="tmtime" datetime="2017-09-01">
                <span>September 2017</span>
              </time>
              <div className="icon icon-phone"></div>
              <div className="label">
                <p>
                  Grandview Healthcare Solutions formed as a group to organize
                  support for maintaining Grandview EMS Station and Hospital.
                  Group met with Tootinaowaziibeeng Treaty Reserve community
                  leaders. An invitation was extended to Grandview to attend Pow
                  wow being held September 6th. Letter writing and phone call
                  campaign was organized. A petition was circulated supporting
                  the need to maintain the Grandview EMS station. 2,666
                  signatures were collected from Grandview, Tootinaowaziibeeng
                  and communities across the province.
                </p>
              </div>
            </li>
            <li>
              <time className="tmtime" datetime="2017-11-25">
                <span>November 25, 2017</span>
              </time>
              <div className="icon icon-phone"></div>
              <div className="label">
                <p>
                  {" "}
                  Grandview and Tootinaowaziibeeng held a Fall Feast at the
                  Kinsman Hall that raised $10,000 to support the work of
                  Grandview Healthcare Solutions. Guest speakers were MLA Jon
                  Gerrard, our MLA Brad Michaleski and Leader of the Opposition
                  Wab Kinew.
                </p>
              </div>
            </li>
            <li>
              <time className="tmtime" datetime="2017-12-06">
                <span>December 6, 2017</span>
              </time>
              <div className="icon icon-phone"></div>
              <div className="label">
                <p>
                  Dr. Jon Gerrard, MLA for River Heights presented the Grandview
                  petition to the Manitoba Legislature. Community members
                  attended Question and Answer period for the final
                  presentation.
                </p>
              </div>
            </li>
            <li>
              <time className="tmtime" datetime="2018">
                <span>2018</span>
              </time>
              <div className="icon icon-phone"></div>
              <div className="label">
                <p>
                  {" "}
                  Arrangements were made to have a research team from McMaster
                  University develop a report to answer the question, “Why Does
                  the Grandview Healthcare Model Work?”. The researchers are Dr.
                  Chelsea Gabel, Director of Indigenous Health Research and
                  Alicia Powell, a PhD candidate in the Department of Health,
                  Aging and Society. Research was done over the next two years
                  and financed with funds raised at the Fall Feast.
                </p>
              </div>
            </li>
            <li>
              <time className="tmtime" datetime="2018-2020">
                <span>2018-2020</span>
              </time>
              <div className="icon icon-phone"></div>
              <div className="label">
                <p>
                  The Stewardship Committee of Grandview Healthcare Solutions
                  continued to advocate for healthcare services close to home
                  for Grandview and Tootinaowaziibeeng, and attended meetings
                  with Prairie Mountain Health and Manitoba Shared Health. The
                  group monitored the release of all healthcare related
                  government reports, worked with the municipal government to
                  aid in the recruitment of doctors, and organized and hosted
                  the community forum for the Provincial election in 2019.
                </p>
              </div>
            </li>
            <li>
              <time className="tmtime" datetime="2020-03-01">
                <span>March -September 2020</span>
              </time>
              <div className="icon icon-phone"></div>
              <div className="label">
                <p>
                  Fundraising was done to purchase equipment for the Grandview
                  Medical Clinic to be better equipped to handle possible Covid
                  19 outbreaks. We worked with non profit organizations to
                  provide food to the staff of both the hospital and PCH during
                  the covid shutdown
                </p>
              </div>
            </li>
            <li>
              <time className="tmtime" datetime="2020-11-01">
                <span>November -December 2020</span>
              </time>
              <div className="icon icon-phone"></div>
              <div className="label">
                <p>
                  November 25, Prairie Mountain Health announced the closure of
                  Grandview District Hospital effective November 26, to move
                  hospital staff to the Grandview Personal Care Home to deal
                  with a Covid 19 outbreak. Grandview Healthcare Solutions
                  arranged a car rally for the morning of November 26 to escort
                  patients from Grandview Hospital being moved to Dauphin
                  Hospital. This served as a community protest on not being
                  consulted about the hospital closure and the possibility of
                  other solutions. The group continued to advocate for the
                  reopening of the hospital. Chief and Council of
                  Tootnaowaziibeeng Treaty Reserve posted their letter to the
                  Manitoba Government, in local newspapers, that they would be
                  taking legal actions if the hospital was not reopened. Prairie
                  Mountain Health reopened the Grandview District Hospital
                  December 21, 2020.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
