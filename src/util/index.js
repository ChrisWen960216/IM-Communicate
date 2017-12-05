export function getRedirectPath ({ type, avatar }) {
  console.log({ type, avatar });
  let url = (type === 'Boss') ? '/boss' : '/genuis';
  if (!avatar) { url += 'info'; }
  return url;
}