function splitExp(n) {
   let result = [],
       arr = n.split(''),
       index = arr.indexOf('.');

   arr.forEach((v, i) => {
     if (index === -1 && v != 0) {
       result.push(v + '0'.repeat(arr.length - i - 1))
     } else if (i < index && v != '0' && index != -1) {
       result.push(v + '0'.repeat(index - i - 1));
     } else if (i > index && v != '0' && index != -1) {
       result.push('.' + '0'.repeat(i - index - 1) + v);
     }
    })

   return result;
}
