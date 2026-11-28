---
title: "Android Auto YouTube Limitations, Explained"
titleTemplate: false
description: "Android Auto YouTube limitations: Google allows audio, not video, while driving. What Google's docs say about parked video and the announced rollout."
headline: "Why YouTube video does not play in Android Auto, and what is changing"
date: "2026-11-28"
keyword: "android auto youtube limitations"
faq:
  [
    {
      "q": "Can I watch YouTube on Android Auto while driving?",
      "a": "No. Google's developer documentation lists the app categories Android Auto supports while driving, and video is not one of them. Video categories are for use while the car is parked.",
    },
    {
      "q": "Can I listen to YouTube Music in Android Auto?",
      "a": "Audio apps are a supported category in Android Auto. YouTube Music is an audio app, and Google names it among the media apps building for cars.",
    },
    {
      "q": "When will parked video come to Android Auto?",
      "a": "Google's Android Developers Blog said on 19 May 2026 that video while parked will start rolling out to compatible vehicles later that year, for phones running Android 17 and higher. Check Google's current documentation for the actual status.",
    },
  ]
---

# Why YouTube video does not play in Android Auto, and what is changing

<p class="post-meta">By <a href="https://halit.org">Halit Sever</a> · <time datetime="2026-11-28">28 November 2026</time></p>

<p class="lead">People expect YouTube on a car screen because the screen is there. Android Auto has not offered it, by design. This post explains the rules from Google's developer documentation, what Google announced in May 2026 about video while parked, and why this site does not link to workarounds.</p>

## What Android Auto allows while driving

Google's [Android for Cars developer overview](https://developer.android.com/training/cars) has a table of the app categories Android Auto and Android Automotive OS support, because, in Google's words, of considerations unique to cars. For Android Auto, the categories usable while driving include:

- **Media (audio):** music, radio, audiobooks and other audio. Google notes that the media category does not include video.
- **Communication:** messaging notifications read aloud, with voice replies.
- **Navigation:** turn-by-turn directions.
- **Points of interest:** parking, charging and fuel apps.
- **Internet of Things:** controls for connected devices, such as a garage door.
- **Weather.**

Video is not in that list. So the YouTube video app does not appear on the car screen, while audio from apps such as YouTube Music can play through Android Auto's media interface.

## Parked apps: video, games and browsers

Google's [parked apps documentation](https://developer.android.com/training/cars/parked) adds categories that only make sense when the car is not moving. At the time of writing, it listed:

| Category | Platform                               |
| -------- | -------------------------------------- |
| Video    | Android Automotive OS                  |
| Games    | Android Auto and Android Automotive OS |
| Browsers | Android Automotive OS                  |

So video while parked exists, but on cars with Android Automotive OS (Google built-in), not on Android Auto projected from a phone.

## What Google announced for Android Auto

The [Android Developers Blog post of 19 May 2026](https://android-developers.googleblog.com/2026/05/android-for-cars-unifying-platforms-premium-experiences.html) says that for the first time in Android Auto, users will be able to watch videos while parked, that apps like YouTube will be able to deliver 60fps HD playback, and that the capability will start rolling out to compatible vehicles later this year for users with phones running Android 17 and higher.

When this post was written, the developer documentation still listed video as an Android Automotive OS category only. Treat the rollout as announced, and check Google's pages for whether it has reached your phone and car.

## Why there is no workaround guide here

Searches for this topic lead to apps and tricks that put video on the car screen against Android Auto's rules. This site does not cover them. Video while driving is exactly what the rules exist to prevent, and modified apps can break with any Android Auto update.

The honest options are:

- Audio only while driving, through apps in the media category.
- Video while parked, on a car with Android Automotive OS today, or on Android Auto once Google's announced rollout reaches your car.

## Where a launcher fits

Omodroid is planned as a launcher and overlay for one car's head unit, not as an Android Auto app, and it is not meant to get around these rules. A launcher can only organise what the head unit's own system allows. See [Android Auto vs a head unit vs a launcher](/blog/android-auto-vs-head-unit) for the difference.

## FAQ

### Can I watch YouTube on Android Auto while driving?

No. Google's developer documentation lists the app categories Android Auto supports while driving, and video is not one of them. Video categories are for use while the car is parked.

### Can I listen to YouTube Music in Android Auto?

Audio apps are a supported category in Android Auto. YouTube Music is an audio app, and Google names it among the media apps building for cars.

### When will parked video come to Android Auto?

Google's Android Developers Blog said on 19 May 2026 that video while parked will start rolling out to compatible vehicles later that year, for phones running Android 17 and higher. Check Google's current documentation for the actual status.

## Related posts

- [Android Auto not working or not connecting: a checklist](/blog/android-auto-not-working)
- [Android Auto, Android head units and car launchers compared](/blog/android-auto-vs-head-unit)
- [How to check whether your car supports Android Auto](/blog/android-auto-supported-cars)
- [All posts](/blog/)
