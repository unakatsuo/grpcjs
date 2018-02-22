import {grpc} from "grpc-web-client";

import {Echo} from "../pb/api_pb_service.js";
import {Request} from "../pb/api_pb.js";


import React from 'react';
import ReactDOM from 'react-dom';
import {Component1} from './component1'
  
ReactDOM.render(
  <Component1 />,
  document.getElementById('app')
);

function EchoCall(value) {
  const req = new Request();
  req.setValue(value);

  grpc.invoke(Echo.Call, {
    request: req,
    host: "http://localhost:9090/api",
    onMessage: (message) => {
      console.log("onMessage", message.toObject());
      alert(message.getValue());
    },
    onEnd: (code, msg, trailers) => {
      console.log("onEnd", code, msg, trailers);
    }
  });
}

EchoCall("Hello grpc-web-client");
