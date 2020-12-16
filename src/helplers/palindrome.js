const palindrome = (str) => {
  var re = /[\W_]/g
  var lowRegStr = str.toLowerCase().replace(re, '')
  var reverseStr = lowRegStr.split('').reverse().join('')
  let match = reverseStr === lowRegStr
  return match
}

export default palindrome
