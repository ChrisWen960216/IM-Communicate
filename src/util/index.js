export function getRedirectPath ({ type, avatar }) {
  let url = (type === 'Boss') ? '/boss' : '/genius';
  if (!avatar) { url += 'info'; }
  return url;
}