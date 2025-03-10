import { StyleSheet } from "react-native";
// import lib expo-av
import { ResizeMode, Video, AVPlaybackStatus } from "expo-av";


export default function Splash() {
    function onPlaybackStatusUpdate(status: AVPlaybackStatus){
      // retorna status do compomenent video no console
      console.log(status.isLoaded);
    }
 return (
   <Video
    // preencher tela toda
    style={StyleSheet.absoluteFill}
    resizeMode={ResizeMode.COVER}
    source={require('../../assets/splash.mp4')}
    isLooping={false}
    // responsavel por verificar estado atual do video
    onPlaybackStatusUpdate={onPlaybackStatusUpdate}
    // inicia o video
    shouldPlay={true}
    
   />
  );
}