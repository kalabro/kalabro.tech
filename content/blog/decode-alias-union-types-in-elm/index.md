---
title: Decode Alias and Union Types in Elm
description: I’m so exited to open this blog with a post about Elm, a functional programming language for building web frontend. As a user, I interact with Elm almost every day...
date: "2018-01-21T18:58:34.115Z"
image: mentor-eye.jpg
---

I’m so exited to open this blog with a post about Elm, a functional programming language for building web frontend. As a user, I interact with Elm almost every day — we at SystemSeed use [Pivotal Tracker](https://www.pivotaltracker.com/blog/Elm-pivotal-tracker/) as a project management tool.

As a developer, I started playing with Elm after a year of React experience and I found some of Elm concepts very easy to get started with, especially if you are familiar with Redux.

Still, things like decoders are quite new to me and I recently spent some time reviewing [the docs](https://guide.elm-lang.org/interop/json.html) and [demystifying decoders](https://github.com/zwilias/elm-demystify-decoders).

There are a lot of examples of how to decode JSON objects into Elm alias types. Let me start with yet another one and then enhance it to use union types.

## Decoding into alias types

I'm going to decode the following piece of JSON from api.themoviedb.org into a `Movie`:

```json
{
  "homepage": "http://www.thegodfather.com/",
  "id": 238,
  "imdb_id": "tt0068646",
  "original_language": "en",
  "original_title": "The Godfather",
  "overview": "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family...",
  "popularity": 64.346383,
  "release_date": "1972-03-14",
  "original_language": "en",
  "title": "The Godfather"
}
```


Let's take a look at `Movie` alias type:

```elm
type alias Movie =
    { title : String
    , description : String
    , year : String
    , language : String
    }
```


There are four simple string fields and that's it, so it should be fairly easy to decode. Let's pick up an appropriate mapping function [`map4`](http://package.elm-lang.org/packages/elm-lang/core/5.1.1/Json-Decode#mapping) and write a decoder:

```elm
decodeMovie : Decoder Movie
decodeMovie =
    Json.Decode.map4 Movie
        (field "title" string)
        (field "overview" string)
        (field "release_date" string)
        (field "original_language" string)
```

`map4` takes a function and runs four decoders to pass as params to that function. In our case `map4` will call `Movie` counstructor and pass four decoded strings in the order which `Movie` counstructor expects. That looks pretty good so far exept the `year` field. I'd rather use integer for that. Let's decode a string of format `YYYY-MM-DD` from our JSON into an integer field instead:

```elm
type alias Movie =
    { title : String
    , description : String
    , year : Int
    , language : String
    }
```

Below is an example solution for this task:

```elm
decodeMovie : Decoder Movie
decodeMovie =
    Json.Decode.map4 Movie
        (field "title" string)
        (field "overview" string)
        (field "release_date" string |> andThen decodeYear)
        (field "original_language" string)

-- Takes a string in YYYY-MM-DD format and tries to decode YYYY into integer.
decodeYear : String -> Decoder Int
decodeYear releaseDate =
    let
        -- Get first 4 characters from the left side of a string
        -- add pass them into toInt function which will return a Result.
        result = String.left 4 releaseDate |> String.toInt
    in
        case result of
        Ok year ->
            succeed year
        Err error ->
            fail error
```

`andThen` in `string |> andThen decodeYear` combines two decoders into one: first, decode JSON into a string and then call another decoder for that string.

You can also delegate Result handling from `decodeYear` function to `fromResult` helper from Json.Extra library. You can read more about it [here](https://www.brianthicks.com/post/2017/01/13/create-custom-json-decoders-in-elm-018/#in-real-life-use-fromresult-from-json-decode-extra).

```elm
decodeMovie : Decoder Movie
decodeMovie =
    Json.Decode.map4 Movie
        (field "title" string)
        (field "overview" string)
        (field "release_date" string |> andThen (decodeYear >> JsonExtra.fromResult))
        (field "original_language" string)


-- Takes a string in YYYY-MM-DD format and tries to parse YYYY into integer.
decodeYear : String -> Result String Int
decodeYear releaseDate =
    -- Get first 4 characters from the left side of a string
    -- add pass them into toInt function which will return a Result.
    String.left 4 releaseDate |> String.toInt
```

Cool! Time to play with union types.

## Decoding into union types

Let's introduce a new union type for the `language` field. That field will differentiate English movies from others and also store language codes and original titles of foreign films so we can display them in a specific way if we want.

```elm
type alias Movie =
    { title : String
    , description : String
    , year : Int
    , language : Language
    }


-- Language can be either English or Other.
-- Other encapsulates language code and original title values.
type Language
    = English
    | Other Langcode OriginalTitle

-- Langcode and OriginalTitle are just strings.
type alias Langcode = String
type alias OriginalTitle = String
```

First, I'll create a function which takes a language code and an original title and returns a new `Language`:

```elm
initLanguage : Langcode -> OriginalTitle -> Language
initLanguage langcode title =
    if langcode == "en" then
        English
    else
        Other langcode title
```

There is nothing to do with decoders yet. We've just prepared a universal "constructor" to initiate `Language` from two passed params.

Those two params should be decoded into strings first and then passed to `initLanguage`. Sounds like `map2`:

```elm
decodeLanguage : Decoder Language
decodeLanguage =
    Json.Decode.map2 initLanguage
        (field "original_language" string)
        (field "original_title" string)
```

Finally, let's call this custom decoder from our parent decoder:

```elm
decodeMovie =
    Json.Decode.map4 Movie
        (field "title" string)
        (field "overview" string)
        (field "release_date" string |> andThen (decodeYear >> JsonExtra.fromResult))
        (decodeLanguage)
```

Instead of extracting data into a field directly in `map4` function I passed a custom decoder which will process multiple fields by calling `map2` and then return `Decoder Language` which is what `map4` expects in our case.


Full code example is available here: https://ellie-app.com/nQWbXjrTBa1/2

Please contact me in Twitter if you've got any comment on that. So far thanks for reading and happy decoding!