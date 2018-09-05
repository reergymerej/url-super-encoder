# url-super-encoder

[![Build Status](https://travis-ci.com/reergymerej/url-super-encoder.svg?token=AiAzfY2MJmZkDBAp517s&branch=master)](https://travis-ci.com/reergymerej/url-super-encoder)


## Why?

I want to provide an extremely configurable web service that has options turned
on/off in the URL.

URL length is limited, so these need to be highly compressed.

I need a magic decoder ring to interpret these URLs and correlate them to
options.

I do _not_ want to talk to another service.


## Thoughts

This has nothing to do with URLs.  One use case is to pull config options from a
URL, but that's just one source.  What we really want is just the
decoder/encoder parts.  If that's used in a URL, cool, but it doesn't really
matter.


We shouldn't stick to binary.  Use `[0-9a-zA-Z]` or even Unicode.


We basically need data types and malloc-kinda stuff.
  * bool - 0/1
  * strings/char - one "bit" each, known length
  * num/int/float/etc - will lose accuracy if exponential notation used

  Initially, let's stick with booleans.
  Then enums using a single bit.


We need encoding and decoding.


## Examples

```js
{
  foo: false,
  bar: true,
  baz: false,
  quux: true,
}
```

encodes to (note leading 0)

```
0101
```

decodes, using key (names and order of values)

```js
{
  foo: false,
  bar: true,
  baz: false,
  quux: true,
}
```

## Dev

`yarn test` and all that
