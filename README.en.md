# TH10 — Mountain of Faith

[中文](README.md)

This repository owns the game's C++/SDL Runtime, title-specific state, and original file semantics. It remains an independently versioned root submodule of eagler-touhou. The Web launcher and site assembly live in the main project's `launcher/web/` directory.

From the main project root:

```text
npm run dependencies -- init th10
npm run runtime -- th10 --emsdk "<SDK>" --font-root "<FONT_DIRECTORY>"
```

The October 2026 engineering audit built the ordinary Web target. See the Chinese [maintenance guide](docs/MAINTENANCE.md) for exact validation scope and remaining limits; compilation alone does not establish complete gameplay, multiplayer, or device acceptance.

Original game data, music, user files, and toolchains are external inputs. Preserve component-specific licenses and notices. Original game resources are not covered by a blanket source-code license.
