import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DogList from './DogList';
import FilterDogDetails from './FilterDogDetails';

function Routess({ dogs }) {
  return (
    <Routes>
      <Route path="/dogs" element={<DogList dogs={dogs} />} />
      <Route path="/dogs/:name" element={<FilterDogDetails dogs={dogs} />} />
    </Routes>
  );
}

export default Routess;
