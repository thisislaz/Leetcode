def romanToInt(s):
  # Create a dictionary to map Roman numerals to integers
    roman_map = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
    
    # Initialize the result to 0
    result = 0
    
    # Loop through the string from right to left
    for i in range(len(s) - 1, -1, -1):
        # If the current symbol is less than the next symbol, subtract it from the result
        print(i,len(s)-1)
        #this first part makes sure you cant go over the index range
        if i < len(s) - 1 and roman_map[s[i]] < roman_map[s[i+1]]:
            result -= roman_map[s[i]]
        # Otherwise, add it to the result
        else:
            result += roman_map[s[i]]
    
    # Return the result
    return result

print(romanToInt('III'))
print(romanToInt('LVIII'))
print(romanToInt('XXVII'))
print(romanToInt('MCMXCIV'))
print(romanToInt('MMCCCXCIX'))
print(romanToInt('MMMCDXC'))