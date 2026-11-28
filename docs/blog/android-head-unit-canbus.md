---
title: "Android Head Unit Wiring and CAN Bus Basics"
titleTemplate: false
description: "What CAN bus is, why Android head units need it for steering wheel buttons and car data, and why a pinout needs a source for your exact car before you wire it."
headline: "CAN bus basics for Android head unit projects"
date: "2026-11-28"
keyword: "android head unit canbus wiring diagram pinout"
faq:
  [
    {
      "q": "Where do I find the CAN bus pinout for my car?",
      "a": "From a source specific to your car's make, model and year, such as the maker's service documentation or the documentation of a harness or decoder made for that car. Do not reuse a pinout from a different model.",
    },
    {
      "q": "Does Omodroid read CAN bus data?",
      "a": "Nothing is published. Omodroid has no code yet, and the project has not documented how the Omoda 5 head unit is wired or what it runs.",
    },
    {
      "q": "Is it safe to connect directly to CAN bus?",
      "a": "Writing to a car's network can affect systems beyond the radio. Reading also needs the right connector and wiring. Work from documentation for your car, and leave it to a professional if unsure.",
    },
  ]
---

# CAN bus basics for Android head unit projects

<p class="post-meta">By <a href="https://halit.org">Halit Sever</a> · <time datetime="2026-11-28">28 November 2026</time></p>

<p class="lead">Anyone who replaces or extends a car's head unit runs into CAN bus sooner or later. Steering wheel buttons, reverse gear, door status and climate data often travel over it. This is a concept explainer for contributors to car screen projects like Omodroid. It deliberately contains no pinouts: a wiring diagram is only safe when it comes from a source for your exact car.</p>

## What CAN bus is

Controller Area Network (CAN) is a vehicle bus standardised as ISO 11898. Instead of a separate wire for every signal, the car's control units share a two-wire network, usually labelled CAN High and CAN Low, and send short messages to each other. The signal is the voltage difference between the two wires, which makes it resistant to electrical noise. Each message carries an identifier, and every unit on the bus reads the messages it cares about.

A car can have several CAN networks, for example one for the engine and chassis and another for comfort and infotainment, often joined by a gateway.

## What a head unit uses it for

A head unit that only played radio could work from power, ground and speaker wires. A modern unit wants more, and in many cars that information is on the CAN bus:

- Steering wheel button presses.
- Reverse gear, to switch to the rear camera.
- Ignition and illumination state.
- Vehicle speed, used by some units to lock settings while driving.
- Door, climate or parking sensor data, on cars that show them on the screen.

## How aftermarket Android units get the data

Many aftermarket Android head units do not decode a specific car's CAN messages themselves. A common arrangement is a car-specific harness with a small decoder box between the car's connector and the unit: it reads the car's messages and passes the unit simpler signals it understands. Which signals are supported depends on the decoder and the car, so the decoder maker's documentation is the reference.

## How Android Automotive OS handles car data

In cars built on Android Automotive OS, apps do not read the bus directly. Google's [Vehicle HAL documentation](https://source.android.com/docs/automotive/vhal) describes the Vehicle Hardware Abstraction Layer as an interface that defines the properties car makers can implement. Apps and system services read, write and subscribe to properties, each an abstraction for a specific function, and the car maker's implementation maps them to the vehicle's networks.

It is a useful model even outside Automotive OS: keep software talking to named car properties, and keep the bus-specific mapping in one place.

## Why there is no pinout here

Search results for "android head unit wiring diagram" are full of diagrams copied between forums without saying which car they came from. Connector shapes and colour codes look alike across models while the pin functions differ. A wrong pin can feed power into a data line.

Before you wire anything:

1. Identify the exact make, model, year and trim.
2. Get the pinout from documentation for that car: the maker's service information, or the harness or decoder maker's sheet.
3. Check against the car's own connector, not a photo.
4. If the car is under warranty, read what the warranty says about modifications.

## Where Omodroid stands

Omodroid is planned as a launcher and overlay for the Omoda 5 (2023) head unit. The project has not published anything about the car's wiring, its CAN messages or what the head unit runs, and this site does not guess. Contributors with documented findings can open an issue; see the [project status](/status).

## FAQ

### Where do I find the CAN bus pinout for my car?

From a source specific to your car's make, model and year, such as the maker's service documentation or the documentation of a harness or decoder made for that car. Do not reuse a pinout from a different model.

### Does Omodroid read CAN bus data?

Nothing is published. Omodroid has no code yet, and the project has not documented how the Omoda 5 head unit is wired or what it runs.

### Is it safe to connect directly to CAN bus?

Writing to a car's network can affect systems beyond the radio. Reading also needs the right connector and wiring. Work from documentation for your car, and leave it to a professional if unsure.

## Related posts

- [Android Auto, Android head units and car launchers compared](/blog/android-auto-vs-head-unit)
- [Apple CarPlay on an Android head unit: how it works](/blog/carplay-on-android-head-unit)
- [How to check whether your car supports Android Auto](/blog/android-auto-supported-cars)
- [All posts](/blog/)
