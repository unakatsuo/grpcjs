
Excercise for gRPC on browser
-------------------------------

https://github.com/daisuzu/example-grpc-web-client-js


Install dependencies:

```
npm install
go get -u go get -u github.com/golang/dep/cmd/dep
dep ensure
```

Generate sources:

```
npm run generate
# On Windows
npm run generate:win
go generate ./main.go
```

Build:

```
npm run build
go build ./main.go
```

Run:

```
./main
```