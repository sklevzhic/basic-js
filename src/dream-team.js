module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let newarr = [];

   members.forEach(el => {
     if (typeof(el) === 'string') {
      newarr.push(el.trim().substr(0, 1).toUpperCase())
     }
   })
   return newarr.sort().join("")
   
};