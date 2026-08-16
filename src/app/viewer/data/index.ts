import { part1Data } from "./part1";
import { part2Data } from "./part2";
import { part3Data } from "./part3";
import { part4Data } from "./part4";
import { part5Data } from "./part5";
import { part6Data } from "./part6";
import { part7Data } from "./part7";
import { part8Data } from "./part8";
import { part9Data } from "./part9";
import { part10Data } from "./part10";
import { part11Data } from "./part11";
import { part12Data } from "./part12";
import { part13Data } from "./part13";
import { part14Data } from "./part14";
import { part15Data } from "./part15";
import { part16Data } from "./part16";
import { part17Data } from "./part17";
import { part18Data } from "./part18";
import { part19Data } from "./part19";
import { part20Data } from "./part20";
import { schedulesData } from "./schedules";
import { backMatterData } from "./backmatter";

export const billData = {
  metadata: {
    title: "THE BUILT ENVIRONMENT PROFESSIONS AND PRACTICE BILL, 2026",
    short_title: "Built Environment Professions and Practice Act, 2026",
    bill_no: "National Assembly Bill No. 14 of 2026",
    date: "2026-08-14",
    status: "Proposed / Under Parliamentary Review",
    sponsor: "Ministry of Lands, Public Works, Housing and Urban Development",
    jurisdiction: "Republic of Kenya"
  },
  preamble: "AN ACT of Parliament to establish a comprehensive, coordinated regulatory framework for all built environment professions in Kenya; to establish the Kenya Built Environment Regulatory Council; to provide for competency-based registration, professional indemnity, risk-based practice regulation, continuous professional development, and professional conduct; to repeal the Architects and Quantity Surveyors Act (Cap. 525); and for connected purposes.",
  structure: [part1Data, part2Data, part3Data, part4Data, part5Data, part6Data, part7Data, part8Data, part9Data, part10Data, part11Data, part12Data, part13Data, part14Data, part15Data, part16Data, part17Data, part18Data, part19Data, part20Data],
  schedules: schedulesData,
  backMatter: backMatterData
};

export type SectionData = typeof billData.structure[0]["sections"][0];
