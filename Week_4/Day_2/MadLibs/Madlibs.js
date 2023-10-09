let MadLibs = {
  InputNoun: "",
  InputVerb: "",
  InputAdverb: "",
  InputAdjective: "",
};

MadLibs.InputNoun = prompt("Please enter a Noun: ");
MadLibs.InputVerb = prompt("Please enter a verb: ");
MadLibs.InputAdverb = prompt("Please enter an adverb: ");
MadLibs.InputAdjective = prompt("Please enter an adjective: ");

let Story = `The ${MadLibs.InputAdjective} dog eagerly chased the bouncing ball. The curious ${MadLibs.InputNoun} quietly explored the mysterious forest. The energetic child ${MadLibs.InputAdverb} danced in the sunny park. The wise owl silently ${MadLibs.InputVerb} the peaceful night.`;

console.log(Story)