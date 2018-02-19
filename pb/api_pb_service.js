// package: pb
// file: pb/api.proto

var jspb = require("google-protobuf");
var pb_api_pb = require("../pb/api_pb");
var Echo = {
  serviceName: "pb.Echo"
};
Echo.Call = {
  methodName: "Call",
  service: Echo,
  requestStream: false,
  responseStream: false,
  requestType: pb_api_pb.Request,
  responseType: pb_api_pb.Response
};
module.exports = {
  Echo: Echo,
};

