export function getRedirectPath ({ type, avatar }) {
  console.log(type);
  let url = (type === 'Boss') ? '/boss' : '/genius';
  if (!avatar) { url += 'info'; }
  console.log(url);
  return url;
}