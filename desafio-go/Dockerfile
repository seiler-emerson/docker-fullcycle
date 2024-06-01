FROM golang:alpine as builder

WORKDIR /usr/src/app

COPY ./hello /usr/src/app
RUN go mod init hello
RUN go build -ldflags "-w" hello .

FROM scratch
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/hello .

ENTRYPOINT ["./hello"]