---
title: "Android Auto vs Android Head Unit vs Car Launcher"
titleTemplate: false
description: "Android Auto, an Android head unit and a car launcher are three different things. What each one is, where apps run, and which one fits what you want to do."
headline: "Android Auto, Android head units and car launchers compared"
date: "2026-11-28"
keyword: "android auto head unit"
faq:
  [
    {
      "q": "Is an Android head unit the same as Android Auto?",
      "a": "No. Android Auto runs on your phone and shows its interface on the car's screen. An Android head unit is a car stereo that runs Android itself. Many Android head units can also show Android Auto from a phone.",
    },
    {
      "q": "What is Android Automotive OS?",
      "a": "Google describes it as an Android-based infotainment system built into the vehicle. Apps are installed on the car, not on the phone.",
    },
    {
      "q": "Can I install a launcher on any car screen?",
      "a": "Only where the system allows it. A launcher is an Android app, so the screen has to run Android and let you change the home app.",
    },
  ]
---

# Android Auto, Android head units and car launchers compared

<p class="post-meta">By <a href="https://halit.org">Halit Sever</a> · <time datetime="2026-11-28">28 November 2026</time></p>

<p class="lead">Search for an Android car screen and you get three answers mixed together: Android Auto, Android head units, and launchers. They solve different problems and run in different places. This post separates them, using Google's developer documentation for the definitions.</p>

## Three things, three places where apps run

|                 | Android Auto                                                        | Android head unit                                   | Car launcher                                         |
| --------------- | ------------------------------------------------------------------- | --------------------------------------------------- | ---------------------------------------------------- |
| What it is      | A phone app that projects a driving interface onto the car's screen | A car stereo or infotainment unit that runs Android | A home screen app laid out for a car display         |
| Where apps run  | On the phone                                                        | On the unit                                         | On the unit (it starts the apps installed there)     |
| Needs a phone   | Yes                                                                 | No                                                  | No                                                   |
| Which apps      | Only app types Google allows for cars                               | Whatever the unit's maker allows                    | Whatever is installed on the unit                    |
| Who controls it | Google and the app developers                                       | The unit's maker                                    | The launcher's developer, within the system's limits |

## Android Auto: projection from the phone

Google's [Android for Cars developer overview](https://developer.android.com/training/cars) describes Android Auto as a driver-optimized app experience for people with a phone running the Android Auto app and a compatible car or aftermarket stereo. The car's screen shows the interface, but the apps run on the phone.

Google limits Android Auto to certain app categories: audio media, messaging, navigation, points of interest, weather and similar, plus games that only work while parked. That is why general apps you have on your phone do not show up in the car. The [YouTube limitations post](/blog/android-auto-youtube-limitations) goes through what that means for video.

## Android Automotive OS: Android built into the car

The same Google page describes Android Automotive OS as an Android-based infotainment system built into vehicles. It is a standalone Android device in the dashboard, and you install apps on the car instead of on your phone. Cars sold as having Google built-in use it.

## Android head units: aftermarket and factory units that run Android

"Android head unit" is a broader, informal term. It covers aftermarket stereos that run an Android build and replace the factory radio, and factory units from car makers that build on Android. What you can do with one depends entirely on its maker: whether there is an app store, whether you can install apps, and whether the home screen can be changed.

Many aftermarket Android units also accept Android Auto or CarPlay from a phone, so one screen can run its own apps and project a phone. How they do it is up to the unit's vendor; for CarPlay, see [CarPlay on an Android head unit](/blog/carplay-on-android-head-unit).

## Car launchers: a home screen on top

A launcher is the app Android shows when you press Home. On a head unit that runs Android and lets you pick the home app, a car launcher replaces the stock home screen with one laid out for driving: large targets, landscape layout, navigation and music in reach. It does not add apps or features the system lacks; it organises what is there. The explainer [What an Android car launcher is](/android-car-launcher) covers launchers and overlays in more depth.

## Which one do you need?

- **Your car supports Android Auto and you want your phone's maps and music on the screen:** use Android Auto. Nothing to install on the car.
- **You want apps on the car itself, without a phone:** you need a unit that runs Android, either built in or aftermarket.
- **Your unit already runs Android and you dislike its home screen:** a launcher is the lightest change, if the system lets you set one.

## Where Omodroid fits

Omodroid is planned as a launcher and overlay for the Omoda 5 (2023) head unit. It is not an Android Auto app and not a replacement head unit. The repository has no code yet; see the [project status](/status) and the [Omoda 5 launcher page](/omoda-5-launcher).

## FAQ

### Is an Android head unit the same as Android Auto?

No. Android Auto runs on your phone and shows its interface on the car's screen. An Android head unit is a car stereo that runs Android itself. Many Android head units can also show Android Auto from a phone.

### What is Android Automotive OS?

Google describes it as an Android-based infotainment system built into the vehicle. Apps are installed on the car, not on the phone.

### Can I install a launcher on any car screen?

Only where the system allows it. A launcher is an Android app, so the screen has to run Android and let you change the home app.

## Related posts

- [Apple CarPlay on an Android head unit: how it works](/blog/carplay-on-android-head-unit)
- [How to check whether your car supports Android Auto](/blog/android-auto-supported-cars)
- [CAN bus basics for Android head unit projects](/blog/android-head-unit-canbus)
- [All posts](/blog/)
