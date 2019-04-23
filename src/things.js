import React, { useState } from 'react';

function mkOnSetData(name, item, setItem) {
  console.log("mkOnSetData");
  return () => {
    const newData = Math.random();
    console.log(`setting ${name} to `, newData);
    setItem(newData);
  }
};

export function Thingy() {
  const [thingy, setThingy] = useState();
  console.log('rendering thingY: ', thingy);
  return (
    <div className="App">
      Thingy
      <button onClick={mkOnSetData('thingy', thingy, setThingy)}>
        set data
      </button>
    </div>
  );
}

export function Thinger() {
  const [thinger, setThinger] = useState();
  console.log('rendering thingER: ', thinger);
  return (
    <div className="App">
      Thinger
      <button onClick={mkOnSetData('thinger', thinger, setThinger)}>
        set data
      </button>
    </div>
  );
}
