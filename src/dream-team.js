const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let filteredMembers = [];
  if(Array.isArray(members) && members.length) {
    members.forEach(member => {
      if (typeof member === 'string') {
        filteredMembers.push(member.replace(/\s/g, ''));
      }
    })
  }
  else {
    return false;
  }
  return filteredMembers.map(member => member[0].toUpperCase()).sort().join('');
};
