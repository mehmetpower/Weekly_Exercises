# MADLIBS PROBLEM DESCRIPTION

- INPUTS:
  - `MadLibs = {InputNoun = "", InputVerb = "", InputAdverb = "", InputAdjective = ""}`
  - `InputNoun = ""`
  - `InputVerb = ""`
  - `InputAdverb = ""`
  - `InputAdjective = ""`
  - `Story = "The {MadLibs.InputAdjective()} dog eagerly chased the bouncing ball. The curious {MadLibs.InputNoun()} quietly explored the mysterious forest. The energetic child {MadLibs.InputAdverb()} danced in the sunny park. The wise owl silently {MadLibs.InputVerb()} the peaceful night.`

- PROCESS:
  - Ask user InputNoun
    - Update Madlibs InputNoun
  - Ask user InputVerb
    - Update Madlibs InputVerb
  - Ask user InputAdverb
    - Update Madlibs InputAdverb
  - Ask user InputAdjective
    - Update Madlibs InputAdjective

- OUTPUTS:
  - Display:  `The {MadLibs.InputAdjective()} dog eagerly chased the bouncing ball.`
              `The curious {MadLibs.InputNoun()} quietly explored the mysterious forest.`
              `The energetic child {MadLibs.InputAdverb()} danced in the sunny park.`
              `The wise owl silently {MadLibs.InputVerb()} the peaceful night.`

- CONSTRAINTS:
  - User should enter 4 words
  - Every words should be noun, verb, adverb or adjective.

- CORNER CASES:
  - User can mix the the Nouns, Verbs, Adverbs and Adjectives.

Original Phrase: "The excited dog eagerly chased the bouncing ball."
Original Phrase: "The curious cat quietly explored the mysterious forest."
Original Phrase: "The energetic child happily danced in the sunny park."
Original Phrase: "The wise owl silently watched the peaceful night."

# MADLIBS PSEUDO CODE
- STEP 1
  - We have an empty dictionary and an epmty story to be associated later
  - `MadLibs = {InputNoun = "", InputVerb = "", InputAdverb = "", InputAdjective = ""}`
  - `Story = "The {MadLibs.InputAdjective()} dog eagerly chased the bouncing ball. The curious {MadLibs.InputNoun()} quietly explored the mysterious forest. The energetic child {MadLibs.InputAdverb()} danced in the sunny park. The wise owl silently {MadLibs.InputVerb()} the peaceful night.`

- STEP 2
  - Update MadLibs dictionary Noun according to the inputs of the user
  - `InputNoun = ""`
  - Convert InputNoun to lowercase
  - Update MadLibs dictionary Verb according to the inputs of the user
  - `InputVerb = ""`
  - Convert InputVerb to lowercase
  - Update MadLibs dictionary Adverb according to the inputs of the user
  - `InputAdverb = ""`
  - Convert InputAdverb to lowercase
  - Update MadLibs dictionary Adjective according to the inputs of the user
  - `InputAdjective = ""`
  - Convert InputAdjective to lowercase

- STEP 3
  - Display updated story taking associated values from the updated MadLibs dictionary
  - Display:  `The {MadLibs.InputAdjective()} dog eagerly chased the bouncing ball.`
              `The curious {MadLibs.InputNoun()} quietly explored the mysterious forest.`
              `The energetic child {MadLibs.InputAdverb()} danced in the sunny park.`
              `The wise owl silently {MadLibs.InputVerb()} the peaceful night.`
  