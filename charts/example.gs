title: "Basic Rock Beat"
tempo: 100
time_signature: 4/4

# A groove is a repeating pattern. BD = bass drum, SN = snare, HH = hihat.
# *8 means "play on every eighth note" (1, 1&, 2, 2&, 3, 3&, 4, 4&).
groove "rock beat":
  kick: 1 3
  snare: 2 4
  hihat: *8

# A fill is a short departure from the groove, placed at a specific moment.
fill "bar 4 fill":
  count "3 e & a 4":
    3:  snare
    3e: snare
    3&: snare
    3a: snare
    4:  kick crash

# Sections define the song structure.
# "bars: 4" means this section runs for 4 bars.
section "intro":
  bars: 4
  groove: "rock beat"

section "verse":
  bars: 8
  groove: "rock beat"
  fill "bar 4 fill" at bar 4 beat 3

section "chorus":
  bars: 8
  groove: "rock beat"
  # A variation tweaks the groove at a specific bar without rewriting it.
  variation "open hihat" at bar 8:
    replace hihat with openhat at 1
  fill "bar 4 fill" at bar 8 beat 3
