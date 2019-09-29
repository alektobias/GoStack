import Reactoron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactoron.configure()
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear();
}
