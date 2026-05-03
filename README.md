# ah-ah-ah extension For Quarto/RevealJS presentations

Add some nostalgic silliness (or cringe, depending on your audience) to your presentations with a snippet from the iconic ["ah-ah-ah, you didn't say the magic word" scene](https://www.youtube.com/watch?v=RfiQYRn7fBg) in Jurassic Park (1993).
Copyright of the imagery and audio remains that of Universal Studios and Amblin Entertainment, Inc., or whoever happens to own it at the time of reading this (it's certainly not me).
Code written by Claude.

## Installing

```bash
quarto add benharrap/ah-ah-ah
```

This will install the extension under the `_extensions` subdirectory.
If you're using version control, you will want to check in this directory.

Then in your RevealJS presentation YAML, add the following:

```
revealjs-plugins:
  - ah-ah-ah
```

## Using

Simply press `Z` on any slide to summon Wayne Knight at a random location.

## Example

Here is the source code for a minimal example: [example.qmd](example.qmd).

