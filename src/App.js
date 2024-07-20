import styled from "styled-components";
import "./App.css";
import React,{useState} from "react";
import Tooltip from "./conponents/Tooltip";
import Slider from "./conponents/Slider";
import Poper from "./conponents/Poper";
import TimePickerDigital from "./conponents/timepicker/TimePickerDigital";
import Autocomplete from "./conponents/Autocomplete";
import List from "./conponents/List";

import userdata from "../src/data/userdata.json"


function App() {

  const [options , setOptions] = useState(userdata);


  const getSelectedOption = (val)=>{
    console.log('val', val)
  }

  return (
    <div className="App">
      {/* <div>
      <p>
          A paragraph is a series of sentences that are organized and coherent,
          and are all related to a single topic. Almost every piece of writing you
          do that is longer than a few sentences should be organized into
          paragraphs. This is because paragraphs show a reader where the
          subdivisions of an essay begin and end, and thus help the reader see the
          organization of the essay and grasp its main points. Paragraphs can
          contain many different kinds of information. A paragraph could contain a
          series of brief examples or a single long illustration of a general
          point. It might describe a place, character, or process; narrate a
          series of events; compare or contrast two or more things; classify items
          into categories; or describe causes and effects. Regardless of the kind
          of information they contain, all paragraphs share certain
          characteristics. One of the most important of these is a topic sentence.
        </p>
        <p>
          A paragraph is a series of sentences that are organized and coherent,
          and are all related to a single topic. Almost every piece of writing you
          do that is longer than a few sentences should be organized into
          paragraphs. This is because paragraphs show a reader where the
          subdivisions of an essay begin and end, and thus help the reader see the
          organization of the essay and grasp its main points. Paragraphs can
          contain many different kinds of information. A paragraph could contain a
          series of brief examples or a single long illustration of a general
          point. It might describe a place, character, or process; narrate a
          series of events; compare or contrast two or more things; classify items
          into categories; or describe causes and effects. Regardless of the kind
          of information they contain, all paragraphs share certain
          characteristics. One of the most important of these is a topic sentence.
        </p>
        <p>
          A paragraph is a series of sentences that are organized and coherent,
          and are all related to a single topic. Almost every piece of writing you
          do that is longer than a few sentences should be organized into
          paragraphs. This is because paragraphs show a reader where the
          subdivisions of an essay begin and end, and thus help the reader see the
          organization of the essay and grasp its main points. Paragraphs can
          contain many different kinds of information. A paragraph could contain a
          series of brief examples or a single long illustration of a general
          point. It might describe a place, character, or process; narrate a
          series of events; compare or contrast two or more things; classify items
          into categories; or describe causes and effects. Regardless of the kind
          of information they contain, all paragraphs share certain
          characteristics. One of the most important of these is a topic sentence.
        </p>
        <p>
          A paragraph is a series of sentences that are organized and coherent,
          and are all related to a single topic. Almost every piece of writing you
          do that is longer than a few sentences should be organized into
          paragraphs. This is because paragraphs show a reader where the
          subdivisions of an essay begin and end, and thus help the reader see the
          organization of the essay and grasp its main points. Paragraphs can
          contain many different kinds of information. A paragraph could contain a
          series of brief examples or a single long illustration of a general
          point. It might describe a place, character, or process; narrate a
          series of events; compare or contrast two or more things; classify items
          into categories; or describe causes and effects. Regardless of the kind
          of information they contain, all paragraphs share certain
          characteristics. One of the most important of these is a topic sentence.
        </p> <p>
          A paragraph is a series of sentences that are organized and coherent,
          and are all related to a single topic. Almost every piece of writing you
          do that is longer than a few sentences should be organized into
          paragraphs. This is because paragraphs show a reader where the
          subdivisions of an essay begin and end, and thus help the reader see the
          organization of the essay and grasp its main points. Paragraphs can
          contain many different kinds of information. A paragraph could contain a
          series of brief examples or a single long illustration of a general
          point. It might describe a place, character, or process; narrate a
          series of events; compare or contrast two or more things; classify items
          into categories; or describe causes and effects. Regardless of the kind
          of information they contain, all paragraphs share certain
          characteristics. One of the most important of these is a topic sentence.
        </p>
        <p>
          A paragraph is a series of sentences that are organized and coherent,
          and are all related to a single topic. Almost every piece of writing you
          do that is longer than a few sentences should be organized into
          paragraphs. This is because paragraphs show a reader where the
          subdivisions of an essay begin and end, and thus help the reader see the
          organization of the essay and grasp its main points. Paragraphs can
          contain many different kinds of information. A paragraph could contain a
          series of brief examples or a single long illustration of a general
          point. It might describe a place, character, or process; narrate a
          series of events; compare or contrast two or more things; classify items
          into categories; or describe causes and effects. Regardless of the kind
          of information they contain, all paragraphs share certain
          characteristics. One of the most important of these is a topic sentence.
        </p>
      
        <Autocomplete/>
        <p>
          A paragraph is a series of sentences that are organized and coherent,
          and are all related to a single topic. Almost every piece of writing you
          do that is longer than a few sentences should be organized into
          paragraphs. This is because paragraphs show a reader where the
          subdivisions of an essay begin and end, and thus help the reader see the
          organization of the essay and grasp its main points. Paragraphs can
          contain many different kinds of information. A paragraph could contain a
          series of brief examples or a single long illustration of a general
          point. It might describe a place, character, or process; narrate a
          series of events; compare or contrast two or more things; classify items
          into categories; or describe causes and effects. Regardless of the kind
          of information they contain, all paragraphs share certain
          characteristics. One of the most important of these is a topic sentence.
        </p>
        <p>
          A paragraph is a series of sentences that are organized and coherent,
          and are all related to a single topic. Almost every piece of writing you
          do that is longer than a few sentences should be organized into
          paragraphs. This is because paragraphs show a reader where the
          subdivisions of an essay begin and end, and thus help the reader see the
          organization of the essay and grasp its main points. Paragraphs can
          contain many different kinds of information. A paragraph could contain a
          series of brief examples or a single long illustration of a general
          point. It might describe a place, character, or process; narrate a
          series of events; compare or contrast two or more things; classify items
          into categories; or describe causes and effects. Regardless of the kind
          of information they contain, all paragraphs share certain
          characteristics. One of the most important of these is a topic sentence.
        </p>
        <p>
          A paragraph is a series of sentences that are organized and coherent,
          and are all related to a single topic. Almost every piece of writing you
          do that is longer than a few sentences should be organized into
          paragraphs. This is because paragraphs show a reader where the
          subdivisions of an essay begin and end, and thus help the reader see the
          organization of the essay and grasp its main points. Paragraphs can
          contain many different kinds of information. A paragraph could contain a
          series of brief examples or a single long illustration of a general
          point. It might describe a place, character, or process; narrate a
          series of events; compare or contrast two or more things; classify items
          into categories; or describe causes and effects. Regardless of the kind
          of information they contain, all paragraphs share certain
          characteristics. One of the most important of these is a topic sentence.
        </p>
        <p>
          A paragraph is a series of sentences that are organized and coherent,
          and are all related to a single topic. Almost every piece of writing you
          do that is longer than a few sentences should be organized into
          paragraphs. This is because paragraphs show a reader where the
          subdivisions of an essay begin and end, and thus help the reader see the
          organization of the essay and grasp its main points. Paragraphs can
          contain many different kinds of information. A paragraph could contain a
          series of brief examples or a single long illustration of a general
          point. It might describe a place, character, or process; narrate a
          series of events; compare or contrast two or more things; classify items
          into categories; or describe causes and effects. Regardless of the kind
          of information they contain, all paragraphs share certain
          characteristics. One of the most important of these is a topic sentence.
        </p> <p>
          A paragraph is a series of sentences that are organized and coherent,
          and are all related to a single topic. Almost every piece of writing you
          do that is longer than a few sentences should be organized into
          paragraphs. This is because paragraphs show a reader where the
          subdivisions of an essay begin and end, and thus help the reader see the
          organization of the essay and grasp its main points. Paragraphs can
          contain many different kinds of information. A paragraph could contain a
          series of brief examples or a single long illustration of a general
          point. It might describe a place, character, or process; narrate a
          series of events; compare or contrast two or more things; classify items
          into categories; or describe causes and effects. Regardless of the kind
          of information they contain, all paragraphs share certain
          characteristics. One of the most important of these is a topic sentence.
        </p>
        <p>
          A paragraph is a series of sentences that are organized and coherent,
          and are all related to a single topic. Almost every piece of writing you
          do that is longer than a few sentences should be organized into
          paragraphs. This is because paragraphs show a reader where the
          subdivisions of an essay begin and end, and thus help the reader see the
          organization of the essay and grasp its main points. Paragraphs can
          contain many different kinds of information. A paragraph could contain a
          series of brief examples or a single long illustration of a general
          point. It might describe a place, character, or process; narrate a
          series of events; compare or contrast two or more things; classify items
          into categories; or describe causes and effects. Regardless of the kind
          of information they contain, all paragraphs share certain
          characteristics. One of the most important of these is a topic sentence.
        </p>
      </div> */}
     <Autocomplete options={options} loading={true} getOptionLabel={(val)=> val.email } getSelectedOption={getSelectedOption}  />

     {/* <List /> */}
    </div>
  );
}

export default App;
