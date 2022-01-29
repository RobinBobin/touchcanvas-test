/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import TouchableCanvas from "@robinbobin/react-native-touch-canvas";
import React, {
  forwardRef,
  useCallback,
  useRef,
  useState
} from 'react';
import {
  Animated,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  GestureHandlerRootView,
  PanGestureHandler
} from "react-native-gesture-handler";

// import Canvas from "react-native-canvas";

/*
["https://unconflict.com/?attachment_id=2424", "https://unconflict.com/?attachment_id=2425", "https://unconflict.com/?attachment_id=2426", "https://unconflict.com/?attachment_id=2427", "https://unconflict.com/?attachment_id=2428", "https://unconflict.com/?attachment_id=2429", "https://unconflict.com/?attachment_id=2430", "https://unconflict.com/?attachment_id=2431", "https://unconflict.com/?attachment_id=2432", "https://unconflict.com/?attachment_id=2433", "https://unconflict.com/?attachment_id=2434", "https://unconflict.com/?attachment_id=2435"]
*/

export default function App() {
  const canvas = useRef();
  
  const onCreated = useCallback((canvas) => {
    const { context2d, rnCanvas } = canvas.getRefs();
    
    context2d.fillStyle = "blue";
    context2d.fillRect(10, 10, 100, 100);
    
    context2d.beginPath();
    
    context2d.lineWidth = 1;
    context2d.strokeStyle = "black";
    
    context2d.moveTo(0, 0);
    context2d.lineTo(rnCanvas.width, rnCanvas.height);
    
    context2d.stroke();
  }, []);
  
  const [canvasContainerStyle, setCanvasContainerStyle] = useState({
    backgroundColor: "turquoise",
    // flex: 1,
    alignSelf: "center",
    // justifyContent: "center",
    width: "75%"
  });
  
  return (
    <SafeAreaView
      style={{
        backgroundColor: "yellow",
        flex: 1,
        padding: 30
      }}
    >
      <View
        style={{
          justifyContent: "space-around",
          flexDirection: "row",
          marginBottom: 30
        }}
      >
        <Text
          onPress={() => {
            const { context2d } = canvas.current.getRefs();
            
            context2d.fillStyle = "green";
            context2d.fillRect(130, 30, 30, 30);
            
            // alert("pressed");
            
            // setCanvasContainerStyle({
            //   height: 50,
            //   overflow: "hidden"
            // });
          }}
          style={{
            fontSize: 25
          }}
        >
          1
        </Text>
        <Text
          onPress={() => {
            // canvas.current.switchToErasing();
            canvas.current.clear();
          }}
          style={{
            fontSize: 25
          }}
        >
          Erase
        </Text>
        <Text
          onPress={() => {
            canvas.current.switchToDrawing();
          }}
          style={{
            fontSize: 25
          }}
        >
          Draw
        </Text>
      </View>
      <TouchableCanvas
        backgroundImage={{uri: "https://unconflict.com/?attachment_id=2424"}}
        onCreated={onCreated}
        ref={canvas}
        containerStyle={canvasContainerStyle}
        style={{
          // backgroundColor: "white",
          borderColor: "black",
          borderWidth: StyleSheet.hairlineWidth,
          // flex: 1
          // height: "50%",
          // width: 300
        }}
      />
      {/* <View
        onLayout={({nativeEvent}) => {
          console.log(nativeEvent.layout);
        }}
        pointerEvents={"none"}
        style={{
          backgroundColor: "black",
          minHeight: 1
        }}
      /> */}
        {/* <ImageBackground
          source={backgroundImage}
          style={{
            // backgroundColor: "white",
            borderWidth: StyleSheet.hairlineWidth * 2,
            // height: 455,
            // width: 351.23809814453125
          }}
          zIndex={1}
        > */}
          {/* <Canvas
            ref={async canvas => {
              if (canvas) {
                canvas.height = 455;
                canvas.width = 351.23809814453125;
                
                const ctx = canvas.getContext("2d");
                
                console.log("2d");
                
                // ctx.fillStyle = "brown";
                // ctx.fillRect(0, 0, canvas.width, canvas.height);
                
                ctx.fillStyle = "blue";
                ctx.fillRect(20, 20, 100, 100);
                
                ctx.fillStyle = "pink";
                ctx.fillRect(60, 60, 200, 200);
                
                ctx.fillStyle = "rgba(0, 255, 0, 0.5)";
                ctx.fillRect(60, 270, 100, 100);
                
                ctx.globalCompositeOperation = "destination-out";
                
                ctx.fillRect(59, 120, 51, 50);
                
                ctx.beginPath();
                
                ctx.lineCap = "round";
                ctx.lineWidth = 15;
                ctx.strokeStyle = "#00000050";
                
                ctx.moveTo(20, 20);
                ctx.lineTo(100, 100);
                
                ctx.stroke();
              }
            }}
          /> */}
        {/* </ImageBackground> */}
      {/* </View> */}
    </SafeAreaView>
  );
};

const backgroundImage = require("./assets/1.png");


// const circleRadius = 30;
// export default class Circle extends React.Component {
//   _touchX = new Animated.Value(400 / 2 - circleRadius);
//   _onPanGestureEvent = Animated.event([{ nativeEvent: { x: this._touchX } }], {
//     useNativeDriver: true,
//   });
//   render() {
//     return (
//       <GestureHandlerRootView
//         style={{
//           backgroundColor: "green",
//           flex: 1
//         }}
//       >
//         <PanGestureHandler
//           onGestureEvent={this._onPanGestureEvent}
//           onHandlerStateChange={console.log}
//         >
//           <Animated.View
//             style={{
//               height: 150,
//               justifyContent: 'center',
//             }}>
//             <Animated.View
//               style={[
//                 {
//                   backgroundColor: '#42a5f5',
//                   borderRadius: circleRadius,
//                   height: circleRadius * 2,
//                   width: circleRadius * 2,
//                 },
//                 {
//                   transform: [
//                     {
//                       translateX: Animated.add(
//                         this._touchX,
//                         new Animated.Value(-circleRadius)
//                       ),
//                     },
//                   ],
//                 },
//               ]}
//             />
//           </Animated.View>
//         </PanGestureHandler>
//       </GestureHandlerRootView>
//     );
//   }
// }
