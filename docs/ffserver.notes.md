# Feeds

The feed publish URL is given by:

```
http://ffserver_ip_address:http_port/feed_name
```

`http_port` is configured by the `HTTPPort` options
`feed_name` is defined in the ffserver.conf file, per feed


For raspicam:

`feed_name = raspicam.ffm`


# Streams

The stream access HTTP URL is given by:

```
http://ffserver_ip_address:http_port/stream_name[options]
```

If a stream is associated to a feed, the encoding parameters must be configured in the stream configuration.

## Stream URL Query Params

`buffer=5` tells ffserver to start the stream 5 seconds in the past, which improves the startup experience for most players.
