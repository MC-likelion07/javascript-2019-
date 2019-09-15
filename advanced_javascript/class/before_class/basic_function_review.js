//1
function lion_king(name, age) {
  console.log(name, age);
}

lion_king("king", 22);

//2
const lion = {
  queen: function(name, age) {
    return `I'm lion ${name}. I'm ${age} years old.`;
  }
};
console.log(lion.queen("queen", 22));
