package main

import (
	"log"
	"net"
	"net/http"

	"github.com/improbable-eng/grpc-web/go/grpcweb"
	"github.com/unakatsuo/grpcjs/pb"
	context "golang.org/x/net/context"
	"google.golang.org/grpc"
)

type EchoService struct{}

func (s *EchoService) Call(ctx context.Context, req *pb.Request) (*pb.Response, error) {
	log.Print("Call: ", req)
	return &pb.Response{Value: "xxx"}, nil
}

//go:generate protoc --go_out=plugins=grpc:. ./pb/api.proto
func main() {
	log.SetFlags(log.Lshortfile | log.Lmicroseconds)
	//opts := []grpc.ServerOption{grpc.Creds(creds)}
	//gs := grpc.NewServer(opts...)
	gs := grpc.NewServer()
	pb.RegisterEchoServer(gs, &EchoService{})

	ws := grpcweb.WrapServer(gs)
	mux := http.NewServeMux()
	mux.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("./static"))))
	mux.Handle("/api/", http.StripPrefix("/api/", http.HandlerFunc(ws.ServeHTTP)))

	l, err := net.Listen("tcp", ":9090")
	if err != nil {
		log.Print(err)
		return
	}
	defer l.Close()
	log.Print("Start to listen: ", l.Addr())
	if err := http.Serve(l, mux); err != nil {
		log.Print(err)
	}
}
