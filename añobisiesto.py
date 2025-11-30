#year = int(input("Introduce un año: "))
#if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
#    print(f"{year} es un año bisiesto.")
#else:hola
#    print(f"{year} no es un año bisiesto.")

#eliminar las vocales de una palabra e imprimirla en mayúsculas

user_word = str(input("Introduce una palabra: "))
for letter in user_word:
    if letter != 'a' and letter != 'e' and letter != 'i' and letter != 'o' and letter != 'u':
        print(letter.upper(), end="")
        continue
    
