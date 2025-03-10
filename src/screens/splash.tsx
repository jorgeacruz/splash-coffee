import { useState } from "react";
import { StyleSheet } from "react-native";
// import lib expo-av
import { ResizeMode, Video, AVPlaybackStatus } from "expo-av";
import { hideAsync } from "expo-splash-screen";

// tipo boolean para DidJustFinish
type Props = {
  onComplete:(status: boolean) => void;
}

export default function Splash({ onComplete }: Props) {

  const [lastStatus, setStatus] = useState<AVPlaybackStatus>({} as AVPlaybackStatus)

    function onPlaybackStatusUpdate(status: AVPlaybackStatus){
      
      // faz a verificação do status carregado
      if(status.isLoaded){
        hideAsync();
      }
      // quando video finaliza 
      if(status.didJustFinish) {
        onComplete(true);
      }
      
      // retorna status do compomenent video no console
      console.log(status.didJustFinish);

    }
 return (
   <Video
    // preencher tela toda
    style={StyleSheet.absoluteFill}
    resizeMode={ResizeMode.COVER}
    source={require('../../assets/splash.mp4')}
    isLooping={false}
    // responsavel por verificar estado do video
    onPlaybackStatusUpdate={onPlaybackStatusUpdate}
    // inicia o video
    shouldPlay={true}
   />
  );
}