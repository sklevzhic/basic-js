module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let newarr = [];
   for (let i = 0; i < members.length; i++) {
     if (typeof(members[i] === 'string')) {
      newarr.push(members[i].trim().substr(0, 1).toUpperCase())

     }
   }
   return newarr.sort().join("")
};