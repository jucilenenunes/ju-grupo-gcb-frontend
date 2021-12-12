  let openingTags = str.match(/<\w+>/g)
  let closingTags = str.match(/(<\/\w+>)/g).reverse();
  let strObj = {
    '<div>': '</div>',
    '<p>': '</p>',
    '<i>': '</i>',
    '<p>': '</p>',
    '<em>': '</em>',
    '<b>': '</b>',
  };
  
    const max = Math.max(openingTags.length, closingTags.length);
  
  for (let i = 0; i < max; i++) {
    if (strObj[openingTags[i]] !== closingTags[i]) {
      return (openingTags[i] || closingTags[i]).replace(/<|>/g, '');
    }
  }

  return true;