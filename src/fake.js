var useState = require('React').useState;

function mkOnSetData(name, item, setItem) {
  console.log("mkOnSetData");
  return () => {
    const newData = Math.random();
    console.log(`setting ${name} to `, newData);
    setItem(newData);
  }
};

function Thingy() {
  const [thingy, setThingy] = useState();
  console.log('rendering thingY: ', thingy);
  return mkOnSetData('thingy', thingy, setThingy)();
}

try {
  console.log(Thingy());
} catch (e) {
  console.log(3);
}
