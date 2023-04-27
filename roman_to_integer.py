
def romanToInt(s):
  roman_numerals = {
      'I': 1,
      'IV': 4,
      'V': 5, 
      'IX': 9,
      'X': 10,
      'XL': 40, 
      'L': 50,
      'XC': 90,
      'C': 100,
      'CD': 400, 
      'D': 500, 
      'CM': 900,
      'M': 1000
    }
  
  count = 1
  old_value = list(s)

  for elem in range(0,len(s)):
    new_value = s[elem-1:count]
    
    if 'IV' in new_value:
      old_value.pop(old_value.index('I',0,len(old_value)))
      old_value.pop(old_value.index('V',0,len(old_value)))
      old_value.append(new_value)

    elif 'IX' in new_value:
      
      old_value.pop(old_value.index('I',0,len(old_value)))
      old_value.pop(old_value.index('X',0,len(old_value)))
      old_value.append(new_value)

    elif 'XL' in new_value:
      
      old_value.pop(old_value.index('X',0,len(old_value)))
      old_value.pop(old_value.index('L',0,len(old_value)))
      old_value.append(new_value)

    elif 'XC' in new_value:
      
      old_value.pop(old_value.index('X',0,len(old_value)))
      old_value.pop(old_value.index('C',0,len(old_value)))
      old_value.append(new_value)

    elif 'CD' in new_value:
      
      old_value.pop(old_value.index('C',0,len(old_value)))
      old_value.pop(old_value.index('D',0,len(old_value)))
      old_value.append(new_value)

    elif 'CM' in new_value:
      
      old_value.pop(old_value.index('C',0,len(old_value)))
      old_value.pop(old_value.index('M',0,len(old_value)))
      old_value.append(new_value)
  
  sum = 0
  for keys in old_value:
    sum += roman_numerals.get(keys)
  return sum


# print(romanToInt('III'))
# print(romanToInt('LVIII'))
# print(romanToInt('XXVII'))
print(romanToInt('MCMXCIV'))
# print(romanToInt('MMCCCXCIX'))