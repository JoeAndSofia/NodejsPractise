const regEscaping = param => param.replace(/(?=\.|\||\^|\*|\+)/g, '\\');

const toCamelCase = (
  param,
  isLower = true,
  removalStr = [',', ';'],
  splitStr = ['-', '_'],
  joinChar = '',
) => {
  const rplStrs = (removalStr || [])
    .map(str => regEscaping(str))
    .filter(str => !!str);
  const splStrs = (splitStr || [])
    .map(str => regEscaping(str))
    .filter(str => !!str);

  let result = param;
  if (rplStrs.length) {
    result = param.replace(new RegExp(`${rplStrs.join('|')}`, 'gi'), '');
  }
  if (splStrs.length) {
    result = result.split(new RegExp(`${splStrs.join('|')}`));
    return result
      .map((str, idx) => {
        if (isLower && idx === 0) {
          return str;
        }
        return str.charAt(0).toUpperCase() + str.substr(1);
      })
      .filter(str => !!str)
      .join(joinChar);
  }
  return result;
};

console.log(toCamelCase('not_signed', false, null, undefined, ' '));