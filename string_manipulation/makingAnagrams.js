function makeAnagram(a, b) {
  let deletions = 0;
  // make dictionaries
  const dict_a = {};
  const dict_b = {};
  for (let i = 0; i < a.length; i++) {
    if (!dict_a[a[i]]) {
      dict_a[a[i]] = 1;
    } else {
      dict_a[a[i]]++;
    }
  }

  for (let j = 0; j < b.length; j++) {
    if (!dict_b[b[j]]) {
      dict_b[b[j]] = 1;
    } else {
      dict_b[b[j]]++;
    }
  }
  // compare dictionaries
  for (let i = 0; i < Object.keys(dict_a).length; i++) {
    let currentKey = Object.keys(dict_a)[i];
    if (dict_b[currentKey]) {
      // check count
      if (dict_a[currentKey] === dict_b[currentKey]) {
        continue;
      } else {
        // delete from which is greater
        if (dict_a[currentKey] > dict_b[currentKey]) {
          while (dict_a[currentKey] !== dict_b[currentKey]) {
            dict_a[currentKey]--;
            deletions++;
          }
        } else {
          while (dict_a[currentKey] !== dict_b[currentKey]) {
            dict_b[currentKey]--;
            deletions++;
          }
        }
      }
    } else {
      // delete from a
      console.log(currentKey);
      while (dict_a[currentKey] !== 0) {
        dict_a[currentKey]--;
        deletions++;
      }
    }
  }

  for (let i = 0; i < Object.keys(dict_b).length; i++) {
    let currentKey = Object.keys(dict_b)[i];
    if (dict_a[currentKey]) {
      // check count
      if (dict_a[currentKey] === dict_b[currentKey]) {
        continue;
      } else {
        // delete from which is greater
        if (dict_a[currentKey] > dict_b[currentKey]) {
          while (dict_a[currentKey] !== dict_b[currentKey]) {
            dict_a[currentKey]--;
            deletions++;
          }
        } else {
          while (dict_a[currentKey] !== dict_b[currentKey]) {
            dict_b[currentKey]--;
            deletions++;
          }
        }
      }
    } else {
      // delete from a
      while (dict_b[currentKey] !== 0) {
        dict_b[currentKey]--;
        deletions++;
      }
    }
  }

  return deletions;
}
