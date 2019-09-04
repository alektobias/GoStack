import Reactotron from 'reactotron-react-js';

if (__DEV__) {
  const tron = Reactotron
    .configure()
    .useReactNative()
    .connect();

  tron.clear();

  console.tron = tron;
}
